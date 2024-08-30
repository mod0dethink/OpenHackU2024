import sys
import subprocess

print('OrderRunPyを実行中')

gender = sys.argv[1]
clothing_type = sys.argv[2]
height = float(sys.argv[3])
width = float(sys.argv[4])
chest = float(sys.argv[5])
shoulder = float(sys.argv[6])
length = float(sys.argv[7])
sleeve = float(sys.argv[8])

scripts =[
    'blend_MensBody_Edit.py',
    'blend_TS_edit.py',
    'Blender_Merge.py',
    'Export_glb.py'
    ]


for script in scripts:
    print(f"実行中: {script}")
    result = subprocess.run(['python', script], capture_output=True, text=True)
    
    # スクリプトの標準出力と標準エラー出力を表示
    print(result.stdout)
    if result.stderr:
        print(f"エラー: {result.stderr}")
    
    # スクリプトが成功したか確認
    if result.returncode != 0:
        print(f"{script} が失敗しました。終了します。")
        break