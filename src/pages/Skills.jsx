import styled from "styled-components";

const mySkills = [
	{ image: "./imgs/html.webp", name: "HTML" },
	{ image: "./imgs/css.webp", name: "CSS" },
	{ image: "./imgs/js.webp", name: "JavaScript" },
	{ image: "./imgs/react.svg", name: "React.js" },
	{ image: "./imgs/tailwindcss.svg", name: "TailwindCss" },
	{ image: "./imgs/bootstrap.svg", name: "Bootstrap" },
	{ image: "./imgs/php.svg", name: "PHP" },
	{ image: "./imgs/mysql.png", name: "MySQL" },
	{ image: "./imgs/git.webp", name: "Git" },
	{ image: "./imgs/github.webp", name: "Github" },
	{
		image: "./imgs/graphql.svg",
		name: "GraphQL",
	},
];

function Skills() {
	return (
		<StyledSection>
			{mySkills.map(({ name, image }) => {
				return (
					<div className="skill" key={name}>
						<img src={image} alt={name} />
						<h3>{name}</h3>
					</div>
				);
			})}
		</StyledSection>
	);
}

const StyledSection = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
	flex-wrap: wrap;

	.skill {
		display: flex;
		flex-direction: column;
		height: 200px;
		justify-content: space-around;
		align-items: center;
		border: 2px solid var(--blue);
		padding-block: 10px;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
		background-color: var(--secondry);
		width: 175px;
		max-width: 200px;
		img {
			max-width: 75%;
			max-height: 100px;
		}
		h3 {
			font-size: 1.2em;
			color: var(--blue);
		}
		&:hover {
			transform: translate(5px, -5px);
			box-shadow: -8px 8px 0px var(--blue);
		}
	}
`;

export default Skills;
