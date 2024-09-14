const mongoose = require("mongoose");
const schema = mongoose.Schema;

const kidSchema = new schema({
  hair: String,
  eyes: String,
  height: Number,
  weight: Number
})

const personSchema = new schema({
  hair: String,
  eyes: String,
  weight: Number,
  height: Number,
  salary: Number,
  numKids: Number,
  kids: [kidSchema]
});

const Person = mongoose.model("Person", personSchema);

module.exports = {Person};