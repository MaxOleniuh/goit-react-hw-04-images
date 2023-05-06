import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import Button from "./Button/Button";
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";
import { fetchImages } from '../services/pixabayApi';
class App extends Component {
   state = {
    images: [],
    page: 1, 
    query: "",
     isLoading: false,
     dataModal: {image: '', alt: ''},
    isModalOpen: false,
  };
  
  getSnapshotBeforeUpdate() {
    return document.body.clientHeight - 75.63;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevState.query !== this.state.query)
    if (
      (prevState.query !== this.state.query && this.state.query !== '') || 
      prevState.page !== this.state.page
    ) {
      this.getSearchedImages();
    }

    if (prevState.images.length !== this.state.images.length && this.state.page !== 1) {
      console.log("scroll");
      window.scrollTo({
        top: snapshot,
        behavior: "smooth",
      });
    }
  }

  getSearchedImages = async () => {
    this.setState({ isLoading: true});
    try {
      const data = await fetchImages(this.state.query, this.state.page);
      this.setState((prev) => ({ images: [...prev.images, ...data.hits] }));
      // this.setState({ images: data.hits });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

   setQuery = (query) => {
     this.setState({ query, page: 1, images: [] });
     
  };
    changePage = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };
   openModal = (image, alt) => {
     this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen, dataModal: {image, alt}}));
  };

  render() {
    const { images, isLoading, dataModal, isModalOpen } = this.state;
  console.log(this.state.query)
      return(
        <>  
          <Searchbar setQuery={this.setQuery} query={this.state.query}/>
          <ImageGallery images={images} openModal={this.openModal}/>
          {isLoading && <Loader />}
          {images.length >= 12 && <Button onClick={this.changePage}/>}
          {isModalOpen && <Modal modalData={dataModal} closeModal={this.openModal} />}
        </>
  );
  }

};

export default App;