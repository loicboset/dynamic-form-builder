import React from 'react';

const Background = ({ modalOpen, setModalOpen }) => {

  const styles = {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    background: 'rgba(0,0,0,0.3)',
  }

  return (
    <>
      {modalOpen && (
        <div style={styles} onClick={() => setModalOpen(false)}>
        </div>
      )}
    </>
  )
};

export default Background;
