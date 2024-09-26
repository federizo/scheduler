import { Routes, Route } from "react-router-dom";
import Login from "@/pages/landingPage/login";
import Success from "@/pages/successPage/successPage";
import Teacher from "@/pages/teachers/teachers"
import NavBar from "@/pages/navbar/navbar";
import Scheduler from "@/pages/scheduler/scheduler";
import Schedules from "@/pages/schedules/schedules";
import AccountSettings from "@/pages/accountSettings/accountSettings";
import Settings from "@/pages/settings/settings";

const userRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Success />} />
      <Route
        path="/scheduler"
        element={
          <Scheduler
            openRight={false}
            openLeft={false}
            showEventModal={false}
            weekendsVisible={true}
            currentEvents={[]}
            selectedEvent={null}
            openDateSelectModal={false}
            selectedStartDate={null}
            selectedEndDate={null}
            eventTitleInput=""
          />
        }
      />
      <Route path="/scheduler" element={<NavBar />} />
      <Route path="/schedules" element={<Schedules />} />
      <Route path="/user/:profile" element={<AccountSettings />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/teachers" element={<Teacher />} />
    </Routes>
  );
};

export default userRoutes;
