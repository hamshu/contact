import { Grid } from "@material-ui/core";
import * as React from "react";
import Contacted from "./components/Contacted";
import GameOver from "./components/GameOver";
import Guessing from "./components/Guessing";
import PickTheWord from "./components/PickTheWord";
import Resolve from "./components/Resolve";
import Waiting from "./components/Waiting";

interface IGameProps {}

const Game: React.FunctionComponent<IGameProps> = (props) => {
  const [sState, setState] = React.useState("pick");

  React.useEffect(() => {
    // Set State here based on firebase state
  }, []);
  const gameState = () => {
    switch (sState) {
      case "waiting":
        return <Waiting />;
      case "pick":
        return <PickTheWord />;
      case "guess":
        return <Guessing />;
      case "contact":
        return <Contacted />;
      case "resolve":
        return <Resolve />;
      case "gameover":
        return <GameOver />;
      default:
        return <Waiting />;
    }
  };

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
        {gameState()}
      </Grid>
    </div>
  );
};

export default Game;
