@echo off
echo ===================================================
echo   LIVIA MAKES PERFECT - GITHUB CI/CD SETUP
echo ===================================================
echo.
echo Setting up environment paths...
set PATH=C:\Program Files\Git\bin;C:\Program Files\nodejs;%APPDATA%\npm;%PATH%
echo.

echo Step 1: Initializing Local Git...
if not exist .git (
    git init -b main
)
git add .
git commit -m "chore: setup digital agency architecture with CI/CD preparations"
git remote add origin https://github.com/liviamper/Livia-Makes-Perfect-Website.git 2>nul
echo.

echo Step 2: Connecting Firebase to GitHub...
echo IMPORTANT: A browser window will open to authorize GitHub.
echo When asked for the repo, type: liviamper/Livia-Makes-Perfect-Website
echo.
call npx.cmd firebase-tools init hosting:github
echo.

echo Step 3: Pushing code to GitHub...
git push -u origin main
echo.

echo ===================================================
echo DONE! GitHub Actions is now monitoring your repo.
echo Any change you push to GitHub will automatically deploy!
echo ===================================================
pause
