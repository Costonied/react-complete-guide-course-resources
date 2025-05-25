import {useState} from "react";

import MenuProjects from "./components/MenuProjects.jsx"
import ProjectNoSelected from "./components/ProjectNoSelected.jsx"
import ProjectCreateForm from "./components/ProjectCreateForm.jsx"
import SelectedProject from "./components/SelectedProject.jsx";

function App() {

    const [projects, setProjects] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [selectedProjectId, setSelectedProjectId] = useState(undefined);
    const [isProjectCreating, setIsProjectCreating] = useState(false);

    function handleCreateNewProjectClicked() {
        setSelectedProjectId(null);
        setIsProjectCreating(true);
    }

    function handleGoHomeClicked() {
        setSelectedProjectId(null);
        setIsProjectCreating(false);
    }

    function handleAddProject(project) {
        setProjects((prevState) => {
            const projectId = Math.random();
            const newProject = {id: projectId, ...project};
            setSelectedProjectId(undefined);
            setIsProjectCreating(false);
            return [...prevState, newProject];
        });
    }

    function handleCancelAddProject() {
        setSelectedProjectId(undefined);
        setIsProjectCreating(false);
    }

    function handleSelectProject(projectId) {
        setSelectedProjectId(projectId);
        setIsProjectCreating(false);
    }

    const selectedProject = projects.find(
        (project) => project.id === selectedProjectId
    );

    return (
        <div className="flex h-screen">
            <MenuProjects
                projects={projects}
                onSelectProject={handleSelectProject}
                onAddProjectClicked={handleCreateNewProjectClicked}
                onTitleClicked={handleGoHomeClicked}/>
            <div className="w-4/5 p-4 mt-10">
                {selectedProjectId === undefined && !isProjectCreating &&
                    <ProjectNoSelected onCreateNewProjectClicked={handleCreateNewProjectClicked}/>}
                {isProjectCreating &&
                    <ProjectCreateForm onAddProject={handleAddProject} onCancel={handleCancelAddProject}/>}
                {selectedProjectId && <SelectedProject
                    project={selectedProject} tasks={[]}/>}
            </div>
        </div>
    );
}

export default App;
