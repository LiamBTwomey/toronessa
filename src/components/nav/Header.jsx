import Nav from 'react-bootstrap/Nav';
import styles from './Header.css';


function Header() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/"><span>.   TORUNESSA TEST     .</span></Nav.Link>
      </Nav.Item>

    </Nav>
  );
}

export default Header;