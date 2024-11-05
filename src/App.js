import logo from './logo.svg';
import './App.css';
import FrontPage from './components/frontPage';
import SecondPage from './components/secondPage';
import { useState } from 'react';


function App() {

  const [first, setfirst] = useState(false)


return (
    <div className="App h-[100vh] w-[100vw]">
      {first === false ? <FrontPage setfirst={setfirst} /> :
      <SecondPage setfirst={setfirst}/>}
    </div>
  );
}

export default App;
