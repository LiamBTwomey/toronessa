import Card from 'react-bootstrap/Card';
import styles from './Home.css';

function BodyOnlyExample() {
  return (
    <Card>
      <Card.Body><span>.  Click/tap to open the folder   .</span></Card.Body>
    </Card>
  );
}

export default BodyOnlyExample;