Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("F:\Easy-Lend\public\assets\partners\axis-bank-clean.png")
Write-Host "Width=$($bmp.Width), Height=$($bmp.Height)"

# Inspect pixels in the rightmost 25 columns
for ($x = ($bmp.Width - 25); $x -lt $bmp.Width; $x++) {
    for ($y = 0; $y -lt $bmp.Height; $y++) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.R -lt 245 -or $c.G -lt 245 -or $c.B -lt 245) {
            Write-Host ("X=" + $x + " Y=" + $y + " R=" + $c.R + " G=" + $c.G + " B=" + $c.B)
        }
    }
}
$bmp.Dispose()

