Add-Type -AssemblyName System.Drawing

$src = "C:\Users\DELL\.gemini\antigravity\brain\2838b895-4ba2-489a-a732-84d1f385eab1\.user_uploaded\media_1793599234729_e370ec3e.jpg"
$img = [System.Drawing.Bitmap]::FromFile($src)

# We want the hero right photo from X: 380 to 1024, Y: 0 to 184 (width = 644, height = 184)
$w = 644
$h = 184
$rect = New-Object System.Drawing.Rectangle(380, 0, $w, $h)
$hero = New-Object System.Drawing.Bitmap($w, $h)
$g = [System.Drawing.Graphics]::FromImage($hero)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $w, $h)), $rect, [System.Drawing.GraphicsUnit]::Pixel)

# In $hero, the Call Now button is located at:
# X in original was 800 to 935.
# X in $hero is: 800 - 380 = 420 to 555.
# Y is: 10 to 46.
# Let's cleanly blend the window background over X: 418 to 558, Y: 9 to 47.
# We can sample the window from above Y: 0 to 8 and from right X: 560 to 620, Y: 5 to 50
# Let's copy from the window texture on the right:
$sampleRect = New-Object System.Drawing.Rectangle(565, 5, 75, 45)
$targetRect1 = New-Object System.Drawing.Rectangle(420, 9, 75, 40)
$targetRect2 = New-Object System.Drawing.Rectangle(490, 9, 70, 40)

# Softly blend
$g.DrawImage($hero, $targetRect1, $sampleRect, [System.Drawing.GraphicsUnit]::Pixel)
$g.DrawImage($hero, $targetRect2, $sampleRect, [System.Drawing.GraphicsUnit]::Pixel)

$g.Dispose()
$hero.Save("F:\Easy-Lend\public\assets\hero-fullbleed-clean.png", [System.Drawing.Imaging.ImageFormat]::Png)
$hero.Dispose()
$img.Dispose()
Write-Output "Clean full-bleed hero generated!"

