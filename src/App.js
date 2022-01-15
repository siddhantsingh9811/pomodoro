import React, { useEffect, useState } from 'react';
import useCountDown from './countdownHook';
import Timer from './Timer';
import Preferences from './Preferences';

function App() {
  let initial_state = {mode: "study",count:1};
  const [state, setState] = useState(initial_state);
  let initial_config = {study: 40, b1:30, b2:60, i:4};
  const [config, setConfig] = useState(initial_config);
  const [p, setP] = useState(false);
  const interval = 1000;
  const initialTime = config.study*60*1000;
  const [timeLeft, { start, pause, resume, reset }] = useCountDown(initialTime, interval);

  const controls = {
    start:start,
    pause:pause,
    resume:resume,
    reset:reset,
  }
  
  useEffect(()=>{
    start(config.study*60*1000);
  },[]);
  
  const handleNext = ()=>{
    let s = state;

    resume();
    
    if(s.mode === "study" && s.count%config.i === 0){
      s.mode = "b2"; 
      start(config.b2*60*1000);
      setP(true);
      pause();
    }
    else if(s.mode === "study" && s.count%config.i !== 0){
      s.mode = "b1";
      start(config.b1*60*1000);
      setP(true);
      pause();
    }
    else if(s.mode === "b1" || s.mode === "b2"){
      s.mode = "study";
      s.count = s.count+1;
      start(config.study*60*1000);
      setP(true);
      pause();
    }
    
    console.log(state)
    setState(s);
  }
  const handleReset = ()=>{
    resume();
    setState({mode: "study",count:1});
    start(config.study*60*1000);
    setP(true);
    pause();
  }
  const [open,setOpen] = useState(false);
  return (
    <div className="app">
      {open ? <Preferences config={config} setConfig={setConfig} setOpen={setOpen} handleReset={handleReset}/> :  <Timer timeLeft={timeLeft} controls={controls} state={state} config={config} handleNext={handleNext} pauseState={{p:p,setP:setP}} setOpen={setOpen}/>}
      
    </div>
  );
}

export default App;
