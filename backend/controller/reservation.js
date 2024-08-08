import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/resSchema.js";

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, time, date } = req.body;

  if (!firstName || !lastName || !email || !phone || !time || !date) {
    return next(new ErrorHandler("Please fill out the entire form before submitting", 400));
  }

  try {
    await Reservation.create({ firstName, lastName, email, phone, time, date });
    res.status(200).json({
      success: true,
      message: "Reservation has been sent to the kitchen",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }
    return next(new ErrorHandler("An unexpected error occurred", 500));
  }
};
