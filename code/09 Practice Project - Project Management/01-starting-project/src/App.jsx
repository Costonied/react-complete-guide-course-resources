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
        setSelectedProjectId(undefined);
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

    const selectedProjectTasks = tasks.filter(
        (task) => {
            console.log("Filter task id = " + task.id);
            console.log("Filter task text = " + task.text);
            console.log("Filter task project id = " + task.projectId);
            console.log("Filter task  by selectedProjectId = " + selectedProjectId);
            return task.projectId === selectedProjectId;
        }
    );

    function handleAddTask(text) {
        setTasks((prevState) => {
            const taskId = Math.random();
            const newTask = {
                id: taskId,
                text: text,
                projectId: selectedProjectId,
            };
            return [...prevState, newTask];
        });
    }

    function handleDeleteTask(taskId) {
        setTasks((prevState) => {
            return prevState.filter(
                task => task.id !== taskId
            );
        });
    }

    function handleDeleteProject(projectId) {
        console.log("Deleting project id: " + projectId);
        setTasks((prevState) => {
            return prevState.filter(
                task => task.projectId !== projectId
            );
        });
        setProjects((prevState) => {
            return prevState.filter(
                project => {
                    console.log("Project id: " + project.id)
                    return project.id !== projectId;
                }
            );
        });
        setSelectedProjectId(undefined);
    }

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
                    project={selectedProject}
                    onAddTask={handleAddTask}
                    onDeleteTask={handleDeleteTask}
                    onDelete={handleDeleteProject}
                    tasks={selectedProjectTasks}/>}
            </div>
        </div>
    );
}

export default App;
