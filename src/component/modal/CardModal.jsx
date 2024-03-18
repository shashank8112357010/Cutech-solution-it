import React, { useEffect, useRef } from 'react';

export const CardModal = ({ open, handleClose, data }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    // Disable scrolling on the body when the modal is open
    if (open) {
      document.body.style.overflow = 'hidden';
      // Add event listener to detect clicks outside of the modal
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      // Restore scrolling and remove event listener when the modal is closed
      document.body.style.overflow = 'auto';
      document.removeEventListener('mousedown', handleOutsideClick);
    }


    return () => {
      // Clean up
      document.body.style.overflow = 'auto';
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [open]);

  const handleOutsideClick = (event) => {
    // Close the modal if the click occurs outside of the modal content
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleClose();
    }
  };

  const renderTextWithBold = (text) => {
    return text.split('<strong>').map((part, index) => {
        if (index === 0) {
            return part;
        }
        const [boldText, rest] = part.split('</strong>');
        return (
            <React.Fragment key={index}>
                <strong>{boldText}</strong>
                {rest}
            </React.Fragment>
        );
    });
};

  
  return (
    <>
      {open && (
        <>
          <div className="fixed top-0 left-0 bottom-0 right-0 z-40 bg-black opacity-50 backdrop-blur-md"></div>
          <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50">
            <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md animate-scale-in">
              <span className="text-lg font-semibold text-center text-darkYellow">{data?.heading}</span>
              <p className="text-sm text-center text-gray-700 mt-2">{renderTextWithBold(data.para)}</p>
              <div className="flex justify-center mt-4">
                <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300" onClick={handleClose}>Cancel</button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CardModal;
