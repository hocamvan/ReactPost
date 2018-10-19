import React, { Component } from "react";

import "./Film.css";

class Film extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            poster: "",
            comment: ""
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(e){
        const url = " http://92.175.11.66:3001/api/quests/movies/";
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        };
        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`Un film est ajouté!`);
                }
            }).catch(e => {
                console.error(e);
                alert("Erreur lors de l'ajout d'un film");
            });
            e.preventDefault();  
    }

    handleOnChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        event.preventDefault();

    }
    
    render() {
        const { name, poster, comment } = this.state;
        return (
            <div className="FormFilm">
                <h1>Saisi d'un film</h1>
                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <div className="form-film">
                            <label> Nom du film: </label>
                            <input type="text" name="name" value={name} onChange={this.handleOnChange}></input>
                        </div>

                        <div className="form-film">
                            <label>URL de poster du film: </label>
                            <input type="url" name="poster" value={poster} onChange={this.handleOnChange}></input>
                        </div>

                        <div className="form-film">
                            <label>Votre avis:</label>
                            <textarea type="texte" name="comment" value={comment} onChange={this.handleOnChange} />
                        </div>

                        <div className="form-film">
                            <input type="submit" value="Submit"></input>
                        </div>

                    </fieldset>

                </form>

            </div>
        )
    }
}


export default Film;