import React, { Component } from "react";
import Movie from "./Movie";
import { connect } from "react-redux";
import { actFetchData } from "./reducer/action";
class ListMoviePage extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  renderListMovie = () => {
    const { loading, data } = this.props;
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
const mapStateToProps = (state) => {
  return {
    loading: state.ListMovieReducer.loading,
    data: state.ListMovieReducer.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(actFetchData()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage);
