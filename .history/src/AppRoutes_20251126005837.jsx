import { Routes, Route } from "react-router-dom";
import Mailbox1 from "./MailBox1";
import Mailboxes from "./Mailboxes";
import Companies from "./Companies";
import LoginPage from "./pages/LoginPage";
import ManualRespond from "./ManualRespond";
import ForgotPassword from "./pages/ForgotPassword";
import EmailDashboard from "./components/EmailDashboard";
import CouldNotRespond from "./CouldNotRespond";
import Companyview2 from "."
// import Mailbox2 from "./Mailbox2";
// import Users from "./Users";
// … your other pages

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/mailbox1" element={<Mailbox1 />} />
      <Route path="/manualrespond" element={<ManualRespond/>} />
      {/* <Route path="/mailbox1" element={<Maunally_resp/>}/> */}

      <Route path="/mailboxes" element={<Mailboxes />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/email" element={<EmailDashboard />} />
      <Route path="/couldnotrespond" element={<CouldNotRespond/>}/>
      <Route path="/email" element={<Companyview2 />} />

      {/* <Route path="/mailbox2" element={<Mailbox2 />} /> 

      <Route path="/users" element={<Users />} />

      <Route path="/blocked" element={<Blocked />} /> */}
    </Routes>
  );
}