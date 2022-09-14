import { useContext, useState } from "react";
import UserContext from "../../contexts/userContext.js";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../../shared/Input";
import Form from "../../shared/Form";
import Button from "../../shared/Button";

export default function LogIn() {
  const navigate = useNavigate();
  //const [token, setToken] = useContext(UserContext);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  function handleForm(event) {
    event.preventDefault();
  }
  function sendForm(event) {
    event.preventDefault();

    /*const body = { email, password };
    const promise = axios.post(
      "backend link",
      body
    );
    promise.then((res) => {
        navigate("/home")
    });
    promise.catch((error) => console.log(error.response));*/
    navigate("/search");
  }
  return (
    <>
      <Form onSubmit={handleForm}>
        <Input
          type="text"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={sendForm}>
          <p>Entrar</p>
        </Button>
        <Link to="/sign-up" >
          <p>Cadastre-se</p>
        </Link>
      </Form>
    </>
  );
}
