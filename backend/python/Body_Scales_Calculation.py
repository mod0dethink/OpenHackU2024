#ボディーの編集に使うscaleの計算を行う
import sys




Hight = 160
Width = 40

#P_Hight = 175
#P_Width = 48

P_Hight = None
P_Width = None

# コマンドライン引数が十分にあるか確認

if len(sys.argv) > 3:
    try:
        # sys.argv[3] の値を float に変換し、Width に代入
        P_Width = float(sys.argv[4])
        print(f"Width に代入された値: {P_Width}")
    except ValueError:
        print("指定された値が数値に変換できません。")
else:
    print("コマンドライン引数が不足しています。")

if len(sys.argv) > 3:
    try:
        # sys.argv[3] の値を float に変換し、Width に代入
        P_Hight = float(sys.argv[3])
        print(f"Width に代入された値: {P_Hight}")
    except ValueError:
        print("指定された値が数値に変換できません。")
else:
    print("コマンドライン引数が不足しています。")


P_Hight =  float(sys.argv[3])
P_Width =  float(sys.argv[4])

#P_Hight = 175
#P_Width = 48

Scale_Hi = P_Hight / Hight
Scale_Wi = P_Width / Width

Scale_Hi = round(Scale_Hi,3)
Scale_Wi = round(Scale_Wi,3)

Body_Scale_value = {
    'Scale_Hi':Scale_Hi,
    'Scale_Wi':Scale_Wi
    }

print({Scale_Hi})
print({Scale_Wi})