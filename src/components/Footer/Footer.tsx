import type React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./Footer.css"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; {new Date().getFullYear()} Your Company Name</p>
          </Col>
          <Col md={6} className="text-md-end">
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
