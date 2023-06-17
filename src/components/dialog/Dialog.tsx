import { ButtonProps } from './Dialog.types';

export const Dialog: React.FC<ButtonProps> = (props) => {
  return (
    <button type="button" {...props}>
      Debug text 2
    </button>
  );
};

export default Dialog;
