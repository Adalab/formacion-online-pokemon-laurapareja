import React from 'react';
import Header from './Header';
import PokeList from './PokeList';
import Footer from './Footer';
import getInfoPokemonsAPI from './getInfoPokemonsAPI';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemones: [],
      query: ''
    }
    this.getFilterName = this.getFilterName.bind(this);
  }
  componentDidMount() {
    getInfoPokemonsAPI()
      .then((promises) => Promise.all(promises))
      .then((listaPokemones) => {
        this.setState({ pokemones: listaPokemones })
      })
  }

  getFilterName(event) {
    const filter = event.currentTarget.value.toLowerCase();
    return this.setState({
      query: filter
    })
  }

  render() {
    if (this.state === null) {
      return <div>Loading</div>
    }
    return (
      <div className="page">
        <Header getFilterName={this.getFilterName} />
        <PokeList pokemones={this.state.pokemones} query={this.state.query} />
        <Footer />
      </div >
    );
  }
}

export default App;
