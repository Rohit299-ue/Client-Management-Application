# Agreement Files

Place your PDF agreement files in this folder to make them downloadable.

## File Names

The application expects these files:
- `master-service-agreement.pdf`
- `software-license-agreement.pdf`
- `data-processing-agreement.pdf`
- `consulting-services-agreement.pdf`

## How to Add Real PDFs

1. Create or obtain your actual agreement PDF files
2. Rename them to match the file names above
3. Place them in this `public/agreements/` folder
4. The application will automatically serve them for download

## Fallback Behavior

If a PDF file is not found, the application will generate a sample text document instead.
