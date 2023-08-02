import './css/App.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import SearchImage from './api';

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const images = await SearchImage(term)

    setImages(images)
  }
  return (
    <div className="App">
      <SearchBar onSubmit = {handleSubmit} />
      <ImageList images={images}/>
    </div>
  );
}

export default App;
