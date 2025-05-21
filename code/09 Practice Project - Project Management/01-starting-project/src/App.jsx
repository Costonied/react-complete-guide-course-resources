import MenuProjects from "./components/MenuProjects.jsx"
import ProjectNoSelected from "./components/ProjectNoSelected.jsx"

function App() {
    return (
        <div className="flex h-screen">
            <MenuProjects/>
            <div className="w-4/5 p-4 mt-10">
                <ProjectNoSelected />
            </div>
        </div>
    );
}

export default App;
