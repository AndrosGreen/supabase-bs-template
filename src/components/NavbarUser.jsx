import { useState, useContext } from "react";
import { UserContext } from "../Layout";
import { Button, Collapse, Navbar, Nav, NavbarBrand } from "reactstrap";
import LoginDialog from "./LoginDialog";
import { supaClient } from "../supa-client";

const NavbarUser = () => {
  const { session } = useContext(UserContext);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Logout
  const handleLogOut = () => {
    supaClient.auth.signOut();
  };

  return (
    <div>
      <Navbar className="p-3 rounded-3 bg-body-tertiary">
        <NavbarBrand href="/">Supabase Template + BS</NavbarBrand>
        <div>
          {session?.user ? (
            <Button onClick={handleLogOut}>Logout</Button>
          ) : (
            <Button color="primary" onClick={handleOpen}>
              Login
            </Button>
          )}
        </div>
      </Navbar>
      <LoginDialog open={open} onClose={handleClose} />
    </div>
  );
};

export default NavbarUser;
