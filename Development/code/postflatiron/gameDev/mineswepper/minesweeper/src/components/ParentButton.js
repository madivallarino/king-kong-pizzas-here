import React from 'react';
import ButtonChild from './ButtonChild';

class ParentButton extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            width: props.BUTTON_WIDTH,
            height: props.BUTTON_HEIGHT,
            gameBoardSize : props.gameBoardSize
        };
      }
    

      numberOfBombs = (max) => {
        return Math.floor(Math.random() * max)
      }


      gameBoardGenerator = () => [...Array(this.props.gameBoardSize)].map((_, i) =>[...Array(this.props.gameBoardSize)].map((_, j) =>
      <ButtonChild
      key = {j}
      width = {this.state.width }
      height = {this.state.height }
      numberOfBombs = {this.numberOfBombs(4)}
      backgroundColor = {"yellow"}
      color = {"blue"}
      />))




    render() {
        return <>
        {this.gameBoardGenerator()}
        </>

    }
}

export default ParentButton;