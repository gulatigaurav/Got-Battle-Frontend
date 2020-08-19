import React from "react";
import Competitor from "./Competitor";
import Grid from "@material-ui/core/Grid";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import { Typography, Card, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
      color: "#efaf33",
    },
    backgroundColor: "#efaf33",
  },
  root: {
    maxWidth: 300,
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: "hidden",
    display: "block",
    width: "100%",
  },
}));

const Battle = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid
        container
        spacing={2}
        alignItems="flex-end"
        // className="center-content"
      >
        <Grid item xs={12} lg={6} sm={6} md={6}>
          <Competitor
            name={props.details.attacker_king}
            size={props.details.attacker_size}
            soldier={props.details.attacker_1}
          />
        </Grid>
        <Grid item xs={12} lg={6} sm={6} md={6}>
          <Competitor
            name={props.details.defender_king}
            size={props.details.defender_size}
            soldier={props.details.defender_1}
          />
        </Grid>

        <Grid item xs={12}>
          <Card
            className={classes.root}
            style={{ maxWidth: "100%", textAlign: "center" }}
          >
            <CardContent>
              <Typography className={classes.title}>
                <i class="fas fa-location-arrow"></i> {props.details.name}
                <br />
                <i class="far fa-clock"></i> {props.details.year}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item alignItems="center">
          <Button variant="outlined" color="primary">
            Start Fight
          </Button>
        </Grid>
      </Grid>
      {/*  <div className="card-main">
        Battle Name = {props.details.name}
        <div className="card-body d-flex">
          <Competitor name="King1" />
          <Competitor name="King2" />
        </div>
  </div> */}
    </React.Fragment>
  );
};

export default Battle;
