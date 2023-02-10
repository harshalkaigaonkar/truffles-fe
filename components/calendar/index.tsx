import Calendar from 'color-calendar';
import React, { useEffect } from 'react'
import "color-calendar/dist/css/theme-glass.css";

const CalendarComponent = () => {

 useEffect(() => {
  new Calendar({
   id: "#calendar",
   theme: "glass",
    headerBackgroundColor: "white",
    primaryColor: "#7445F8",
    dropShadow: "none",
    headerColor: "rgba(0, 0, 0, 0.5)",
    customWeekdayValues: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    calendarSize: "small",
    borderRadius: "None",
    layoutModifiers: ["month-left-align"]
 });
 }, [])
 useEffect(() => {
  if(document) {
    const header = document.querySelector("div.calendar__header") as HTMLDivElement;
    const calendar_body = document.querySelector("div.calendar__body") as HTMLDivElement;
    const header_monthyear = document.querySelector("div.calendar__monthyear") as HTMLDivElement;
    const days_box = document.querySelectorAll("div.calendar__day-box") as any;
    const arrowsArray = document.querySelectorAll("div.calendar__arrow-inner") as any;

    header.style.borderBottom = "2px solid rgba(0, 0, 0, 0.1)";
    calendar_body.style.borderBottom = "2px solid rgba(0, 0, 0, 0.1)";
    header_monthyear.style.fontSize = "15px";
    header_monthyear.style.fontWeight = "600";
    arrowsArray[0].style.backgroundColor="white"
    arrowsArray[1].style.backgroundColor="white"
    arrowsArray[0].style.fontSize = "20px"
    arrowsArray[1].style.fontSize = "20px"
    days_box.forEach((item: HTMLDivElement) => item.style.borderRadius = "50%");
   }
 }, [])

  return (
    <section className='mt-3 ml-3 px-5 pt-3 bg-white rounded-t-lg shadow-lg shadow-black/50'>
     <div id="calendar" className='text-black' />
    </section>
    )
}

export default CalendarComponent