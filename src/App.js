import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./modules/Create/Create";
import EventDetails from "./modules/Event/EventDetails";
import Home from "./modules/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/event/:eventName" element={<EventDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
