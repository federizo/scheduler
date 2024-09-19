import { Routes, Route } from "react-router-dom";
import Login from "../userLayout/landingPage/login";
import Success from "../userLayout/successPage/successPage";
import School from "../userLayout/school/school";
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
      <Route path="school" element={<School />} />
      <Route path="/scheduler" element={<Scheduler />} />
      <Route path="/scheduler" element={<NavBar />} />
      <Route path="/schedules" element={<Schedules />} />
      <Route path="/user/:profile" element={<AccountSettings />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default userRoutes;
