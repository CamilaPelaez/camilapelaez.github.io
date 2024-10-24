import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import img1 from "../Assets/atacama.jpg";
import img2 from "../Assets/bosque-seco.jpg";
import img3 from "../Assets/paneles.jpg";
import img4 from "../Assets/hongos.png";
import img5 from "../Assets/planta.jpg";
const Proyectos = () => {
  return (
    <Container>
      <h2 className="text-center pt-3 pb-3">Proyectos y Colaboraciones</h2>
      <Row className="justify-content-center">
  <Col md={4} className=" mt-3">
    <Card className="custom-card">
      <Card.Img variant="top" src={img1} />
      <Card.Body className="custom-card-body">
        <Card.Title className="custom-card-title">Propuesta de una estrategia de sostenibilidad para la industria de la moda</Card.Title>
        <Card.Text className="custom-text">
        Se planteó una estrategia basada en principios de circularidad, tomando como caso de estudio una empresa colombiana de marroquinería. La propuesta incluye un modelo de reciclaje en circuito cerrado, enfocado en el reacondicionamiento y reparación de artículos seleccionados, así como un sistema de alquiler de artículos. Estas acciones se complementan con una estrategia de comunicación que fomente el consumo responsable y ayuden a extender la vida útil de los productos. Soluciones como el upcycling y el renting aportan valor estético y práctico, promoviendo modelos más sostenibles y alejados del enfoque lineal.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
  <Col md={4} className=" mt-3">
    <Card className="custom-card">
      <Card.Img variant="top" src={img2} />
      <Card.Body className="custom-card-body">
        <Card.Title className="custom-card-title">Proyecto de mejora sostenible en el Jardín Botánico de Cali y el Zoológico de Cali: optimización de experiencia de usuario y eficiencia energética</Card.Title>
        <Card.Text className="custom-text">
        El proyecto propuso soluciones sostenibles para mejorar la restauración del bosque seco tropical en el Jardín Botánico de Cali y la eficiencia energética del serpentario en el Zoológico de Cali. Se plantearon iniciativas como la jardinería comunitaria, construcción de viveros y huertas, y programas de educación ambiental para involucrar a la comunidad en la conservación. Además, se sugirió el uso de baterías reacondicionadas y sistemas de transferencia de calor por conducción para optimizar la eficiencia energética, con el objetivo de enriquecer la experiencia de los visitantes y promover la conservación de la biodiversidad. Estas soluciones promueven un modelo de sostenibilidad participativa que integra a la comunidad en la protección del entorno natural y la biodiversidad. 
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
  <Col md={4} className=" mt-3">
    <Card className="custom-card">
      <Card.Img variant="top" src={img3} />
      <Card.Body className="custom-card-body">
        <Card.Title className="custom-card-title">Propuesta de transferencia tecnológica para la recuperación de materiales provenientes de residuos de paneles solares: una estrategia sostenible para la economía circular</Card.Title>
        <Card.Text className="custom-text">
        Este proyecto analizó los materiales recuperables de paneles solares posconsumo y las tecnologías de reciclaje disponibles, determinando que el método mecánico es el más adecuado para el contexto colombiano. Usando la herramienta Ecocanvas, se desarrolló una propuesta de negocio circular enfocada en la economía circular.
        <br />
        La implementación de un sistema de reciclaje de paneles solares mediante tecnología mecánica representa una oportunidad clave para el desarrollo sostenible en Colombia. Esta solución no solo gestiona eficientemente los residuos fotovoltaicos, sino que también involucra a los grupos de interés, anticipa impactos ambientales y sociales, y fomenta una cadena de valor circular.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
  
</Row>

    <div className="d-flex flex-row justify-content-center">

    </div>
      <Row className="justify-content-center">
        <Col md={4} className=" mt-3">
          <Card className="custom-card ">
            <Card.Img variant="top" src={img4} />
            <Card.Body className="custom-card-body">
              <Card.Title  className="custom-card-title">Bioprospección de hongos endofíticos asociados a especies del género Piper (Piperaceae) del departamento de Risaralda</Card.Title>
              <Card.Text className="custom-text">
              <br />- Participación en la ejecución del proyecto de investigación del grupo investigación de biotecnología 
                <br />- productos naturales de la universidad tecnológica de Pereira.
                <br />- Capacidad de análisis enfocada a procesos investigativos. Analizando, investigando, planificando soluciones.
                <br />- Quiero contribuir a la transformación de procesos industriales tradicionales en unos que sean amigables con el medio ambiente.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className=" mt-3">
          <Card className="custom-card">
            <Card.Img variant="top" src={img5} />
            <Card.Body className="custom-card-body">
              <Card.Title  className="custom-card-title">Evaluación de las actividades de interacción con ADN y antimicrobiana in vitro sobre la bacteria Ralstonia solanacearum de plantas presentes en la Eco – región cafetera</Card.Title>
              <Card.Text className="custom-text">
              En esta investigación se estudiaron extractos orgánicos de plantas de la región cafetera para evaluar su potencial como agentes de control contra fitopatógenos, usando técnicas in vitro. La actividad de interacción con ADN se analizó mediante HPLC, identificándose que los extractos metanólicos de Ficus andícola (Moraceae), Salvia scutellarioides (Lamiaceae) y Piper umbellatum (Piperaceae) presentaron los mayores porcentajes de inhibición de ADN. Sin embargo, al evaluar la actividad antibacteriana contra Ralstonia solanacearum mediante microdilución, se encontró que ningún extracto inhibió el crecimiento de la bacteria.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
    </Container>
  );
};

export default Proyectos;
