import React from 'react';
import PokeList from './PokeList';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemones: [],
      query: ''
    }
    this.getInfoPokemonsAPI = this.getInfoPokemonsAPI.bind(this);
    this.getFilterName = this.getFilterName.bind(this);
  }
  componentDidMount() {
    this.getInfoPokemonsAPI();
  }
  getInfoPokemonsAPI() {
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=25')
      .then(response => response.json())
      .then(pokemonsData => {
        for (let pokemon of pokemonsData.results) {
          fetch(pokemon.url)
            .then(response => response.json())
            .then(pokeInfo => {
              const types = [];
              for (let pokemonItem of pokeInfo.types) {
                types.push(pokemonItem.type.name);
              }
              const pokemonInfo = {
                name: pokemon.name,
                picture: pokeInfo.sprites.front_default,
                types: types
              };
              this.setState({ pokemones: [...this.state.pokemones, pokemonInfo] });
            });
        }
      })
  }
  getFilterName(event) {
    const filter = event.currentTarget.value;
    return this.setState({
      query: filter
    })
  }
  render() {
    if (this.state === null) {
      return <div>Loading</div>
    }
    return (
      <div>
        <div className="body">
          <img src="./images/pokedex.png" alt="logo Pokedex" className="logoPokedex"></img>
          <img src="./images/pikachubackground.png" alt="logo Pokedex" className="logoPikachu"></img>
          <label htmlFor="filterName"></label>
          <div className="filterName">
            <input placeholder="Search for Pokemon" type="text" id="filterName" className="filterName" onChange={this.getFilterName}></input><i class="fas fa-search"></i>
          </div>

          <PokeList pokemones={this.state.pokemones} query={this.state.query} />
        </div>
        <footer className="footer">
          <p className="copy">Licencia || &copy; 2019</p>
          <img src="./images/laurapareja.png" className="logoLauraPareja"></img>
          <div>
            <div>
              <i class="fab fa-linkedin"></i>
              <a className="footer_link" target="_blank" rel="noopener noreferrer"
                href="https://www.linkedin.com/in/laurapareja/">/in/laurapareja</a>
            </div>

            <div>
              <i class="fab fa-github"></i>
              <a className="footer_link" target="_blank" rel="noopener noreferrer"
                href="https://github.com/laurapareja">/laurapareja</a>
            </div>
            <div>
              <i class="fab fa-twitter-square"></i>
              <a className="footer_link" target="_blank" rel="noopener noreferrer"
                href="https://twitter.com/_laurapareja_">@_laurapareja_</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
