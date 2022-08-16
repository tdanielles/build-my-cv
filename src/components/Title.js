import React, { Component} from "react";

class Title extends Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete = (e) => {
        this.props.detectDelete(e);
    }

    render() {
        const {title} = this.props;

        if (title === "General Information") {
            return (
                <h1 className="card-title">{title}</h1>
            );
        } else {
            return (
                <div className="card-title-w-trash">
                    <h1 className="card-title">{title}</h1>
                    <i onClick={this.handleDelete} className="fa-solid fa-trash-can"></i>
                </div>
            )
        }
    }
}

export default Title;