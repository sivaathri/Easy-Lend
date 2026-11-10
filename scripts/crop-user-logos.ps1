Add-Type -AssemblyName System.Drawing
$src = [System.Drawing.Bitmap]::FromFile("C:\Users\DELL\.gemini\antigravity\brain\2838b895-4ba2-489a-a732-84d1f385eab1\.user_uploaded\media_1794288662626_c6122d06.png")

$cards = @(
    # Row 1 (y=22, h=77)
    @{ name = "sbi.png"; x = 34; y = 22; w = 124; h = 77 },
    @{ name = "axis-bank.png"; x = 171; y = 22; w = 124; h = 77 },
    @{ name = "icici-bank.png"; x = 305; y = 22; w = 124; h = 77 },
    @{ name = "yes-bank.png"; x = 440; y = 22; w = 124; h = 77 },
    @{ name = "poonawalla-fincorp.png"; x = 576; y = 22; w = 124; h = 77 },
    @{ name = "auxilo.png"; x = 711; y = 22; w = 124; h = 77 },
    @{ name = "incred.png"; x = 845; y = 22; w = 124; h = 77 },

    # Row 2 (y=115, h=77)
    @{ name = "indian-bank.png"; x = 173; y = 115; w = 113; h = 77 },
    @{ name = "idfc-first-bank.png"; x = 310; y = 115; w = 113; h = 77 },
    @{ name = "avanse.png"; x = 445; y = 115; w = 113; h = 77 },
    @{ name = "credila.png"; x = 581; y = 115; w = 113; h = 77 },
    @{ name = "bank-of-baroda.png"; x = 716; y = 115; w = 113; h = 77 }
)

$outDir = "F:\Easy-Lend\public\assets\partners"

foreach ($c in $cards) {
    $rect = New-Object System.Drawing.Rectangle($c.x, $c.y, $c.w, $c.h)
    $cropped = $src.Clone($rect, $src.PixelFormat)
    $dest = Join-Path $outDir $c.name
    $cropped.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
    $cropped.Dispose()
    Write-Host ("Cropped " + $c.name)
}

$src.Dispose()
Write-Host "All 12 user cards cropped successfully!"

