import { Component } from 'react';
import axios from 'axios';
// import * as dotenv from 'dotenv'

import './styles.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

const {REACT_APP_API_KEY} = process.env
class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    searchPixabay: '',
    images: [],
  };

  searchQueryImages = ({ search }) => {
    console.log('пошук ', search);
    this.setState({ searchPixabay: search });
  };
  // updateSt(img) {

  //     console.log(img);
  //     // this.setState({images:img})

  // }

  getImg() {
   
    const PAGE = 12;
    const URL = 'https://pixabay.com/api/';
    const search = this.state.searchPixabay;
    console.log('LOG', this.state);
    axios
      .get(URL, {
        params: {
          key: REACT_APP_API_KEY,
          page: 1,
          q: search,
          image_type: 'photo',
          per_page: PAGE,
        },
      })
      .then(({ data }) => {
        this.changeState(data.hits);
        console.log('end');
      });
    // .catch(()= (error)=> {
    //   console.log(error);
    // })
    // .then(function () {
    //   // выполняется всегда
    // });
  }

  changeState(img) {
    this.setState({ images: [...img] });
  }

  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {
    console.log('prevState', prevState);
    if (this.state.searchPixabay !== prevState.searchPixabay) {
      this.getImg();
    }
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.searchQueryImages} />
        <ImageGallery images={this.state.images} />
      </div>
    );
  }
}

export { App };