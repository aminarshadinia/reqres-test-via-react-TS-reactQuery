import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";
import { useNavigate, useParams } from "react-router-dom";
import { useAddUser } from "../hooks/useAddUser";
import { Button, Container, LinearProgress, TextField } from "@mui/material";
import { ErrorSwal, successSwal } from "../utilities/swal/swal";
import Navbar from "./navbar";
import UpdateIcon from "@mui/icons-material/Update";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useQuery } from "react-query";
import { getSingleUser } from "./api/api";

const Division = styled.section`
  border: 1px solid #c4c4c4c4;
  border-radius: 10px;
  padding: 5%;
  margin: 10%;
  box-shadow: 5px 10px 8px #888888;
`;
const AuthForm = styled.section`
  display: flex;
  align-item: center;
  margin: auto;
`;

const UpdateUserPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const queryInfo = useQuery(
    "singleUser",
    () => {
      const routeId = parseInt(params.id!);
      return getSingleUser(routeId);
    },
    {
      onSuccess: (res) => {
        // setUserList(res.data.data);
      },
    }
  );

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
        <Division>
          <p>Add new user</p>
          <AuthForm>
            <TextField
              fullWidth
              style={{ marginRight: "30px" }}
              value={name}
              onChange={(e) => setUserData({ name: e.target.value, job })}
              id="standard-basic"
              label="name"
              variant="outlined"
            />
            <TextField
              fullWidth
              value={job}
              onChange={(e) => setUserData({ name, job: e.target.value })}
              id="standard-basic"
              label="job"
              variant="outlined"
            />
          </AuthForm>
          <section style={{ marginTop: "30px" }}>
            <Button
              onClick={addUser}
              style={{ marginRight: "20px" }}
              variant="contained"
              color="success"
              startIcon={<UpdateIcon />}
            >
              Update
            </Button>
            <Button
              onClick={() => navigate(-1)}
              variant="contained"
              color="warning"
              startIcon={<ArrowBackIcon />}
            >
              Return
            </Button>
          </section>

          {isLoading && <LinearProgress />}
        </Division>
      </Container>
    </Fragment>
  );
};

export default UpdateUserPage;
