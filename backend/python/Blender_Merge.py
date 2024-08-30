#Bodyと服を合わせるscript




import bpy
import mathutils

from Clothes_Scales_Calculation import scale_values


def reset_object_location_to_origin(obj_name,scale_y):
    # オブジェクトを取得
    obj = bpy.data.objects.get(obj_name)
    
    if obj is None:
        print(f"オブジェクト '{obj_name}' が見つかりません。")
        return
    
    # オブジェクトの座標を (0, 0, 0) に設定
    obj.location = (0, 0, scale_y)
    
    print(f"オブジェクト '{obj_name}' の座標を (0, 0, {scale_y}) に設定しました。")

def import_blend_file(filepath, object_name):
    bpy.ops.wm.append(
        filepath=filepath + "/Object/" + object_name,
        directory=filepath + "/Object/",
        filename=object_name
    )
    
def delete_Cube():
    object_name = 'Cube'
    # オブジェクトを取得
    obj = bpy.data.objects.get(object_name)
    
    if obj is None:
        print(f"オブジェクト '{object_name}' が見つかりません。")
        return
    
    # オブジェクトをアクティブにし、選択状態にする
    bpy.context.view_layer.objects.active = obj
    obj.select_set(True)
    
    # オブジェクトを削除
    bpy.ops.object.delete()
    
    print(f"オブジェクト '{object_name}' を削除しました。")

def import_objects_from_files(filepaths_and_names):
    for filepath, object_name in filepaths_and_names:
        import_blend_file(filepath, object_name)

def save_new_blend_file(output_file_path):
    bpy.ops.wm.save_as_mainfile(filepath=output_file_path)
    print(f"新しいファイル '{output_file_path}' として保存しました。")

# インポートするファイルとオブジェクト名
files_and_objects = [
    ('./EditedModel/Edited_Tshirt.blend', 'T-Shirt'),
    ('./EditedModel/Edited_Male.blend', 'Body_low')
]

obj1_name = "Body_low"
obj2_name = "T-Shirt"
group1_name = "point"
group2_name = "point2"


# Cubeを削除
delete_Cube()

# オブジェクトをインポート
import_objects_from_files(files_and_objects)

# オブジェクトの位置を設定
reset_object_location_to_origin(obj1_name,-150)
reset_object_location_to_origin(obj2_name,-8*scale_values['ktscale'])
# 新しいファイルとして保存
new_file_path = './EditedModel/Merged.blend'
save_new_blend_file(new_file_path)
