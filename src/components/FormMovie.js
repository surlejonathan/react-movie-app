import React, { Component } from "react";
import axios from "axios";

class FormMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      poster: "",
      comment: "",
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const url = "https://post-a-form.herokuapp.com/api/movies/";
    axios
      .post(url, this.state)
      .then((res) => res.data)
      .then((res) => alert(`Film ajouté avec l'ID ${res.id} !`))
      .catch((e) => {
        console.error(e);
        alert(`Erreur lors de l'ajout d'un film : ${e.message}`);
      });
  };

  render() {
    return (
      <div>
        <h1>Mon film préféré</h1>
        <form className="FormMovie" onSubmit={(e) => this.onSubmit(e)}>
          <fieldset>
            <legend>Informations</legend>
            <div className="form-data">
              <label htmlFor="title">Titre</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={(e) => this.onChange(e)}
                value={this.state.title}
                required
              />
            </div>
            <div className="form-data">
              <label htmlFor="poster">Poster</label>
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={(e) => this.onChange(e)}
                value={this.state.poster}
                required
              />
            </div>
            <div className="form-data">
              <label htmlFor="comment">Commentaire</label>
              <textarea
                id="comment"
                name="comment"
                onChange={(e) => this.onChange(e)}
                value={this.state.comment}
                required
              />
            </div>
            <hr />
            <div className="form-data">
              <input className="submitButton" type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default FormMovie;
