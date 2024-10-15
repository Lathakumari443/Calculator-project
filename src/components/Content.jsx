import React, { useEffect, useState } from 'react'

function Content() {
    // let count =0;

    // useEffect(() => {
    //     alert("hello latha")
    // })

    // .............useState ...........
    let count =0;
    const [currentState,updateState]=useState(count);


    const handleclick = () => {
        updateState(currentState+1);
    };

  return (
    <>   
    <div className='content-parent'>
    <div className='main-div'>
      <h2>Count</h2>
      <button onClick={handleclick}>{currentState}</button>
    </div>
    </div>
    </>
  )
}

export default Content;
