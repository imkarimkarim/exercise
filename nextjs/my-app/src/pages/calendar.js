import { en } from "@/locales/en";
import { es } from "@/locales/es";
import { useRouter } from "next/router";
import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

export default function Calendar() {
    const router = useRouter();
    const { locale } = router;

    const t = locale === "en" ? en : es;
    const handleDateClick = (arg) => {
        alert(arg.dateStr);
    };
    return (
        <div>
            {t.calendar}
            <br />
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                weekends={false}
                events={[
                    { title: "karim shutter", date: "2023-03-01" },
                    { title: "event 2", date: "2023-04-03" },
                ]}
                eventClick={handleDateClick}
            />
        </div>
    );
}
