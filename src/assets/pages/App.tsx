import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import Input from "../components/input"
import { Button } from "../components/button/Button"
import { defaultValues, IFormLogin } from "./types"

import {Container, Title} from "./styles"


const schema = yup.object({
  Email: yup.string().email('Email inválido').required('Campo obrigatório'),
  Password: yup.string().min(6,'No minimo 6 caracteres').required(),
}).required();


export function App() {
  const {control, formState:{errors, isValid}} = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode:'onBlur',
    defaultValues,
    reValidateMode: "onChange"
  })

  console.log(isValid)

  return (
    <>
      <Container>
        <Title>LOGIN</Title>
        <Input name="Email"
          placeholder="Email"
          control={control}
          errorMessage={errors.Email?.message}
        />

        <Input name ="Password"
          placeholder="Password"
          control={control}
          errorMessage={errors.Password?.message}
          type="password"
          />
        <Button title="Entrar" disabled />
      </Container>
    </>
  )
}

