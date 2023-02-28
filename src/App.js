import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import SignUp from "./components/signup/SignUp";
import SignIn from "./components/signin/SignIn"
import SetPassword from "./components/setpassword/SetPassword";
import VerifyDetails from "./components/verifydetail/VerifyDetails";
import ConfirmMobile from "./components/confirmMobile/ConfirmMobile"
import SideDrawer from "./components/mainPages/SideDrawer"
import Dashboard from "./components/mainPages/Dashboard"
import Lead from "./components/mainPages/Lead"
import AddLead from "./components/mainPages/AddLead"
import Notification from "./components/mainPages/Notification"
function App() {
  return (
    <div className="App">
      {/* <div>
        <Link to="/">SignIn </Link>
        <Link to="/signup"> Signup </Link>
        <Link to="/password">  Password </Link>
        <Link to="/details"> Details </Link>
      </div> */}
      <BrowserRouter>
    
      <Routes>

      <Route path="/"  element ={<SignIn />} />
        <Route path="/signup" element ={<SignUp />} />
        <Route path="/password" element ={<SetPassword />} />
        <Route path="/details" element ={<VerifyDetails />} />
        <Route path="/confirm-mobile" element ={<ConfirmMobile />} />
        <Route path="/drawer" element ={<SideDrawer />} />
        <Route path="/lead" element ={<Lead />} />
        <Route path="/dashboard" element ={<Dashboard />} />
        <Route path="/add-lead" element ={<AddLead />} />
        <Route path="/noti" element ={<Notification />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
