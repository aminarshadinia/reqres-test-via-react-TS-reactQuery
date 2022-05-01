import { Fragment, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Container, Grid } from "@mui/material";
import { getUserList } from "./api/api";
import { useQuery } from "react-query";
import { FetchData } from "./interfaces/interfaces";
import Navbar from "./Navbar";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";

const UserList = () => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState<FetchData[]>([]);

  useQuery(
    "userList",
    () => {
      return getUserList();
    },
    {
      onSuccess: (res) => {
        setUserList(res.data.data);
      },
    }
  );

  const addUserPage = () => {
    navigate("/add-user");
  };

  const updateUserPage = (id: number) => {
    navigate(`/update-user/${id}`);
  };

  const userDetails = (id: number) => {
    navigate(`/user-details/${id}`);
  };

  return (
    <Fragment>
      <Navbar />
      <Container>
        <Button
          onClick={addUserPage}
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
            <Fragment key={idx}>
              <Grid xs={4} item style={{ marginTop: "30px" }}>
                <Card sx={{ maxWidth: 300 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
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
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    style={{ margin: "20px 0" }}
                  >
                    <Button
                      onClick={() => userDetails(data.id)}
                      variant="contained"
                      color="primary"
                      startIcon={<InfoIcon />}
                    >
                      Details
                    </Button>
                    <Button
                      onClick={() => updateUserPage(data.id)}
                      variant="contained"
                      color="secondary"
                      startIcon={<EditIcon />}
                    >
                      Edit
                    </Button>
                  </Grid>
                </Card>
              </Grid>
            </Fragment>
          ))}
        </Grid>
      </Container>
    </Fragment>
  );
};
export default UserList;
