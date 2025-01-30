import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home, About, Contact, Register, Login, Error, Logout } from "./pages";
import UserProvider from "./context/userContext";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="flex flex-col h-screen bg-[#F8F9FA]">
          <NavigationBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
