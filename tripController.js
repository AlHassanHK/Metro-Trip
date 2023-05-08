import { PrismaClient } from "@prisma/client";



//Database enums, user RideStatus.pending for example
import { RideStatus } from "@prisma/client";
import { RouteId } from "@prisma/client";
import { RefundRequestStatus} from "@prisma/client";

const prisma = new PrismaClient();

const trips = prisma.Trip; //use trips.findMany() for example, instead of typing prisma.Trip every time

const getAllTrips = async (req, res) => {
  try {
    res.status(200).json({ data: {hello:"from trip service"} });
  } catch (error) {
    res.status(400).send(error.message);
  }
};


const deleteTrip = async (req, res) => {
  try {
    const id = req.body.id;
    const deletedTrip = await trips.delete({
      where: {
        id: id
      }
    })
    res.status(200).json(deletedTrip);
  } catch (error) {
    res.status(400).send(error.message);
  }
};


const updateTrip = async (req, res) => {
  try {
    const updatedTrip = await trips.update({
      where: {
        id: tripId
      },
      data: {
        tripId:req.body.id,
        userId : req.body.userId,
        startLocation : req.body.startLocation,
        purchasedAt : req.body.purchasedAt,
        status : req.body.status,
        totalPrice :req.body.totalPrice,
        route : req.body.route,
        transferStations : req.body.transferStations,
      },
    })
    res.status(200).json(updatedTrip);
  } catch (error) {
    res.status(400).send(error.message);
  }
};


const bookTrip = async (req, res) => {
  try {
    const trip = await trips.create({
      data: {
        tripId:req.body.id,
        userId : req.body.userId,
        startLocation : req.body.startLocation,
        purchasedAt : req.body.purchasedAt,
        status : req.body.status,
        totalPrice :req.body.totalPrice,
        route : req.body.route,
        transferStations : req.body.transferStations,
      },
    })
    res.status(200).json(trip);
  } catch (error) {
    res.status(400).send(error.message);
  }
};


export default {
  getAllTrips,
  deleteTrip,
  updateTrip,
  bookTrip
};
