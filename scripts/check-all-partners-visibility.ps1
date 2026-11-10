Add-Type -AssemblyName System.Drawing

$files = Get-ChildItem "F:\Easy-Lend\public\assets\partners\*.png"

foreach ($f in $files) {
    try {
        $bmp = [System.Drawing.Bitmap]::FromFile($f.FullName)
        $whiteCount = 0
        $nonWhiteCount = 0
        for ($y = 0; $y -lt $bmp.Height; $y += 3) {
            for ($x = 0; $x -lt $bmp.Width; $x += 3) {
                $c = $bmp.GetPixel($x, $y)
                if ($c.A -gt 50) {
                    if ($c.R -gt 240 -and $c.G -gt 240 -and $c.B -gt 240) {
                        $whiteCount++
                    } else {
                        $nonWhiteCount++
                    }
                }
            }
        }
        $bmp.Dispose()
        if ($nonWhiteCount -eq 0 -and $whiteCount -gt 0) {
            Write-Host "WARNING: All white image: $($f.Name)" -ForegroundColor Red
        } else {
            Write-Host "$($f.Name): Non-white = $nonWhiteCount, White = $whiteCount"
        }
    } catch {
        # ignore
    }
}

