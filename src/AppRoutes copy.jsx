import { Routes, Route } from "react-router-dom";
import Mailbox1 from "./MailBox1";
import Mailboxes from "./Mailboxes";
import Companies from "./Companies";
import LoginPage from "./pages/LoginPage";
import ManualRespond from "./ManualRespond";
import ForgotPassword from "./pages/ForgotPassword";
import EmailDashboard from "./components/EmailDashboard";
import CouldNotRespond from "./CouldNotRespond";
import Companyview2 from "./Companyview2";
import UserListContent from "./UserList";

// import Mailbox2 from "./Mailbox2";
// import Users from "./Users";
// … your other pages

export default function AppRoutes2() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

     

      {/* <Route path="/mailbox2" element={<Mailbox2 />} /> 

      <Route path="/users" element={<Users />} />

      
      <Route path="/companies" element={<Company />} />
      <Route path="/blocked" element={<Blocked />} /> */}
    </Routes>
  );
}
