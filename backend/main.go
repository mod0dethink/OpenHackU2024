package main

import (
	"net/http"

	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Username    string `json:"username" gorm:"unique"`
	Password    string `json:"password"`
	MailAddress string `json:"mailaddress" gorm:"column:mailaddress"` // 明示的にカラム名を指定
}

var db *gorm.DB
var err error

func main() {
	// MySQLデータベースへの接続設定
	dsn := "root:114514z4Z@tcp(127.0.0.1:3306)/outfit?charset=utf8mb4&parseTime=True&loc=Local"
	db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("データベースへの接続に失敗しました")
	}

	// データベーススキーマのマイグレーション
	db.AutoMigrate(&User{})

	router := gin.Default()

	// セッションミドルウェアの設定
	store := cookie.NewStore([]byte("secret"))
	router.Use(sessions.Sessions("mysession", store))

	router.POST("/signup", signUp)
	router.POST("/login", login)
	router.GET("/profile", profile)

	router.Run(":8080")
}

func signUp(c *gin.Context) {
	var newUser User
	if err := c.BindJSON(&newUser); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"エラー": "無効な入力です"})
		return
	}

	if newUser.MailAddress == "" {
		c.JSON(http.StatusBadRequest, gin.H{"エラー": "メールアドレスは必須です"})
		return
	}

	if err := db.Create(&newUser).Error; err != nil {
		c.JSON(http.StatusConflict, gin.H{"エラー": "ユーザー名が既に存在します"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"メッセージ": "ユーザーが正常に作成されました"})
}

func login(c *gin.Context) {
	var loginUser User
	if err := c.BindJSON(&loginUser); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"エラー": "無効な入力です"})
		return
	}

	var user User
	if err := db.Where("username = ? AND password = ?", loginUser.Username, loginUser.Password).First(&user).Error; err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"エラー": "無効な認証情報です"})
		return
	}

	// セッションにユーザー情報を保存
	session := sessions.Default(c)
	session.Set("user", user.Username)
	session.Save()

	c.JSON(http.StatusOK, gin.H{"メッセージ": "ログインに成功しました"})
}

// ログインしているユーザー名を返す
func profile(c *gin.Context) {
	session := sessions.Default(c)
	user := session.Get("user")
	if user == nil {
		c.JSON(http.StatusUnauthorized, gin.H{"エラー": "ログインが必要です"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"ユーザー": user})
}
