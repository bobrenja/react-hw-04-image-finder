import style from './image-gallery-item.module.scss';

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => (
  <li class={style.ImageGalleryItem}>
    <img
      className={style.ImageGalleryItemImage}
      src={webformatURL}
      alt={tags}
    />
  </li>
);

export default ImageGalleryItem;
