Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("F:\Easy-Lend\public\assets\partners\kotak-life.png")

# Check where the letter columns are from X=65 to 242
for ($x = 65; $x -lt $bmp.Width; $x++) {
    $hasPixel = $false
    for ($y = 0; $y -lt $bmp.Height; $y++) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.A -gt 50 -and $c.R -gt 240) {
            $hasPixel = $true
            break
        }
    }
    if (-not $hasPixel) {
        Write-Host "Blank column at X=$x"
    }
}
$bmp.Dispose()

