Add-Type -AssemblyName System.Drawing

$src = "C:\Users\DELL\.gemini\antigravity\brain\2838b895-4ba2-489a-a732-84d1f385eab1\.user_uploaded\media_1793599234729_e370ec3e.jpg"
$img = [System.Drawing.Bitmap]::FromFile($src)

# Width 634, height 184 (X: 390 to 1024)
$w = 634
$h = 184
$rect = New-Object System.Drawing.Rectangle(390, 0, $w, $h)
$hero = New-Object System.Drawing.Bitmap($w, $h)
$g = [System.Drawing.Graphics]::FromImage($hero)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $w, $h)), $rect, [System.Drawing.GraphicsUnit]::Pixel)

# In $hero, Call Now is at X: 415 to 545, Y: 11 to 46
# Notice that above it (Y: 0 to 11) is the window background.
# To cleanly erase Call Now, let's copy vertical 1-pixel columns from Y:0 to Y:11 stretched downwards to Y:46
for ($x = 412; $x -le 548; $x++) {
    for ($y = 11; $y -le 46; $y++) {
        $sampleY = [Math]::Min(10, [Math]::Max(0, 10 - ($y - 11) / 4))
        # Add slight gradient towards the bottom tone
        $cTop = $hero.GetPixel($x, [int]$sampleY)
        $cBottom = $hero.GetPixel($x, 48)
        $factor = ($y - 11) / 37.0
        $r = [int]($cTop.R * (1 - $factor) + $cBottom.R * $factor)
        $gCol = [int]($cTop.G * (1 - $factor) + $cBottom.G * $factor)
        $b = [int]($cTop.B * (1 - $factor) + $cBottom.B * $factor)
        $hero.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($r, $gCol, $b))
    }
}

$g.Dispose()
$hero.Save("F:\Easy-Lend\public\assets\hero-seamless.png", [System.Drawing.Imaging.ImageFormat]::Png)
$hero.Dispose()
$img.Dispose()
Write-Output "hero-seamless.png generated!"

