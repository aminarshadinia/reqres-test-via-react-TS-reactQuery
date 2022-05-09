import React, { Fragment, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Container, LinearProgress, TextField } from '@mui/material';
import { ErrorSwal, successSwal } from '../utilities/swal/swal';
import UpdateIcon from '@mui/icons-material/Update';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IUpdateUser, SingleData } from './interfaces/interfaces';
import { useUpdateUser } from '../hooks/useUpdateUser';
import { useSingleUser } from '../hooks/useSingleUser';

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

  const userId = parseInt(params.id!);
  const { data } = useSingleUser(userId);

  const { mutate, isLoading } = useUpdateUser({
    onSuccess: () => {
      const route = '/user-list';
      successSwal(route, navigate);
    },
    onError: () => {
      ErrorSwal('Please try again');
    }
  });
  const [userUpdataData, setUserUpdataData] = useState<IUpdateUser>({
    id: 0,
    name: '',
    job: ''
  });

  useEffect(() => {
    if (data?.data) {
      setUserUpdataData(pre => ({
        ...pre,
        name: data.data.first_name,
        job: data.data.last_name,
      }))
    }
  }, [data]);

  const updateUser = () => {
    mutate({
      id: userUpdataData.id,
      name: userUpdataData.name,
      job: userUpdataData.job
    });
  };
  console.log(data?.data.first_name);
  return (
    <Fragment>
      <Container>
        <Division>
          <p>Update user</p>
          <AuthForm>
            <TextField
              fullWidth
              style={{ marginRight: '30px' }}
              // defaultValue={data?.data.first_name}
              value={ userUpdataData.name }
              onChange={(e) => {
                setUserUpdataData((prev) => ({
                  ...prev,
                  name: e.target.value
                }));
              }}
              id="standard-basic"
              label="name"
              variant="outlined"
            />
            <TextField
              fullWidth
              // placeholder={userData?.first_name}
              // defaultValue={data?.data.last_name}
              value={userUpdataData.job}
              onChange={(e) => {
                setUserUpdataData((prev) => ({ ...prev, job: e.target.value }));
              }}
              id="standard-basic"
              label="job"
              variant="outlined"
            />
          </AuthForm>

          <section style={{ marginTop: '30px' }}>
            <Button
              onClick={updateUser}
              style={{ marginRight: '20px' }}
              variant="contained"
              color="success"
              startIcon={<UpdateIcon />}>
              Update
            </Button>
            <Button
              onClick={() => navigate(-1)}
              variant="contained"
              color="warning"
              startIcon={<ArrowBackIcon />}>
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
