<#
.SYNOPSIS
    Compiles the JMP and Online Appendix LaTeX files and exports PDFs to the site repo.

.DESCRIPTION
    Runs pdflatex+bibtex+pdflatex+pdflatex on OnlineAppendix.tex first, then on main.tex.
    Copies main.pdf → jmp.pdf and OnlineAppendix.pdf → appendix.pdf into this script's directory.
#>

$ErrorActionPreference = 'Stop'

# --- Configuration ---
$TexSourceDir = '\\wiwi-storage\gruppen_lw$\Forschung\Gender of Opportunity\Project Files\Draft'
$SiteRoot     = Split-Path -Parent $MyInvocation.MyCommand.Definition

# --- Helper: run full LaTeX build cycle ---
function Invoke-LatexBuild {
    param([string]$TexFile)

    $BaseName = [System.IO.Path]::GetFileNameWithoutExtension($TexFile)
    Write-Host "`n=== Building $TexFile ===" -ForegroundColor Cyan

    Write-Host "  [1/4] pdflatex (pass 1)..."
    pdflatex -interaction=nonstopmode $TexFile | Out-Null
    if ($LASTEXITCODE -ne 0) { Write-Warning "pdflatex pass 1 returned exit code $LASTEXITCODE for $TexFile" }

    Write-Host "  [2/4] bibtex..."
    bibtex $BaseName | Out-Null
    if ($LASTEXITCODE -ne 0) { Write-Warning "bibtex returned exit code $LASTEXITCODE for $BaseName" }

    Write-Host "  [3/4] pdflatex (pass 2)..."
    pdflatex -interaction=nonstopmode $TexFile | Out-Null
    if ($LASTEXITCODE -ne 0) { Write-Warning "pdflatex pass 2 returned exit code $LASTEXITCODE for $TexFile" }

    Write-Host "  [4/4] pdflatex (pass 3)..."
    pdflatex -interaction=nonstopmode $TexFile | Out-Null
    if ($LASTEXITCODE -ne 0) { Write-Warning "pdflatex pass 3 returned exit code $LASTEXITCODE for $TexFile" }

    $PdfPath = Join-Path (Get-Location) "$BaseName.pdf"
    if (-not (Test-Path $PdfPath)) {
        throw "Build failed: $PdfPath not found after compilation."
    }
    Write-Host "  OK: $PdfPath" -ForegroundColor Green
    return $PdfPath
}

# --- Verify source directory ---
if (-not (Test-Path $TexSourceDir)) {
    Write-Error "Cannot access TeX source directory: $TexSourceDir`nMake sure you are connected to the KIT network."
    exit 1
}

# --- Switch to source directory ---
Push-Location $TexSourceDir

try {
    # 1. Build Online Appendix
    $AppendixPdf = Invoke-LatexBuild -TexFile 'OnlineAppendix.tex'
    Copy-Item $AppendixPdf (Join-Path $SiteRoot 'appendix.pdf') -Force
    Write-Host "  -> Copied to $SiteRoot\appendix.pdf" -ForegroundColor Yellow

    # 2. Build Main Paper (JMP)
    $MainPdf = Invoke-LatexBuild -TexFile 'main.tex'
    Copy-Item $MainPdf (Join-Path $SiteRoot 'jmp.pdf') -Force
    Write-Host "  -> Copied to $SiteRoot\jmp.pdf" -ForegroundColor Yellow

    Write-Host "`n=== Done! ===" -ForegroundColor Green
    Write-Host "Files ready in $SiteRoot :"
    Write-Host "  - jmp.pdf"
    Write-Host "  - appendix.pdf"
}
finally {
    Pop-Location
}
