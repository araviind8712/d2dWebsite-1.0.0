@echo off
call npm run build
if %ERRORLEVEL% neq 0 exit /b %ERRORLEVEL%

call npm run add404Html
if %ERRORLEVEL% neq 0 exit /b %ERRORLEVEL%

call npm run ghpages
if %ERRORLEVEL% neq 0 exit /b %ERRORLEVEL%

echo Deployment completed successfully!
pause
