/* eslint-disable react-refresh/only-export-components */
import { CV_Article } from "../components";
import obj from "../components/ArticleElements.jsx";
import styled from "styled-components";

function CV() {
	return (
		<>
			<div>
				<StyledBtn>
					<a
						href="/cv.pdf"
						download="Mohamed-Bediwe_Fullstack-Developer_CV.pdf"
					>
						Download CV
					</a>
				</StyledBtn>
			</div>
			<Styled_CV>
				<aside>
					<article className="text-center">
						<h1 className="">Mohamed Bediwe</h1>
						<h2 className="mt-1">Fullstack Developer</h2>
						<p className="mt-1">
							<span className="icon-location"></span>
							<span className="ml-1">Alexandria, Egypt</span>
						</p>
						<p className="mt-1">
							<a href="mailto:mohamed.bediwe@gmail.com">
								<span className="icon-envelope"></span>
								<span>mohamed.bediwe@gamil.com</span>
							</a>
						</p>
						<p className="mt-1">
							<a href="https://wa.me/+201203290058">
								<span className="icon-mobile2"></span>
								<span>+201203290058</span>
							</a>
						</p>
						<p className="mt-1">
							<a
								href="https://linkedin.com/in/mohamed-bediwe-518596180"
								target="_blank"
							>
								<span className="icon-linkedin2"></span>
								<span>Mohamed Bediwe</span>
							</a>
						</p>
						<p className="mt-1">
							<a href="https://mohamed-bediwe.firebaseapp.com/" target="_blank">
								<img src="./imgs/user.svg" width="15px" />
								<span>Personal Portfolio</span>
							</a>
						</p>
						<p className="mt-1">
							<a href="https://github.com/MohamedBediwe" target="_blank">
								<span className="icon-github"></span>
								<span>Mohamed Bediwe</span>
							</a>
						</p>
						<p className="mt-1">
							<img src="./imgs/calendar.svg" width="15px" />
							<span className="ml-1">22/06/1999</span>
						</p>
					</article>
					<CV_Article
						color="#2F3556"
						heading="soft skills"
						elements={obj.skillsElements}
					/>
					<CV_Article
						color="#2F3556"
						heading="technical skills"
						elements={obj.technicalSkillsElements}
					/>
					<CV_Article
						color="#2F3556"
						heading="languages"
						elements={obj.languagesElements}
					/>
					<CV_Article
						color="#2F3556"
						heading="Education"
						elements={obj.educationElements}
					/>
				</aside>
				{/* right section */}
				<section>
					<CV_Article
						color="#2F3556"
						heading="summary"
						elements={obj.summaryElements}
					/>
					<CV_Article
						color="#2F3556"
						heading="Work History"
						elements={obj.workHistory}
					/>
				</section>
			</Styled_CV>
		</>
	);
}

const StyledBtn = styled.div`
	padding-left: 20px;
	a {
		margin: 0 10px;
		padding: 10px 20px;
		font-size: 16px;
		cursor: pointer;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 4px;
		transition: background-color 0.3s;
	}

	a:hover {
		background-color: #0056b3;
	}
`;

const Styled_CV = styled.main`
	display: flex;

	aside {
		width: 40%;
		background-color: #d9e2e9;
		padding: 1.5rem;
		color: #2f3556;
		padding-left: 2rem;

		h2 {
			font-weight: 500;
			letter-spacing: 0.5px;
		}

		> article:first-of-type {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		h1 {
			font-size: 2rem;
		}

		a {
			color: #2f3556;
			display: flex;
			gap: 10px;
		}
	}

	// right section
	> section {
		width: 60%;
		padding: 1.5rem;
		background-color: white;
		padding-left: 2rem;
		ul {
			color: #0e0e0e;
		}
	}
	article {
		margin-bottom: 1rem;
		ul {
			list-style-type: disc;
			margin-left: 1rem;

			li {
				margin-bottom: 0.7rem;
				line-height: 1.25;
			}
		}

		hr {
			margin-top: 1rem;
			border-top: 3px solid #2f3556;
		}
	}
`;

export default CV;
