import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { ShowOut } from "./Components/ShowOut";
import { AboutI } from "./Pages/AboutI";
import { Projects } from "./Pages/Projects";
import { Services } from "./Pages/Services";
import { ContactUs } from "./Pages/ContactUs";
import { Login } from "./Pages/Login";
import { SignUp } from "./Pages/SignUp";
import { MoreAboutMe } from "./Pages/MoreAboutMe";
import ProtectedRoute from "./routes/ProtectedRouter";
import PublicRoute from "./routes/PublicRouter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout with nested routes */}
        <Route path="/" element={<ShowOut />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutI />} />
          <Route path="projects" element={<Projects />} />
          <Route path="services" element={<Services />} />
          <Route path="contact-us" element={<ContactUs />} />

          {/* Protected route */}
          <Route
            path="more-about-me"
            element={
              <ProtectedRoute>
                <MoreAboutMe />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* Public routes */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;