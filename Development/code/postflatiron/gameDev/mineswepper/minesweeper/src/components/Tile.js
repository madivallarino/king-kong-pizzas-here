import React, { useState, useRef, useEffect } from 'react';
 
function Tile({num}){
const [buttonColor, setButtonColor ] = useState(null) 
    const canvasRef = useRef(null)
    const contextRef = useRef(null)

   
    contextRef.current = num;
   

    useEffect(()=> {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;
        canvas.style.width = `${window.innerWidth*(8/20)}px`;
        // canvas.style.backgroundColor = "red"
        canvas.style.height = `${window.innerHeight*(13/20)}px`;
        canvas.style.position = "absolute"
        canvas.style.left = `${window.innerWidth*(6/20)}px`
        canvas.style.top = `${window.innerHeight*(3/20)}px`
        canvas.style['z.index'] = 5;
        const context = canvas.getContext("2d");
        context.scale(2,2)
        contextRef.current = context;

        drawTheSquare()
      },[])


     function drawTheSquare(){

        contextRef.current.beginPath();
        contextRef.current.rect(10, 20, 150, 100);
        contextRef.current.fill();
     }


    //  function maketheButton(){
    //      if (num === 1 ){
    //          return(
    //                    <div><button >Click Me!</button> </div>
    //          )
    //            }
    //  }

    function handleClick(e){
        if(e.type === 'click'){
            console.log('left click')
        }else if(e.type === 'contextmenu'){
            console.log('right click');
            setButtonColor('right')
        }
    }

   function handleLeftClick(){
       setButtonColor('left')
       console.log('left click')
   }

   function handleClassName(){
        if (buttonColor === 'right'){
            return 'something'
        } else if (buttonColor === 'left'){
            return 'nothing'
        }else {
            return 'normal'
        }
   }

    return (
        <div className="tile" > 
         <canvas id="canvas"
        ref={canvasRef}
        tabIndex ={0}
      />
        </div>
    )
}

export default Tile