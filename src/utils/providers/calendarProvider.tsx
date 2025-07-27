import { createContext, useMemo, useState, type ReactNode } from "react"
import type { TUseCalendar } from "../../components/hooks/types";
import { useCalendar } from "../../components/hooks/useCalendar";

interface ICalenrarContext {
  calendar: TUseCalendar;
  type?: 'start' | 'end',
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
  currentDate: Date;
}


// eslint-disable-next-line react-refresh/only-export-components
export const CalendarContext = createContext<ICalenrarContext | null>(null);

interface ICalenparProviderProps {
  children: ReactNode;
  initialDate?: Date;
  type?: 'start' | 'end'
}

export const CalenparProvider = (props: ICalenparProviderProps) => {
  const { children, initialDate, type } = props;
  const date = initialDate ? initialDate : new Date();
  const [currentDate, setCurrentDate] = useState<Date>(date)

  const calendar = useCalendar({ selectedDate: currentDate, firstWeekDay: 2 })

  const contextValue = useMemo(() => ({
    calendar,
    type,
    setCurrentDate,
    currentDate
  }), [calendar, type, currentDate]);

  return (
    <CalendarContext.Provider value={contextValue}>
      {children}
    </CalendarContext.Provider>
  )
}