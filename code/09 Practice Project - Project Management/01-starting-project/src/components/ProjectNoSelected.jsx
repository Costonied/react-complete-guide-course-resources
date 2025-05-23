import logo from '../assets/no-projects.png';

export default function ProjectNoSelected({ onCreateNewProjectClicked }) {
    return (
        <div className="flex flex-col items-center justify-center mt-24">
            <img src={logo} alt="Board with pen" className="w-20"/>
            <h2 className="text-2xl font-bold m-4">No project selected</h2>
            <p>Select a project or get started with a new one</p>
            <button
                onClick={onCreateNewProjectClicked}
                className="
                bg-gray-900 hover:bg-gray-700
                text-gray-100 font-bold py-2 px-4 rounded m-8">
                Create new project
            </button>
        </div>
    );
}