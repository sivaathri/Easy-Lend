Add-Type -AssemblyName System.Drawing

$src = "F:\Easy-Lend\public\assets\partners\kotak-life.png"
$bmp = [System.Drawing.Bitmap]::FromFile($src)

$newBmp = New-Object System.Drawing.Bitmap($bmp.Width, $bmp.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Colors
$kotakRed = [System.Drawing.Color]::FromArgb(237, 28, 36)
$kotakBlue = [System.Drawing.Color]::FromArgb(0, 56, 116)

for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $c = $bmp.GetPixel($x, $y)
        if ($x -lt 65) {
            # Keep circular emblem exact
            $newBmp.SetPixel($x, $y, $c)
        } else {
            # The letters
            if ($c.A -gt 10 -and $c.R -gt 200 -and $c.G -gt 200 -and $c.B -gt 200) {
                if ($x -le 178) {
                    # "kotak" -> Red
                    $colored = [System.Drawing.Color]::FromArgb($c.A, $kotakRed.R, $kotakRed.G, $kotakRed.B)
                    $newBmp.SetPixel($x, $y, $colored)
                } else {
                    # "life" -> Blue
                    $colored = [System.Drawing.Color]::FromArgb($c.A, $kotakBlue.R, $kotakBlue.G, $kotakBlue.B)
                    $newBmp.SetPixel($x, $y, $colored)
                }
            } else {
                $newBmp.SetPixel($x, $y, $c)
            }
        }
    }
}

$bmp.Dispose()
$newBmp.Save($src, [System.Drawing.Imaging.ImageFormat]::Png)
$newBmp.Dispose()
Write-Host "Successfully updated kotak-life.png to official Kotak Red ('kotak') & Kotak Blue ('life')!"

