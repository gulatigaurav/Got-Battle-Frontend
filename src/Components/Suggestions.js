import React, { Component } from "react";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";
import Battle from "./Battle";
import Grid from "@material-ui/core/Grid";
import { FormControl, Container } from "@material-ui/core";

// import axios from "axios";

class Suggestions extends Component {
  state = {
    selectedBattleFlag: false,
    selectedBattle: "",
    battles: [],
  };

  componentDidMount() {
    fetch("https://cryptic-atoll-94879.herokuapp.com/search")
      .then((res) => res.json())
      .then((res) => {
        let arr = [];
        res.map((e) => {
          return arr.push(e.name);
        });
        this.setState({
          battles: res,
        });
      })
      .catch((err) => console.log(err));
  }

  onValChange = (event, values) => {
    if (values) {
      this.setState({
        selectedBattleFlag: true,
        selectedBattle: values,
      });
    } else {
      this.setState({
        selectedBattleFlag: false,
      });
    }
  };

  render() {
    return (
      <div>
        <Container>
          <h1>GOT BATTLE</h1>
          <FormControl fullWidth>
            <Grid container spacing={1} alignItems="center">
              <Grid item xs={10}>
                <Autocomplete
                  id="search-bar"
                  options={this.state.battles}
                  getOptionLabel={(option) => option.location}
                  onChange={this.onValChange}
                  style={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Search for Battle"
                      variant="outlined"
                    />
                  )}
                />
                {this.state.selectedBattleFlag ? (
                  <Battle details={this.state.selectedBattle} />
                ) : (
                  <h2> Start Searching </h2>
                )}
              </Grid>
            </Grid>
          </FormControl>
        </Container>
      </div>
    );
  }
}

export default Suggestions;
