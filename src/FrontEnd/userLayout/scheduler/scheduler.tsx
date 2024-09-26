import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  
} from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import NavBar from "../navbar/navbar";
import FullCalendar from "@fullcalendar/react";

import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  EventApi,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
  formatDate,
} from "@fullcalendar/core";
import { INITIAL_EVENTS, createEventId } from "./event-utils";

import {
  Sheet,
  SheetContent,
  
} from "@/components/ui/sheet";

import React, { createRef } from "react";

interface SuccessPageProps {
  openRight: boolean;
  openLeft: boolean;
  showEventModal: boolean;
  weekendsVisible: boolean;
  currentEvents: EventApi[];
  selectedEvent: EventApi | null;
  openDateSelectModal: boolean;
  selectedStartDate: string | null;
  selectedEndDate: string | null;
  eventTitleInput: string;
}

export default class Scheduler extends React.Component<SuccessPageProps> {
  calendarRef = createRef<FullCalendar>();
  state: SuccessPageProps = {
    openLeft: false,
    openRight: false,
    showEventModal: false,
    openDateSelectModal: false,
    weekendsVisible: true,
    currentEvents: [],
    selectedEvent: null,
    selectedStartDate: null,
    selectedEndDate: null,
    eventTitleInput: "",
  };
  handleEventClick = (clickInfo: EventClickArg) => {
    this.setState({
      showEventModal: true,
      selectedEvent: clickInfo.event,
    });
  };

  handleCreateEvent = () => {
    const calendarApi = this.calendarRef.current?.getApi();
    const { eventTitleInput, selectedStartDate, selectedEndDate } = this.state;

    console.log("Event title:", eventTitleInput);
    console.log("Start Date:", selectedStartDate);
    console.log("End Date:", selectedEndDate);

    if (eventTitleInput && selectedStartDate && selectedEndDate) {
      calendarApi?.addEvent({
        id: createEventId(),
        title: eventTitleInput,
        start: selectedStartDate,
        end: selectedEndDate,
      });

      this.setState({
        openDateSelectModal: false, // Close the modal
        selectedStartDate: null,
        selectedEndDate: null,
        eventTitleInput: "",
      });
    }
  };
  handleDateSelect = (selectInfo: DateSelectArg) => {
    this.setState({
      openDateSelectModal: true, // Open the modal
      selectedStartDate: selectInfo.startStr, // Set the selected start date
      selectedEndDate: selectInfo.endStr, // Set the selected end date
    });

    selectInfo.view.calendar.unselect(); // Clear date selection
  };
  handleCloseModal = () => {
    this.setState({
      showEventModal: false,
      selectedEvent: null,
      openDateSelectModal: false,
      selectedStartDate: null,
      selectedEndDate: null,
      eventTitleInput: "", // Reset the input value if needed
    });
  };
  render() {
    const handleClickOpenRight = () => {
      this.setState({ openRight: !this.state.openRight });
    };
    const handleClickOpenLeft = () => {
      this.setState({ openLeft: !this.state.openLeft });
    };
    const handleCloseModal = () => {
      this.setState({
        openDateSelectModal: false,
        selectedStartDate: null,
        selectedEndDate: null,
        eventTitleInput: "", // Reset input value
      });
    };
    const closeModal = () => {
      this.setState({
        openDateSelectModal: false, // Close modal
        selectedStartDate: null,
        selectedEndDate: null,
      });
    };

    // const eventTitleInput = "";
    // const openDateSelectModal = () => {
    //   this.setState({ openDateSelectModal: !this.state.openDateSelectModal });
    // };
    return (
      <div className="w-screen h-screen flex">
        <div> {this.renderSidebar()}</div>

        <div className="h-full w-full flex flex-col">
          <NavBar />
          <div className="flex-1 mt-2 text-black">
            <Sheet
              open={this.state.openRight}
              onOpenChange={handleClickOpenRight}
            >
              <SheetContent side={"right"}></SheetContent>
            </Sheet>
            {this.state.openDateSelectModal && (
              <Dialog
                open={this.state.openDateSelectModal}
                onOpenChange={closeModal}
              >
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create New Event</DialogTitle>
                    <DialogDescription>
                      <p>Start Date: {this.state.selectedStartDate}</p>
                      <p>End Date: {this.state.selectedEndDate}</p>
                      <input
                        type="text"
                        placeholder="Enter event title"
                        onChange={(e) =>
                          this.setState({ eventTitleInput: e.target.value })
                        }
                        className="border p-2 rounded w-full"
                      />
                      <button
                        onClick={this.handleCreateEvent}
                        className="bg-blue-500 text-white p-2 rounded mt-2"
                      >
                        Create Event
                      </button>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            )}
            {this.state.showEventModal && (
              <div
                className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center"
                style={{ zIndex: 1000 }}
              >
                <div className="bg-white p-6 rounded shadow-lg w-1/3">
                  <h2 className="text-xl font-bold mb-2">Event Details</h2>
                  {this.state.selectedEvent && (
                    <div>
                      <p>
                        <strong>Title:</strong> {this.state.selectedEvent.title}
                      </p>
                      <p>
                        <strong>Start:</strong>{" "}
                        {this.state.selectedEvent.start?.toLocaleString()}
                      </p>
                      <p>
                        <strong>End:</strong>{" "}
                        {this.state.selectedEvent.end?.toLocaleString()}
                      </p>
                      <p>
                        <strong>All Day:</strong>{" "}
                        {this.state.selectedEvent.allDay ? "Yes" : "No"}
                      </p>
                      <button
                        onClick={() => {
                          this.state.selectedEvent?.remove();
                          this.handleCloseModal();
                        }}
                        className="bg-red-500 text-white p-2 rounded mt-4"
                      >
                        Delete Event
                      </button>
                    </div>
                  )}
                  <button
                    onClick={this.handleCloseModal}
                    className="bg-blue-500 text-white p-2 rounded mt-4"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            <FullCalendar
              customButtons={{
                custom1: {
                  text: "Class",
                  click: function () {
                    handleClickOpenRight();
                  },
                },
                custom2: {
                  text: "Info",
                  click: function () {
                    handleClickOpenLeft();
                  },
                },
                custom3: {
                  text: "Add Class",
                  click: function () {
                    handleCloseModal();
                  },
                },
              }}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                left: "prev,next today custom2",
                center: "title",
                right: "custom3 dayGridMonth,timeGridWeek,timeGridDay custom1",
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              weekends={this.state.weekendsVisible}
              initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
              select={this.handleDateSelect}
              eventContent={renderEventContent} // custom render function
              eventClick={this.handleEventClick}
              eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
              /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
              ref={this.calendarRef}
            />
          </div>
        </div>
      </div>
    );
  }

  renderSidebar() {
    const handleClickOpenLeft = () => {
      this.setState({ openLeft: !this.state.openLeft });
    };
    return (
      <Sheet open={this.state.openLeft} onOpenChange={handleClickOpenLeft}>
        <SheetContent side={"left"}>
          {/* <div className="bg-[cyan] h-full p-10 w-full">
            <div className="bg-slate-100 shadow-md rounded-md p-2"> */}
          <h2 className="font-bold">Instructions</h2>
          <ul>
            <li>Select dates and you will be prompted to create a new event</li>
            <li>Drag, drop, and resize events</li>
            <li>Click an event to delete it</li>
          </ul>
          {/* </div> */}
          <div className="bg-slate-100 shadow-md mt-2 rounded-md p-2 flex gap-1">
            <label className="items-center gap-1 flex">
              <span className="font-medium">Long Weekend:</span>
              <input
                type="checkbox"
                className="h-5 w-5 rounded-sm"
                checked={this.state.weekendsVisible}
                onChange={this.handleWeekendsToggle}
              />
            </label>
          </div>
          <div className="bg-slate-100 shadow-md p-2 rounded-md mt-2">
            <h2 className="font-bold">
              All Events ({this.state.currentEvents.length})
            </h2>
            <ul>{this.state.currentEvents.map(renderSidebarEvent)}</ul>
          </div>
          {/* </div> */}
        </SheetContent>
      </Sheet>
    );
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible,
    });
  };

  // handleDateSelect = (selectInfo: DateSelectArg) => {
  //   const title = prompt("Please enter a new title for your event");
  //   const calendarApi = selectInfo.view.calendar;

  //   calendarApi.unselect(); // clear date selection

  //   if (title) {
  //     calendarApi.addEvent({
  //       id: createEventId(),
  //       title,
  //       start: selectInfo.startStr,
  //       end: selectInfo.endStr,
  //       allDay: selectInfo.allDay,
  //     });
  //   }
  // };
  // handleEventClick = (clickInfo: EventClickArg) => {
  //   if (
  //     confirm(
  //       `Are you sure you want to delete the event '${clickInfo.event.title}'`
  //     )
  //   ) {
  //     clickInfo.event.remove();
  //   }
  // };

  handleEvents = (events: EventApi[]) => {
    this.setState({
      currentEvents: events,
    });
  };
}

function renderEventContent(eventContent: EventContentArg) {
  return (
    <>
      <b>{eventContent.timeText}</b>
      <i>{eventContent.event.title}</i>
    </>
  );
}

function renderSidebarEvent(event: EventApi) {
  return (
    <li key={event.id}>
      <b>
        {formatDate(event.start!, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </b>
      <i>{event.title}</i>
    </li>
  );
}
