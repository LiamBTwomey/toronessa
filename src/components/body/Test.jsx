import Card from 'react-bootstrap/Card';
import styles from './About.css';
import Button from 'react-bootstrap/Button';


function BodyOnlyExample() {
  return (
<div>
    <Card><span><br></br>Please click/tap the arrow 16 times.
<br></br><span>Please turn your sound on</span><br></br><br></br>
<span>Click/tap the arrow</span><br></br><br></br>
<Button href="1" variant="dark" size="lg" block>
        →
      </Button></span>
</Card>
<Card></Card>
</div>

  );
}

export default BodyOnlyExample;

