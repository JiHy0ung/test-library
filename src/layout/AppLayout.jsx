import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Outlet, useNavigate } from "react-router-dom";
import loginStore from "../stores/loginStore";

const AppLayout = () => {
  const { authenticate, logout } = loginStore();

  const navigate = useNavigate();

  const expand = "md";

  const goToMain = () => {
    navigate("/");
  };

  const goToMyBook = () => {
    authenticate ? navigate("/mybook") : navigate("/login");
  };

  const goToLogin = () => {
    if (authenticate) {
        logout();
        navigate("/");
      } else {
        navigate("/login");
      }
  };

  console.log("AppLayout에서 받은 로그인 상태:", authenticate);

  return (
    <div>
      <Navbar key={expand} expand={expand} className="lib-navbar">
        <Container fluid>
          <Navbar.Brand href="#" className="cn-library">
            <div style={{ display: "flex" }} onClick={goToMain}>
              <img
                className="logo-img"
                src="https://em-content.zobj.net/source/microsoft-teams/363/open-book_1f4d6.png"
              />
              <p className="library">CN Library</p>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link onClick={goToMain}>메인</Nav.Link>
                <Nav.Link onClick={goToMyBook}>나의 책</Nav.Link>
                <Nav.Link onClick={goToLogin}>
                  {authenticate ? "로그아웃" : "로그인"}
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <Outlet />
    </div>
  );
};

export default AppLayout;
