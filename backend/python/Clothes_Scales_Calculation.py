# スケールの計算をここで行う
st = 22#袖丈
kt = 60#着丈
kata = 43#肩幅
miha = 50#身幅


#stnx = 24
#ktnx =73
#katanx = 58
#mihanx = 64

stnx = 25
ktnx =72
katanx = 62
mihanx = 63

# 各スケールを計算
katascale = katanx / kata
ktscale = ktnx / kt

kt = kt * katascale
miha = miha * katascale

stscale = stnx / st
mihascale = mihanx / miha

katacale = round(katascale,3)
stscale = round(stscale,3)
mihascale = round(mihascale,3)
ktscale = round(ktscale,3)

# 計算結果を保持する
scale_values = {
    'katascale': katascale,
    'stscale': stscale,
    'mihascale': mihascale,
    'ktscale': ktscale
}

print(f"katascale: {katascale}")
print(f"stscale: {stscale}")
print(f"mihascale: {mihascale}")
print(f"ktscale: {ktscale}")
