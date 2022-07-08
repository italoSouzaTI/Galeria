import React, { useState } from 'react'
import Galeria from './src/Components/Galeria'
import Foto1 from './src/assets/1.jpg'
import Foto2 from './src/assets/2.jpg'
import Foto3 from './src/assets/3.jpg'
import Foto4 from './src/assets/4.jpg'
import Foto5 from './src/assets/5.jpg'
import Foto6 from './src/assets/6.jpg'
import Foto7 from './src/assets/7.jpg'
export default function App () {
  const [photos, setPhotos] = useState([
    { key: 1, img: Foto1 },
    { key: 2, img: Foto2 },
    { key: 3, img: Foto3 },
    { key: 4, img: Foto4 },
    { key: 5, img: Foto5 },
    { key: 6, img: Foto6 },
    { key: 7, img: Foto7 }
  ])
  return (
    <>
      <Galeria
        photo={photos}
      />
    </>
  );
}

