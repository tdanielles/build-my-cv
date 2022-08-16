import React, { Component } from "react";
import "../styles/Resume.css";
import GenIn from "./GenIn";
import EdExp from "./EdExps";
import WorkExp from "./WorkExps"

class Resume extends Component {
    render() {
        const {genIn, edExps, workExps} = this.props;
        return (
            <div id="resume">
                <GenIn {...genIn} />
                <h1 className="resume-heading">EDUCATION</h1>
                <hr></hr>
                {
                    edExps.map((edExp) => {
                        return <EdExp key={edExp.id} {...edExp} />
                    })
                }
                <h1 className="resume-heading">EXPERIENCE</h1>
                <hr></hr>
                {
                    workExps.map((workExp) => {
                        return <WorkExp key={workExp.id} {...workExp} />
                    })
                }
            </div>
        );
    }
}

export default Resume;