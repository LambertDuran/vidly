import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "./styles";

class GenreFiler extends React.Component {
  getName = genre => (genre === null ? "All genre" : genre.name);

  render() {
    const { genres, currentGenre, onChangeGenre } = this.props;

    const genreItems = genres.map(genre => (
      <Dropdown.Item
        key={genre === null ? 0 : genre._id}
        active={currentGenre === genre}
        onClick={() => onChangeGenre(genre)}
        href="#"
      >
        {this.getName(genre)}
      </Dropdown.Item>
    ));

    return (
      <Dropdown>
        <Dropdown.Toggle
          style={styles.mainColor}
          variant="ligth m-2"
          id="dropdown-basic"
        >
          {this.getName(currentGenre)}
        </Dropdown.Toggle>
        <Dropdown.Menu>{genreItems}</Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default GenreFiler;
