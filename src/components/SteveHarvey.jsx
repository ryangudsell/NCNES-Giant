import React, { useState, useEffect } from 'react';

const PopupModal = ({ onClose }) => {
  const images = [
    'public/img/225-2257063_steve-harvey-transparent-steve-harvey-clip-art.png',
    'public/img/412-4127364_steve-harvey-face-png-clipart.png',
    'public/img/Steve-Harvey-PNG-File-KWU3XVV2-removebg-preview.png',
  ];

  const [randomImage, setRandomImage] = useState('');

  useEffect(() => {
    // Randomly select an image from the array
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);

    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose, images]);

  return (
    <div className="popup-modal">
      <img src={randomImage} alt="Steve Harvey" />
    </div>
  );
};

const App = () => {
  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSteveHarveyClick = () => {
    setModalVisible(true);
  };

  useEffect(() => {
    // Add a click event listener to elements with class "steve-harvey"
    const steveHarveyElements = document.querySelectorAll('.steve-harvey');
    steveHarveyElements.forEach(element => {
      element.addEventListener('click', handleSteveHarveyClick);
    });

    // Cleanup event listeners when component unmounts
    return () => {
      steveHarveyElements.forEach(element => {
        element.removeEventListener('click', handleSteveHarveyClick);
      });
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      {modalVisible && <PopupModal onClose={closeModal} />}
    </>
  );
};

export default App;
