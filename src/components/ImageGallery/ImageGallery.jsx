import PropTypes from 'prop-types';
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import { ListStyled} from './ImageGallery.styled';
const ImageGallery = ({images, openModal}) => {
  return (

    <ListStyled>{images.map((({ webformatURL, id, largeImageURL, tags }) => <ImageGalleryItem key={id} webformatURL={webformatURL}
      openModal={openModal} largeImageURL={largeImageURL} tags={tags} />))}
     </ListStyled>

   )
}
ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired
}
export default ImageGallery;