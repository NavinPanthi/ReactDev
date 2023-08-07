// App.js

// MainComponent.js
import React, { useState } from 'react';
import Modal from 'react-modal';




function NApp() {
  return (
    <div className="App">
      <MainComponent />
    </div>
  );
}

export default NApp;


const MainComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Main Component</h1>
      <button onClick={handleOpenModal}>Open Pop-up</button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Example Modal"
        className="modal" // Add custom class for modal styling
        overlayClassName="overlay" // Add custom class for overlay styling
      >
        <ModalContent handleClose={handleCloseModal} />
      </Modal>
    </div>
  );
};


const ModalContent = ({ handleClose }) => {
  return (
    <div className="modal-content">
      <h2>Pop-up Content</h2>
      <p>This is the content inside the pop-up window.</p>
      <button onClick={handleClose}>Close</button>
    </div>
  );
};


