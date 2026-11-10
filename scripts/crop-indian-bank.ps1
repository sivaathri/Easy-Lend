Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("F:\Easy-Lend\public\assets\partners\indian-bank.png")

$minX = $bmp.Width; $maxX = 0; $minY = $bmp.Height; $maxY = 0

for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $c = $bmp.GetPixel($x, $y)
        # Indian Bank blue: R < 50, G < 100, B > 100
        if ($c.R -lt 50 -and $c.B -gt 100) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

Write-Host "Indian Bank Blue box: X=$minX to $maxX (W=$($maxX - $minX)), Y=$minY to $maxY (H=$($maxY - $minY))"
# Crop clean
$rect = New-Object System.Drawing.Rectangle($minX, $minY, ($maxX - $minX), ($maxY - $minY))
$cropped = $bmp.Clone($rect, $bmp.PixelFormat)
$cropped.Save("F:\Easy-Lend\public\assets\partners\indian-bank-clean.png", [System.Drawing.Imaging.ImageFormat]::Png)
$cropped.Dispose()
$bmp.Dispose()
Write-Host "Saved indian-bank-clean.png"

