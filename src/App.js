import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, Offcanvas, Button, Row, Col, Carousel, Card } from "react-bootstrap";
import Proyectos from "./Components/Proyectos";
import Contacto from "./Components/Contacto";
import logo from "./Assets/logo.png";
import logo1 from "./Assets/logo1.png";
import perfil from "./Assets/img2.jpg";
import banner1 from "./Assets/banner1.png";
import banner2 from "./Assets/banner2.png";
import banner3 from "./Assets/banner4.png";
import banner10 from "./Assets/banner10.png";
import banner20 from "./Assets/banner20.png";
import banner30 from "./Assets/banner40.png";
import imgIntereses1 from "./Assets/investigacion.png";
import imgIntereses2 from "./Assets/voluntariado.png";
import imgIntereses3 from "./Assets/marcos.png";
import imgIntereses4 from "./Assets/naturaleza.png";
import imgIntereses5 from "./Assets/circular.png";
import hv from "./Assets/HV-Camila-Pelaez.pdf";
import {  FaTwitter,  FaLinkedin } from "react-icons/fa";
import "./App.css";
import cam from "./Assets/img3.png";

function App() {
  const [seccion, setSeccion] = useState("home");
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 750);

  // Función para manejar el resize del navegador
  const handleResize = () => {
    setIsMobile(window.innerWidth < 992);
  };

  // useEffect para agregar el evento de cambio de tamaño de la ventana
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    
    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Definir las imágenes dependiendo del tamaño de la pantalla
  const banners = isMobile
    ? [banner10, banner20, banner30]
    : [banner1, banner2, banner3];

    const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true); // Estado para detectar dispositivo

  // Detectar si el usuario tiene el modo oscuro activado
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleChange = (e) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener("change", handleChange);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  // Detectar si es un dispositivo móvil o tablet
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const mobileDevices = /Mobi|Android|iPhone|iPad|Tablet/i;

    setIsDesktop(!mobileDevices.test(userAgent)); // true si no es móvil
  }, []);

  const renderLogo = () => {
    if (isDesktop) {
      return isDarkMode ? logo : logo; // Solo un logo para desktop
    } else {
      return isDarkMode ? logo : logo1; // Logo para móvil y tablet
    }
  };
  const Perfil = () => {
    return (
      <Container>
        <h2 className="text-center pt-3 pb-3">Sobre mi</h2>
        <Row>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" className="rounded img-perfil" src={cam} />
  
            </Card>
          </Col>
          <Col md={9} style={{ alignContent:"center"}} className="p-3 pb-0">
  
            Desde que tengo memoria, la naturaleza ha sido mi mayor fuente de inspiración. Mi fascinación por su belleza y complejidad me llevó a estudiar Química Industrial, una disciplina que me permitió entender el mundo desde una perspectiva técnica y científica. Sin embargo, más allá de la ciencia, siempre he sentido una fuerte conexión emocional con el entorno natural.
  La sostenibilidad se alinea profundamente con mi esencia y mis valores, por esta razón en el 2023 decidí dar un paso más en mi camino profesional y personal al cursar una maestría en sostenibilidad. Quería adquirir las herramientas necesarias para no solo vivir de manera más coherente con mis principios, sino también para canalizar mi pasión por la protección del medio ambiente hacia una carrera que permita generar un impacto positivo en el mundo, integrando mis conocimientos y mi compromiso con un futuro más equilibrado y respetuoso con el planeta.  
  Misión: ser un agente de cambio, contribuyendo activamente a la conservación de la biodiversidad y el desarrollo de prácticas sostenibles en la industria, alineadas con el cumplimiento de los objetivos de sostenibilidad.  
  
  
          </Col>
        </Row>
        <Col><div>
          <div className="mt-2 mb-2 ps-1 pe-1">
          <h3>Misión</h3>
          Ser un agente de cambio, contribuyendo activamente a la conservación de la biodiversidad y el desarrollo de prácticas sostenibles en la industria, alineadas con el cumplimiento de los objetivos de sostenibilidad.  
          </div>
          <div className="mt-2 mb-2 ps-1 pe-1">
          <h3>Visión</h3>
  Ser un referente en la integración de la sostenibilidad y la ciencia para generar cambios significativos en la manera en que las personas y las organizaciones interactúan con el medio ambiente, liderando iniciativas en las que el respeto por la naturaleza y el desarrollo económico puedan coexistir. 
  Valores: empatía, solidaridad, integridad, transparencia, respeto, perseverancia. 
          </div>
         
       
  
        </div>
        <div className="text-center">  <Button onClick={() => setSeccion("intereses")} variant="success" className="m-2">
                  Conoce mas sobre mis intereses
                  </Button>
                  <Button onClick={() => window.open(hv, "_blank")} variant="info" className="m-2">
                    Ve Mi Hoja de Vida
                  </Button></div></Col>
        
      </Container>
    );
  };
  const Intereses = () => {
    return (
      <Container>
        <h2 className="text-center pt-3 pb-3">Intereses</h2>
          <div>
  
  <ul style={{ listStyleType:"none"}} className=" img-intereses">
    <li className="mt-2 mb-2">
      <Row className="align-items-center">
        <Col md={4} lg={3}>
          <Card.Img className="rounded" variant="top" src={imgIntereses1} />
        </Col>
        <Col md={8} lg={9}>
          <h4>Educación y proyectos de investigación</h4>
          <p>Me apasiona el desarrollo de proyectos educativos y de investigación enfocados en sostenibilidad y conservación, buscando inspirar a otros a actuar de manera responsable con el medio ambiente.</p>
        </Col>
      </Row>
    </li>
    <li className="mt-2 mb-2">
      <Row className="align-items-center">
        <Col  md={4} lg={3}>
          <Card.Img className="rounded"  variant="top" src={imgIntereses2} />
        </Col>
        <Col md={8} lg={9}>
          <h4>Voluntariado</h4>
          <p>A través del voluntariado FWK contribuyo a la enseñanza en adopción de hábitos saludables y prevención de enfermedades no transmisibles a niños de grado 5 en un colegio dentro de la zona de influencia de la empresa Abbott Lafrancol.</p>
        </Col>
      </Row>
    </li>
    <li className="mt-2 mb-2">
      <Row className="align-items-center">
        <Col md={4} lg={3}>
          <Card.Img className="rounded"  variant="top" src={imgIntereses3} />
        </Col>
        <Col md={8} lg={9}>
          <h4>Estándares y marcos ASG</h4>
          <p>Estoy comprometida con la adopción y promoción de estándares ASG (Ambientales, Sociales y de Gobernanza) para fomentar prácticas empresariales responsables y sostenibles.</p>
        </Col>
      </Row>
    </li>
    <li className="mt-2 mb-2">
      <Row className="align-items-center">
        <Col md={4} lg={3}>
          <Card.Img className="rounded" variant="top"  src={imgIntereses4} />
        </Col>
        <Col md={8} lg={9}>
          <h4>Soluciones basadas en naturaleza</h4>
          <p>Creo en el poder de las soluciones basadas en la naturaleza para enfrentar los desafíos ambientales y sociales, aprovechando los ecosistemas como parte clave en la lucha contra el cambio climático.</p>
        </Col>
      </Row>
    </li>
    <li className="mt-2 mb-2">
      <Row className="align-items-center">
        <Col md={4} lg={3}>
          <Card.Img className="rounded"  variant="top"  src={imgIntereses5} />
        </Col>
        <Col md={8} lg={9}>
          <h4>Economía circular</h4>
          <p>Estoy interesada en explorar e implementar en el futuro modelos de economía circular que promuevan la reutilización, el reciclaje y la regeneración de recursos, con el fin de contribuir a un desarrollo económico más consciente y sostenible.</p>
        </Col>
      </Row>
    </li>
  </ul>
  <div className="text-center">
  <Button onClick={() => setSeccion("proyectos")} variant="success" className="m-2">
                  Conoce mas sobre mis proyectos
                  </Button>
  </div>
  
  
          </div>
  
  
      </Container>
    );
  };
  const renderSeccion = () => {
    switch (seccion) {
      case "perfil":
        return <Perfil />;
      case "intereses":
        return <Intereses />;
      case "proyectos":
        return <Proyectos />;
      case "contacto":
        return <Contacto />;
      default:
        return (
          <Container>
            <Row className="align-items-center">
              <Col md={4} className="text-center pt-3">
                <img
                  src={perfil}
                  alt="Pepito Pérez"
                  className="img-fluid"
                  style={{
                    height: isMobile ? "200px" : "325px",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </Col>
              <Col md={6} className="pt-3 ps-3 pe-3">
                <h1>Sobre mi</h1>
                <p>
                Desde siempre, la naturaleza ha sido mi mayor inspiración. Mi interés por su belleza y complejidad me llevó a estudiar Química Industrial, lo que me dio una visión técnica del mundo. Sin embargo, mi conexión con el entorno va más allá de lo científico.
<br /><br />
La sostenibilidad refleja mis valores, y en 2023 decidí profundizar en este camino cursando una maestría en sostenibilidad. Mi objetivo es vivir de manera coherente con mis principios y usar mi pasión por el medio ambiente para generar un impacto positivo, integrando mi conocimiento con un compromiso por un futuro más equilibrado.
                </p>
                <div className="text-center">
                  <Button onClick={() => setSeccion("perfil")} variant="success" className="m-2">
                    Conoce más sobre mí
                  </Button>
                  <Button onClick={() => setSeccion("contacto")} variant="success" className="m-2">
                    Contáctame
                  </Button>
                  
                  <Button onClick={() => window.open(hv, "_blank")} variant="info" className="m-2">
                    Ve Mi Hoja de Vida
                  </Button>
                  
                </div>
              </Col>
            </Row>
          </Container>
        );
    }
  };

  return (
    <div className="">
      <Navbar className="navigation-bar" variant="light" expand="lg">
        <Container>
          <Navbar.Brand onClick={() => setSeccion("home")}>
            <img
              src={renderLogo()}
              alt="Logo"
              className="logo"></img>
            <span className="name">Camila</span>
            <span className="lastname"> Peláez</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvas-navbar" onClick={handleShowOffcanvas} />
          <Navbar.Offcanvas
            show={showOffcanvas}
            onHide={handleCloseOffcanvas}
            id="offcanvas-navbar"
            aria-labelledby="offcanvas-navbar-label"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvas-navbar-label">Menú</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="ms-auto navigation">
                <Nav.Link className={`${seccion === "home" && "nav-selected"}`} onClick={() => { setSeccion("home"); handleCloseOffcanvas(); }}>Inicio</Nav.Link>
                <Nav.Link className={`${seccion === "perfil" && "nav-selected"}`} onClick={() => { setSeccion("perfil"); handleCloseOffcanvas(); }}>Quien Soy</Nav.Link>
                <Nav.Link className={`${seccion === "intereses" && "nav-selected"}`} onClick={() => { setSeccion("intereses"); handleCloseOffcanvas(); }}>Intereses</Nav.Link>
                <Nav.Link className={`${seccion === "proyectos" && "nav-selected"}`} onClick={() => { setSeccion("proyectos"); handleCloseOffcanvas(); }}>Proyectos</Nav.Link>
                <Nav.Link className={`${seccion === "contacto" && "nav-selected"}`} onClick={() => { setSeccion("contacto"); handleCloseOffcanvas(); }}>Contacto</Nav.Link>
                {isMobile && <div>
                 <Button className="mt-3 fw-bold" onClick={() => window.open(hv, "_blank")} variant="info">Ve mi Hoja de Vida</Button>
                </div>}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {/* Mostrar banner solo en la página de home */}
      {seccion === "home" && (
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 banner"
              src={banners[0]}
              alt="Banner 1"
              style={{ maxHeight: "350px"}}
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 banner"
              src={banners[1]}
              alt="Banner 2"
              style={{ maxHeight: "350px" }}
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 banner"
              src={banners[2]}
              alt="Banner 3"
              style={{ maxHeight: "350px" }}
            />
            
          </Carousel.Item>
          
        </Carousel>
      )}
      <div className="fondo-seccion pb-3">{renderSeccion()}</div>
      

      {/* Footer */}
      <footer className="footer text-light pt-3">
  <Container>
    <Row>
      {/* Div 1: Texto alineado a la derecha */}
      <Col xs={6} className="text-end" style={{alignSelf:"center"}}>
        <h5>Contacto</h5>
        <div>pelaezc08@gmail.com</div>
        <div>+57 318 357 0055</div>
      </Col>

      {/* Div 2: Texto alineado a la izquierda */}
      <Col xs={6} className="text-right">
              <h5>Sígueme en</h5>
              <div className="d-flex flex-row">
              <a
           
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                 className="social me-3 fs-3"
              > <FaLinkedin /></a>
              <a
              
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                 className="fs-3 social"
              > <FaTwitter /></a>
              
              </div>
              
            </Col>
    </Row>

    {/* Copyright */}
    <Row className="mt-4">
      <Col className="text-center">
        <p>&copy; {new Date().getFullYear()} Camila Pelaez</p>
      </Col>
    </Row>
  </Container>
</footer>
      
    </div>
  );
}

export default App;
