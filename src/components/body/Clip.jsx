import Card from 'react-bootstrap/Card';
import styles from './About.css';
import Button from 'react-bootstrap/Button';
import clip from '../../assets/VanneFar.mp4'
import clipsecond from '../../assets/TorunessaClose.mp4'

function Movie() {
    const clipBoardCopy = function(){{{
        navigator.clipboard.writeText("https://torunessa.com")}}{alert("The URL has been copied to your clipboard!")}}
  return (
<div>
<div>
    <Card>
<br></br>
<video src={clipsecond} width="250" height="250" controls />
<br></br>
<Button onClick={clipBoardCopy} variant="outline-light" size="sm" block>
    Click to copy the homepage URL.
      </Button>
</Card>
<Card></Card>
<div><br></br>\`.</div>
</div></div>

  );
}

export default Movie;

