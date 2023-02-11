import "./ConfirmationPopUp.scss";

const ConfirmationPopUp = ({
  message,
  confirmationFunction,
  cancelFunction,
}) => {
  return (
    <div className="confirmation-pop-up">
      <div className="confirmation-pop-up__container">
        <p className="confirmation-pop-up__message">{message}</p>
        <div className="confirmation-pop-up__container--btn">
          <button
            onClick={confirmationFunction}
            className="confirmation-pop-up__confirm"
          >
            Confirm
          </button>
          <button
            onClick={cancelFunction}
            className="confirmation-pop-up__decline"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopUp;
