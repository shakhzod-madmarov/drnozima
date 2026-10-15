import { useMemo, useState } from "react";
import { BookingContext } from "./BookingContext";
import QuickBookingModal from "../components/QuickBookingModal";

export const BookingProvider = ({ children }) => {
  const [request, setRequest] = useState(null);

  const value = useMemo(
    () => ({
      /**
       * openBooking("implantatsiya") or openBooking({ service, name, phone, note }).
       * Anything else - a click event, say - opens an empty form.
       */
      openBooking: (details) => {
        if (typeof details === "string") {
          setRequest({ service: details, name: "", phone: "", note: "" });
          return;
        }
        const safe = details && typeof details === "object" && !details.nativeEvent ? details : {};
        setRequest({
          service: safe.service || null,
          name: safe.name || "",
          phone: safe.phone || "",
          note: safe.note || "",
        });
      },
    }),
    [],
  );

  return (
    <BookingContext.Provider value={value}>
      {children}
      <QuickBookingModal
        isOpen={Boolean(request)}
        initialService={request?.service || null}
        initialName={request?.name || ""}
        initialPhone={request?.phone || ""}
        initialNote={request?.note || ""}
        onClose={() => setRequest(null)}
      />
    </BookingContext.Provider>
  );
};
