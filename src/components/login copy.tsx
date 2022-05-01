import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import {
  Button,
  InputAdornment,
  LinearProgress,
  TextField,
} from "@mui/material";
import { useSubmit } from "../hooks/useSubmit";
import { useNavigate } from "react-router-dom";
import { ErrorSwal } from "../utilities/swal/swal";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";

const Division = styled.section`
  height: 100vh;
  background-color: #001e3c;
  padding-top: 200px;
`;

const AuthForm = styled.section`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 70px auto;
`;

const FormWrapper = styled.section`
  display: flex;
  margin: auto;
  width: 450px;
  box-shadow: 6px 11px 13px #888888;
  background-color: white;
  border-radius: 12px;
`;

const Login = () => {
  const navigate = useNavigate();

  const { mutate, isLoading } = useSubmit({
    onSuccess: (data) => {
      const tokenId = data.token;
      localStorage.setItem("tokenId", tokenId);
      localStorage.getItem("tokenId")
        ? navigate("/user-list")
        : ErrorSwal("Please Login again");
    },
    onError: (_data) => {
      ErrorSwal("Wrong Email and Password Combination");
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

  useEffect(() => {
    localStorage.getItem("tokenId") && navigate("/user-list");
  }, []);

  return (
    <Division>
      <FormWrapper>
        <AuthForm>
          <TextField
            value={email}
            onChange={(e) =>
              setCredentials({ email: e.target.value, password })
            }
            id="standard-basic"
            label="Email"
            variant="outlined"
            style={{ marginBottom: "35px" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
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
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />
          <p style={{ marginBottom: "160px" }}>Forgot password?</p>
          <Button variant="contained" onClick={login}>
            Login
          </Button>
        </AuthForm>
      </FormWrapper>
      {isLoading && <LinearProgress />}
    </Division>
  );
};

export default Login;
