// Include packages needed for this application
const fs = require('fs');
const { PDFDocument } = require('pdf-lib');
const sharp = require('sharp');

// main function to convert TIFF to PDF
async function convertTiffToPdf(pages) {
  let filePaths = []; // for pdf files

  // convert each page
  for (let index = 1; index <= pages; index++) {

    // Example usage
    const tiffPath = `./assets/File ${index}.tif`;
    const pdfPath = `./assets/File ${index}.pdf`;
    
    try {
      // Convert TIFF to PNG using sharp
      const pngBuffer = await sharp(tiffPath)
        .png()
        .toBuffer();

      // Create a new PDF document
      const pdfDoc = await PDFDocument.create();

      // Embed the PNG image in the PDF
      const pngImage = await pdfDoc.embedPng(pngBuffer);

      // Add a page to the PDF that's the same size as the image
      const { width, height } = pngImage.scale(1);
      const page = pdfDoc.addPage([width, height]);

      // Draw the image on the page
      page.drawImage(pngImage, {
        x: 0,
        y: 0,
        width: width,
        height: height,
      });

      // Serialize the PDF to bytes (a Uint8Array)
      const pdfBytes = await pdfDoc.save();

      // Write the PDF to a file
      fs.writeFileSync(pdfPath, pdfBytes);

      console.log(pdfPath)

      // Dynamically add the created PDF path to the filePaths array
      filePaths.push(pdfPath);

      console.log('TIFF to PDF conversion completed successfully.');
    } catch (error) {
      console.error('Error converting TIFF to PDF:', error);
    }
  }

  console.log(filePaths)

  // Merge pages once all pages converted to individual pdf's
  if(filePaths.length > 0) {
    await mergePdfs(filePaths);
    console.log('All TIFF files have been converted and merged into one PDF document.');
  } else {
    console.log('No TIFF files were converted.');
  }
}

async function mergePdfs(paths) {
  const mergedPdf = await PDFDocument.create();

  for (const path of paths) {
      // Load a PDF document from the file system
      const pdfBytes = fs.readFileSync(path);
      const pdfDoc = await PDFDocument.load(pdfBytes);

      // Copy all pages from the loaded PDFs into the first one
      const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
      copiedPages.forEach((page) => mergedPdf.addPage(page));
  }

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const mergedPdfFile = await mergedPdf.save();

  // Write the merged PDF to a file
  fs.writeFileSync('./assets/merged.pdf', mergedPdfFile);

  console.log('PDFs merged successfully!');
}

convertTiffToPdf(7);