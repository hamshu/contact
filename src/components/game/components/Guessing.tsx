import { Button, Grid, GridList, GridListTile } from "@material-ui/core";
import * as React from "react";

interface IGuessingProps {}

const Guessing: React.FunctionComponent<IGuessingProps> = (props) => {
  return (
    <>
      <Grid item xs>
        <h2>Guessing</h2>
        <h3>
          {" "}
          The letter is <em>A</em>
        </h3>
      </Grid>
      <GridList cols={3}>
        <GridListTile>
          <Button>CONTACT</Button>
        </GridListTile>
        <GridListTile>
          <Button>WHOOPS UNCONTACT</Button>
        </GridListTile>
        <GridListTile>
          <Button>Screw it I GIVE UP</Button>
        </GridListTile>
      </GridList>
    </>
  );
};

export default Guessing;
