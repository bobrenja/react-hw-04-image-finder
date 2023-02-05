import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ close, children }) => {
  const closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    return () => document.removeEventListener('keydown', closeModal);
  });

  return createPortal(
    <div className={style.overlay} onClick={closeModal}>
      <div className={style.modal}>
        <span className={style.close} onClick={close}>
          X
        </span>
        {children}
      </div>
    </div>,
    modalRoot
  );
};
export default Modal;
