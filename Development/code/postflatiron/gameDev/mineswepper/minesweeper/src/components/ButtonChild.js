import React from "react";


class ButtonChild extends React.Component {
    
    constructor(props) {
            super(props)
            this.state = {
            color: props.color,
            width: props.width,
            height: props.height,
            backgroundColor: props.backgroundColor, 
            
            };
          }

          handleClick = () => {
              this.setState({backgroundColor: "orange"})
          }

          handleTypeofButton = () => {
              if (this.props.numberOfBombs > 2){
                  return "BOMB"
              } else {
                  return "NOT A BOMB"
              }
          }
      


    render() {
        return <>
        <button style={{color: this.state.color, 
        width: this.state.width, 
        height: this.state.height,
        backgroundColor: this.state.backgroundColor }}
        onClick={this.handleClick}
        >
        {this.handleTypeofButton()}
        </button>
        </>

    }
}

export default ButtonChild;