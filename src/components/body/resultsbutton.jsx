import Card from 'react-bootstrap/Card';
import styles from './Answer.css';
import Button from 'react-bootstrap/Button';
import dancingone from './dancingone.jpg'
import dancingtwo from './dancingtwo.jpg'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function resultsButton() {
  const [count, setCount] = useState(0)
  return (
<div>
<Link to='/3'><span style={{color: 'black', fontWeight: 'bold', fontSize: 200}}>CLICK/TAP ME THEN CLICK/TAP THE VIDEO</span></Link>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

</div>

  );
}

export default resultsButton;