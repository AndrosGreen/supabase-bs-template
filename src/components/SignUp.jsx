import { useState } from "react";
import { Label, Input, Form, FormGroup, Button } from "reactstrap";
import { supaClient } from "../supa-client";

const SignUp = ({ createAccount, onClose }) => {
  const [input, setInput] = useState(null);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleCreate = async () => {
    const { error } = await supaClient.auth.signUp({
      email: input.email,
      password: input.password,
    });
    onClose();
  };

  return (
    <div>
      <Form>
        <FormGroup>
          <Label>Email</Label>
          <Input name="email" onChange={(e) => handleInput(e)} />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            name="password"
            onChange={(e) => handleInput(e)}
            type="password"
          />
        </FormGroup>
        <Button onClick={handleCreate}>Create Account</Button>
      </Form>
      <div className="mt-3">
        Already have an account?
        <Button
          className="ms-2"
          size="sm"
          color="primary"
          outline
          onClick={createAccount}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
