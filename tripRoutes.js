import express from "express";
import tripController from "./tripController.js";
const router = express.Router();

//define function logic in controller
router.route("/").get(tripController.getAllTrips);

export default router;  