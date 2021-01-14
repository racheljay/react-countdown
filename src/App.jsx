import React, { useEffect, useState } from 'react';
import './App.css';


function App() {

  
  const calculateTimeLeft = () => {
    // let year = new Date().getFullYear();
    let year = 2021;
    let month = 7;
    let day = 29;
    // console.log(year)
    //+ will turn the date object into an integer
    const diff = +new Date(`${year}-${month}-${day}`) - +new Date();
    let timeLeft = {}
    function padZero(num) {return (num < 10) ? ("0" + num) : (num)}

    
    if (diff > 0) {
      
      timeLeft = {
        days: padZero(Math.floor(diff / (1000 * 60 * 60 * 24))),
        hours: padZero(Math.floor((diff / (1000 * 60 * 60)) % 24)),
        minutes: padZero(Math.floor((diff / 1000 / 60) % 60)),
        seconds: padZero(Math.floor((diff / 1000) % 60))
      };
    }
   // else {
      // console.log(timeLeft)
      return timeLeft
    //}
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  // const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearTimeout(timer)
  });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((item, index) => {
      // if(!timeLeft[item]) {
      //   return;
      // }
      timerComponents.push(
        <span key={index}>
          {(index ? ':' : '') + timeLeft[item]}
        </span>
      )
      
    })

    //clear timeout if not mounted

  return (
    <>
      <section>
        <h1>They Are Coming</h1>
        {/* <div>{remainingTime}</div> */}
        {/* <div>{time}</div> */}
        <div>{timerComponents.length ? timerComponents : <span>They Are Here</span>}</div>
      </section>
    </>

  );
}

export default App;
