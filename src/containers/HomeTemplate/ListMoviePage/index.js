import React, { Component } from "react";
import Movie from "./Movie";
import axios from "axios";
export default class ListMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: null,
      error: null,
    };
  }

  componentDidMount() {
    //Pending
    this.setState({
      loading: true,
    });
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyNSIsIkhldEhhblN0cmluZyI6IjE2LzEyLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY3MTE0ODgwMDAwMCIsIm5iZiI6MTY0MTU3NDgwMCwiZXhwIjoxNjcxMjk2NDAwfQ.cB7cdIfS0TKI1Yx_WRS-tEOt5K5yf3QJCot63SYEOHo",
      },
    })
      .then((result) => {
        this.setState({
          loading: false,
          data: result.data.content,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          error,
        });
      });
  }

  renderListMovie = () => {
    const { loading, data } = this.state;
    if (loading) return <div>Loading...</div>;
    return data?.map((movie) => <Movie key={movie.maPhim} movie={movie} />);
  };
  render() {
    console.log(this.state);
    return (
      <div className="container">
        <h1>ListMovie</h1>
        <div className="row">{this.renderListMovie()}</div>
      </div>
    );
  }
}
