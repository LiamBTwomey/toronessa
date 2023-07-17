import Card from 'react-bootstrap/Card';
import styles from './Home.css';
import {Routes, Route, useNavigate} from 'react-router-dom';

function BodyOnlyExample() {

  return (
    <Card>
      <Card.Body><Card.Link href="/about"><span>.  Click/tap here to open the folder   .</span></Card.Link></Card.Body>
</Card>
  );
}

export default BodyOnlyExample;