import { IButtonProps } from "./types";
import { ButtonContainer } from "./style"

export  const Button = ({ title, onClick, disabled}: IButtonProps) => {
  return <ButtonContainer disabled={disabled} onClick={onClick}>{title}</ButtonContainer>;
};