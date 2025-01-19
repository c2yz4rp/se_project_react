import React, { useState } from "react";
import "./ItemModal.css";
import modalClose from "../../images/close-wbtn.png";

function ItemModal({ activeModal, handleCloseClick, card, onClick }) {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsConfirmationOpen(true);
  };

  const handleConfirmDelete = () => {
    onClick(card._id);
    setIsConfirmationOpen(false);
    handleCloseClick();
  };

  const handleCancelDelete = () => {
    setIsConfirmationOpen(false);
  };

  return (
    <>
      {!isConfirmationOpen && (
        <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
          <div className="modal__content modal__content_type_image">
            <button
              onClick={handleCloseClick}
              type="button"
              className="modal__close"
            >
              <img src={modalClose} alt="Close button" />
            </button>
            <img src={card.imageUrl} alt={card.name} className="modal__image" />
            <div className="modal__footer">
              <h2 className="modal__caption">{card.name}</h2>
              <p className="modal__weather">Weather: {card.weather}</p>
              <button
                onClick={handleDeleteClick}
                type="button"
                className="modal__delete-btn"
                aria-label="Delete button"
              >
                Delete item
              </button>
            </div>
          </div>
        </div>
      )}

      {isConfirmationOpen && (
        <div className="modal modal_opened">
          <div className="modal__container modal__container_confirmation">
            <button
              onClick={handleCancelDelete}
              type="button"
              className="modal__close modal__close-confirmation"
              aria-label="Close button"
            ></button>
            <p className="modal__confirm-heading">
              Are you sure you want to delete this item? This action is
              irreversible.
            </p>
            <button
              type="text"
              onClick={handleConfirmDelete}
              className="modal__confirm-btn"
              aria-label="Delete button"
            >
              Yes, delete item
            </button>
            <button
              type="text"
              onClick={handleCancelDelete}
              className="modal__cancel-btn"
              aria-label="Cancel button"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ItemModal;
