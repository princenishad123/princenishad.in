import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function ScheduleCall() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <button
      className="py-1 text-xl max-sm:text-sm bg-black px-3 rounded-full border flex items-center hover:scale-[1.025] transition-all justify-center gap-3  border-slate-500"
      data-cal-namespace="15min"
      data-cal-link="prince-nishad-lqqdqa/15min"
      data-cal-config='{"layout":"month_view"}'
    >
      <FaCalendarAlt className=" text-xl max-sm:text-sm" color="cyan" />{" "}
      Schedule a Meeting <FaChevronRight className=" text-xl max-sm:text-sm" />
    </button>
  );
}
