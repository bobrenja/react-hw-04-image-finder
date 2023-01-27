import style from './ImageGallery.module.scss';

const ImageGallery = ({ images }) => {
  console.log(images);
  return (
    <ul class={style.ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <li key={id} class={style.ImageGalleryItem}>
          <img className={style.ImageGalleryItemImage} src={webformatURL} alt={tags} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
