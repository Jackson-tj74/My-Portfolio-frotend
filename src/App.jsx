import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { ShowOut } from "./Components/ShowOut";
import { AboutI } from "./Pages/AboutI";
import { Projects } from "./Pages/Projects";
import { Services } from "./Pages/Services";
import { ContactUs } from "./Pages/ContactUs";
import { LoginPage } from "./Pages/LoginPage";
import { DashboardPage } from "./Pages/DashboardPage";
import { RegisterPage } from "./Pages/RegisterPage";
import { SettingsPage } from "./Pages/SettingsPage";
import ProtectedRoute from "../ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<ShowOut />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutI />} />
          <Route path="projects" element={<Projects />} />
          <Route path="services" element={<Services />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
           <Route path="/login" element={< LoginPage/>} />
           <Route
            path="/signup"
            element={
              <ProtectedRoute>
                <RegisterPage />
              </ProtectedRoute>
            }
          />
         
             <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
           <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <SettingsPage />
               </ProtectedRoute>
            }
          />
        
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;