import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

export default function AddItemModal({
  handleCloseClick,
  isOpen,
  onAddItem,
  onAddItemModalSubmit,
}) {
  const [name, setName] = useState("");
  //console.log(name);
  const nameChanged = (e) => {
    setName(e.target.value);
  };

  const [imageUrl, setImageUrl] = useState("");
  //console.log(imageUrl);
  const imageUrlChanged = (e) => {
    setImageUrl(e.target.value);
  };

  const [weather, setWeather] = useState("");
  //console.log(weather);
  const weatherChanged = (e) => {
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather }, () => {
      setName("");
      setImageUrl("");
      setWeather("");
    });
  };

  useEffect(() => {
    if (isOpen) {
      setName("");
      setImageUrl("");
      setWeather("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      isOpen={isOpen}
      handleCloseClick={handleCloseClick}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{""}
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          required
          minLength="1"
          maxLength="30"
          onChange={nameChanged}
          value={name}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image{""}
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          placeholder="Image URL"
          required
          onChange={imageUrlChanged}
          value={imageUrl}
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            id="hot"
            name="radio"
            className="modal__radio-input"
            value={"hot"}
            onChange={weatherChanged}
            checked={weather === "hot"}
          />
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            id="warm"
            name="radio"
            className="modal__radio-input"
            value={"warm"}
            onChange={weatherChanged}
            checked={weather === "warm"}
          />
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            id="cold"
            name="radio"
            className="modal__radio-input"
            value={"cold"}
            onChange={weatherChanged}
            checked={weather === "cold"}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}
