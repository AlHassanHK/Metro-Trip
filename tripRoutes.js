import express from "express";
import tripController from "./tripController.js";
const router = express.Router();
  
//define function logic in controller
router.route("/:id").get(tripController.getAllTrips);
router.route("/delete").delete(tripController.deleteTrip);
router.route("/update").patch(tripController.updateTrip);
router.route("/book").post(tripController.bookTrip);


export default router;  