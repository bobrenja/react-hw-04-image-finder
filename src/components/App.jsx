import { Component } from 'react';
// import * as dotenv from 'dotenv'

import { getImg } from './helpers/getApi';
import Modal from './helpers/components/Modal/Modal';
import ImgFullModal from './ImgFullModal/ImgFullModal';
import './styles.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    searchPixabay: '',
    imgages: [],
    page: 1,
    showModals: false,
    imgModal: null,
  };

  searchQueryImages = ({ search }) => {
    this.setState({ searchPixabay: search });
  };

  changeState(img) {
    this.setState({ images: [...img] });
  }

  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {
    // console.log('prevState', prevState);
    // console.log('this_state', this.state);

    if (this.state.searchPixabay !== prevState.searchPixabay) {
      this.fetchImg();
    }
  }

  async fetchImg() {
    try {
      const { searchPixabay, page } = this.state;
      const data = await getImg(searchPixabay, page);
      this.setState(({ imgages }) => ({
        images: [...imgages, ...data.hits],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  showImgModal = img => {
    this.setState({
      showModals: true,
      imgModal: img,
    });
  };

  closeModal = () => {
    this.setState({
      showModals: false,
      imgModal: null,
    });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.searchQueryImages} />
        <ImageGallery
          itemImg={this.state.images}
          onClickImg={this.showImgModal}
        />
        {this.state.showModals && (
          <Modal close={this.closeModal}>
            <ImgFullModal img={this.state.imgModal} />
          </Modal>
        )}
      </div>
    );
  }
}

export { App };
