/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import styled from "styled-components";

function CV_Article(props) {
	const { color, heading, elements } = props;

	return (
		<article>
			<StyledTitle color={color}>{heading}</StyledTitle>
			<ul>
				{elements.map((element, index) => {
					return (
						<li key={index}>
							{element.title ? (
								<>
									{element.title}
									<br /> {element.body}
								</>
							) : (
								element
							)}
						</li>
					);
				})}
			</ul>
		</article>
	);
}
const StyledTitle = styled.div`
	font-weight: 700;
	width: fit-content;
	padding-bottom: 4px;
	border-bottom: 4px solid ${(props) => props.color};
	margin-bottom: 0.5rem;
	text-transform: capitalize;
	letter-spacing: 1px;
	color: ${(props) => props.color};
	font-size: 1.1rem;
`;
export default CV_Article;
