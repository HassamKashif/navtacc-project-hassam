import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserRoute from "./routes/UserRoute";
import Profile from "./pages/user/Profile";
import Dashboard from "./pages/user/Dashboard";
import AddTask from "./pages/user/AddTask";
import EditTask from "./pages/user/EditTask";
import GuestRoute from "./routes/GuestRoute";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* Ensure content takes full screen height */}
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />

              <Route element={<GuestRoute />}>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </Route>

              <Route element={<UserRoute />}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/addtask" element={<AddTask />} />
                {/* <Route path="/edit-task/:id" element={<EditTask />} /> */}
                <Route path="/edit-task/:id" element={<EditTask />} />
              </Route>
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
