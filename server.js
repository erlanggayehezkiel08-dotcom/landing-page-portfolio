#!/usr/bin/env node
/**
 * Portfolio Server — Erlangga Yehezkiel
 * Zero npm dependencies — uses Node.js built-in modules only.
 * Run: node server.js
 */

const http = require('http');
const fs   = require('fs');
const path = require('path');
const url  = require('url');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.ttf':  'font/ttf',
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;

  if (pathname === '/' || pathname === '') pathname = '/index.html';

  const filePath = path.join(ROOT, pathname);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      fs.readFile(path.join(ROOT, 'index.html'), (err2, indexData) => {
        if (err2) { res.writeHead(500); res.end('Server error'); return; }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(indexData);
      });
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log('\n' + '='.repeat(48));
  console.log('  🚀  Portfolio Server  — Erlangga Yehezkiel');
  console.log('='.repeat(48));
  console.log(`  Local:   http://localhost:${PORT}`);
  console.log(`  Dir:     ${ROOT}`);
  console.log('  Press Ctrl+C to stop\n');
});

process.on('SIGINT',  () => { console.log('\n  ✓ Server stopped.\n'); process.exit(0); });
process.on('SIGTERM', () => { console.log('\n  ✓ Server stopped.\n'); process.exit(0); });
