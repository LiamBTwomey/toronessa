import Nav from 'react-bootstrap/Nav';
import styles from './Header.css';


function Header() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Test</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Header;