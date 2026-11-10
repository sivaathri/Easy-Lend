Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("C:\Users\DELL\.gemini\antigravity\brain\2838b895-4ba2-489a-a732-84d1f385eab1\.user_uploaded\media_1794289094989_4176a8b0.png")

# Crop pure logo
$rect = New-Object System.Drawing.Rectangle(46, 14, 132, 74)
$cropped = $bmp.Clone($rect, $bmp.PixelFormat)
$dest = "F:\Easy-Lend\public\assets\partners\axis-bank-clean.png"
$cropped.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
$cropped.Dispose()
$bmp.Dispose()
Write-Host "Saved axis-bank-clean.png!"

