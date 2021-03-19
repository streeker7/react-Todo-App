import React from 'react';
// import logo from './logo.svg';
import './App.css';
import LifeCycleA from './component/LifeCycle/lifeCycleA'
import EventBind from './component/Eventbind';
import Ref from './component/Ref';
function App() {
  return (
    <div className="App">
      {/* <NameList /> */}
      {/* <LifeCycleA /> */}
      <EventBind />
      <Ref />
    </div>
  );
}

export default App;
