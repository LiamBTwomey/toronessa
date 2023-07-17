import styles from './Home.css';
import { button } from 'react-bootstrap/button';
import { useNavigate } from "react-router-dom";

function Redirect() {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/home')
  }
  return (
    <div>
      <button onClick={handleClick}>go home</button>
    </div>
  );
}

export default Redirect;