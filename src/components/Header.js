import Button from "./Button";
import { useLocation } from 'react-router-dom';

function Header({onAdd, showAdd}) {
  const location = useLocation();

  return (
    <header className="header">
      <h1>Header</h1>
      {location.pathname === '/' && 
        <Button color={showAdd ? 'red' : 'green'} 
                text={showAdd ? 'Close' : 'Add'} 
                onClick={onAdd}></Button>
      }
    </header>
  )
}

export default Header