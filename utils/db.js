const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/wpu");

// // Menambah 1 data
// const contact1 = new Contact({
//   nama: "Sandhika",
//   nohp: "089602748613",
//   email: "Sandhika@gmail.com",
// });

// // Simpan ke collection
// contact1.save().then((contact) => console.log(contact));
