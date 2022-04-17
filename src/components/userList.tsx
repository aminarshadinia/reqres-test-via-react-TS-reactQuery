import React, { Fragment, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Container, Grid } from "@mui/material";
import { getUserList } from "./api/api";
import { useQuery } from "react-query";
import { fetchData } from "./interfaces/interfaces";
import Navbar from "./navbar";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export default function UserListPage() {
  const navigate = useNavigate();
  const [userList, setUserList] = useState<fetchData[]>([]);

  const queryInfo = useQuery(
    "dd",
    async () => {
      return await getUserList();
    },
    {
      onSuccess: (res) => {
        setUserList(res.data.data);
      },
    }
  );

  const addUser = () => {
    navigate("/add-user");
  };

  return (
    <Fragment>
      <Navbar />
      <Container>
        <Button
          onClick={addUser}
          style={{ marginTop: "15px" }}
          variant="contained"
          color="success"
          startIcon={<AddIcon />}
        >
          Add User
        </Button>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {userList.map((data, idx) => (
            <Grid xs={4} spacing={3} style={{ marginTop: "30px" }}>
              <Card sx={{ maxWidth: 300 }} key={idx}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`${data.avatar}`}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {`${data.first_name}  ${data.last_name}`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {data.email}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Fragment>
  );
}
