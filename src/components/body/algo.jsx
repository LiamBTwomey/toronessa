import Card from 'react-bootstrap/Card';
import styles from './About.css';
import Button from 'react-bootstrap/Button';
import dancingone from './dancingone.jpg'
import dancingtwo from './dancingtwo.jpg'
import { useState } from 'react'
import Danceone from './dancingone.jsx'
import Dancetwo from './dancingtwo.jsx'

function Algo() {
  const [count, setCount] = useState(0)
 return ( 
        <div>     
            {
                (() => {
                    if(count === 0) {
                            return (
                                <Danceone>
                            )
                        } else if (count = 1) {
                            return (
                            <Dancetwo>
                            )
                        } else {
                            return (
                                <Danceone>
                            )
                        }
                })()  
            }  
        </div>  
    
   )}