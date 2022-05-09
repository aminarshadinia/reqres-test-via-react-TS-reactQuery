import { Fragment } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container, Grid, LinearProgress } from "@mui/material";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useSingleUser } from "../hooks/useSingleUser";

const UserDetails = () => {
  const params = useParams();
  const userId = parseInt(params.id!);
  const { data, status } = useSingleUser(userId);
  const singleUserData = data?.data;

  return (
    <Fragment>
      {status === "loading" && <LinearProgress style={{ padding: "5px" }} />}
      {status === "error" && <p>Error while fetching data</p>}
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {

          }
          <Fragment>
            <Grid style={{ marginTop: "30px" }}>
              <p>Details...</p>
              <Card sx={{ maxWidth: 600 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={`${singleUserData?.avatar}`}
                    alt="user avatar"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {`Name: ${singleUserData?.first_name}`}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      {`Last Name: ${singleUserData?.last_name}`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Email: {singleUserData?.email}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Fragment>
        </Grid>
      </Container>
    </Fragment>
  );
};
export default UserDetails;
