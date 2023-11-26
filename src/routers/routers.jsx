import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import Services from "../Components/Services";
import ContactUs from "../Components/ContactUs";
import Error from "../Components/Error";
import SharedLayout from "../Components/SharedLayout";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element = {<Home/>} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
