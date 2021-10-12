import { MainContainer } from "./Components/MainContainer";
import {useState} from 'react'

function App() {

  const [container, setContainer]=useState('initial');
  const [logoClass, setLogoClass]=useState('logo');

  const changeContainerState=()=>{
    if(container==='initial'){
      setContainer('changed');
      setLogoClass('logo pink');
    }
    else if(container!=='initial'){
      setContainer('initial');
      setLogoClass('logo');
    }    
  }

  return (
    <div className="main-container">
      <MainContainer container={container}
        changeContainerState={changeContainerState}
        logoClass={logoClass}
      />
    </div>
  );
}

export default App;
