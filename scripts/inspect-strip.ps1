Add-Type -AssemblyName System.Drawing

$bmp = [System.Drawing.Bitmap]::FromFile("C:\Users\DELL\.gemini\antigravity\brain\2838b895-4ba2-489a-a732-84d1f385eab1\.user_uploaded\media_1794288662626_c6122d06.png")
Write-Host "Width: $($bmp.Width), Height: $($bmp.Height)"

# Row 1 has 7 cards across ~1024 width.
# Row 2 has 5 cards across ~1024 width.
# Let's crop each card into public/assets/partners/

# Let's measure card height and positions:
# Each card is roughly width 124-135px, height 80-90px.
$bmp.Dispose()

