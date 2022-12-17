import { InputContainer, ErrorMessage } from "./styles";
import { IInputProps } from "././types";
import { Controller } from "react-hook-form";


const Input = ({name, control, placeholder, errorMessage, ...rest }: IInputProps) => {
  return (
    <>
      <InputContainer>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value, ref } }) =>
            <input
              placeholder={placeholder}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              ref={ref}
              {...rest}
            />}
          name = {name}
          />
      </InputContainer>

      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </>
  );
};

export default Input;