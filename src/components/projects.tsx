import React from "react";

const projects = [
  {
    title: "project1",
    description: "description",
    image:
      "https://images.unsplash.com/photo-1725370569259-b7f67699ecb0?q=80&w=2545&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "project2",
    description: "description",
    image:
      "https://images.unsplash.com/photo-1731412924028-204b15ca8f1d?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "project3",
    description: "description",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    title: "project4",
    description: "description",
    image:
      "https://images.unsplash.com/photo-1725830826396-bcb0585da085?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "project5",
    description: "description",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    title: "project6",
    description: "description",
    image:
      "https://images.unsplash.com/photo-1725830826396-bcb0585da085?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Projects = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
      {" "}
      {projects.map(({ title, description, image }) => (
        <div
          key={title}
          className="group z-0 mt-8 text-base focus:outline-none"
        >
          <div className="relative -z-10 aspect-video w-full bg-tertiary bg-cover bg-center">
            <img
              src={image}
              alt={title}
              width={500}
              height={500}
              className="z-0 w-full h-full object-cover"
              loading="lazy"
            />
            <img
              src={image}
              alt={title}
              width={500}
              height={500}
              className="absolute left-0 top-0 -z-10 h-full w-full object-cover opacity-0 blur-3xl saturate-200 duration-300 sm:group-hover:opacity-75 sm:group-focus:opacity-75"
              loading="lazy"
            />
          </div>
          <h1 className="group-hover:underline">{title}</h1>
          <h1>{description}</h1>
        </div>
      ))}
    </div>
  );
};

export default Projects;
