import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Technology from "./pages/Technology";
import Navbar from "./components/Navbar";

export const routes = {
  "homePage": {path: "/", title: "Home"},
  "crewPage": {path: "/crew", title: "Crew"},
  "destinationPage": {path: "/destination", title: "Destination"},
  "techPage": {path: "/tech", title: "Technology"},
}

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path={routes.homePage.path} element={<Home />} />
        <Route path={routes.crewPage.path} element={<Crew />} />
        <Route path={routes.destinationPage.path} element={<Destination />} />
        <Route path={routes.techPage.path} element={<Technology />} />
      </Routes>
    </Router>
  );
};

export default App;
