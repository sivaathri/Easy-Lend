Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("F:\Easy-Lend\public\assets\partners\aadifidelis.png")
Write-Host "Width=$($bmp.Width), Height=$($bmp.Height)"

$nonWhiteNonTransparent = 0
$whiteCount = 0

for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.A -gt 50) {
            if ($c.R -gt 240 -and $c.G -gt 240 -and $c.B -gt 240) {
                $whiteCount++
            } else {
                $nonWhiteNonTransparent++
            }
        }
    }
}

Write-Host "White pixels: $whiteCount, Non-white pixels: $nonWhiteNonTransparent"
$bmp.Dispose()

