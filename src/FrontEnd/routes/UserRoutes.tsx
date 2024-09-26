import { Routes, Route } from "react-router-dom";
import Login from "../userLayout/landingPage/login";
import Success from "../userLayout/successPage/successPage";
import Teacher from "../userLayout/teachers/teachers"
import NavBar from "../userLayout/navbar/navbar";
import Scheduler from "../userLayout/scheduler/scheduler";
import Schedules from "../userLayout/schedules/schedules";
import AccountSettings from "../userLayout/accountSettings/accountSettings";
import Settings from "../userLayout/settings/settings";

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
