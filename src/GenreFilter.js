import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "./styles";

class GenreFiler extends React.Component {
  render() {
    const { genres, currentGenre, onChangeGenre } = this.props;

    const genreItems = genres.map((genre) => (
      <Dropdown.Item
        key={genre._id}
        active={currentGenre === genre}
        onClick={() => onChangeGenre(genre)}
        href="#"
      >
        {genre.name}
      </Dropdown.Item>
    ));

    return (
      <div className="col">
        <Dropdown>
          <Dropdown.Toggle
            style={styles.mainColor}
            variant="ligth m-2"
            id="dropdown-basic"
          >
            {currentGenre.name}
          </Dropdown.Toggle>
          <Dropdown.Menu>{genreItems}</Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default GenreFiler;
