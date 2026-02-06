import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function RegisterModal({ handleCloseClick, isOpen }) {
  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Next"
      isOpen={isOpen}
      handleCloseClick={handleCloseClick}
    >
      <label htmlFor="Email" className="modal__label">
        Email{""}
        <input
          type="email"
          className="modal__input"
          id="email"
          placeholder="Email*"
          required
          //onChange={email}
          //value={email}
        />
      </label>
      <label htmlFor="Password" className="modal__label">
        Password{""}
        <input
          type="password"
          className="modal__input"
          id="password"
          placeholder="Password*"
          required
          //onChange={passwordChanged}
          //value={password}
        />
      </label>
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
          // onChange={nameChanged}
          // value={name}
        />
      </label>
      <label htmlFor="avatarUrl" className="modal__label">
        Image{""}
        <input
          type="url"
          className="modal__input"
          id="avatarUrl"
          placeholder="Avatar URL"
          required
          //onChange={avatarUrlChanged}
          // value={avatarUrl}
        />
      </label>
    </ModalWithForm>
  );
}
