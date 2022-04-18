import React, { Fragment, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container, Grid } from "@mui/material";
import { getSingleUser } from "./api/api";
import { useQuery } from "react-query";
import { SingleData } from "./interfaces/interfaces";
import Navbar from "./navbar";
import { useParams } from "react-router-dom";

const UserDetailsPage = () => {
  const params = useParams();
  const [singleUser, setSingleUser] = useState<SingleData>()

  const queryInfo = useQuery(
    "singleUser",
    () => {
      const userId = parseInt(params.id!);
      return getSingleUser(userId)
    },
    {
      onSuccess: (res) => {
        setSingleUser(res.data.data)
      },
    }
  );

  return (
    <Fragment>
      <Navbar />
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {singleUser && 
            <Fragment>
              <Grid xs={4} spacing={3} style={{ marginTop: "30px" }}>
              <p>Details...</p>
                <Card sx={{ maxWidth: 600 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image={`${singleUser.avatar}`}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {`Name: ${singleUser.first_name}`}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        {`Last Name: ${singleUser.last_name}`}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Email: {singleUser.email}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Fragment>
          }
        </Grid>
      </Container>
    </Fragment>
  );
}
export default UserDetailsPage;
