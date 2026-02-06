import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

export default function LoginModal({ handleCloseClick, isOpen }) {
  return (
    <ModalWithForm
      title="Log in"
      buttonText="Log in"
      isOpen={isOpen}
      handleCloseClick={handleCloseClick}
    >
      <label htmlFor="Email" className="modal__label">
        Email{""}
        <input
          type="email"
          className="modal__input"
          id="email"
          placeholder="Email"
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
          placeholder="Password"
          required
          //onChange={passwordChanged}
          //value={password}
        />
      </label>
    </ModalWithForm>
  );
}
