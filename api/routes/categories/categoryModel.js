"use strict";

const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const categorySchema = new Schema({
  muscle: {
    type: String,
    require: true,
    unique: true
  }
});

module.exports = mongoose.model("category", categorySchema, "catergories"); // I didn't know you could specify the plural! Awesome!
