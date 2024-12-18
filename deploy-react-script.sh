@echo off
setlocal enabledelayedexpansion

:: 設定變數
set "BRANCH=main"
set "BUILD_FOLDER=build"
set "COMMIT_MESSAGE=Deploy React app"

:: 設定顏色代碼
set "RED=[91m"
set "GREEN=[92m"
set "YELLOW=[93m"
set "RESET=[0m"

:: 檢查是否在 git 專案目錄內
if not exist .git (
    echo %RED%錯誤: 請確認目前位置是在 git 專案根目錄%RESET%
    exit /b 1
)

:: 檢查是否有未提交的變更
git status --porcelain > temp.txt
set /p GIT_STATUS=<temp.txt
del temp.txt

if not "!GIT_STATUS!"=="" (
    echo %YELLOW%警告: 有未提交的變更%RESET%
    set /p CONTINUE="是否繼續? (y/n): "
    if /i not "!CONTINUE!"=="y" (
        exit /b 1
    )
)

:: 執行 React build
echo %GREEN%開始建置 React 專案...%RESET%
call npm run build
if errorlevel 1 (
    echo %RED%錯誤: React 建置失敗%RESET%
    exit /b 1
)

:: 檢查 build 資料夾是否存在
if not exist "%BUILD_FOLDER%" (
    echo %RED%錯誤: 找不到 build 資料夾，請確認建置是否成功%RESET%
    exit /b 1
)

:: 提交變更
echo %GREEN%提交變更到 Git...%RESET%
git add %BUILD_FOLDER%
if errorlevel 1 (
    echo %RED%錯誤: 無法加入 build 資料夾到 git%RESET%
    exit /b 1
)

git commit -m "%COMMIT_MESSAGE%"
if errorlevel 1 (
    echo %RED%錯誤: commit 失敗%RESET%
    exit /b 1
)

:: 推送到 GitHub
echo %GREEN%推送到 GitHub...%RESET%
git push origin %BRANCH%
if errorlevel 1 (
    echo %RED%錯誤: push 到 GitHub 失敗%RESET%
    exit /b 1
)

echo %GREEN%部署完成！%RESET%

endlocal
