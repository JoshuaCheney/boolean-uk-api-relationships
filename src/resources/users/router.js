const express = require("express");

const { getAll } = require("./contoller")

const router = express.Router()

router.get("/", getAll)







module.exports = router