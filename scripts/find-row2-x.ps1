Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("C:\Users\DELL\.gemini\antigravity\brain\2838b895-4ba2-489a-a732-84d1f385eab1\.user_uploaded\media_1794288662626_c6122d06.png")

for ($x = 0; $x -lt $bmp.Width; $x++) {
    $c = $bmp.GetPixel($x, 115)
    if ($c.R -lt 245 -or $c.G -lt 245 -or $c.B -lt 245) {
        Write-Host ("Row2 Top Border X=" + $x + " R=" + $c.R + " G=" + $c.G + " B=" + $c.B)
    }
}
$bmp.Dispose()

