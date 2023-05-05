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

export default {
  getAllTrips,
};
