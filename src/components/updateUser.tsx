import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, LinearProgress, TextField } from "@mui/material";
import { ErrorSwal, successSwal } from "../utilities/swal/swal";
import Navbar from "./navbar";
import UpdateIcon from "@mui/icons-material/Update";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useQuery } from "react-query";
import { getSingleUser } from "./api/api";
import { SingleData } from "./interfaces/interfaces";
import { useUpdateUser } from "../hooks/useUpdateUser";

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

const UpdateUser = () => {
  const navigate = useNavigate();
  const params = useParams();

  useQuery(
    "singleUser",
    () => {
      const routeId = parseInt(params.id!);
      return getSingleUser(routeId);
    },
    {
      refetchOnWindowFocus: false,
      onSuccess: (res) => {
        setUserData(res.data.data);
      },
    }
  );
  const [userData, setUserData] = useState<SingleData>({
    avatar: "",
    email: "",
    first_name: "",
    id: 0,
    last_name: "",
  });
  const { mutate, isLoading } = useUpdateUser({
    onSuccess: () => {
      const route = "/user-list";
      successSwal(route, navigate);
    },
    onError: () => {
      ErrorSwal("Please try again");
    },
  });

  const updateUser = async (event: React.FormEvent) => {
    event.preventDefault();
    mutate({
      id: userData.id,
      name: userData.first_name,
      job: userData.last_name,
    });
  };
  return (
    <Fragment>
      <Navbar />
      <Container>
        <Division>
          <p>Update user</p>
          <AuthForm>
            <TextField
              fullWidth
              style={{ marginRight: "30px" }}
              defaultValue={userData?.first_name}
              value={userData?.first_name}
              onChange={(e) => {
                setUserData((prev) => ({
                  ...prev,
                  first_name: e.target.value,
                }));
              }}
              id="standard-basic"
              label="name"
              variant="outlined"
            />
            <TextField
              fullWidth
              defaultValue={userData?.last_name}
              value={userData?.last_name}
              onChange={(e) => {
                setUserData((prev) => ({ ...prev, last_name: e.target.value }));
              }}
              id="standard-basic"
              label="job"
              variant="outlined"
            />
          </AuthForm>
          <section style={{ marginTop: "30px" }}>
            <Button
              onClick={updateUser}
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

export default UpdateUser;
