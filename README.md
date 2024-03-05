# TIFF to PDF Converter and Merger

<br/>
<p align="center">
  <a href="" >
        <img alt="" src="https://img.shields.io/static/v1.svg?label=npm&message=pdf-lib&color=green" /></a>
  <a href="" >
        <img alt="" src="https://img.shields.io/static/v1.svg?label=npm&message=sharp&color=yellow" /></a>
  <a href="" >
        <img alt="Inquirer" src="https://img.shields.io/static/v1.svg?label=npm&message=inquirer&color=blue" /></a>
  <a href="https://github.com/">
        <img alt="GitHub (for repository hosting and project management) - Provides hosting for software development and version control using Git" src="https://img.shields.io/static/v1.svg?label=GitHub&message=hosting&color=black" /></a>
  <a href="https://git-scm.com/">
        <img alt="Git (for version control) - A free and open-source distributed version control system" src="https://img.shields.io/static/v1.svg?label=Git&message=version control&color=lightgray" /></a>
  <a href="" >
        <img alt="Node.js" src="https://img.shields.io/static/v1.svg?label=Node.js&message=Runtime&color=orange" /></a>
</p>
<br/>

This Node.js application allows for the conversion of TIFF images to PDF format and subsequently merges multiple PDF documents into a single PDF file. It's designed to streamline the process of handling TIFF files and preparing them for easy distribution or archiving in the PDF format.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Libraries Used](#libraries-used)
- [Additional Resources](#additional-resources)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed on your system:

Node.js (version 12.x or later recommended)
npm (usually comes with Node.js)

## Installation

To set up the application on your local machine, follow these steps:

1.  Clone the repository to your local machine:
```bash
  git clone https://github.com/naturuplift/ConvertTIFFtoPDF
  cd your-repository-directory
```

2.  Install the necessary Node.js packages:
```bash
  npm install
```

This command installs all dependencies defined in package.json, including pdf-lib and sharp for PDF manipulation and image processing.

## Usage

To convert TIFF files to PDF and merge them into a single document, follow these steps:

1.  Place your TIFF files in the assets directory. Ensure they are named sequentially (e.g., "File 1.tif", "File 2.tif", etc.).

2.  Run the application:
```bash
  node app.js
```

Replace app.js with the actual entry point of your application if different.

3.  The application will convert each TIFF file to a PDF, then merge all resulting PDFs into a single file named merged.pdf in the assets directory.

![image](https://github.com/naturuplift/ConvertTIFFtoPDF/assets/23546356/9860fb19-c3e0-41cb-98a4-23d180171d3b)

### Customizing File Paths
To customize the input or output file paths, edit the convertTiffToPdf function in your script, modifying the tiffPath and pdfPath variables as needed.

## Libraries Used

- **pdf-lib:** For creating and manipulating PDF files.
- **sharp:** For converting TIFF images to a format suitable for embedding in PDFs.

## Contributing
Contributions to the project are welcome: Fork the project. Create your feature branch (git checkout -b feature/AmazingFeature). Commit your changes (git commit -m 'Add some AmazingFeature'). Push to the branch (git push origin feature/AmazingFeature). Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE][MIT] file for details.

[MIT]: <https://github.com/naturuplift/ConvertTIFFtoPDF/blob/main/LICENSE>
