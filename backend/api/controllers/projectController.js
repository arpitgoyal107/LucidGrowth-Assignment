const Project = require("../models/Project");

// Controller to get all projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find(); // Fetch all projects from the database
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller to add a new project
const addProject = async (req, res) => {
  const { title, description, technologies, demoLink, sourceCodeLink } =
    req.body;
  let image = `${req.file.filename}`;
  try {
    const newProject = new Project({
      title,
      description,
      technologies,
      liveLink,
      sourceCodeLink,
      image,
    });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller to update an existing project by ID
const updateProject = async (req, res) => {
  const { id } = req.params;
  const { title, description, technologies, demoLink, sourceCodeLink, image } =
    req.body;
  try {
    const project = await Project.findById(id);
    if (!project) return res.status(404).json({ message: "Project not found" });

    // Update the project if it exists
    project.title = title || project.title;
    project.description = description || project.description;
    project.technologies = technologies || project.technologies;
    project.liveLink = demoLink || project.liveLink;
    project.sourceCodeLink = sourceCodeLink || project.sourceCodeLink;
    project.image = image || project.image;

    const updatedProject = await project.save();
    res.json(updatedProject);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller to delete a project by ID
const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    // Validate the ID
    if (!id) return res.status(400).json({ message: "Invalid ID" });

    // Find the project by ID and delete it
    const project = await Project.findByIdAndDelete(id);
    if (!project) return res.status(404).json({ message: "Project not found" });

    res.json({ message: "Project deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getProjects, addProject, updateProject, deleteProject };
