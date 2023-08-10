import Card from 'react-bootstrap/Card';
import styles from './About.css';
import Button from 'react-bootstrap/Button';
import dancingone from './dancingone.jpg'
import dancingtwo from './dancingtwo.jpg'
import { useState } from 'react'
import Danceone from './dancingone.jsx'
import Dancetwo from './dancingtwo.jsx'
import Resultsbutton from './resultsbutton.jsx'
import Vannetastic from './Vannetastic.jsx'

function Torunessa() {
  const [count, setCount] = useState(0)
  const dancing = () => {
    switch (count) {
        case 0:
          return <Danceone />;
        case 1:
          return <Dancetwo />;
        case 2:
          return <Danceone />;
        case 3:
          return <Dancetwo />;
        case 4:
            return <Danceone />;
        case 5:
            return <Dancetwo />;
        case 6:
            return <Danceone />;
        case 7:
            return <Dancetwo />;
        case 8:
            return <Danceone />;
        case 9:
            return <Dancetwo />;
        case 10:
            return <Danceone />;
        case 11:
            return <Dancetwo />;
        case 12:
            return <Danceone />;
        case 13:
            return <Dancetwo />;
        case 14:
            return <Danceone />;
        case 15:
            return <Dancetwo />;
        case 16:
            return <Danceone />;
        case 17:
            return <Dancetwo />;
        case 18:
            return <Resultsbutton />;
        default:
          return <Resultsbutton />;}}
  return (
 <div><div> 
    <Card><span><br></br>Please click/tap the @ 18 times. Click the arrow once complete 
<br></br><br></br>
<span>{dancing()}</span>
<br></br>
 <Button variant="dark" size="sm" onClick={() => setCount((count) => count + 1)}>
          @ {count}</Button>
</span>
</Card>
<Card></Card>
<div><br></br>\`.</div>
</div>
</div>
  );
}
export default Torunessa;