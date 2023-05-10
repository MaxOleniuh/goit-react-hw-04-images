import PropTypes from 'prop-types';
import { createPortal } from "react-dom";
import {OverlayStyled, ModalStyled} from './Modal.styled'
import { useEffect } from 'react';
const modalRoot = document.querySelector("#modal-root");
export const Modal = ({closeModal, modalData}) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  const handleCloseByEscape = (e) => {
    if (e.code === "Escape") closeModal();
  };
  useEffect(() => {
    window.addEventListener('keydown', handleCloseByEscape)
    return () => {
      window.removeEventListener('keydown', handleCloseByEscape)
    }
  }, [])

    const { image, alt } = modalData;
    return createPortal(
      <OverlayStyled onClick={handleBackdropClick}>
      <ModalStyled>
            <img
              src={image}
              alt={alt}
          />
        </ModalStyled>
      </OverlayStyled>,
      modalRoot
    );
  }
Modal.propTypes = {
  modalData: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
}
export default Modal;
