import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Test.css';


function About() {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#" style={{fontSize:"54px"}}>The Torunessa Test</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default About;