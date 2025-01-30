import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router";
import { UserContext } from "../context/userContext";

const NavigationBar = () => {
  const {isLoggedIn} = useContext(UserContext)
  const menuList = ["Home", "About", "Contact", "Login", "Register"];
  const menuLoggedList = ["Home", "About", "Contact", "Logout"];
  const renderMenuList = isLoggedIn ? menuLoggedList : menuList;
  const navigate = useNavigate();

  // Navigate to Route Link
  const navigateRoute = (link) => {
    if (link.toLowerCase().includes("home")) {
      return "/";
    } else {
      return "/" + link.toLowerCase();
    }
  };

  // Navigate to Home
  const NavigateHome = () => navigate("/");

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          {/* Logo */}
          <Navbar.Brand
            className="text-xl font-bold cursor-pointer"
            onClick={() => NavigateHome()}
          >
            MongoMax
          </Navbar.Brand>

          {/* Mobile Toggle */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Menu + Mobile Menu */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto fs-5">
              {renderMenuList.map((link, index) => (
                <Nav.Link
                  key={index}
                  as={Link}
                  className="p-3 hover:font-semibold"
                  to={navigateRoute(link)}
                >
                  {link}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
