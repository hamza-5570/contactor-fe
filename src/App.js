import "./App.css";
import "../src/public/inter/stylesheet.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import UserManagement from "./pages/user-management";
import Informes from "./pages/informes";
import Report from "./pages/report";
import NewPagos from "./pages/addNewPagos";
import Signin from "./pages/signin";
import AddNew from "./pages/addNew";
import Pagos from "./pages/pagos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Signin />} />

          <Route path="/Dashboard" element={<Landing />} />
          {/* <Route path="/Pagos" element={<UserManagement />} /> */}
          <Route path="/INFORMES" element={<Informes />} />
          <Route path="/report" element={<Report />} />
          <Route path="/addNewPagos" element={<NewPagos />} />
          <Route path="/addNew" element={<AddNew />} />
          <Route path="/Pagos" element={<Pagos />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Router>
    </>
  );
}

export default App;
