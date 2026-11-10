Add-Type -AssemblyName System.Drawing

$file = "F:\Easy-Lend\public\assets\partners\axis-bank-clean.png"
$bmp = [System.Drawing.Bitmap]::FromFile($file)
$newBmp = New-Object System.Drawing.Bitmap($bmp.Width, $bmp.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $c = $bmp.GetPixel($x, $y)
        # Any light pixel (like the faint gray vertical strip R=234, G=236, B=239)
        if ($c.R -gt 210 -and $c.G -gt 210 -and $c.B -gt 210) {
            $newBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 255, 255, 255))
        } else {
            $newBmp.SetPixel($x, $y, $c)
        }
    }
}

$bmp.Dispose()
$newBmp.Save($file, [System.Drawing.Imaging.ImageFormat]::Png)
$newBmp.Dispose()
Write-Host "Removed all light artifacts and lines from axis-bank-clean.png!"

