import Input from "../../shared/Input";
import Form from "../../shared/Form";
import Button from "../../shared/Button";
import axios from "axios";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });
  function sendForm() {
    const body = {
      ...newUser,
    };
    const promise = axios.post(
      "http://localhost:5000/signup",
      body
    );
    promise.then((res) => {
      navigate("/");
      
    });
    promise.catch((error) => {
      console.log(error);
      alert("não foi possivel cadastrar");
    });
    
  }
  function handleForm(event) {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
    event.preventDefault();
  }
  return (
    <>
      <Form onSubmit={handleForm}>
        <Input
          name="email"
          type="text"
          placeholder="E-mail"
          value={newUser.email}
          onChange={handleForm}
        ></Input>
        <Input
          name="password"
          type="password"
          placeholder="Senha"
          value={newUser.password}
          onChange={handleForm}
        />
        <Button type="submit" onClick={sendForm}>
          <p>Cadastrar</p> 
        </Button>
        <Link to="/">
          <p>Já possuí uma conta? Entre</p>
        </Link>
      </Form>
    </>
  );
}
