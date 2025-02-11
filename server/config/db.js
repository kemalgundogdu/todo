const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/catdo");
    console.log("Veritabanı bağlantısı başarılı");
  } catch (err) {
    console.error("Veritabanı bağlantı hatası:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
