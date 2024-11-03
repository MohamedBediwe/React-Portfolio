import Lottie from "lottie-react";
import DeveloperAnimation from "../animations/developer.json";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Landing() {
	return (
		<StyledLanding>
			<div className="left">
				<div className="avatar">
					<motion.img
						initial={{ transform: "scale(0)" }}
						animate={{ transform: "scale(1)" }}
						transition={{ damping: 7, type: "spring", stiffness: 100 }}
						src="./imgs/myImage.webp"
						alt="Mohamed Bediwe"
					/>
					<span className="icon-verified"></span>
				</div>
				<h1 className="mt-1">Mohamed Bediwe</h1>
				<h2 className="mt-1 blue">Fullstack Developer</h2>
				<p className="mt-1">
					I&apos;m skilled in React, PHP, MySQL, and GraphQL and love creating
					responsive, dynamic websites from concept to completion. With a strong
					foundation in both frontend and backend development, I strive to
					deliver seamless user experiences and high-performance applications.
					(Egypt).
				</p>
				<div className="icons flex gap-1 mt-1">
					<Link
						to="https://github.com/MohamedBediwe"
						target="_blank"
						className="icon-github icon"
					></Link>
					<Link
						to="https://www.linkedin.com/in/mohamed-bediwe-518596180/"
						className="icon-linkedin2"
						target="_blank"
					></Link>
					<Link
						to="https://wa.me/+201203290058"
						className="icon-whatsapp icon"
						target="_blank"
					></Link>
				</div>
			</div>
			<div className="right sm-hidden">
				<Lottie animationData={DeveloperAnimation} style={{ height: 400 }} />
			</div>
		</StyledLanding>
	);
}

const StyledLanding = styled.main`
	display: flex;

	.left {
		flex-grow: 1;
		max-width: 60%;
	}

	.avatar {
		min-height: 105px;
	}

	.avatar img {
		width: 100px;
		border-radius: 50%;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
		-ms-border-radius: 50%;
		-o-border-radius: 50%;
		border: 1px solid darkorange;
		padding: 1px;
		box-shadow: 2px 2px 10px var(--title) inset;
	}

	.avatar .icon-verified {
		color: var(--blue);
	}

	.left h1 {
		font-size: 2.85rem;
		line-height: 3.3rem;
		color: var(--title);
	}

	.left p {
		color: var(--subTitle);
		font-size: 0.9rem;
		line-height: 1.6rem;
	}

	.left .icons a {
		color: var(--subTitle);
		font-size: 1.4rem;
		transition: 0.3s;
		-webkit-transition: 0.3s;
		-moz-transition: 0.3s;
		-ms-transition: 0.3s;
		-o-transition: 0.3s;
	}

	.left .icons a:hover {
		font-size: 1.6rem;
		color: var(--title);
	}
`;

export default Landing;
