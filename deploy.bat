@echo off
echo ===================================================
echo     LIVIA MAKES PERFECT - DEPLOYMENT SCRIPT
echo ===================================================
echo.
echo Setting up permissions...
set PATH=C:\Program Files\nodejs;%APPDATA%\npm;%PATH%
echo.
echo Step 1: Firebase Authentication
echo A browser window will open. Please log in with your Google account.
call npx.cmd firebase-tools login
echo.
echo Step 2: Deploying to 'liviamperfect'
call npx.cmd firebase-tools deploy
echo.
echo ===================================================
echo DONE! Your website should now be LIVE!
echo ===================================================
pause
