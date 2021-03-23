import React from 'react';
import { EventProps } from "./CalendarSummary.typings";
import "./CalendarSummary.styles.css"
import TableRow from "./TableRow/TableRow";

const View: React.FunctionComponent<{ events: EventProps[] }> = ({ events }) => {
	let content;
	content = events.map((event: any) => {
		return <TableRow key={event.date} event={event} />
	})
	return (
		<div className="container">
			<div className="table">
				<div className="table-header">
					<div className="header__item">Date</div>
					<div className="header__item">Number of events</div>
					<div className="header__item">Total duration [min]</div>
					<div className="header__item">Longest event</div>
				</div>
				<div className="table-content">
					{content}
				</div>
			</div>
		</div>
	);
};

export default View;
