import styled from "@emotion/styled";
import { Button } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Nav = styled("nav")`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  background-color: #001e3c;
  color: white;
`;

const Ul = styled("ul")`
  display: flex;
  list-style: none;
`;
const Li = styled("ul")`
  padding-left: 1rem;
  color: white;
`;

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  useEffect(() => {
    !localStorage.getItem("tokenId") && navigate("/login");
  }, []);

  return (
    <Nav>
      <h2>reqres.in</h2>
      <Ul>
        <Li>
          <Button
            onClick={logout}
            variant="contained"
            color="error"
            startIcon={<ExitToAppIcon />}
          >
            LogOut
          </Button>
        </Li>
      </Ul>
    </Nav>
  );
};

export default Navbar;
