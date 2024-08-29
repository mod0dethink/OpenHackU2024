package main

import (
	"fmt"
	"net/http"
	"os/exec"

	"github.com/gin-gonic/gin"
)

// モデルの更新リクエストの構造体
type ModelUpdateRequest struct {
	Gender       string  `json:"gender"`
	ClothingType string  `json:"clothingType"`
	Height       float64 `json:"height"`
	Width        float64 `json:"width"`
	Chest        float64 `json:"chest"`
	Shoulder     float64 `json:"shoulder"`
	Length       float64 `json:"length"`
	Sleeve       float64 `json:"sleeve"`
}

// モデルを更新するエンドポイント
func updateModelHandler(c *gin.Context) {
	var request ModelUpdateRequest
	if err := c.BindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"エラー": "無効な入力です"})
		return
	}

	// モデルを更新するための外部プログラムを呼び出す
	cmd := exec.Command("python", "ここにファイル名.py",
		request.Gender,
		request.ClothingType,
		fmt.Sprintf("%f", request.Height),
		fmt.Sprintf("%f", request.Width),
		fmt.Sprintf("%f", request.Chest),
		fmt.Sprintf("%f", request.Shoulder),
		fmt.Sprintf("%f", request.Length),
		fmt.Sprintf("%f", request.Sleeve),
	)
	if err := cmd.Run(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "モデルの更新に失敗しました"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "モデルが正常に更新されました"})
}
