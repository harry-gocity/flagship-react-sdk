import React from 'react';
import logo from './logo.svg';
import {useFlagship, useFsModifications} from "@flagship.io/react-sdk"

let age = 1
const Home= React.memo(()=>{
  console.log('home');
  const fs = useFlagship()
  const {btnColor} = useFsModifications([{key:"btnColor", defaultValue:"white"}])

  console.log(btnColor);

  console.log(fs.modifications);
  
  console.log(fs.getModificationInfoSync("btnColor"));
  
  
const click =()=>{
  age = age===1?1:2
  fs.updateContext({age})
  fs.synchronizeModifications()
  fs.activateModification(["btnColor"])
  console.log(fs.getModificationsSync([{key:"btnColor", defaultValue:"white"}]));
  console.log(fs.getModificationInfoSync("btnColor"));
}
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{btnColor}</p>
        <button style={{width:100, height:50}} value={"click me"} onClick={()=>{click()}}></button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
})

export default Home;
