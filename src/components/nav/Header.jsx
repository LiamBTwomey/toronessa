import Nav from 'react-bootstrap/Nav';
import styles from './Header.css';


function Header() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home"><span>.  ABOUT    .</span></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1"><span>.   TEST     .</span></Nav.Link>
      </Nav.Item>
<Nav.Item>
        <Nav.Link href="/home"><span>.  TORUNESSA TEST    .</span></Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Header;