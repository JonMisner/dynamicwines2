const router = require("express").Router();
const wineRoutes = require("./wines");

// Book routes
router.use("/wines", wineRoutes);

module.exports = router;
