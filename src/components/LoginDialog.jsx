import { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Button,
  Label,
  Input,
  Form,
  FormGroup,
} from "reactstrap";
import SignUp from "./SignUp";
import { supaClient } from "../supa-client";

const LoginDialog = ({ open, onClose }) => {
  const [input, setInput] = useState({});
  const [isLogin, setIsLogin] = useState(true);

  const setLogin = () => {
    setIsLogin(true);
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    const { error } = await supaClient.auth.signInWithPassword({
      email: input.email,
      password: input.password,
    });
    onClose();
  };

  return (
    <div>
      <Modal isOpen={open} toggle={onClose}>
        <ModalHeader toggle={onClose}>
          {" "}
          {isLogin ? "Login" : "Create an Account"}{" "}
        </ModalHeader>
        <ModalBody>
          {isLogin ? (
            <div>
              <Form
                onSubmit={(e) => e.preventDefault()}
                className="bg-light rounded p-3"
              >
                <FormGroup>
                  <Label>Username</Label>
                  <Input name="email" onChange={(e) => handleInput(e)} />
                </FormGroup>
                <FormGroup>
                  <Label>Password</Label>
                  <Input
                    name="password"
                    type="password"
                    onChange={(e) => handleInput(e)}
                  />
                </FormGroup>
                <Button color="primary" onClick={handleLogin}>
                  Login
                </Button>
              </Form>
              <div className="border border-2 rounded p-3 mt-3">
                New?
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    setIsLogin(false);
                  }}
                  style={{ marginLeft: "0.5rem" }}
                >
                  Create an account
                </a>
              </div>
            </div>
          ) : (
            <SignUp createAccount={setLogin} onClose={onClose} />
          )}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default LoginDialog;
