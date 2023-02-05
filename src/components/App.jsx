import { useState, useEffect } from 'react';
import { CirclesWithBar } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getImg } from './helpers/getApi';

import Modal from './helpers/components/Modal/Modal';
import ImgFullModal from './ImgFullModal/ImgFullModal';
import './styles.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import css from './app.module.scss';

const PAGE_ITEM = 12;

export const App = () => {
  const [searchPixabay, setSearchPixabay] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [showModals, setShowModals] = useState(false);
  const [imgModal, setImgModal] = useState(null);
  const [btn, setBtn] = useState(false);
  const [spiner, setSpiner] = useState(false);
  // const [errorMsg, setErrorMsg] = useState('');

  // console.log(prevState.page)
  useEffect(() => {
    if (!searchPixabay) {
      return;
    }

    const fetchImg = async () => {
      try {
        setSpiner(true);
        setBtn(false);
        let btnState = false;

        const data = await getImg(searchPixabay, page);
        const totalPage = Math.ceil(data.totalHits / PAGE_ITEM);
        console.log(page);

        if (data.totalHits && page === 1) {
          toast.success(`Search ${data.totalHits} image`);
        }
        if (!data.totalHits) {
          toast.error(`No results "${searchPixabay}" `);
        }
        console.log(data);
        if (page < totalPage) {
          btnState = true;
        }
        console.log(page);

        setImages(prevImages => [...prevImages, ...data.hits]);
        setBtn(btnState);
      } catch (error) {
        console.log(error.message)
        // setErrorMsg(error.message);
      } finally {
        setSpiner(false);
      }
    };

    fetchImg();
  }, [searchPixabay, page]);

  const searchQueryImages = search => {
    setSearchPixabay(search);
    setPage(1);
    setImages([]);
    setBtn(false);
    // setErrorMsg('')
  };

  const showImgModal = img => {
    setShowModals(true);
    setImgModal(img);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModals(false);
    setImgModal(null);
    document.body.style.overflow = '';
  };

  const fetchImg = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <Searchbar onSubmitForm={searchQueryImages} />
      <ImageGallery itemImg={images} onClickImg={showImgModal} />
      {showModals && (
        <Modal close={closeModal}>
          <ImgFullModal img={imgModal} />
        </Modal>
      )}
      {btn && <Button btnClick={fetchImg} />}
      <CirclesWithBar
        height="100"
        width="100"
        color="#4507ef"
        justic-
        wrapperStyle={{}}
        wrapperClass={css.loader}
        visible={spiner}
        outerCircleColor=""
        innerCircleColor=""
        barColor="blue"
        ariaLabel="circles-with-bar-loading"
      />
      <ToastContainer />
    </div>
  );
};
