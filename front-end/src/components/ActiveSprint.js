import SideNav from './SideNav';
import ProjectNav from './ProjectNav';
import Footer from './Footer';
import { useState } from "react";
import { Height, PlayForWorkOutlined } from '@material-ui/icons';
import search_icon from "../Images/search_icon.png"
import { Box } from '@material-ui/core';

const ActiveSprint = () => {


    const [issue_panel, handleIssuePanel] = useState("show");

    const [inactiveIssues, setInactiveIssues] = useState([
        { title: 'Takis', dueDate: '14/5/2021', briefDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', id: 1 },
        { title: 'Lakis', dueDate: '14/5/2021', briefDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit', id: 2 },
        { title: 'Lakis', dueDate: '14/5/2021', briefDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', id: 3 },
        { title: 'Akis', dueDate: '14/5/2021', briefDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', id: 4 },
        { title: 'Papadakis', dueDate: '14/5/2021', briefDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', id: 5 }
      ])
      const [activeIssues, setActiveIssues] = useState([
        { title: 'Makis', dueDate: '14/5/2021', briefDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', id: 1 },
        { title: 'Takis', dueDate: '14/5/2021', briefDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', id: 2 },
        { title: 'Lakis', dueDate: '14/5/2021', briefDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', id: 3 },
        { title: 'Akis', dueDate: '14/5/2021', briefDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', id: 4 }
      ])
      const [doneIssues, setDoneIssues] = useState([
        { title: 'Makis', dueDate: '14/5/2021', briefDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', id: 1 },
        { title: 'Akis', dueDate: '14/5/2021', briefDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', id: 2 }
      ])

    return (
        <div className="active_sprint proj_page">
            <ProjectNav />
            <div className="center_content">
                <SideNav />
                <main>
                    <div id="content">
                        <h1>"Sprint Name" Board</h1>
                        {/* search */}
                        <div className = "search">
                            <img src={search_icon} alt="accountIcon"></img>
                            <input type="text" placeholder="Search Issue"></input>
                        </div>
                        {/* issue tables */}
                        <div className="issuesPanel" id="inactiveIssuesPanel">
                            <h3 style={{textAlign:"center"}}>Inactive</h3>
                            <div className = "issues" id= "inactiveIssues">
                                {inactiveIssues.map(issue => (
                                <div className="issueBox">
                                    <p>{issue.briefDescription}</p>
                                    <div className="issueShortInfo">
                                        <p>{issue.title}</p>
                                        <p id ="dueDate">{issue.dueDate}</p>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>   
                        <div className="issuesPanel" id="activeIssuesPanel">
                            <h3 style={{textAlign:"center"}}>Active</h3>
                            <div className = "issues" id= "activeIssues">
                                {activeIssues.map(issue => (
                                <div className="issueBox">
                                    <p>{issue.briefDescription}</p>
                                        <div className="issueShortInfo">
                                            <p>{issue.title}</p>
                                            <p id ="dueDate">{issue.dueDate}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>                 
                        <div className="issuesPanel" id="doneIssuesPanel">
                            <h3 style={{textAlign:"center"}}>Done</h3>
                            <div className = "issues" id= "doneIssues">
                                {doneIssues.map(issue => (
                                <div className="issueBox">
                                    <p>{issue.briefDescription}</p>
                                        <div className="issueShortInfo">
                                            <p>{issue.title}</p>
                                            <p id ="dueDate">{issue.dueDate}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>         
                        {/* Issue Panel*/}
                        <div className = "issuePanel">
                            {issue_panel === "show" && 
                                <div>
                                    <h2 id="issueName">Issue Name</h2>
                                    <br></br>
                                    <text id ="issueEpic">Epic</text>
                                    <br></br>
                                    <br></br>
                                    <h3>Description</h3>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit


                                    </p>
                                    <br></br>
                                    <text className="label" id="status">Status: </text>
                                    <text className="answer" id="statusAnswer">Open</text>
                                    <text className="answer" id="priorityAnswer">Major </text>
                                    <text className="label" id="priority">Priority: </text>
                                    <br></br>
                                    <br></br>
                                    <text className="label" id="resolution">Resolution: </text>
                                    <text className="answer" id="resolutionAnswer">Unresolved</text>
                                    <br></br>
                                    <br></br>
                                    <text className="label" id="assignee">Assignee: </text>
                                    <text className="answer" id="assigneeAnswer">Makis</text>
                                    <br></br>
                                    <br></br>
                                    <text className="label" id="reporter">Reporter: </text>
                                    <text id="reporterAnswer">Takis</text>
                                    <br></br>
                                    <br></br>
                                    <text className="label" id="dateCreated">Created on: </text>
                                    <text className="answer" id="dateCreatedAnswer">10/3/2021</text>
                                    <br></br>
                                    <text className="label" id="timeLeft">Time Remaining: </text>
                                    <text className="answer" id="timeLeftAnswer">5 days</text>
                                </div>
                                
                            }   
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
        
    export default ActiveSprint;