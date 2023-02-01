import { Component } from 'react';
import { CirclesWithBar } from 'react-loader-spinner';
import { getImg } from './helpers/getApi';
import Modal from './helpers/components/Modal/Modal';
import ImgFullModal from './ImgFullModal/ImgFullModal';
import './styles.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import css from "./app.module.scss"

const PAGE_ITEM = 12;
class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    searchPixabay: '',
    images: [],
    page: 1,
    showModals: false,
    imgModal: null,
    btn: false,
    spiner:false
  };

  searchQueryImages = ({ search }) => {
    this.setState({ searchPixabay: search });
  };

  changeState(img) {
    this.setState({ images: [...img] });
  }

  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchPixabay !== prevState.searchPixabay) {
      this.resetState()
      this.fetchImg();
    }
  }

  resetState() {
    this.setState(({ images,btn,page }) => ({
      images: [],
      btn: false,
      page: 0,
    }));
  }

  fetchImg = async () => {
    try {
      this.setState({ spiner: true, btn:false });
      const { searchPixabay, page } = this.state;
      let btnState = false;

      const data = await getImg(searchPixabay, page);
      const totalPage = data.totalHits / PAGE_ITEM;

      console.log(data);
      if (page < totalPage) {
        btnState = true;
      }
      this.setState(({ images }) => ({
        images: [...images, ...data.hits],
        btn: btnState,
        page: page + 1,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ spiner: false });
    }
  };

  showImgModal = img => {
    this.setState({
      showModals: true,
      imgModal: img,
    });
    document.body.style.overflow = 'hidden';
  };

  closeModal = () => {
    this.setState({
      showModals: false,
      imgModal: null,
    });
    document.body.style.overflow = '';
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
        {this.state.btn && <Button btnClick={this.fetchImg} />}
        <CirclesWithBar
  height="100"
  width="100"
  color="#4507ef"
  justic-
  wrapperStyle={{}}
  wrapperClass={css.loader}
  visible={this.state.spiner}
  outerCircleColor=""
  innerCircleColor=""
  barColor="blue"
  ariaLabel='circles-with-bar-loading'
/>
      </div>
    );
  }
}

export { App };
