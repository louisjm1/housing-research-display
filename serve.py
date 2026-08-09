#!/usr/bin/env python3
"""Serves this folder on your own machine so you can look at the site.

Run it with:   python3 serve.py
Then open the address it prints. Press Control and C together to stop it.

Only your own Mac can reach it. Nothing is exposed to the internet.
"""

import http.server
import socketserver
import sys
from functools import partial
from pathlib import Path

HERE = Path(__file__).resolve().parent
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8792


class Handler(http.server.SimpleHTTPRequestHandler):
    """Serves the files, and never lets the browser hold on to a stale copy."""

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, max-age=0")
        super().end_headers()

    def log_message(self, fmt, *args):
        sys.stderr.write("%s\n" % (fmt % args))


def main():
    handler = partial(Handler, directory=str(HERE))
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("127.0.0.1", PORT), handler) as httpd:
        print("Housing Research is at http://127.0.0.1:%d" % PORT)
        print("Press Control and C together to stop it.")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("")
            print("Stopped.")


if __name__ == "__main__":
    main()
