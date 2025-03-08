export default function handler(req, res) {
  const path = req.url;
  let canonicalPath = '';

  // Map paths to their canonical URLs
  switch (path) {
    case '/':
      canonicalPath = '/';
      break;
    case '/simple-assessment':
    case '/advanced-assessment':
    case '/advisor':
    case '/freesecuritytools':
    case '/privacy-policy':
    case '/terms':
      canonicalPath = path;
      break;
    default:
      canonicalPath = '/';
  }

  // Read the index.html template
  const html = fs.readFileSync('./index.html', 'utf8');
  
  // Replace the canonical placeholder with the correct path
  const updatedHtml = html.replace('%CANONICAL_PATH%', canonicalPath);

  // Send the modified HTML
  res.setHeader('Content-Type', 'text/html');
  res.send(updatedHtml);
}