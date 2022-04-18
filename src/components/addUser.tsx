import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useAddUser } from "../hooks/useAddUser";
import { Button, CircularProgress, Container, TextField } from "@mui/material";
import { ErrorSwal, successSwal } from "../utilities/swal/swal";
import Navbar from "./navbar";

const AuthForm = styled.section`
  display: flex;
  align-item: center;
  width: 50%;
  margin: 0 auto;
`;

const AddUserPage = () => {
  const navigate = useNavigate();

  const { mutate, isLoading } = useAddUser({
    onSuccess: () => {
      const route = "/user-list";
      successSwal(route, navigate);
    },
    onError: () => {
      ErrorSwal();
    },
  });

  const [{ name, job }, setUserData] = useState({
    name: "",
    job: "",
  });

  const addUser = async (event: React.FormEvent) => {
    event.preventDefault();
    mutate({ name, job });
    // isLoading
  };
  return (
    <Fragment>
      <Navbar />
      <Container>
        <AuthForm>
          {isLoading && <CircularProgress size={24} />}
          <TextField
            value={name}
            onChange={(e) => setUserData({ name: e.target.value, job })}
            id="standard-basic"
            label="name"
            variant="standard"
          />
          <TextField
            value={job}
            onChange={(e) => setUserData({ name, job: e.target.value })}
            id="standard-basic"
            label="job"
            variant="standard"
          />
          <Button onClick={addUser}>Submit</Button>
        </AuthForm>
      </Container>
    </Fragment>
  );
};

export default AddUserPage;
