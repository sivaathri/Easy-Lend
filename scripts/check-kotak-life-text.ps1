Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("F:\Easy-Lend\public\assets\partners\kotak-life.png")
Write-Host "Width=$($bmp.Width), Height=$($bmp.Height)"

$y = [int]($bmp.Height / 2)
for ($x = 0; $x -lt $bmp.Width; $x += 5) {
    $c = $bmp.GetPixel($x, $y)
    if ($c.A -gt 20) {
        Write-Host ("X=" + $x + " A=" + $c.A + " R=" + $c.R + " G=" + $c.G + " B=" + $c.B)
    }
}

$bmp.Dispose()
