import { Grid, Paper } from "@material-ui/core";
import * as React from "react";

interface IWaitingProps {}

const Waiting: React.FunctionComponent<IWaitingProps> = (props) => {
  return (
    <>
      <Grid item xs>
        <h2>Waiting</h2>
      </Grid>
      <Grid item xs>
        <Paper>
          <img
            src="https://media.giphy.com/media/TbSPeUWjSY2ys/source.gif"
            alt="trebek"
          />
        </Paper>
      </Grid>
    </>
  );
};

export default Waiting;
