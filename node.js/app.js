"use strict";
// app.js
const express = require("express");
const app = express(); // Express uygulaması oluşturuyoruz ve express modülünü projeye dahil ediyoruz

// Middleware
app.use(express.json()); //Express uygulamasına middleware eklemek için

// Routes
const booksRouter = require("./routes/books"); //routes/books dosyasından gelen rotaları tanımlıyoruz.
app.use("/api/books", booksRouter); ///api/books yoluna bağlıyoruz.Yani, /api/books yolundaki istekler booksRouter üzerinden yönlendirilecek.

// Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
