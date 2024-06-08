const express = require("express");
const { PATH_PRODUCT, productRouter } = require("./src/products/routers");
const { PATH_CATEGORY, categoryRouter } = require("./src/category/routers");
const { connectDB } = require("./src/utils/database");

const app = express();

connectDB();

app.use(express.json());

app.use(PATH_CATEGORY, categoryRouter);
module.exports = { app };
