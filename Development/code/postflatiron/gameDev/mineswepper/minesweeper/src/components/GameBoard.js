import ButtonOverall from "./ButtonChild"
import ParentButton from "./ParentButton"

function GameBoard(){


    const SCREEN_WIDTH = window.innerWidth
    const SCREEN_HEIGHT = window.innerHeight
    const GAMEBOARD_NUM = 5
    const BUTTON_WIDTH = (SCREEN_WIDTH * .5) / GAMEBOARD_NUM
    const BUTTON_HEIGHT = (SCREEN_HEIGHT * .7) / GAMEBOARD_NUM 
    
  
    


   


   




    return(
        <div className="overall">
            <div className="gameboard">
              <ParentButton 
                 BUTTON_HEIGHT={BUTTON_HEIGHT}
                 BUTTON_WIDTH={BUTTON_WIDTH}
                 color={"yellow"}
                 backgroundColor={"green"}
                 gameBoardSize={GAMEBOARD_NUM}
              />
            </div>
        </div>
    )
}

export default GameBoard;