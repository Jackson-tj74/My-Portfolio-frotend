import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { ShowOut } from "./Components/ShowOut";
import { AboutI } from "./Pages/AboutI";
import { Projects } from "./Pages/Projects";
import { Services } from "./Pages/Services";
import { ContactUs } from "./Pages/ContactUs";
import { MoreAboutMe } from "./Pages/MoreAboutMe";


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

      
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;