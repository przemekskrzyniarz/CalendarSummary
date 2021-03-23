import React from 'react';
import { getCalendarEvents } from '../api-client';
import { CalendarEvent } from "../api-client/index"
import View from "./CalendarSummary.view";
import { EventProps } from "./CalendarSummary.typings";

const CalendarSummary: React.FunctionComponent = () => {
  const [events, setEvents] = React.useState<EventProps[]>([])
  const totalDuration = (data: CalendarEvent[]) => {
    let totalDuration: number = 0;
    data.forEach((event: CalendarEvent) => {
      totalDuration = event.durationInMinutes + totalDuration;
    });
    return totalDuration;
  }

  const totalEvents = (data: any[]) => {
    let totalEvents: number = 0;
    data.forEach((event: any) => {
      totalEvents = event.numberOfEvents + totalEvents;
    });
    return totalEvents;
  }

  const longestEvent = (data: any[]) => {
    let longestEvent: string = "";
    data.forEach((event: any) => {
      if (event.title.length > longestEvent.length) {
        longestEvent = event.title;
      }
    });
    return longestEvent;
  }

  React.useEffect(() => {
    let eventsList: any[] = [];
    const fetchEvents = async () => {
      for (let i = 0; i <= 7; i++) {
        let date = new Date();
        date.setDate(date.getDate() + i);
        date.toLocaleDateString();
        let data = await getCalendarEvents(date)
        eventsList = [...eventsList, { date: date.toLocaleDateString('en-US'), numberOfEvents: data.length, durationInMinutes: totalDuration(data), title: longestEvent(data) }]
      }
      eventsList = [...eventsList, { date: "Total", numberOfEvents: totalEvents(eventsList), durationInMinutes: totalDuration(eventsList), title: longestEvent(eventsList) }]
      setEvents(eventsList);
    }
    fetchEvents();
  }, [])

  if (events.length === 0) {
    return (<div>No Data</div>);
  }

  return (
    <React.Fragment>
      <h2>Calendar summary</h2>
      <View events={events} />
    </React.Fragment>
  );
};

export default CalendarSummary;
