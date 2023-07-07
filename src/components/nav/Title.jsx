import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Title.css';


function ContainerOutsideExample() {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#" style={{fontSize:"54px"}}><span>The Torunessa Test </span></Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default ContainerOutsideExample;