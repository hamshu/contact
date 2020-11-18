import * as React from "react";
import { Button, Grid, Input, Paper } from "@material-ui/core";

interface IPickTheWordProps {}

const PickTheWord: React.FunctionComponent<IPickTheWordProps> = (props) => {
  return (
    <>
      <Grid item xs>
        <h3>Rules</h3>
        <div>
          <ul>
            <li>Word must be real</li>
            <li>Word must be english</li>
            <li>Word cannot be a proper noun</li>
          </ul>
        </div>
      </Grid>
      <Grid item xs>
        <Input
          onChange={(e): void => {
            // submit the word up from e.target.value
          }}
          placeholder="Enter a Word"
        ></Input>
        <br />
        <Button>Submit My Word</Button>
      </Grid>
    </>
  );
};

export default PickTheWord;
