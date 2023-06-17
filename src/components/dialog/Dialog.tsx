import { useEffect, useRef, MouseEvent } from 'react';
import { DialogProps } from './Dialog.types';

export const Dialog = ({ isOpen, setOpen, ...props }: DialogProps) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (isOpen) {
      ref.current.showModal();
    } else {
      ref.current.close();
    }
  }, [isOpen]);

  const onClick = (e: MouseEvent<HTMLDialogElement>) => {
    const dialogDimensions = e.currentTarget.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      setOpen(false);
    }
  };

  return <dialog ref={ref} {...props} onClick={onClick} />;
};

export default Dialog;
