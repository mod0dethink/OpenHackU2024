#shirtの編集を行うpythonScript


import bpy
import os
from mathutils import Vector



# scales.pyのscale_valueをインポート
from Clothes_Scales_Calculation import scale_values

# インポートした値を確認
print(scale_values['katascale'])
print(scale_values['stscale'])
print(scale_values['mihascale'])
print(scale_values['ktscale'])

def search_obj(object_name):
    # オブジェクトを取得
    obj = bpy.data.objects.get(object_name)
    
    if obj is None:
        print(f"オブジェクト '{object_name}' が見つかりません。")
        return None
    
    print("オブジェクト検索完了")
    return obj

def kata_scale_x(object_name, scale,scale_y):
    obj = search_obj(object_name)
    
    if obj is None:
        return
    
    bpy.context.view_layer.objects.active = obj
    obj.select_set(True)
    
    # オブジェクトモードに切り替え
    bpy.ops.object.mode_set(mode='OBJECT')
    
    # 編集モードに切り替え
    bpy.ops.object.mode_set(mode='EDIT')
    
    # 全ての選択を解除
    bpy.ops.mesh.select_all(action='SELECT')
    
    # x軸方向に拡大
    bpy.ops.transform.resize(value=(scale, 1, scale_y))
    
    # 編集モード終了
    bpy.ops.object.mode_set(mode='OBJECT')

    print(f"オブジェクト '{object_name}' をx軸方向に{scale}倍に拡大しました。")

def sleeve_scale(object_name, Sleeve_group_name, scale_x):
    obj = search_obj(object_name)
    
    if obj is None:
        return
    
    # オブジェクトをアクティブにし、選択状態にする
    bpy.context.view_layer.objects.active = obj
    obj.select_set(True)
    
    # オブジェクトモードに切り替え
    bpy.ops.object.mode_set(mode='OBJECT')
    
    # 頂点グループを取得
    vertex_group = obj.vertex_groups.get(Sleeve_group_name)
    
    if vertex_group is None:
        print(f"頂点グループ '{Sleeve_group_name}' が見つかりません。")
        return
    
    # 編集モードに切り替え
    bpy.ops.object.mode_set(mode='EDIT')
    bpy.ops.mesh.select_all(action='DESELECT')

    # オブジェクトモードに切り替え
    bpy.ops.object.mode_set(mode='OBJECT')
    
    # スケーリングの前に頂点を選択する必要があります
    for vertex in obj.data.vertices:
        # 頂点グループに属するかチェック
        try:
            if vertex_group.weight(vertex.index) > 0:
                vertex.select = True
        except RuntimeError:
            # 頂点がグループに属さない場合
            continue

    # 編集モードに切り替え
    bpy.ops.object.mode_set(mode='EDIT')

    # 現在の選択範囲を元に、外側にスケーリング
    bpy.ops.transform.resize(value=(scale_x, 1, 1))
    
    # 編集モード終了
    bpy.ops.object.mode_set(mode='OBJECT')

    print(f"頂点グループ '{Sleeve_group_name}' を x 軸方向に外側に向かって {scale_x} 倍にスケーリングしました。")

def kitake_scale_y(object_name, scale):
    obj = search_obj(object_name)
    
    if obj is None:
        return
    
    # オブジェクトをアクティブにし、選択状態にする
    bpy.context.view_layer.objects.active = obj
    obj.select_set(True)
    
    # オブジェクトモードに切り替え
    bpy.ops.object.mode_set(mode='OBJECT')
    
    # 編集モードに切り替え
    bpy.ops.object.mode_set(mode='EDIT')
    
    # 全ての選択を解除
    bpy.ops.mesh.select_all(action='DESELECT')
    
    # 編集モードでスケーリングを適用
    bpy.ops.transform.resize(value=(1, scale, 1))
    
    # 編集モード終了
    bpy.ops.object.mode_set(mode='OBJECT')

    print(f"オブジェクト '{object_name}' をy軸方向に{scale}倍に拡大しました。")





def scale_vertex_group_x(object_name, group_name, scale_x):
    # オブジェクトを取得
    obj = bpy.data.objects.get(object_name)
    
    if obj is None:
        print(f"オブジェクト '{object_name}' が見つかりません。")
        return
    
    # オブジェクトをアクティブにし、選択状態にする
    bpy.context.view_layer.objects.active = obj
    obj.select_set(True)
    
    # オブジェクトモードに切り替え
    bpy.ops.object.mode_set(mode='OBJECT')
    
    # 頂点グループを取得
    vertex_group = obj.vertex_groups.get(group_name)
    
    if vertex_group is None:
        print(f"頂点グループ '{group_name}' が見つかりません。")
        return
    
    # 編集モードに切り替え
    bpy.ops.object.mode_set(mode='EDIT')
    
    # 全ての選択を解除
    bpy.ops.mesh.select_all(action='DESELECT')

    # オブジェクトモードに切り替え
    bpy.ops.object.mode_set(mode='OBJECT')
    
    # 頂点グループ内の頂点を選択
    for vertex in obj.data.vertices:
        try:
            if vertex_group.weight(vertex.index) > 0:
                vertex.select = True
        except RuntimeError:
            # 頂点がグループに属さない場合
            continue

    # 編集モードに切り替え
    bpy.ops.object.mode_set(mode='EDIT')

    # 現在の選択範囲を元に、x軸方向にスケーリング
    bpy.ops.transform.resize(value=(scale_x, 1, 1))
    
    # 編集モード終了
    bpy.ops.object.mode_set(mode='OBJECT')

    print(f"頂点グループ '{group_name}' を x 軸方向に {scale_x} 倍にスケーリングしました。")

def process_blender_file(input_file_path, output_file_path, object_name, Sleeve_group_name, Width_group_name):
    # Blenderファイルを読み込む
    bpy.ops.wm.open_mainfile(filepath=input_file_path)
    
    # 横幅と着丈を広げる()
    kata_scale_x(object_name, scale_values['katascale'],scale_values['ktscale'])

    #着丈
    kitake_scale_y(object_name, scale_values['ktscale'])

    #袖丈
    sleeve_scale(object_name, Sleeve_group_name, scale_values['stscale'])

    #身幅
    scale_vertex_group_x(object_name, Width_group_name, scale_values['mihascale'])

    # 保存
    bpy.ops.wm.save_as_mainfile(filepath=output_file_path)

# 例: 変更対象のBlenderファイル、出力先ファイルを指定
input_file = './BlendModel/T-shirt_templete.blend'
output_file = './EditedModel/Edited_Tshirt.blend'
object_name = 'T-Shirt'
Sleeve_group_name = 'Sleeve_Length'
Width_group_name = 'Chect_Width'

process_blender_file(input_file, output_file, object_name, Sleeve_group_name, Width_group_name)
