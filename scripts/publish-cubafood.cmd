@echo off
setlocal EnableExtensions
cd /d "%~dp0.."

where git >nul 2>&1 || (
  echo ERROR: Git is not installed or not in PATH.
  exit /b 1
)

git rev-parse --is-inside-work-tree >nul 2>&1 || (
  echo ERROR: This folder is not a Git repository.
  exit /b 1
)

for /f %%B in ('git branch --show-current') do set BRANCH=%%B
if /I not "%BRANCH%"=="main" (
  echo ERROR: Current branch is "%BRANCH%". Switch to main before publishing.
  exit /b 1
)

git fetch origin main || exit /b 1
for /f %%L in ('git rev-parse HEAD') do set LOCAL_SHA=%%L
for /f %%R in ('git rev-parse origin/main') do set REMOTE_SHA=%%R

if /I not "%LOCAL_SHA%"=="%REMOTE_SHA%" (
  echo.
  echo STOP: origin/main changed since your local copy.
  echo Run: git pull --ff-only origin main
  echo Review the incoming changes, then run this script again.
  exit /b 1
)

git ls-files --error-unmatch .env >nul 2>&1 && (
  echo ERROR: .env is still tracked by Git. Run: git rm --cached .env
  exit /b 1
)

git add -A || exit /b 1

git diff --cached --quiet && (
  echo No changes to commit.
  exit /b 0
)

for /f "delims=" %%F in ('git diff --cached --name-only') do (
  echo %%F | findstr /R /I /C:"^\.env$" /C:"^\.env\." >nul && (
    echo ERROR: Refusing to commit environment file: %%F
    git reset
    exit /b 1
  )
)

set MSG=%~1
if "%MSG%"=="" set MSG=CUBAFOOD production update

echo.
echo Files to publish:
git status --short

git commit -m "%MSG%" || exit /b 1
git push origin main || exit /b 1

echo.
echo SUCCESS: GitHub main was updated.
echo GitHub Actions will now build, deploy, health-check, and roll back automatically if needed.
endlocal
