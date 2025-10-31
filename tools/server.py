from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

os.chdir('./docs')

class MyHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        path = self.path.lstrip('/')
        if '.' not in path and os.path.isfile(path + '.html'):
            self.path += '.html'
        super().do_GET()

    def guess_type(self, path):
        if '.' not in path:
            return 'text/html'
        return super().guess_type(path)

HTTPServer(('0.0.0.0', 8000), MyHandler).serve_forever()
