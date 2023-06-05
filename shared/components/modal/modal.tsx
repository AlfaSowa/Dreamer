/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { ReactNode, useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { IBaseElemet } from "../interface";

export interface IModal extends IBaseElemet {
  children: ReactNode;
  open: boolean;
  onClose?: () => void;
}

export const Modal = ({ children, open, onClose }: IModal) => {
  const modalWrapperRef = useRef<HTMLDivElement>(null);
  const [isBrowser, setIsBrowser] = useState(false);

  const backDropHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalWrapperRef?.current === e.target && onClose) {
      onClose();
    }
  };

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = open ? (
    <div className="fixed z-[1300] inset-0 pt-48">
      <div
        className="fixed -z-[1] inset-0 bg-gray-900/75"
        aria-hidden="true"
        onClick={backDropHandler}
        ref={modalWrapperRef}
      />
      {children}
    </div>
  ) : null;

  return isBrowser ? createPortal(modalContent, document.body) : null;
};

Modal.defaultProps = {
  onClose: null,
};
