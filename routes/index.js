const express = require("express");
const router = express.Router();
const pokemonsRouter = require("./pokemons.api");

/* GET home page. */
router.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to Pokedex</h1>");
});

router.use("/pokemons", pokemonsRouter);

module.exports = router;
