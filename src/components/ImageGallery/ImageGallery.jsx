import style from './ImageGallery.module.scss';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ onClickImg, itemImg = [] }) => {
  return (
    <ul className={style.ImageGallery}>
      {itemImg.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={largeImageURL}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          onClickImg={onClickImg}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
