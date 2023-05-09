import PropTypes from 'prop-types';
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import { ListStyled} from './ImageGallery.styled';
const ImageGallery = ({ images, openModal }) => {
  console.log(images)
  return (

    <ListStyled>{images.map((({ webformatURL, id, largeImageURL, tags }) => <ImageGalleryItem key={id} webformatURL={webformatURL}
      openModal={openModal} largeImageURL={largeImageURL} tags={tags} />))}
     </ListStyled>

   )
}
ImageGallery.propTypes = {
  images: PropTypes.array,
  openModal: PropTypes.func.isRequired
}
export default ImageGallery;