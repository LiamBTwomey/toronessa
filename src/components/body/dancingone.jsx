import Card from 'react-bootstrap/Card';
import styles from './About.css';
import Button from 'react-bootstrap/Button';
import dancingone from './dancingone.jpg'
import dancingtwo from './dancingtwo.jpg'
import { useState } from 'react'

function danceone() {
  const [count, setCount] = useState(0)
  return (
<div>
<img src={dancingone} size="50px 50px" />
</div>

  );
}

export default danceone;