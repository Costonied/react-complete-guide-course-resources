import {useState} from "react";

import MenuProjects from "./components/MenuProjects.jsx"
import ProjectNoSelected from "./components/ProjectNoSelected.jsx"
import ProjectCreateForm from "./components/ProjectCreateForm.jsx"

function App() {

    const projects = []

    const [selectedProject, setSelectedProject] = useState(null);
    const [isProjectCreating, setIsProjectCreating] = useState(false);

    function handleCreateNewProjectClicked() {
        setSelectedProject(null);
        setIsProjectCreating(true);
    }

    function handleGoHomeClicked() {
        setSelectedProject(null);
        setIsProjectCreating(false);
    }

    return (
        <div className="flex h-screen">
            <MenuProjects
                onAddProjectClicked={handleCreateNewProjectClicked}
                onTitleClicked={handleGoHomeClicked}/>
            <div className="w-4/5 p-4 mt-10">
                {selectedProject === null && !isProjectCreating &&
                    <ProjectNoSelected onCreateNewProjectClicked={handleCreateNewProjectClicked}/>}
                {isProjectCreating && <ProjectCreateForm/>}
            </div>
        </div>
    );
}

export default App;
