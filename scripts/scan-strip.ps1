Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("C:\Users\DELL\.gemini\antigravity\brain\2838b895-4ba2-489a-a732-84d1f385eab1\.user_uploaded\media_1794288662626_c6122d06.png")

for ($y = 0; $y -lt $bmp.Height; $y += 10) {
    $c = $bmp.GetPixel(5, $y)
    Write-Host ("Y=" + $y + " R=" + $c.R + " G=" + $c.G + " B=" + $c.B)
}
$bmp.Dispose()
