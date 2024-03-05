// Include packages needed for this application
const fs = require('fs');
const { PDFDocument } = require('pdf-lib');
const sharp = require('sharp');

// main function to convert TIFF to PDF
async function convertTiffToPdf(tiffPath, pdfPath) {
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

// Example usage
const tiffPath = './assets/Completion of Financial Application Form for Long Term Care Services.tiff';
const pdfPath = './assets/Completion of Financial Application Form for Long Term Care Services.pdf';

// const tiffPath = './assets/Enduring Power of Attorney.tiff';
// const pdfPath = './assets/Enduring Power of Attorney.pdf';

convertTiffToPdf(tiffPath, pdfPath);