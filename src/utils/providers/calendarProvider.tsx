import { createContext, useMemo, type ReactNode } from "react"
import type { TUseCalendar } from "../../components/hooks/types";
import { useCalendar } from "../../components/hooks/useCalendar";

interface ICalenrarContext {
  calendar: TUseCalendar;
  type?: 'start' | 'end'
}
const CalendarContext = createContext<ICalenrarContext | null>(null);

interface ICalenparProviderProps {
  children: ReactNode;
  initialDate: Date;
  type?: 'start' | 'end'
}

export const CalenparProvider = (props: ICalenparProviderProps) => {
  const { children, initialDate = new Date(), type } = props;

  const calendar = useCalendar({ selectedDate: initialDate, firstWeekDay: 2 })

  const contextValue = useMemo(() => ({
    calendar,
    type
  }), [calendar, type]);

  return (
    <CalendarContext.Provider value={contextValue}>
      {children}
    </CalendarContext.Provider>
  )
}