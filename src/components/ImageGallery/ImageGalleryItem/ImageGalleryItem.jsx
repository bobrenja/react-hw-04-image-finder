import style from './image-gallery-item.module.scss';

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onClickImg,
}) => (
  <li className={style.ImageGalleryItem}>
    <img
      className={style.ImageGalleryItemImage}
      src={webformatURL}
      alt={tags}
      onClick={() => onClickImg(largeImageURL)}
    />
  </li>
);

export default ImageGalleryItem;
