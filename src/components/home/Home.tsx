import { Button, Grid, Input, makeStyles, Paper } from "@material-ui/core";
import * as React from "react";
import { Link } from "react-router-dom";

interface IHomeProps {}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    "min-width": "150px",
  },
  input: {
    width: "100%",
  },
}));

const Home: React.FunctionComponent<IHomeProps> = () => {
  const classes = useStyles();
  const [sGameCode, setGameCode] = React.useState("");

  return (
    <div className={classes.root}>
      <Grid
        container
        alignItems="center"
        justify="space-around"
        spacing={3}
        direction={"column"}
      >
        <Grid item xs>
          <h1>Contact the Game</h1>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Link to="/lobby?state=start">
              <Button>New Game</Button>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Input
              onChange={(e): void => {
                setGameCode(e.target.value);
              }}
              placeholder="Enter Game Code"
              value={sGameCode}
            ></Input>
            <br />
            <Link to={`/lobby?state=join&code=${sGameCode}`}>
              <Button>Join Game</Button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
