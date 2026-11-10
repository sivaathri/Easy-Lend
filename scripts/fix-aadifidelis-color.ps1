Add-Type -AssemblyName System.Drawing

$srcPath = "F:\Easy-Lend\public\assets\partners\aadifidelis.png"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)

$newBmp = New-Object System.Drawing.Bitmap($bmp.Width, $bmp.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Official Aadifidelis Navy Blue: R=15, G=35, B=65 (#0F2341)
$navyR = 15
$navyG = 35
$navyB = 65

for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.A -gt 0) {
            $newColor = [System.Drawing.Color]::FromArgb($c.A, $navyR, $navyG, $navyB)
            $newBmp.SetPixel($x, $y, $newColor)
        } else {
            $newBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        }
    }
}

$bmp.Dispose()
$destPath = "F:\Easy-Lend\public\assets\partners\aadifidelis.png"
$newBmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
$newBmp.Dispose()

Write-Host "Updated aadifidelis.png to navy blue (#0F2341) with full transparency preserved!"

