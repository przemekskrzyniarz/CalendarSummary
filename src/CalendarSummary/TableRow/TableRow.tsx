import React from 'react';
import { EventProps } from "../CalendarSummary.typings";
const TableRow: React.FunctionComponent<{ event: EventProps }> = ({ event }) => {
  const { date, title, numberOfEvents, durationInMinutes } = event;
  return (
    <React.Fragment>
      <div className="table-row">
        <div className="table-data">{date}</div>
        <div className="table-data">{numberOfEvents}</div>
        <div className="table-data">{durationInMinutes}</div>
        <div className="table-data">{title}</div>
      </div>
    </React.Fragment>
  );
};

export default TableRow;
