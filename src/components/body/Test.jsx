import Card from 'react-bootstrap/Card';
import styles from './About.css';
import Button from 'react-bootstrap/Button';
import dancingone from './dancingone.jpg'
import dancingtwo from './dancingtwo.jpg'

function BodyOnlyExample() {
  return (
<div>
    <Card><span><br></br>Please click/tap the @ 16 times.
<br></br><br></br><img src={dancingone} size="50px 50px" />
<br></br>
<Button href="3" variant="dark" size="sm" block>
        @
      </Button>
<br></br>
<br></br>
<Button href="1" variant="dark" size="sm" block>
        →
      </Button></span>
</Card>
<Card></Card>
</div>

  );
}

export default BodyOnlyExample;