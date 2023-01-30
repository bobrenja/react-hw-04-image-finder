import style from './ImageGallery.module.scss';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ itemImg }) => {
  console.log(itemImg);
  //  const {id, webformatURL, largeImageURL, tags} = itemImg

  return (
    <ul class={style.ImageGallery}>

      {itemImg.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
