import React, { Component } from "react";
import Calendar from "react-calendar";

const ReactCalendar = (props) => {
  //   state = {
  //     date: new Date(),
  //   };
  const formatDate = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("-");
  };

  return (
    <div className="pb-5">
      <Calendar
        onChange={(e) => {
          let event = {
            target: {
              name: "delivery_date",
              value: formatDate(e),
            },
          };

          props.handleStateChange(event);
        }}
        tileDisabled={
          ({ activeStartDate, date, view }) => {
            if (formatDate(date) == "2023-02-13") {
              return 1;
            }
          }
          // onChange={this.onChange}
          // value={this.state.date}
        }
        value={props.date ? new Date(props.date) : false}
        calendarType="Hebrew"
        minDate={new Date()}
      />
    </div>
  );
};

export default ReactCalendar;
