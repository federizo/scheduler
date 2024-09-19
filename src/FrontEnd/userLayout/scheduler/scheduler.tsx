// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import NavBar from "../navbar/navbar";
import FullCalendar from "@fullcalendar/react";
import React from "react";
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
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// <div className="w-screen h-screen grid ">
//   {" "}
//   <NavBar />
//   <div className="w-screen h-screen flex items-center justify-center">
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button variant="outline">Edit Profile</Button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle>Edit profile</DialogTitle>
//           <DialogDescription>
//             Make changes to your profile here. Click save when you're done.
//           </DialogDescription>
//         </DialogHeader>
//         <div className="grid gap-4 py-4">
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="name" className="text-right">
//               Name
//             </Label>
//             <Input
//               id="name"
//               defaultValue="Pedro Duarte"
//               className="col-span-3"
//             />
//           </div>
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="username" className="text-right">
//               Username
//             </Label>
//             <Input
//               id="username"
//               defaultValue="@peduarte"
//               className="col-span-3"
//             />
//           </div>
//         </div>
//         <DialogFooter>
//           <Button type="submit">Save changes</Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   </div>
// </div>

interface SuccessPageProps {
  openRight: boolean;
  openLeft: boolean;
  weekendsVisible: boolean;
  currentEvents: EventApi[];
}

export default class Scheduler extends React.Component<SuccessPageProps> {
  state: SuccessPageProps = {
    openLeft: false,
    openRight: false,
    weekendsVisible: true,
    currentEvents: [],
  };

  render() {
    const handleClickOpenRight = () => {
      this.setState({ openRight: !this.state.openRight });
    };
    const handleClickOpenLeft = () => {
      this.setState({ openLeft: !this.state.openLeft });
    };
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
              <SheetContent side={"right"}>
                
                
                
              </SheetContent>
            </Sheet>
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
              }}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                left: "prev,next today custom2",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay custom1",
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
          <div className="bg-[cyan] h-full p-10 w-full">
            <div className="bg-slate-100 shadow-md rounded-md p-2">
              <h2 className="font-bold">Instructions</h2>
              <ul>
                <li>
                  Select dates and you will be prompted to create a new event
                </li>
                <li>Drag, drop, and resize events</li>
                <li>Click an event to delete it</li>
              </ul>
            </div>
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
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible,
    });
  };

  handleDateSelect = (selectInfo: DateSelectArg) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };
  handleEventClick = (clickInfo: EventClickArg) => {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
      toast("Your event is on");
    }
  };

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
