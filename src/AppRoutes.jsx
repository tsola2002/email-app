import { Routes, Route } from "react-router-dom";
import Mailbox1 from "./MailBox1";
import Mailboxes from "./Mailboxes";
import EmailDashboard from "./components/EmailDashboard";
import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./pages/forgotPassword";
import CouldNotRespond from "./couldNotRespond";

// import Mailbox2 from "./Mailbox2";
// import Users from "./Users";
// … your other pages

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/mailbox1" element={<Mailbox1 />} />
      <Route path="/mailboxes" element={<Mailboxes />} />
      <Route path="/email" element={<EmailDashboard />} />
      <Route path="/couldnotrespond" element={<CouldNotRespond/>}/>

      {/* <Route path="/mailbox2" element={<Mailbox2 />} /> 

      <Route path="/users" element={<Users />} />
      <Route path="/companies" element={<Company />} />
      <Route path="/blocked" element={<Blocked />} /> */}
    </Routes>
  );
}