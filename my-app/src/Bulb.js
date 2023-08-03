import { useState, useEffect } from 'react'




function Bulb(){

    const [on, setOn] = useState(false)
    const turnOn = () => setOn(true)
    const turnOff = () => setOn(false)

    useEffect(() => {
        if (on) console.log('Bulb has been lit')
      },[on])

    return (
        <main>
          <h1>The lights are {on ? 'ON' : 'OFF'}</h1>
          <Light isOn={on} turnOn={turnOn} turnOff={turnOff} />
        </main>
      )




}

export default Bulb;

function Light({ isOn, turnOn, turnOff }) {
    useEffect(() => {
        console.log("Bulb ready to use.")
      }, [])
    useEffect(() => {
        if (!isOn) console.log("I can't see anything!")
      }, [isOn])
    return (
      <>
        <div className="emoji">{isOn ? '💡' : '🌌'}</div>
        <div>
          {
            isOn
              ? <button onClick={turnOff}>Turn off</button>
              : <button onClick={turnOn}>Turn on</button>
          }
        </div>
      </>
    )
  }