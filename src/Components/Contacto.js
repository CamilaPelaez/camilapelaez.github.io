import React, { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { FaTwitter, FaLinkedin, FaWhatsapp, FaPhone } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    celular: "",
    mensaje: ""
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const mobileDevices = /Mobi|Android|iPhone|iPad|Tablet/i;

    setIsMobile(mobileDevices.test(userAgent)); // true si es móvil
  }, []);
  // Función para manejar el cambio en los inputs del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Función para enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear el objeto 'data' con template_params
    const data = {
      service_id: "service_w8l4i6s", // Reemplaza con tu Service ID de EmailJS
      template_id: "template_9ksfh0g", // Reemplaza con tu Template ID de EmailJS
      user_id: "NX2l9Y8YiX5STMGZE", // Reemplaza con tu Public Key/User ID de EmailJS
      template_params: {
        nombre: formData.nombre,
        email: formData.email,
        celular: formData.celular,
        mensaje: formData.mensaje
      }
    };

    // Enviar el correo a través de EmailJS
    emailjs.send(
      data.service_id,
      data.template_id,
      data.template_params,
      data.user_id
    )
    .then(
      (result) => {
        console.log("Correo enviado", result.text);
        alert("¡Mensaje enviado exitosamente!");
        
        // Limpiar el formulario y quitar el foco
        setFormData({
          nombre: "",
          email: "",
          celular: "",
          mensaje: ""
        });
        e.target.reset(); // Restablecer el formulario
        document.activeElement.blur(); // Quitar el foco
      },
      (error) => {
        console.log("Error al enviar el correo", error.text);
        alert("Hubo un error al enviar el mensaje. Inténtalo nuevamente.");
      }
    );
  };

  return (
    <Container>
      <h2 className="text-center pt-3 pb-3">Contacto</h2>

      {/* Sección de datos de contacto principales */}
      <Row className="mb-4">
      <Col lg={4}>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <span className="fs-5 fw-bold">Celular:</span>
        <span className="ms-2">
          +57 318 357 0055{" "}
          {isMobile && (
            <a href={`tel:+573183570055`} className="fs-4 ms-2 me-2 tel">
              <FaPhone />
            </a>
          )}
          <a
            href={`https://wa.me/573183570055`} // Enlace directo para WhatsApp
            target="_blank" 
            rel="noopener noreferrer" 
            className="fs-4 ms-2 me-2 whats"
          >
            <FaWhatsapp />
          </a>
        </span>
      </div>
    </Col>
        <Col lg={4} className="">
          <div className="d-flex flex-row justify-content-center  vertical-align">
            <span className="fs-5 fw-bold">E-mail:</span>
            <span className="ms-2">pelaezc08@gmail.com</span>
          </div>
        </Col>
        <Col lg={4} className="">
          <div className="d-flex flex-row justify-content-center  vertical-align">
            <span className="fs-5 fw-bold">Redes Sociales:</span>
            <span className="ms-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ms-2 me-2 fs-4">
                  <FaLinkedin />
                </span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ms-2 me-2 fs-4 ">
                  <FaTwitter />
                </span>
              </a>
            </span>
          </div>
        </Col>
      </Row>

      {/* Formulario de contacto */}
      <div className="p-3 formulario-fondo mt-5">
        <h2 className="text-center">Formulario de contacto</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Introduce tu nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="Introduce tu correo electrónico"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formCelular" className="mb-3">
            <Form.Label>Celular</Form.Label>
            <Form.Control
              type="text"
              placeholder="Introduce tu número celular"
              name="celular"
              value={formData.celular}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formMessage" className="mb-3">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Escribe tu mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
            />
          </Form.Group>
          <div className="text-center">
            <Button variant="success" type="submit">
              Enviar
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Contacto;
