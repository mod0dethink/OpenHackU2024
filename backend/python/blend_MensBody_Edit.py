#メンズのボディーの編集をする

import bpy
import os
from mathutils import Vector

from Body_Scales_Calculation import Body_Scale_value



print({Body_Scale_value['Scale_Hi']})
print({Body_Scale_value['Scale_Wi']})

#オブジェクトの中心を座標(0,0,0)に合わせる関数
def center_object_at_origin(object_name):
    obj = bpy.data.objects.get(object_name)

    if obj is None:
        print("オブジェクトが見つかりません。")
        return
    
    bpy.context.view_layer.objects.active = obj
    obj.select_set(True)

    bbox_corners = [obj.matrix_world @ Vector(corner) for corner in obj.bound_box]
    center = sum(bbox_corners, Vector()) / len(bbox_corners)


        # オブジェクトを移動するためのオフセットを計算
    offset = -center
    
    # オブジェクトを移動
    bpy.ops.object.mode_set(mode='OBJECT')
    obj.location += offset

    print(f"オブジェクト '{object_name}' を座標 (0, 0, 0) に移動しました。")


def move_object_z_axis(object_name, z_offset):
    # オブジェクトを取得
    obj = bpy.data.objects.get(object_name)
    
    if obj is None:
        print(f"オブジェクト '{object_name}' が見つかりません。")
        return
    
    # Z軸方向に移動
    obj.location.z += z_offset
    
    print(f"オブジェクト '{object_name}' のZ軸座標を {z_offset} だけ移動しました。新しい座標: {obj.location}")



def Edit_Scale(object_name, scale_x,scale_y):

    obj = bpy.data.objects.get(object_name)
    
    if obj is None:
        print(f"オブジェクト '{object_name}' が見つかりません。")
        return None
    
    
    bpy.context.view_layer.objects.active = obj
    obj.select_set(True)
    
    # オブジェクトモードに切り替え
    bpy.ops.object.mode_set(mode='OBJECT')
    
    # 編集モードに切り替え
    bpy.ops.object.mode_set(mode='EDIT')
    
    # 全ての選択を解除
    bpy.ops.mesh.select_all(action='SELECT')
    
    # x軸方向に拡大
    bpy.ops.transform.resize(value=(scale_x, 1, scale_y))
    
    # 編集モード終了
    bpy.ops.object.mode_set(mode='OBJECT')

    print(f"オブジェクト '{object_name}' をx軸方向に{scale_x,scale_y}倍に拡大しました。")





def process_blender_file(input_file_path, output_file_path, object_name):
    # Blenderファイルを読み込む
    bpy.ops.wm.open_mainfile(filepath=input_file_path)

    Edit_Scale(object_name,Body_Scale_value['Scale_Wi'],Body_Scale_value['Scale_Hi'])


    center_object_at_origin(object_name)

    move_object_z_axis(object_name,z_offset)
    
    # 保存
    bpy.ops.wm.save_as_mainfile(filepath=output_file_path)

# 例: 変更対象のBlenderファイル、出力先ファイルを指定
input_file = './BlendModel/T-shirt_templete.blend'
output_file = './EditedModel/Edited_Male.blend'
object_name = 'Body_low'
z_offset = -35.5  # 縦の長さを2倍にする

process_blender_file(input_file, output_file, object_name)
