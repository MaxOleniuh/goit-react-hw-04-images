import { useEffect, useState } from "react";
import Searchbar from "./Searchbar/Searchbar";
import Button from "./Button/Button";
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";
import { fetchImages } from '../services/pixabayApi';

export const App = () => {
  // const [state, setState] = useState({
  //   images: [],
  //   page: 1, 
  //   query: "",
  //    isLoading: false,
  //    dataModal: {image: '', alt: ''},
  //   isModalOpen: false,
  // });
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQueryValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [dataModal, setDataModal] = useState({image: '', alt: ''});
  const [isModalOpen, setIsModalOpen] = useState(false);

  // getSnapshotBeforeUpdate() {
  //   return document.body.clientHeight - 75.63;
  // }
  // componentDidUpdate(prevProps, prevState, snapshot) {
    // if (
    //   (prevState.query !== this.state.query && this.state.query !== '') || 
    //   prevState.page !== this.state.page
    // ) {
    //   this.getSearchedImages();
    // }

  //   if (prevState.images.length !== this.state.images.length && this.state.page !== 1) {
  //     console.log("scroll");
  //     window.scrollTo({
  //       top: snapshot,
  //       behavior: "smooth",
  //     });
  //   }
  // }

  const getSearchedImages = async () => {
    setIsLoading(true);
    try {
      const data = await fetchImages(query, page);
      setImages([...images, ...data.hits]);
    } catch (error) {
      alert('Error!', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
   query === '' ? setImages([]) : getSearchedImages();
  }, [query, page])

   const setQuery = (query) => {
     setQueryValue(query);
     setPage(1);
     setImages([]);
  };
   const changePage = () => {
    setPage(prevPage => prevPage + 1);
  };
   const openModal = (image, alt) => {
     setIsModalOpen(!isModalOpen);
     setDataModal({image, alt})
  };

      return(
        <>  
          <Searchbar setQuery={setQuery} query={query}/>
          <ImageGallery images={images} openModal={openModal}/>
          {isLoading && <Loader />}
          {images.length >= 12 && <Button onClick={changePage}/>}
          {isModalOpen && <Modal modalData={dataModal} closeModal={openModal} />}
        </>
  );
}

export default App;