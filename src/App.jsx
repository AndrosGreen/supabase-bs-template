import { useContext } from "react";
import { Container } from "reactstrap";
import { UserContext } from "./Layout";
import NavbarUser from "./components/NavbarUser";

function App() {
  const { session } = useContext(UserContext);

  return (
    <>
      <div className="p-2">
        <Container>
          <NavbarUser />
          <div className="mt-4">
            <h3>Hi There</h3>
            <div>{session?.user ? "user logged in" : "user is logged out"}</div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
