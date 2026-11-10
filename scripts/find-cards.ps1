Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("C:\Users\DELL\.gemini\antigravity\brain\2838b895-4ba2-489a-a732-84d1f385eab1\.user_uploaded\media_1794288662626_c6122d06.png")

# Find non-white pixels across columns in row 1 (y around 50) and row 2 (y around 160)
$row1 = 50
$row2 = 160

Write-Host "Row 1 (Y=$row1):"
$inCard = $false
$start = 0
for ($x = 0; $x -lt $bmp.Width; $x++) {
    $c = $bmp.GetPixel($x, $row1)
    $isBorderOrContent = ($c.R -lt 245 -or $c.G -lt 245 -or $c.B -lt 245)
    if ($isBorderOrContent -and -not $inCard) {
        $inCard = $true
        $start = $x
    } elseif (-not $isBorderOrContent -and $inCard) {
        # Check ahead 10 pixels to see if it's just the card's white interior
        $hasMore = $false
        for ($k = 1; $k -le 15; $k++) {
            if ($x + $k -lt $bmp.Width) {
                $c2 = $bmp.GetPixel($x + $k, $row1)
                if ($c2.R -lt 245 -or $c2.G -lt 245 -or $c2.B -lt 245) { $hasMore = $true; break }
            }
        }
        if (-not $hasMore) {
            $inCard = $false
            Write-Host ("Card found: X=" + $start + " to " + $x + " Width=" + ($x - $start))
        }
    }
}
$bmp.Dispose()

