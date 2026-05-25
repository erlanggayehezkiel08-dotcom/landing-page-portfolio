#!/usr/bin/env python3
"""
Portfolio Server — Erlangga Yehezkiel
Simple HTTP server, zero dependencies needed.
Run: python3 server.py
"""

import http.server
import socketserver
import os
import sys
import signal
from pathlib import Path

PORT = int(os.environ.get("PORT", 3000))
DIRECTORY = Path(__file__).parent.resolve()

class PortfolioHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIRECTORY), **kwargs)

    def do_GET(self):
        # Route everything to index.html if file not found
        file_path = DIRECTORY / self.path.lstrip("/")
        if not file_path.exists() or self.path == "/":
            self.path = "/index.html"
        super().do_GET()

    def log_message(self, format, *args):
        # Clean log format
        print(f"  [{self.log_date_time_string()}] {format % args}")

    def end_headers(self):
        # Cache headers
        self.send_header("Cache-Control", "no-cache, must-revalidate")
        super().end_headers()

def run():
    os.chdir(DIRECTORY)

    with socketserver.TCPServer(("", PORT), PortfolioHandler) as httpd:
        httpd.allow_reuse_address = True

        print(f"\n{'='*48}")
        print(f"  🚀  Portfolio Server  — Erlangga Yehezkiel")
        print(f"{'='*48}")
        print(f"  Local:   http://localhost:{PORT}")
        print(f"  Dir:     {DIRECTORY}")
        print(f"  Press Ctrl+C to stop\n")

        def shutdown(sig, frame):
            print("\n  ✓ Server stopped.\n")
            sys.exit(0)

        signal.signal(signal.SIGINT, shutdown)
        signal.signal(signal.SIGTERM, shutdown)

        httpd.serve_forever()

if __name__ == "__main__":
    run()
