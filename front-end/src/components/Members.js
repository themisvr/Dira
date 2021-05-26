import SideNav from './SideNav';
import ProjectNav from './ProjectNav';
import Footer from './Footer';
import { useState } from "react";
import { PlayForWorkOutlined } from '@material-ui/icons';
import x_icon from "../Images/x_icon.png"


const Members = () => {

    const [members_popup, handleMembersPopup] = useState("hide");

    const hide_members_popup = () => {
        handleMembersPopup("hide");
    }
    
    const show_members_popup = () => {
        handleMembersPopup("show");
    }
    
    const handlePopupButtonClick = () => {
        hide_members_popup();
    }
    
    const [members, setMembers] = useState([
        { name: 'Makis', dateJoined: '14/5/2021', role: 'developer', id: 1 },
        { name: 'Takis', dateJoined: '2/11/2019', role: 'admin', id: 2 },
        { name: 'Lakis', dateJoined: '3/8/2018', role: 'developer', id: 3 },
        { name: 'Akis', dateJoined: '16/5/2020', role: 'developer', id: 4 },
        { name: 'Papadakis', dateJoined: '25/3/2021', role: 'developer', id: 5 },
      ])

    return (
        // Gia na doylepsei to sidebar
    <div className="members proj_page">
        <ProjectNav />
        <div className="center_content">
            <SideNav />
            <main>
                {/* Content */}
                <div className="content">
                    <h1 id="project_name">KFC is coming to Greece</h1>
                    {/* Main Panel */}
                    <div className="main_panel">
                        <h1 id="team_members">Team Members</h1>
                        <button onClick={show_members_popup}>+ Add Members</button>
                        <table id = "main_table">
                            <tr>
                            <th>Name</th>
                            <th>Date Joined</th>
                            <th>Role</th>
                            </tr>
                            {members.map(member => (
                                <tr key={member.id}>
                                <td>{member.name}</td>
                                <td>{member.dateJoined}</td>
                                <td>{member.role}</td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
                {/* Popup */}
                {members_popup === "show" && 
                    <div className="add_members_popup">
                        <div>
                            <h2>Add Members</h2>
                            <img src={x_icon} alt="accountIcon" onClick={hide_members_popup}></img>
                        </div>
                        <form className="members_form">
                            <input type="text" placeholder="Email Address"></input>
                            <input type="text" placeholder="Email Address"></input>
                            <input type="text" placeholder="Email Address"></input>
                            <button onClick={handlePopupButtonClick}>Add</button>
                        </form>
                    </div>
                }   
            </main>
        </div>
        <Footer />
    </div>
        // <div className="members">
        //     <ProjectNav/>            
        //     

        //     <div style={{clear: "both", position:"absolute", bottom:"0", width:"100%"}}>
        //         <Footer/>
        //     </div>
        // </div> 

    );
}
        
    export default Members;