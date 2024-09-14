const  mongoose = require("mongoose");
const schema = mongoose.Schema;

const bookSchema = new schema({
  title: String,
  author: String,
  pages: Number,
  genres: [String],
  rating: Number
});

const Book = mongoose.model("Book", bookSchema);

module.exports = {Book}



