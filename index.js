const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Server Active - ON');
});

app.get('/id', (req, res) => {
  const id = req.query.unben || req.query.id;
  if (!id) {
    return res.json({ status: "Online", message: "Active" });
  }
  res.json({
    server: "active",
    id: 100921146,
    status: "ID ditemukan",
    message: "Server ON"
  });
});

app.listen(3000);
module.exports = app;