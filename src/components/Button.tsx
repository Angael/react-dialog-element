import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button type="button" {...props}>
      Debug text
    </button>
  );
};

export default Button;
