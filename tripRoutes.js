import express from "express";
import tripController from "./tripController.js";
const router = express.Router();
  
//define function logic in controller
router.route("/").get(tripController.getAllTrips);
router.route("/").get(tripController.deleteTrip);
router.route("/").get(tripController.updateTrip);
router.route("/").get(tripController.bookTrip);


export default router;  