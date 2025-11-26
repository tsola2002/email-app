import { Routes, Route } from "react-router-dom";
import Mailbox1 from "./MailBox1";
import Mailboxes from "./Mailboxes";
import Companies from "./Companies";
import ManualRespond from "./ManualRespond";
import EmailDashboard from "./components/EmailDashboard";
import CouldNotRespond from "./CouldNotRespond";
import Companyview2 from "./Companyview2";
import UserListContent from "./UserList";

// <CHANGE> Removed login and forgot-password routes since they're now in App.jsx
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/mailbox1" element={<Mailbox1 />} />
      <Route path="/manualrespond" element={<ManualRespond />} />
      <Route path="/couldnotrespond" element={<CouldNotRespond />} />
      <Route path="/mailboxes" element={<Mailboxes />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/sales" element={<EmailDashboard />} />
      <Route path="/email" element={<Companyview2 />} />
      <Route path="/users" element={<UserListContent/>} />
    </Routes>
  );
}
