import bpy

def export_blend_to_glb(blend_file_path, glb_file_path):
    # `.blend`ファイルを開く
    bpy.ops.wm.open_mainfile(filepath=blend_file_path)
    
    # エクスポート設定を行う
    bpy.ops.export_scene.gltf(
        filepath=glb_file_path,
        export_format='GLB',         # GLB形式でエクスポート
        export_texture_dir='',       # テクスチャディレクトリの指定が必要な場合はここにパスを指定
        export_apply=True,           # モディファイアを適用する
        export_cameras=True,         # カメラをエクスポート
        export_lights=True           # ライトをエクスポート
    )
    
    print(f"ファイル '{blend_file_path}' を '{glb_file_path}' としてエクスポートしました。")

# 使用例
blend_file_path = 'C:/Users/2230372/MyData/Python/blend/Image.blend'  # 対象の.blendファイルパス
glb_file_path = 'C:/Users/2230372/MyData/Python/blend/Image.glb'    # 出力する.glbファイルパス

export_blend_to_glb(blend_file_path, glb_file_path)
