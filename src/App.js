import "./App.css";
import "../src/public/inter/stylesheet.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import UserManagement from "./pages/user-management";
import BenefitsManagement from "./pages/benefits-management";
import Report from "./pages/report";
import Setting from "./pages/setting";
import Signin from "./pages/signin";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Signin />} />

          <Route path="/CONTRATISTAS/SUPLIDORES" element={<Landing />} />
          <Route path="/PAGOS" element={<UserManagement />} />
          <Route path="/INFORMES" element={<BenefitsManagement />} />
          <Route path="/report" element={<Report/>} />
          <Route path="/setting" element={<Setting/>} />
            </Routes>
      </Router>
    </>
  );
}

export default App;
