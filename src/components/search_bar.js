import React, { Component } from "react";
import {Link} from "react-router-dom";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    return (
      <div className="search-bar row">
      <div className=" col-md-10">
        <input
          className="form-control"
          value={this.state.term}
          placeholder="Search for new Tutorials"
          onChange={event => this.onInputChange(event.target.value)}
        />
        </div>
        <div className="history-button col-xs-2">
          <Link to="/history" className="btn btn-ghost">History</Link>
        </div>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
