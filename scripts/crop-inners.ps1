Add-Type -AssemblyName System.Drawing

function CropInner($file, $outFile, [scriptblock]$filter) {
    $bmp = [System.Drawing.Bitmap]::FromFile($file)
    $minX = $bmp.Width; $maxX = 0; $minY = $bmp.Height; $maxY = 0

    for ($y = 2; $y -lt ($bmp.Height - 2); $y++) {
        for ($x = 2; $x -lt ($bmp.Width - 2); $x++) {
            $c = $bmp.GetPixel($x, $y)
            if (& $filter $c) {
                if ($x -lt $minX) { $minX = $x }
                if ($x -gt $maxX) { $maxX = $x }
                if ($y -lt $minY) { $minY = $y }
                if ($y -gt $maxY) { $maxY = $y }
            }
        }
    }

    if ($maxX -gt $minX -and $maxY -gt $minY) {
        $pad = 2
        $rx = [math]::Max(0, $minX - $pad)
        $ry = [math]::Max(0, $minY - $pad)
        $rw = [math]::Min($bmp.Width - $rx, ($maxX - $minX) + ($pad * 2))
        $rh = [math]::Min($bmp.Height - $ry, ($maxY - $minY) + ($pad * 2))

        $rect = New-Object System.Drawing.Rectangle($rx, $ry, $rw, $rh)
        $cropped = $bmp.Clone($rect, $bmp.PixelFormat)
        $cropped.Save($outFile, [System.Drawing.Imaging.ImageFormat]::Png)
        $cropped.Dispose()
        Write-Host "Saved $outFile (W=$rw, H=$rh)"
    }
    $bmp.Dispose()
}

# Crop SBI clean
CropInner "F:\Easy-Lend\public\assets\partners\sbi.png" "F:\Easy-Lend\public\assets\partners\sbi-clean.png" {
    param($c)
    return ($c.R -lt 240 -or $c.G -lt 240 -or $c.B -lt 240) -and -not ($c.R -gt 230 -and $c.G -gt 230 -and $c.B -gt 230)
}

# Crop ICICI clean
CropInner "F:\Easy-Lend\public\assets\partners\icici-bank.png" "F:\Easy-Lend\public\assets\partners\icici-bank-clean.png" {
    param($c)
    return ($c.R -lt 240 -or $c.G -lt 240 -or $c.B -lt 240) -and -not ($c.R -gt 230 -and $c.G -gt 230 -and $c.B -gt 230)
}

# Crop Yes Bank clean
CropInner "F:\Easy-Lend\public\assets\partners\yes-bank.png" "F:\Easy-Lend\public\assets\partners\yes-bank-clean.png" {
    param($c)
    return ($c.R -lt 240 -or $c.G -lt 240 -or $c.B -lt 240) -and -not ($c.R -gt 230 -and $c.G -gt 230 -and $c.B -gt 230)
}

# Crop Poonawalla clean
CropInner "F:\Easy-Lend\public\assets\partners\poonawalla-fincorp.png" "F:\Easy-Lend\public\assets\partners\poonawalla-clean.png" {
    param($c)
    return ($c.R -lt 240 -or $c.G -lt 240 -or $c.B -lt 240) -and -not ($c.R -gt 230 -and $c.G -gt 230 -and $c.B -gt 230)
}

# Crop Bank of Baroda clean
CropInner "F:\Easy-Lend\public\assets\partners\bank-of-baroda.png" "F:\Easy-Lend\public\assets\partners\baroda-clean.png" {
    param($c)
    return ($c.R -lt 240 -or $c.G -lt 240 -or $c.B -lt 240) -and -not ($c.R -gt 230 -and $c.G -gt 230 -and $c.B -gt 230)
}

