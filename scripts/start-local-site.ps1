param(
    [int]$Port = 4000,
    [switch]$NoBuild
)

$ErrorActionPreference = "Stop"
$projectRoot = Split-Path -Parent $PSScriptRoot
Set-Location -LiteralPath $projectRoot

if (-not (Get-Command jekyll -ErrorAction SilentlyContinue)) {
    throw "Jekyll was not found on PATH. Install the project dependencies first."
}

$env:JEKYLL_NO_BUNDLER_REQUIRE = "true"

if (-not $NoBuild) {
    Write-Host "Building the local site..." -ForegroundColor Cyan
    jekyll build --config local/_config.yml
    if ($LASTEXITCODE -ne 0) {
        throw "Jekyll build failed with exit code $LASTEXITCODE."
    }
}

$listener = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue | Select-Object -First 1
if ($listener) {
    $owner = Get-Process -Id $listener.OwningProcess -ErrorAction SilentlyContinue
    if (-not $owner -or $owner.ProcessName -notmatch "^(ruby|rubyw|jekyll)$") {
        throw "Port $Port is already used by '$($owner.ProcessName)'. Stop that process or choose another port with -Port."
    }

    Write-Host "Stopping the existing Jekyll server (PID $($listener.OwningProcess))..." -ForegroundColor Yellow
    Stop-Process -Id $listener.OwningProcess -Force
    Start-Sleep -Seconds 1
}

Write-Host "Starting Jekyll at http://127.0.0.1:$Port/" -ForegroundColor Green
Write-Host "Keep this terminal open while viewing the site. Press Ctrl+C to stop." -ForegroundColor DarkGray
# Keep local serving deterministic. Livereload is optional and can leave the
# process stuck during its initial rebuild on this Windows setup.
jekyll serve --config local/_config.yml --host 127.0.0.1 --port $Port --no-watch
