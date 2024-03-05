// Include packages needed for this application
const fs = require('fs');
const { PDFDocument } = require('pdf-lib');
const sharp = require('sharp');

// number of pages
const pages = 1; // for File

// main function to convert TIFF to PDF
async function convertTiffToPdf() {
  // convert each page
  for (let index = 1; index < pages+1; index++) {

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

      console.log('TIFF to PDF conversion completed successfully.');
    } catch (error) {
      console.error('Error converting TIFF to PDF:', error);
    }
  } 
}

convertTiffToPdf();