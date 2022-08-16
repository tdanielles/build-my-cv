import React, { Component } from "react";

class WorkExp extends Component {
    render() {
        const {id, company, position, location, start, end, description} = this.props;

        const replacedTasks = description.text.replace(/\n\r?/g, "\n");
        const replacedTasksArr = replacedTasks.split(/\n/);

        return (
            <div key={id} className="work-exp">
                <div className="work-exp-top">
                    <h1 className="company">{company.text}</h1>
                    <h1 className="city">{location.text}</h1>
                </div>
                <div className="work-exp-mid">
                    <h1 className="position">{position.text}</h1>
                    <h1 className="start-end">{`${start.text + " - " + end.text}`}</h1>
                </div>
                <div className="work-exp-btm">
                    <div className="description">
                        {
                            replacedTasksArr.map((desc) => {
                                return <li key={desc + id} className="desc">{desc}</li>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkExp;