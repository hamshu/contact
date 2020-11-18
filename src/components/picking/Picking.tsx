import { Grid, GridList, GridListTile, Paper, Button } from "@material-ui/core";
import * as React from "react";
import { Link } from "react-router-dom";

interface IPickingProps {}

const Picking: React.FunctionComponent<IPickingProps> = (props) => {
  const [sPlayers, setPlayers] = React.useState([""]);
  const [sIt, setIt] = React.useState("");

  React.useEffect(() => {
    // Get Players from context which should be synced to Firebase
    setPlayers(["John", "Mehar", "Clint", "Me"]);
  }, []);

  // useEffect on sIt to let others know who the It pick is
  // Server side update: when all selected, let client know
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
          <h2>Pick Who's It</h2>
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
                      <Button
                        disabled={player !== sIt && sIt !== ""}
                        onClick={(e) => {
                          if (sIt === player) {
                            setIt("");
                          } else {
                            setIt(player);
                          }
                        }}
                      >
                        {player}
                      </Button>
                    </GridListTile>
                  );
                })
              : null}
          </GridList>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <Link to={`/game`}>
              <Button>Start the Game</Button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Picking;
