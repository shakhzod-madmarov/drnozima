import { createContext, useContext } from "react";

export const BookingContext = createContext({ openBooking: () => {} });

export const useBooking = () => useContext(BookingContext);
