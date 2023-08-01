import { useState } from "react";
import { Button, Container } from "reactstrap";
import LoginDialog from "./components/LoginDialog";

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="p-4">
        <Container>
          <h3>Hi There</h3>
          <Button color="primary" onClick={handleOpen}>
            Login
          </Button>
        </Container>
        <LoginDialog open={open} onClose={handleClose} />
      </div>
    </>
  );
}

export default App;
