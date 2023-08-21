import Card from 'react-bootstrap/Card';
import styles from './About.css';
import Button from 'react-bootstrap/Button';
import sideways from '../../assets/sideways.mp4'


function Movie() {
  return (
<div>
    <Card>
<br></br>
<video src={sideways} width="300" height="300" controls />
<br></br>
<Button href="3" variant="dark" size="lg" block>
        →
      </Button>
</Card>
<Card></Card>
<div><br></br>\`.</div>
</div>

  );
}

export default Movie;

