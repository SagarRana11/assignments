const http = require('http');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

// Make sure the uploads folder exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const server = http.createServer((req, res) => {
  // Handle file upload via POST request
  if (req.url === '/api/upload' && req.method.toLowerCase() === 'post') {
    const form = new formidable.IncomingForm();
    form.uploadDir = uploadDir;  // Set the upload directory
    form.keepExtensions = true;  // Keep the file's extension

    // Parse the form data
    form.parse(req, (err, fields, files) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error uploading file');
        return;
      }

      // Check if a file was uploaded
      const uploadedFile = files.file;
      console.log(uploadedFile);
      if (!uploadedFile) {
        res.statusCode = 400;
        res.end('No file uploaded');
        return;
      }

      // Get the temporary file path
      const filepath = uploadedFile.filepath;

      // Generate a new file name to prevent overwrite (using timestamp or a random string)
      const timestamp = Date.now();
      const newFileName = `${timestamp}-${uploadedFile.originalFilename}`;
      const newFilepath = path.join(uploadDir, newFileName);  // Destination path

      // Move the file from the temp directory to the final upload location
      fs.rename(filepath, newFilepath, (err) => {
        if (err) {
          res.statusCode = 500;
          res.end('Error moving the file');
          return;
        }

        console.log(`File uploaded: ${newFileName}`);
        res.statusCode = 200;
        res.end('File uploaded successfully');
      });
    });
  } else if (req.method.toLowerCase() === 'get') {
    // Serve the HTML form to upload the file
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <h2>File Upload with Node.js <code>"http"</code> and <code>"formidable"</code></h2>
      <form action="/api/upload" enctype="multipart/form-data" method="post">
        <div>Text field title: <input type="text" name="title" /></div>
        <div>File: <input type="file" name="file" /></div>
        <input type="submit" value="Upload" />
      </form>
    `);
  } else {
    // Handle other requests
    res.statusCode = 404;
    res.end('Not found');
  }
});

server.listen(5000, () => {
  console.log('Server listening on http://localhost:5000');
});
