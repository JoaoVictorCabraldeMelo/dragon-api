import { useAuth } from "../../context/useAuth";
import {
  ContainerLogin,
  ContainerImg,
  ContainerForm,
  FormWrapper,
} from "../../components/Layout/Login";
import Input from "../../components/Input/Input";
import { SignInButton } from "../../components/Buttons/Buttons";
import { Error } from "../../components/Error/Error";
import { TitleLogin } from "../../components/Titles/titles";
import { useState } from "react";
import Img from "../../assets/Login.jpg";

const Login = () => {
  const { handleLogin, error } = useAuth();

  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <ContainerLogin>
      <ContainerImg src={Img} />
      <ContainerForm>
        <TitleLogin>Login</TitleLogin>
        <FormWrapper>
          <Input
            label="Username"
            name="name"
            type="text"
            onChange={onChange}
            required
          />
          <Input
            label="Password"
            name="password"
            type="password"
            onChange={onChange}
            required
          />
        </FormWrapper>
        {error ? <Error>{error.message}</Error> : null}
        <SignInButton
          onClick={() => handleLogin(user.name, user.password)}
          margin="20px 0px 0px 0px"
        >
          SignIn
        </SignInButton>
      </ContainerForm>
    </ContainerLogin>
  );
};

export default Login;
