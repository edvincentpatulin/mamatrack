document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("appointmentsCal1");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: "prevYear,prev,next,nextYear today",
      center: "title",
      right: "dayGridMonth,dayGridWeek,dayGridDay",
    },
    initialDate: "2024-11-10",
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    dayMaxEvents: true, // allow "more" link when too many events
    events: [
      // {
      //   title: "2 Appointments",
      //   url: "appointments-list-doctors-copy.html",
      //   start: "2024-11-01",
      //   textColor: "#116aef",
      //   color: "#ffffff",
      //   borderColor: "#469ED8",
      // },
      // {
      //   title: "3 Appointments",
      //   url: "appointments-doctors-copy.html",
      //   start: "2024-11-02",
      //   textColor: "#116aef",
      //   color: "#ffffff",
      //   borderColor: "#469ED8",
      // },
      // // {
      // //   title: "1 Appointments",
      // //   url: "appointments-list.html",
      // //   start: "2024-11-03",
      // //   textColor: "#116aef",
      // //   color: "#ffffff",
      // //   borderColor: "#469ED8",
      // // },
      // {
      //   title: "1 Appointments",
      //   url: "appointments-doctors-copy.html",
      //   start: "2024-11-04",
      //   textColor: "#116aef",
      //   color: "#ffffff",
      //   borderColor: "#469ED8",
      // },
      // {
      //   title: "7 Appointments",
      //   url: "appointments-doctors-copy.html",
      //   start: "2024-11-05",
      //   textColor: "#116aef",
      //   color: "#ffffff",
      //   borderColor: "#469ED8",
      // },
      // {
      //   title: "3 Appointments",
      //   url: "appointments-doctors-copy.html",
      //   start: "2024-11-06",
      //   textColor: "#116aef",
      //   color: "#ffffff",
      //   borderColor: "#469ED8",
      // },
      // {
      //   title: "9 Appointments",
      //   url: "appointments-doctors-copy.html",
      //   start: "2024-11-07",
      //   textColor: "#116aef",
      //   color: "#ffffff",
      //   borderColor: "#469ED8",
      // },
      // {
      //   title: "5 Appointments",
      //   url: "appointments-doctors-copy.html",
      //   start: "2024-11-08",
      //   textColor: "#116aef",
      //   color: "#ffffff",
      //   borderColor: "#469ED8",
      // },
      // {
      //   title: "2 Appointments",
      //   url: "appointments-doctors-copy.html",
      //   start: "2024-11-09",
      //   textColor: "#116aef",
      //   color: "#ffffff",
      //   borderColor: "#469ED8",
      // },
      // // {
      // //   title: "11 Appointments",
      // //   url: "appointments-list.html",
      // //   start: "2024-05-10",
      // //   textColor: "#116aef",
      // //   color: "#ffffff",
      // //   borderColor: "#469ED8",
      // // },
      // {
      //   title: "3 Appointments",
      //   url: "appointments-doctors-copy.html",
      //   start: "2024-11-11",
      //   textColor: "#116aef",
      //   color: "#ffffff",
      //   borderColor: "#469ED8",
      // },
      // {
      //   title: "6 Appointments",
      //   url: "appointments-doctors-copy.html",
      //   start: "2024-11-12",
      //   textColor: "#116aef",
      //   color: "#ffffff",
      //   borderColor: "#469ED8",
      // },
      // {
      //   title: "2 Appointments",
      //   url: "appointments-doctors-copy.html",
      //   start: "2024-11-13",
      //   textColor: "#116aef",
      //   color: "#ffffff",
      //   borderColor: "#469ED8",
      // },
      // {
      //   title: "4 Appointments",
      //   url: "appointments-doctors-copy.html",
      //   start: "2024-11-14",
      //   textColor: "#116aef",
      //   color: "#ffffff",
      //   borderColor: "#469ED8",
      // },
      // {
      //   title: "5 Appointments",
      //   url: "appointments-doctors-copy.html",
      //   start: "2024-11-15",
      //   textColor: "#116aef",
      //   color: "#ffffff",
      //   borderColor: "#469ED8",
      // },
      // {
      //   title: "5 Appointments",
      //   url: "appointments-doctors-copy.html",
      //   start: "2024-11-16",
      //   textColor: "#116aef",
      //   color: "#ffffff",
      //   borderColor: "#469ED8",
      // },
      // // {
      // //   title: "9 Appointments",
      // //   url: "appointments-list.html",
      // //   start: "2024-05-17",
      // //   textColor: "#116aef",
      // //   color: "#ffffff",
      // //   borderColor: "#469ED8",
      // // },
      // {
      //   title: "2 Appointments",
      //   url: "appointments-doctors-copy.html",
      //   start: "2024-11-18",
      //   textColor: "#116aef",
      //   color: "#ffffff",
      //   borderColor: "#469ED8",
      // },
      // {
      //   title: "5 Appointments",
      //   url: "appointments-doctors-copy.html",
      //   start: "2024-11-19",
      //   textColor: "#116aef",
      //   color: "#ffffff",
      //   borderColor: "#469ED8",
      // },
      // {
      //   title: "7 Appointments",
      //   url: "appointments-doctors-copy.html",
      //   start: "2024-11-20",
      //   textColor: "#116aef",
      //   color: "#ffffff",
      //   borderColor: "#469ED8",
      // },
      // {
      //   title: "4 Appointments",
      //   url: "appointments-doctors-copy.html",
      //   start: "2024-11-21",
      //   textColor: "#116aef",
      //   color: "#ffffff",
      //   borderColor: "#469ED8",
      // },
      // {
      //   title: "3 Appointments",
      //   url: "appointments-doctors-copy.html",
      //   start: "2024-11-22",
      //   textColor: "#116aef",
      //   color: "#ffffff",
      //   borderColor: "#469ED8",
      // },
      {
        title: "2 Appointments",
        url: "appointments-list-doctors-copy.html",
        start: "2024-11-23",
        textColor: "#116aef",
        color: "#ffffff",
        borderColor: "#469ED8",
      },
      // {
      //   title: "20 Appointments",
      //   url: "appointments-list.html",
      //   start: "2024-05-24",
      //   textColor: "#116aef",
      //   color: "#ffffff",
      //   borderColor: "#469ED8",
      // },
      {
        title: "1 Appointments",
        url: "appointments-list-doctors-copy.html",
        start: "2024-11-25",
        textColor: "#116aef",
        color: "#ffffff",
        borderColor: "#469ED8",
      },
      // {
      //   title: "3 Appointments",
      //   url: "appointments-doctors-copy.html",
      //   start: "2024-11-26",
      //   textColor: "#116aef",
      //   color: "#ffffff",
      //   borderColor: "#469ED8",
      // },
      // {
      //   title: "3 Appointments",
      //   url: "appointments-doctors-copy.html",
      //   start: "2024-11-27",
      //   textColor: "#116aef",
      //   color: "#ffffff",
      //   borderColor: "#469ED8",
      // },
      // {
      //   title: "8 Appointments",
      //   url: "appointments-doctors-copy.html",
      //   start: "2024-11-28",
      //   textColor: "#116aef",
      //   color: "#ffffff",
      //   borderColor: "#469ED8",
      // },
      // {
      //   title: "4 Appointments",
      //   url: "appointments-doctors-copy.html",
      //   start: "2024-11-29",
      //   textColor: "#116aef",
      //   color: "#ffffff",
      //   borderColor: "#469ED8",
      // },
      // {
      //   title: "5 Appointments",
      //   url: "appointments-doctors-copy.html",
      //   start: "2024-11-30",
      //   textColor: "#116aef",
      //   color: "#ffffff",
      //   borderColor: "#469ED8",
      // },
      // {
      //   title: "8 Appointments",
      //   url: "appointments-doctors-copy.html",
      //   start: "2024-05-31",
      //   textColor: "#116aef",
      //   color: "#ffffff",
      //   borderColor: "#469ED8",
      // },
    ],
  });

  calendar.render();
});
