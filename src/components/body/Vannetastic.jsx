import Card from 'react-bootstrap/Card';
import styles from './About.css';
import Button from 'react-bootstrap/Button';
import dancingone from './dancingone.jpg'
import dancingtwo from './dancingtwo.jpg'
import { useState } from 'react'
import Danceone from './dancingone.jsx'
import Dancetwo from './dancingtwo.jsx'

function Torunessa() {
  const [count, setCount] = useState(0)
  const dancing = () => {
    switch (count) {
        case 0:
          return <Danceone />;
        case 1:
          return <Dancetwo />;
        case 3:
          return <Danceone />;
        default:
          return <Dancetwo />;}}}
export default Torunessa;


<img src={dancingone} size="50px 50px" />