import { Button, TextField } from "@mui/material";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useSubmit } from "../hooks/useSubmit";
import { useNavigate } from "react-router-dom";
import { ErrorSwal } from "../utilities/swal/swal";

const AuthForm = styled.section`
  display: flex;
  align-item: center;
  flex-direction: column;
  width: 70%;
  margin: 70px auto;
`;

const FormWrapper = styled.section`
  display: flex;
  margin: auto;
  width: 450px;
  box-shadow: 5px 10px 8px #888888;
  background-color: white;
  border-radius: 12px;
`;

const LoginPage = () => {
  const navigate = useNavigate();
  
  const { mutate } = useSubmit({
    onSuccess: (variables: any) => {
      const tokenId = variables.token; 
      localStorage.setItem("tokenId", tokenId);
      localStorage.getItem("tokenId") ? navigate("/user-list") : ErrorSwal();
    },
  });

  const [{ email, password }, setCredentials] = useState({
    email: "",
    password: "",
  });

  const login = async (event: React.FormEvent) => {
    event.preventDefault();
    mutate({ email, password });
  };

  useEffect(()=> {
    localStorage.getItem("tokenId") && navigate("/user-list");
  },[])
  
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#001E3C",
        paddingTop: "200px",
      }}
    >
      <FormWrapper>
        <AuthForm>
          <TextField
            value={email}
            onChange={(e) =>
              setCredentials({ email: e.target.value, password })
            }
            id="standard-basic"
            label="Username"
            variant="outlined"
            style={{ marginBottom: "35px" }}
          />
          <TextField
            value={password}
            onChange={(e) =>
              setCredentials({ email, password: e.target.value })
            }
            id="standard-basic"
            label="Password"
            variant="outlined"
            type="password"
            style={{ marginBottom: "20px" }}
          />
          <p style={{ marginBottom: "160px" }}>Forgot password?</p>
          <Button variant="contained" onClick={login}>
            Login
          </Button>
        </AuthForm>
      </FormWrapper>
    </div>
  );
};

export default LoginPage;
