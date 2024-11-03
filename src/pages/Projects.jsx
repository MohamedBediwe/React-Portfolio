import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import projects from "../components/projectsArray";
import styled from "styled-components";

function Projects() {
	const [shownProjects, setShownProjects] = useState("all");

	return (
		<StyledProjects className="flex gap-1">
			<aside>
				<button
					className={shownProjects === "all" ? "active" : ""}
					onClick={() => setShownProjects("all")}
				>
					All Projects
				</button>
				<button
					className={shownProjects === "HTML + CSS" ? "active" : ""}
					onClick={() => setShownProjects("HTML + CSS")}
				>
					HTML + CSS
				</button>
				<button
					className={shownProjects === "HTML + CSS + JS" ? "active" : ""}
					onClick={() => setShownProjects("HTML + CSS + JS")}
				>
					HTML + CSS + JS
				</button>
				<button
					className={shownProjects === "React.js" ? "active" : ""}
					onClick={() => setShownProjects("React.js")}
				>
					React.js
				</button>
				<button
					className={shownProjects === "PHP + MySQL" ? "active" : ""}
					onClick={() => setShownProjects("PHP + MySQL")}
				>
					PHP + MySQL
				</button>
			</aside>
			<section className="projects flex justify-center">
				<AnimatePresence>
					{projects
						.filter((project) => {
							if (shownProjects === "all") return true;
							else if (project.techs.includes(shownProjects)) return true;
						})
						.map((project, index) => {
							return (
								<motion.article
									layout
									initial={{ transform: "scale(0)" }}
									animate={{ transform: "scale(1)" }}
									transition={{ type: "spring", damping: 7, stiffness: 70 }}
									whileHover={{ transform: "rotate(1deg) scale(1.01)" }}
									key={index}
								>
									<img src={project.image} alt={project.title} />
									<h3 className="px-1 mt-1">{project.title}</h3>
									<p className="px-1 mt-1">{project.description}</p>
									<div className="px-1 mt-1 mb-1">
										<a
											href={project.preview}
											target="_blank"
											rel="noopener noreferrer"
											className="icon-remove_red_eye"
										></a>
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="icon-github"
										></a>
									</div>
									<div>
										{/* <a href={`/${project.title}`} className="flex">
											more
											<span className="icon-arrow-right-thick"></span>
										</a> */}
									</div>
								</motion.article>
							);
						})}
				</AnimatePresence>
			</section>
		</StyledProjects>
	);
}

const StyledProjects = styled.section`
	aside {
		margin-right: 30px;
		min-width: fit-content;
	}

	aside button {
		margin-bottom: 1rem;
		padding: 10px 15px;
		background-color: #000;
		border-radius: 10px;
		-webkit-border-radius: 10px;
		-moz-border-radius: 10px;
		-ms-border-radius: 10px;
		-o-border-radius: 10px;
		text-align: center;
		display: block;
		width: 100%;
		opacity: 0.75;
		color: #f7f7f7;
	}

	aside button:hover {
		opacity: 0.9;
		border: 1px solid var(--blue);
	}

	aside button.active {
		border: 1px solid var(--blue);
		opacity: 1;
	}

	section.projects {
		padding: 0;
		flex-wrap: wrap;
		gap: 1.5rem 1rem;
		flex-grow: 1;
	}

	section.projects::after {
		all: unset;
	}

	section.projects article {
		border-radius: 5px;
		-webkit-border-radius: 5px;
		-moz-border-radius: 5px;
		-ms-border-radius: 5px;
		-o-border-radius: 5px;
		border: 1px solid #1787e05e;
		width: 250px;
		transition: 0.2s;
		-webkit-transition: 0.2s;
		-moz-transition: 0.2s;
		-ms-transition: 0.2s;
		-o-transition: 0.2s;
		box-shadow: 1px 1px 10px #ffffff13 inset;
		position: relative;
		background-color: var(--primary);
	}

	section.projects article:hover {
		transform: rotate(1deg) scale(1.01);
		-webkit-transform: rotate(1deg) scale(1.01);
		-moz-transform: rotate(1deg) scale(1.01);
		-ms-transform: rotate(1deg) scale(1.01);
		-o-transform: rotate(1deg) scale(1.01);
		border-color: var(--blue);
	}

	section.projects article img {
		width: 100%;
		height: 150px;
		border-radius: 5px 5px 0px 0px;
		-webkit-border-radius: 5px 5px 0px 0px;
		-moz-border-radius: 5px 5px 0px 0px;
		-ms-border-radius: 5px 5px 0px 0px;
		-o-border-radius: 5px 5px 0px 0px;
	}

	section.projects article p {
		font-size: 0.8rem;
		color: var(--subTitle);
	}

	section.projects article a {
		font-size: 1.5rem;
		color: var(--subTitle);
		margin-right: 10px;
		transition: 0.3s;
		-webkit-transition: 0.3s;
		-moz-transition: 0.3s;
		-ms-transition: 0.3s;
		-o-transition: 0.3s;
	}

	section.projects article a:hover {
		color: var(--blue);
		font-size: 1.6rem;
	}

	section.projects article div:last-child {
		position: absolute;
		text-align: center;
		right: 0;
		bottom: 20px;
	}

	section.projects article div:last-child a {
		font-size: 0.9rem;
		color: var(--blue);
		line-height: 1;
	}

	section.projects article div:last-child a span {
		margin-left: 5px;
	}

	@media (max-width: 767px) {
		flex-direction: column;

		aside {
			display: flex;
			flex-wrap: wrap;
			gap: 0.5rem;
			justify-content: center;
		}

		aside button {
			width: fit-content;
			margin: 0;
		}
	}
`;

export default Projects;
