import "./App.css";
import Navbar from "./componants/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./componants/Create";
import Read from "./componants/Read";
import Update from "./componants/Update";
import Delete from "./componants/Delete";
import UserDetails from "./componants/UserDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Read />} />
          <Route exact path="/user-details/:userId" element={<UserDetails />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/update/:userId" element={<Update />} />
          <Route exact path="/delete/:userId" element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
