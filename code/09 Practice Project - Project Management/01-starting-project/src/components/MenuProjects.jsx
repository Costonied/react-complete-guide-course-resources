export default function MenuProjects({onSelectProject, onAddProjectClicked, onTitleClicked, projects}) {
    return (
        <div className="w-1/5 bg-gray-900 text-white pl-8 pt-10 mt-10 rounded-tr-3xl">
            <h2 onClick={onTitleClicked} className="text-2xl font-bold mb-4">YOUR PROJECTS</h2>
            <button
                onClick={onAddProjectClicked}
                className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-bold py-2 px-4 rounded mb-4">
                + Add Project
            </button>
            <div className="vertical-menu">
                {
                    projects.map((project) => {
                        return (
                            <a
                                key={project.id}
                                onClick={() => onSelectProject(project.id)}
                                className="block py-2 px-4 hover:bg-gray-700">{project.title}</a>
                        );
                    })
                }
            </div>
        </div>
    );
}