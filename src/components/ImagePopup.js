import React from "react";
import PropTypes from "prop-types";

import buttonClosePopup from "../images/button-сlose.svg";

function ImagePopup({ card, isOpen, onClose, onKeydown }) {

  React.useEffect(() => {
    if (!isOpen) { return }
    document.addEventListener("keydown", onKeydown)
    return () => document.removeEventListener("keydown", onKeydown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  return (
    <div className={`popup popup_type_pic ${card ? "popup_opened" : ""}`} onClick={onClose}>
      <div className="popup__container-pic" onClick={(e) => e.stopPropagation()}>
        <img className="popup__pic" alt="Изображение отсутствует" src={card?.link} />
        <h2 className="popup__pic-title">{`${card?.name} || ${card?.owner.name} (${card?.owner.about})`}</h2>
        <button className="popup__button-close" type="button" aria-label="Закрыть картинку">
          <img className="popup__button-close-img" src={buttonClosePopup} alt="Закрыть окно" onClick={onClose} />
        </button>
      </div>
    </div>
  );
}

ImagePopup.propTypes = {
  card: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onKeydown: PropTypes.func.isRequired,
}

export default ImagePopup;
