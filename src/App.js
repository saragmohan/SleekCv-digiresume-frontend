import Home from "./components/home/Home";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import LogIn from "./Pages/login/Login"
import SignUp from "./Pages/signup/Signup"
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import Form from "./components/forms/Form";
import Admin from "./Pages/admin/Admin";
import AboutUs from "./Pages/about/AboutUs";
import Footer from "./components/footer/Footer";
import UserHome from "./Pages/user home/UserHome";
import TemplateOne from "./Pages/resume templates/template one/TemplateOne";
import ChooseTemplate from "./Pages/choose template/ChooseTemplate";
import Pdf from "./Pages/react to pdf/Pdf";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/api/auth/login" element={<LogIn />} />
          <Route exact path="/api/auth/register" element={<SignUp />} />
          <Route exact path="/api/auth/forgotpassword" element={<ForgotPassword />} />
          <Route exact path="/api/auth/resetpassword/:resetToken" element={<ResetPassword />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/user-home" element={<UserHome />} />
          <Route exact path="/template-one" element={<TemplateOne />} />
          <Route exact path="/choose-template" element={<ChooseTemplate />} />
          <Route exact path="/resume-download" element={<Pdf />} />
        </Routes>
      </div>
      <Footer />
    </Router >
  );
}

export default App;
