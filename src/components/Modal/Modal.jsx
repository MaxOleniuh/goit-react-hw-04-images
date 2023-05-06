import PropTypes from 'prop-types';
import { Component } from "react";
import { createPortal } from "react-dom";
import {OverlayStyled, ModalStyled} from './Modal.styled'
const modalRoot = document.querySelector("#modal-root");
class Modal extends Component {

  componentDidMount() {
    window.addEventListener("keydown", this.handleCloseByEscape);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleCloseByEscape);
  }

  handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) this.props.closeModal();
  };

  handleCloseByEscape = (e) => {
    if (e.code === "Escape") this.props.closeModal();
  };


  render() {
    const { image, alt } = this.props.modalData;
    return createPortal(
      <OverlayStyled onClick={this.handleBackdropClick}>
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
}
Modal.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  modalData: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
}
export default Modal;
