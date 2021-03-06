const express = require('express');
const path = require('path');
const enforce = require('express-sslify');
const compression = require('compression');

const app = express();
const port = process.env.PORT || 5000;

// convert http connections to https
app.use(enforce.HTTPS({ trustProtoHeader: true }));

// compress files for better performance
app.use(compression());

// serve our client/build directory on production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './client/build')));
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, './client/build', 'index.html'));
  });
}

app.listen(port, error => {
  if (error) throw error;
  console.log(`Server running on port ${port}`);
});
