import { Component } from 'react';
// import axios from 'axios';
import './styles.css';
import Searchbar from './Searchbar/Searchbar';

class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    searchPixabay: '',
  };

  componentDidMount() {}
  componentDidUpdate() {}

  searchImages = ({ search }) => {
    console.log('пошук ', search);
    this.setState({ searchPixabay: search });
  };

  render() {
    return <Searchbar onSubmit={this.searchImages} />;
  }
}

export { App };
