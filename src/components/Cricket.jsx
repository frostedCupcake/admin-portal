import { TextField, Typography, styled, Button, Box } from "@mui/material";
import * as React from "react";

const Cricket = () => {
  const Heading = styled(Typography)({
    margin: "1rem 0",
  });
  const defaultValues = {
    score: "",
    overs: "",
    wickets: "",
  };

  const [cricketValues, setCricketValues] = React.useState(defaultValues);

  const handleInputChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setCricketValues({
      ...cricketValues,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    console.log(cricketValues);
    event.preventDefault();
    cricketValues.score = "";
    cricketValues.overs = "";
    cricketValues.wickets = "";
    console.log(cricketValues);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box>
          <Heading>Score</Heading>
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            name="score"
            InputLabelProps={{
              shrink: true,
            }}
            value={cricketValues.score}
            onChange={handleInputChange}
          />
          <Typography>{cricketValues.score}</Typography>
          <Heading>Overs</Heading>

          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            name="overs"
            InputLabelProps={{
              shrink: true,
            }}
            value={cricketValues.overs}
            onChange={handleInputChange}
          />
          <Heading>wickets</Heading>

          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            name="wickets"
            InputLabelProps={{
              shrink: true,
            }}
            value={cricketValues.wickets}
            onChange={handleInputChange}
          />
        </Box>
        <Button
          variant="contained"
          sx={{
            width: "10rem",
            fontSize: "1.2rem",
            margin: "1rem 0",
          }}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default Cricket;
