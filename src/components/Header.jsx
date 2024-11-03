import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
	const [showModal, setShowModal] = useState(false);
	const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");

	useEffect(() => {
		document.body.classList.add(theme);
	}, [theme]);

	const changeTheme = () => {
		if (theme === "dark") {
			setTheme("light");
			localStorage.setItem("theme", "light");
			document.body.classList.remove("dark");
			document.body.classList.add("light");
		} else {
			setTheme("dark");
			localStorage.setItem("theme", "dark");
			document.body.classList.remove("light");
			document.body.classList.add("dark");
		}
	};
	return (
		<StyledHeader className="flex gap-1 align-center">
			<button
				onClick={() => setShowModal(true)}
				className="menu icon-menu circle border"
			></button>
			<div className="logo">
				<h2>Bediwe</h2>
			</div>
			<nav>
				<ul className="flex gap-1">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/projects">Projects</Link>
					</li>
					<li>
						<Link to="/skills">Skills</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>
						<Link to="/cv">CV</Link>
					</li>
				</ul>
			</nav>
			<div className="logo second">
				<h2>Bediwe</h2>
			</div>
			<button onClick={() => changeTheme()} className="border circle mode flex">
				<span className={theme === "dark" ? "icon-moon-o" : "icon-sun"}></span>
			</button>
			{showModal && (
				<div className="fixed">
					<ul className="modal">
						<li>
							<button
								className="icon-clear close"
								onClick={() => setShowModal(false)}
							></button>
						</li>
						<li>
							<Link to="/">Home</Link>
						</li>

						<li>
							<Link to="/projects">Projects</Link>
						</li>
						<li>
							<Link to="/skills">Skills</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
						<li>
							<Link to="/cv">CV</Link>
						</li>
					</ul>
				</div>
			)}
		</StyledHeader>
	);
}

const StyledHeader = styled.header`
	/* 
==============================
------Table of Content--------
==============================
1. Header Design      
2. Nav Links          
3. Pop up Modal       
4. Dark & Light Mode  
5. Scale Animation    
6. Media Queries     
*/

	/* 1. Header Design */

	padding-block: 10px;
	justify-content: space-between;
	padding-inline: 2.4rem;

	/* 2. Nav Links */

	ul {
		justify-content: space-between;
	}

	ul li a {
		color: var(--title);
		opacity: 0.9;
		font-size: 0.85rem;
		font-weight: 500;
		transition: 0.2s;
		-webkit-transition: 0.2s;
		-moz-transition: 0.2s;
		-ms-transition: 0.2s;
		-o-transition: 0.2s;
	}

	ul li a:hover {
		color: var(--blue);
		font-size: 0.9rem;
		opacity: 1;
	}

	nav {
		background-color: var(--primary);
		padding: 0.77rem 1.6rem;
		border-radius: 55px;
		-webkit-border-radius: 55px;
		-moz-border-radius: 55px;
		-ms-border-radius: 55px;
		-o-border-radius: 55px;
		box-shadow: 2px 2px 20px #3333333d;
	}

	> button.menu {
		display: none;
	}

	button {
		font-size: 1.2rem;
	}

	/* 3. Pop Up Modal */

	.fixed {
		position: fixed;
		inset: 0;
		background-color: #44444475;
		z-index: 100;
		backdrop-filter: blur(4px);
	}

	.fixed ul.modal {
		width: 75%;
		margin-inline: auto;
		margin-top: 1.5rem;
		border-radius: 1rem;
		-webkit-border-radius: 1rem;
		-moz-border-radius: 1rem;
		-ms-border-radius: 1rem;
		-o-border-radius: 1rem;
		padding: 1rem 2rem;
		background-color: var(--secondry);
		position: relative;
		animation: scale 0.7s;
		-webkit-animation: scale 0.7s;
	}

	.fixed ul.modal li {
		border-bottom: 1px solid var(--subTitle);
		padding-block: 1rem;
	}

	.fixed ul.modal li:last-child {
		border-bottom: none;
	}

	.fixed ul.modal li:first-child {
		position: absolute;
		right: 2rem;
		border-bottom: none;
		top: -0.5rem;
	}

	.fixed .modal .close {
		color: var(--subTitle);
		transition: 0.5s;
		-webkit-transition: 0.5s;
		-moz-transition: 0.5s;
		-ms-transition: 0.5s;
		-o-transition: 0.5s;
		font-size: 1.5rem;
		font-weight: 700;
		padding: 4px;
	}

	.fixed .modal .close:hover {
		transform: rotate(180deg);
		-webkit-transform: rotate(180deg);
		-moz-transform: rotate(180deg);
		-ms-transform: rotate(180deg);
		-o-transform: rotate(180deg);
		color: crimson;
		font-size: 1.8rem;
	}

	/* 4. Dark & Light Mode */

	button.menu,
	button.mode {
		padding: 10px;
		color: var(--subTitle);
		transition: 0.2s;
		-webkit-transition: 0.2s;
		-moz-transition: 0.2s;
		-ms-transition: 0.2s;
		-o-transition: 0.2s;
		box-shadow: 1px 1px 5px #3333333d;
	}

	button.menu:hover,
	button.mode:hover {
		color: var(--title);
		border-color: salmon;
	}

	.icon-sun {
		color: rgb(255 165 0);
	}

	/* 5. Animations */

	@keyframes scale {
		0% {
			scale: 0;
		}

		60% {
			scale: 1.2;
		}

		100% {
			scale: 1;
		}
	}

	/* 6. Media Queries */

	@media (max-width: 768px) {
		nav {
			display: none;
		}

		> div:first-of-type {
			display: none;
		}

		> button.menu {
			display: flex;
		}
	}

	.logo {
		&.second {
			@media (min-width: 768px) {
				display: none;
			}
		}
		cursor: default;
		position: relative;
		overflow: hidden;
		width: 92px;
		height: 30px;
		&::before {
			content: "Bediwe";
			text-transform: uppercase;
			color: #d95252;
			position: absolute;
			left: -100px;
			transition: all 0.5s;
			-webkit-transition: all 0.5s;
			-moz-transition: all 0.5s;
			-ms-transition: all 0.5s;
			-o-transition: all 0.5s;
			font-weight: bold;
			font-size: 1.5em;
		}
		h2 {
			color: #d95252;
			text-transform: uppercase;
			transition: all 0.5s;
			-webkit-transition: all 0.5s;
			-moz-transition: all 0.5s;
			-ms-transition: all 0.5s;
			-o-transition: all 0.5s;
			position: absolute;
			left: 0;
		}
		&:hover {
			h2 {
				left: 100px;
			}
			&::before {
				left: 0;
			}
		}
	}
`;

export default Header;
