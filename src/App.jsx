import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Home } from "./Pages/Home";
import { ShowOut } from "./Components/ShowOut";
import { AboutI } from "./Pages/AboutI";
import { Projects } from "./Pages/Projects";
import { Services } from "./Pages/Services";
import { ContactUs } from "./Pages/ContactUs";
import { LoginPage } from "./Pages/LoginPage";
// import { ProtectedRoutes } from "../ProtectedRoutes";
import { DashboardPage } from "./Pages/DashboardPage";
import { RegisterPage } from "./Pages/RegisterPage";
import { SettingsPage } from "./Pages/SettingsPage";

function App() {
  return (
    <BrowserRouter>
       <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
      
        <Route path="/" element={<ShowOut />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutI />} />
          <Route path="projects" element={<Projects />} />
          <Route path="services" element={<Services />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
           <Route path="/login" element={< LoginPage/>} />
            <Route path="/signup" element={<RegisterPage/>} />

         
         
             <Route
            path="/dashboard"
            element={
              // <ProtectedRoutes>
                <DashboardPage />
              // </ProtectedRoutes>
            }
          />
           <Route
            path="/settings"
            element={
              // <ProtectedRoutes>
                <SettingsPage />
              // </ProtectedRoutes>
            }
          />
        
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;