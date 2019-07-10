import React from 'react';

export class PokeCard extends React.Component{
  render(){
    return(
      <div className="PokeCard">
        <img src={this.props.sprite} style= {{width: 400}}/>
      </div>
    );
  }
}
export default PokeCard;