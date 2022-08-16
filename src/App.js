import "./styles/reset.css";
import "./styles/styles.css";
import React, { Component } from "react";
import uniqid from "uniqid";

import Header from "./components/Header";
import InfoCard from "./components/InfoCard";
import Resume from "./components/Resume.js";

class App extends Component {
  constructor() {
    super();

    this.state = {
      genIn: {
        name: {
          text: "",
          id: uniqid()
        }, 
        email: {
          text: "",
          id: uniqid()
        },
        phone: {
          text: "",
          id: uniqid()
        },
        address: {
          text: "",
          id: uniqid()
        },
      },
      edExps: [
        {
          id: uniqid(),

          institution: {
            text: "",
            id: uniqid()
          },

          program: {
            text: "",
            id: uniqid()
          },

          city: {
            text: "",
            id: uniqid()
          },

          start: {
            text: "",
            id: uniqid()
          },

          end: {
            text: "",
            id: uniqid()
          },

          GPA: {
            text: "",
            id: uniqid()
          },
        },
      ],
      workExps: [
        {
          id: uniqid(),

          company: {
            text: "",
            id: uniqid()
          },

          position: {
            text: "",
            id: uniqid()
          },

          location: {
            text: "",
            id: uniqid()
          },

          start: {
            text: "",
            id: uniqid()
          },

          end: {
            text: "",
            id: uniqid()
          },

          description: {
            description: [
              {
                text: "",
                id: uniqid()
              },
            ],
            id: uniqid()
          },
        },
      ],
      showHideForm: true,
      showHideResume: false
    }

    this.addEdExp = this.addEdExp.bind(this);
    this.addWorkExp = this.addWorkExp.bind(this);
    this.delEdExp = this.delEdExp.bind(this);
    this.delWorkExp = this.delWorkExp.bind(this);
    this.toggleFormVisibility = this.toggleFormVisibility.bind(this);
    this.toggleResumeVisibility = this.toggleResumeVisibility.bind(this);
    this.updateGenIn = this.updateGenIn.bind(this);
    this.updateEdExps = this.updateEdExps.bind(this);
    this.updateWorkExps = this.updateWorkExps.bind(this);
  }

  addEdExp = (prevEdExps) => {
    const newEdExp = {
      id: uniqid(),

      institution: {
        text: "",
        id: uniqid()
      },

      program: {
        text: "",
        id: uniqid()
      },

      city: {
        text: "",
        id: uniqid()
      },

      start: {
        text: "",
        id: uniqid()
      },

      end: {
        text: "",
        id: uniqid()
      },

      GPA: {
        text: "",
        id: uniqid()
      },
    }

    this.setState({
      edExps: [...prevEdExps, newEdExp],
    });
  }

  addWorkExp = (prevWorkExps) => {
    const newWorkExp = {
      id: uniqid(),

      company: {
        text: "",
        id: uniqid()
      },

      position: {
        text: "",
        id: uniqid()
      },

      location: {
        text: "",
        id: uniqid()
      },

      start: {
        text: "",
        id: uniqid()
      },

      end: {
        text: "",
        id: uniqid()
      },

      description: {
        text: "",
        id: uniqid()
      },
    }

    this.setState({
      workExps: [...prevWorkExps, newWorkExp],
    });
  }

  delEdExp = (edExpId) => {
    const edExps = this.state.edExps;
    const filtered = edExps.filter((edExp) => {
      return (edExp.id === edExpId);
    });
    const filteredIndex = edExps.findIndex((edExp) => {
      return (edExp.id === filtered.id);
    });
    edExps.splice(filteredIndex, 1);
    this.setState({
      edExps: edExps,
    });
  }

  delWorkExp = (workExpId) => {
    const workExps = this.state.workExps;
    const filtered = workExps.filter((workExp) => {
      return (workExp.id === workExpId);
    });
    const filteredIndex = workExps.findIndex((workExp) => {
      return (workExp.id === filtered.id);
    });
    workExps.splice(filteredIndex, 1);
    this.setState({
      workExps: workExps,
    });
  }
  
  handleClick = (e) => {
    if (e.target.id === "add-edu-btn") {
      const prevEdExps = this.state.edExps;
      this.addEdExp(prevEdExps);
    }
    
    if (e.target.id === "add-wex-btn") {
      const prevWorkExps = this.state.workExps;
      this.addWorkExp(prevWorkExps);
    }

    if (e.target.id === "submit-btn") {
      this.toggleFormVisibility(this.state.showHideForm);
      this.toggleResumeVisibility(this.state.showHideResume);
      this.updateInfo(e);
    }

    if (e.target.id === "edit-btn") {
      this.toggleFormVisibility(this.state.showHideForm);
      this.toggleResumeVisibility(this.state.showHideResume);
    }
  }

  updateGenIn = (form, prevGenIn) => {
    const name = form.name.value;
    const nameId = prevGenIn.name.id;
    const email = form.email.value;
    const emailId = prevGenIn.email.id;
    const phone = form.phone.value;
    const phoneId = prevGenIn.phone.id;
    const address = form.address.value;
    const addressId = prevGenIn.address.id;

    this.setState({
      genIn: {
        name: {
          text: name,
          id: nameId
        },
        email: {
          text: email,
          id: emailId
        },
        phone: {
          text: phone,
          id: phoneId
        },
        address: {
          text: address,
          id: addressId
        },
      }
    });
  }
  
  updateEdExp = (form, id) => {
    const edExps = this.state.edExps;
    const filteredArr = edExps.filter((edExp) => {
      return (id === edExp.id);
    });
    const filtered = filteredArr[0];
    const institution = form.institution.value;
    const institutionId = filtered.institution.id;
    const program = form.program.value;
    const programId = filtered.program.id;
    const city = form.city.value;
    const cityId = filtered.city.id;
    const start = form.start.value;
    const startId = filtered.start.id;
    const end = form.end.value;
    const endId = filtered.end.id;
    const gpa = form.GPA.value;
    const gpaId = filtered.GPA.id;

    return {
      id: id,
      institution: {
        text: institution,
        id: institutionId,
      },
      program: {
        text: program,
        id: programId,
      },
      city: {
        text: city,
        id: cityId,
      },
      start: {
        text: start,
        id: startId,
      },
      end: {
        text: end,
        id: endId,
      },
      GPA: {
        text: gpa,
        id: gpaId,
      },
    }
  }

  updateEdExps = (edExps) => {
    this.setState({
      edExps: edExps,
    });
  }

  updateWorkExp = (form, id) => {
    const workExps = this.state.workExps;
    const filteredArr = workExps.filter((workExp) => {
      return (id === workExp.id);
    });
    const filtered = filteredArr[0];
    const company = form.company.value;
    const companyId = filtered.company.id;
    const position = form.position.value;
    const positionId = filtered.position.id;
    const location = form.location.value;
    const locationId = filtered.location.id;
    const start = form.start.value;
    const startId = filtered.start.id;
    const end = form.end.value;
    const endId = filtered.end.id;
    const description = form.description.value;
    const descriptionId = filtered.description.id;

    return {
      id: id,
      company: {
        text: company,
        id: companyId,
      },
      position: {
        text: position,
        id: positionId,
      },
      location: {
        text: location,
        id: locationId,
      },
      start: {
        text: start,
        id: startId,
      },
      end: {
        text: end,
        id: endId,
      },
      description: {
        text: description,
        id: descriptionId,
      },
    }
  }
  
  updateWorkExps = (workExps) => {
    this.setState({
      workExps: workExps,
    });
  }
  
  updateInfo = (e) => {
    const insideContainer = e.target.parentNode;
    const genIn = insideContainer.children[0];
    const genInForm = genIn.children[1];

    let edExps = [];
    let workExps = [];

    for (let i=0; i<insideContainer.children.length; i++) {
      let ithElm = insideContainer.children[i];

      if (ithElm.nodeName !== "BUTTON" && ithElm.id !== "gen-info-id") {
        if (ithElm.classList.contains("Education")) {
          const edExpId = ithElm.id;
          const edExpForm = ithElm.children[1];
          const updatedEdExp = this.updateEdExp(edExpForm, edExpId);
          edExps.push(updatedEdExp);
        } else if (ithElm.classList.contains("Experience")) {
          const workExpId = ithElm.id;
          const workExpForm = ithElm.children[1];
          const updatedWorkExp = this.updateWorkExp(workExpForm, workExpId);
          workExps.push(updatedWorkExp);
        }
      }
    }

    this.updateEdExps(edExps);
    this.updateWorkExps(workExps);

    const prevGenIn = this.state.genIn;

    this.updateGenIn(genInForm, prevGenIn);
  }

  toggleFormVisibility = (prevShowHideForm) => {
    this.setState({
      showHideForm: !prevShowHideForm,
    });
  }

  toggleResumeVisibility = (prevShowHideResume) => {
    this.setState({
      showHideResume: !prevShowHideResume,
    });
  }
  
  render() {
    const {genIn, edExps, workExps, showHideForm, showHideResume} = this.state;

    return (
      <div id="main-container">
        <Header />
        {showHideForm &&
        <div id="inside-container">
          <InfoCard keyVal="gen-info-id" title="General Information" info={genIn} />
          {
            edExps.map((edExp) => {
              let eduCopy = Object.assign({}, edExp);
              delete eduCopy["id"];
              return <InfoCard keyVal={edExp.id} key={edExp.id} title="Education" info={eduCopy} delEdExp={this.delEdExp}/>
            })
          }
          <button onClick={this.handleClick} id="add-edu-btn">+ Education</button>
          {
            workExps.map((workExp) => {
              let workCopy = Object.assign({}, workExp);
              delete workCopy["id"];
              return <InfoCard keyVal={workExp.id} key={workExp.id} title="Work Experience" info={workCopy} delWorkExp={this.delWorkExp}/>
            })
          }
          <button onClick={this.handleClick} id="add-wex-btn">+ Work Experience</button>
          <button onClick={this.handleClick} id="submit-btn">Preview</button>
        </div>
        }
        {showHideResume &&
        <div id="inside-container" className="extra">
          <button onClick={this.handleClick} id="edit-btn">Edit Information</button>
          <Resume genIn={genIn} edExps={edExps} workExps={workExps} />
        </div>
        }
      </div>
    );
  }
}

export default App;