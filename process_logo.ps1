Add-Type -AssemblyName System.Drawing

$src = "C:\Users\DELL\.gemini\antigravity\brain\2838b895-4ba2-489a-a732-84d1f385eab1\.user_uploaded\media_1793612130570_843c9ab5.jpg"
$img = [System.Drawing.Bitmap]::FromFile($src)

$w = $img.Width
$h = $img.Height

# Also save the raw uploaded logo as logo-raw.png and logo-raw.jpg
$img.Save("F:\Easy-Lend\public\assets\logo-raw.png", [System.Drawing.Imaging.ImageFormat]::Png)

$transparentBmp = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Background color is roughly R:235, G:233, B:234
# For every pixel:
# If luminance is high and saturation is very low, it's background.
# We can calculate alpha based on luminance and distance from the paper texture color.

for ($x = 0; $x -lt $w; $x++) {
    for ($y = 0; $y -lt $h; $y++) {
        $pixel = $img.GetPixel($x, $y)
        $r = [double]$pixel.R
        $g = [double]$pixel.G
        $b = [double]$pixel.B

        $max = [Math]::Max($r, [Math]::Max($g, $b))
        $min = [Math]::Min($r, [Math]::Min($g, $b))
        $diff = $max - $min

        # If it's near-neutral and very bright:
        # Paper background typically has min > 210 and diff < 20
        if ($min -ge 245 -and $diff -le 10) {
            # Completely transparent
            $transparentBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        } elseif ($min -ge 215 -and $diff -le 25) {
            # Transition edge: calculate smooth alpha
            # 215 -> alpha 255, 245 -> alpha 0
            $alphaFactor = ($max - 215) / (245.0 - 215.0)
            $alphaFactor = [Math]::Max(0.0, [Math]::Min(1.0, $alphaFactor))
            $alpha = [int]((1.0 - $alphaFactor) * 255.0)
            
            # To avoid white halo on dark edges, de-bias the color towards original hue
            $transparentBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, [int]$r, [int]$g, [int]$b))
        } else {
            # Fully opaque foreground logo pixel
            $transparentBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, [int]$r, [int]$g, [int]$b))
        }
    }
}

$transparentBmp.Save("F:\Easy-Lend\public\assets\logo-transparent.png", [System.Drawing.Imaging.ImageFormat]::Png)
# Also set as public/assets/logo.png and public/logo.png
$transparentBmp.Save("F:\Easy-Lend\public\assets\logo.png", [System.Drawing.Imaging.ImageFormat]::Png)
$transparentBmp.Save("F:\Easy-Lend\public\logo.png", [System.Drawing.Imaging.ImageFormat]::Png)

$transparentBmp.Dispose()
$img.Dispose()

Write-Output "Successfully processed logo!"
