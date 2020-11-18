import classes from "*.module.css";
import { Button, Grid, GridList, GridListTile, Paper } from "@material-ui/core";
import * as React from "react";
import { Link, useLocation } from "react-router-dom";

interface ILobbyProps {}

const Lobby: React.FunctionComponent<ILobbyProps> = (props) => {
  let query = new URLSearchParams(useLocation().search);
  const [sDisplayCode, setDisplayCode] = React.useState("");
  const [sMyName, setMyName] = React.useState("");
  const [sPlayers, setPlayers] = React.useState([""]);

  React.useEffect(() => {
    const state = query.get("state");
    if (state === "start") {
      // create game and display code
      setDisplayCode("SOMECODE");
      setPlayers(["John", "Mehar", "Clint"]);
    } else {
      // join game and display code and players
      setDisplayCode("SOMEOTHERCODE");
      setPlayers(["John", "Mehar", "Clint", "Me"]);
    }
  }, []);
  return (
    <div>
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
        <Grid item xs>
          <h2>Lobby</h2>
        </Grid>
        <Grid item xs>
          <GridList cols={1}>
            {sPlayers.length > 0 && sPlayers !== undefined
              ? sPlayers.map((player: string) => {
                  return (
                    <GridListTile
                      style={{ height: "auto", textAlign: "center" }}
                      key={player}
                    >
                      <h3>{player}</h3>
                    </GridListTile>
                  );
                })
              : null}
          </GridList>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <Link to={`/picking?code=${sDisplayCode}`}>
              <Button>Pick who's it</Button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Lobby;
