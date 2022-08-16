import React, { Component } from "react";

class EdExp extends Component {
    render() {
        const {id, institution, program, city, start, end, GPA} = this.props;

        return (
            <div key={id} className="education">
                <div className="education-top">
                    <h1 className="institution">{institution.text}</h1>
                    <h1 className="city">{city.text}</h1>
                </div>
                <div className="education-mid">
                    <h1 className="program-gpa">{`${program.text}`}</h1>
                    <h1 className="start-end">{`${start.text + " - " + end.text}`}</h1>
                </div>
                <div className="education-btm">
                    <li>{`${"GPA: " + GPA.text}`}</li>
                </div>
            </div>
        );
    }
}

export default EdExp;