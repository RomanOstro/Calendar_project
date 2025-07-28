import type { createDate } from "../../utils/helpers/date";
import type { useCalendar } from "./useCalendar";

export type TCalendarDays = ReturnType<typeof createDate>;
export type TUseCalendar = ReturnType<typeof useCalendar>;
