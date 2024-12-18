@echo off
echo ===== 開始部署程序 =====

:: 建立 React 專案
echo 1. 建立生產版本...
call npm run build
if errorlevel 1 (
    echo Error: Build 失敗
    pause
    exit /b 1
)

:: Git 操作
echo 2. 開始 Git 操作...
git add build/*
git commit -m "Update build files: %date% %time%"

:: 推送到 GitHub
echo 3. 推送到 GitHub...
git push origin main

echo ===== 部署完成 =====
pause