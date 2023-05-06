import PropTypes from 'prop-types';
import { ItemStyled, ImageStyled } from './ImageGalleryItem.styled';
const ImageGalleryItem = ({ webformatURL, openModal, tags, largeImageURL }) => {
  return (
    <ItemStyled onClick={() => openModal(largeImageURL, tags)}>
      <ImageStyled src={webformatURL} alt={tags} />
    </ItemStyled>
  );
};
ImageGalleryItem.propTypes = {
  openModal: PropTypes.func.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired
}
export default ImageGalleryItem;
