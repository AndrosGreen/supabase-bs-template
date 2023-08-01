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

const LoginDialog = ({ open, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  const setLogin = () => {
    setIsLogin(true);
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
                  <Input />
                </FormGroup>
                <FormGroup>
                  <Label>Password</Label>
                  <Input type="password" />
                </FormGroup>
                <Button color="primary">Login</Button>
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
            <SignUp createAccount={setLogin} />
          )}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default LoginDialog;
