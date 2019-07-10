import React from 'react';
import './App.css';
import PokeCard from './PokeCard'
import { pokemonList } from './PokemonList.js'
import { pList } from './PokemonList.js'
import './pcardback.png';
import { getTypePic } from './GetTypePic.js';
import { getTypeOffset } from './GetTypeOffset';

const URL = 'https://pokeapi.co/api/v2/pokemon/';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      sprite: '',
      entered: '',
      teamList: [],
      names: [],
      types: [],
      typeBars: []
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleIncorrectPokemon = this.handleIncorrectPokemon.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleRandom = this.handleRandom.bind(this);
  }

  /*componentDidMount() {
    console.log(URL + this.state.name);
    fetch(URL + this.state.name)
      .then(res => res.json())
      .then(
        (result) => {
          //console.log(JSON.stringify(result.sprites.front_default)); 
          this.setState({sprite: result.sprites.front_shiny});  
        }
      )
  }*/

  handleUserInput(e) {
    this.setState({
      userInput: e.target.value,
    });
  }

  handleIncorrectPokemon() {
    this.setState({
      sprite: "https://i.kym-cdn.com/entries/icons/original/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.png"
    });
  }

  handleReset() {
    const newArray = [];
    const str = '';
    this.setState({ teamList: newArray, names: newArray, types: newArray, typeBars: newArray, sprite: str })
  }

  getRandomInt(max) {
    let num = Math.floor(Math.random() * Math.floor(max));
    if (num === 0) {
      return 1;
    }
    else {
      return num;
    }
  }

  handleRandom() {
    this.handleReset();
    for (let i = 1; i <= 6; i++) {
      let num = this.getRandomInt(800);
      console.log(num);
      fetch(URL + num)
        .then(res => res.json())
        .then((result) => {
          this.setState({
            sprite: result.sprites.front_default,
            entered: this.state.userInput
          });
          let newArray = this.state.teamList.slice();
          newArray.push(result.sprites.front_default);
          let newArray2 = this.state.names.slice();
          newArray2.push(result.forms[0].name.charAt(0).toUpperCase() + result.forms[0].name.slice(1));
          console.log(result.forms[0].name);
          this.setState({ teamList: newArray, names: newArray2 })
          console.log(this.state.names);

          let numTypes = result.types.length;
          //console.log(numTypes);
          if (numTypes === 1) {
            let newArray = this.state.types.slice();
            newArray.push(result.types[0].type.name);
            newArray.push("");
            this.setState({ types: newArray })
          }
          else {
            let newArray = this.state.types.slice();
            newArray.push(result.types[0].type.name);
            newArray.push(result.types[1].type.name);
            this.setState({ types: newArray })
          }
          console.log(this.state.types);
          let offset = getTypeOffset(this.state.teamList.length);

          if (numTypes === 1) {
            let ret = getTypePic(this.state.types[offset]);
            console.log(ret);
            let newArray = this.state.typeBars.slice();
            newArray.push(ret);
            newArray.push("");
            this.setState({ typeBars: newArray })
            console.log(this.state.typeBars);
          }
          else if (numTypes === 2) {
            let newArray = this.state.typeBars.slice();
            let ret = getTypePic(this.state.types[offset]);
            newArray.push(ret);
            console.log(ret);
            ret = getTypePic(this.state.types[offset + 1]);
            console.log(ret);
            newArray.push(ret);
            this.setState({ typeBars: newArray })
            console.log(this.state.typeBars);
          }
        }
        )
    }
  }

  handleSubmit() {
    let check = 0;
    for (let i = 0; i < pokemonList.length; i++) {
      if (pokemonList[i] === this.state.userInput) {
        check = 1;
        console.log(this.state.userInput + " entered");
        break;
      }
      else if (pList[i] === this.state.userInput) {
        check = 1;
        console.log(this.state.userInput + " entered");
        this.state.userInput = this.state.userInput.toLowerCase();  //If name typed is uppercase, change to lowercase
        console.log("Now: " + this.state.userInput);
        break;
      }
    }

    if (check === 1) {
      fetch(URL + this.state.userInput)
        .then(res => res.json())
        .then((result) => {
          this.setState({
            sprite: result.sprites.front_default,
            entered: this.state.userInput
          });
          let newArray = this.state.teamList.slice();
          newArray.push(result.sprites.front_default);
          let newArray2 = this.state.names.slice();
          newArray2.push(result.forms[0].name.charAt(0).toUpperCase() + result.forms[0].name.slice(1));
          this.setState({ teamList: newArray, names: newArray2 })


          let numTypes = result.types.length;
          //console.log(numTypes);
          if (numTypes === 1) {
            let newArray = this.state.types.slice();
            newArray.push(result.types[0].type.name);
            newArray.push("");
            this.setState({ types: newArray })
          }
          else {
            let newArray = this.state.types.slice();
            newArray.push(result.types[0].type.name);
            newArray.push(result.types[1].type.name);
            this.setState({ types: newArray })
          }
          console.log(this.state.types);
          let offset = getTypeOffset(this.state.teamList.length);

          if (numTypes === 1) {
            let ret = getTypePic(this.state.types[offset]);
            console.log(ret);
            let newArray = this.state.typeBars.slice();
            newArray.push(ret);
            newArray.push("");
            this.setState({ typeBars: newArray })
            console.log(this.state.typeBars);
          }
          else if (numTypes === 2) {
            let newArray = this.state.typeBars.slice();
            let ret = getTypePic(this.state.types[offset]);
            newArray.push(ret);
            console.log(ret);
            ret = getTypePic(this.state.types[offset + 1]);
            console.log(ret);
            newArray.push(ret);
            this.setState({ typeBars: newArray })
            console.log(this.state.typeBars);
          }
        }
        )
    }
    else {
      this.handleIncorrectPokemon();
      this.setState({ entered: 'Not a gen-1!' });
    }
  }

  render() {
    return (
      <div>
        <img style={{ position: 'absolute', zIndex: '-1', opacity: 0.3, paddingLeft: '480px', paddingRight: 'auto' }} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4f7705ec-8c49-4eed-a56e-c21f3985254c/dah43cy-a8e121cb-934a-40f6-97c7-fa2d77130dd5.png/v1/fill/w_759,h_1053,strp/pokemon_card_backside_in_high_resolution_by_atomicmonkeytcg_dah43cy-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQyMCIsInBhdGgiOiJcL2ZcLzRmNzcwNWVjLThjNDktNGVlZC1hNTZlLWMyMWYzOTg1MjU0Y1wvZGFoNDNjeS1hOGUxMjFjYi05MzRhLTQwZjYtOTdjNy1mYTJkNzcxMzBkZDUucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.9GzaYS7sd8RPY5FlHca09J9ZQZ9D9zI69Ru-BsbkLDA"></img>
        <center>
          <table>
            <tr>
              <td><PokeCard sprite={this.state.sprite} /></td>
              <td>
                <center>
                  <h1>Gen 1 Pokemon Team Generator</h1>
                  <h2><i>Enter gen 1 Pokemon to create your team!</i></h2>
                  <input type="text" value={this.state.userInput} onChange={this.handleUserInput} style={{ width: 200, fontSize: 15, color: "red" }} />
                  <br />
                  <button type="button" style={{ width: 100, fontSize: 15, color: "blue" }} onClick={this.handleSubmit}>Submit</button>
                  <br /><br />
                  <h2>ENTERING: {this.state.userInput}</h2>
                  <button type="button" style={{ width: 130, fontSize: 15 }} onClick={this.handleRandom}>Random team! (all gen</button>
                  <h2>ENTERED: {this.state.entered} </h2>
                  <button type="button" style={{ width: 100, fontSize: 15 }} onClick={this.handleReset}>Reset Team</button>
                </center>
              </td>
              <td><PokeCard sprite={this.state.sprite} /></td>
            </tr>
          </table>

          <table style={{}}>
            <tr>
              <td>
                <h1 style={{ textAlign: "center" }}>{this.state.names[0]}</h1>
                <img src={this.state.teamList[0]} style={{ width: 200 }} />
              </td>
              <td>
                <h1 style={{ textAlign: "center" }}>{this.state.names[1]}</h1>
                <img src={this.state.teamList[1]} style={{ width: 200 }} />
              </td>
              <td>
                <h1 style={{ textAlign: "center" }}>{this.state.names[2]}</h1>
                <img src={this.state.teamList[2]} style={{ width: 200 }} />
              </td>
              <td>
                <h1 style={{ textAlign: "center" }}>{this.state.names[3]}</h1>
                <img src={this.state.teamList[3]} style={{ width: 200 }} />
              </td>
              <td>
                <h1 style={{ textAlign: "center" }}>{this.state.names[4]}</h1>
                <img src={this.state.teamList[4]} style={{ width: 200 }} />
              </td>
              <td>
                <h1 style={{ textAlign: "center" }}>{this.state.names[5]}</h1>
                <img src={this.state.teamList[5]} style={{ width: 200 }} />
              </td>
            </tr>
            <tr>
              <td style={{ width: 200 }}>
                <img src={this.state.typeBars[0]} style={{ width: 200 }} />
                <img src={this.state.typeBars[1]} style={{ width: 200 }} />
              </td>
              <td style={{ width: 200 }}>
                <img src={this.state.typeBars[2]} style={{ width: 200 }} />
                <img src={this.state.typeBars[3]} style={{ width: 200 }} />
              </td>
              <td style={{ width: 200 }}>
                <img src={this.state.typeBars[4]} style={{ width: 200 }} />
                <img src={this.state.typeBars[5]} style={{ width: 200 }} />
              </td>
              <td style={{ width: 200 }}>
                <img src={this.state.typeBars[6]} style={{ width: 200 }} />
                <img src={this.state.typeBars[7]} style={{ width: 200 }} />
              </td>
              <td style={{ width: 200 }}>
                <img src={this.state.typeBars[8]} style={{ width: 200 }} />
                <img src={this.state.typeBars[9]} style={{ width: 200 }} />
              </td>
              <td style={{ width: 200 }}>
                <img src={this.state.typeBars[10]} style={{ width: 200 }} />
                <img src={this.state.typeBars[11]} style={{ width: 200 }} />
              </td>
            </tr>
          </table>
        </center>
      </div>
    );
  }
}


export default App;