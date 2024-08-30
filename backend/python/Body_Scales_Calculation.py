#ボディーのscaleの計算を行う
import sys


Hight = 160
Width = 40

#P_Hight = 175
#P_Width = 48

P_Hight =  float(sys.argv[3])
P_Width =  float(sys.argv[4])


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