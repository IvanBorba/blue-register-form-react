import {
  MainContainer,
  FormContainer,
  StyledInput,
  StyledButton,
} from "../../styles";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const registerSchema = yup.object().shape({
  name: yup.string().required("Campo de nome obrigatório"),

  email: yup
    .string()
    .email("Formato de email inválido")
    .required("Campo de email obrigatório"),

  password: yup.string().required("Campo de senha obrigatório"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Senhas não correspondem")
    .required("Campo de confirmação de senha obrigatório"),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const handleCreateUser = (data) => {
    delete data.confirmPassword;

    axios
      .post("http://localhost:3333/users", data)
      .then((res) => console.log(res));
  };

  return (
    <MainContainer>
      <FormContainer onSubmit={handleSubmit(handleCreateUser)}>
        <StyledInput placeholder="Name" {...register("name")} />
        <StyledInput placeholder="E-mail" {...register("email")} />
        <StyledInput
          placeholder="Password"
          type="password"
          {...register("password")}
        />
        <StyledInput
          placeholder="Confirm Password"
          type="password"
          {...register("confirmPassword")}
        />
        <p style={{ fontSize: "small", color: "red" }}>
          {errors.name?.message ||
            errors.email?.message ||
            errors.password?.message ||
            errors.confirmPassword?.message}
        </p>
        <StyledButton type="submit">Enviar</StyledButton>
      </FormContainer>
    </MainContainer>
  );
};

export default Register;
