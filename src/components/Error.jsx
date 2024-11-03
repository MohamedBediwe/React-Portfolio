import { useRouteError, Link } from "react-router-dom";
import styled from "styled-components";

function Error() {
	const error = useRouteError();

	return (
		<StyledDiv>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>
					{
						// @ts-ignore
						error.statusText || error.message
					}
				</i>
			</p>
			<Link to="/">Return Home</Link>
		</StyledDiv>
	);
}

const StyledDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
	gap: 1rem;

	a {
		color: var(--blue);
		border: 1px solid salmon;
		padding: 10px 15px;
		transition: 0.3s;
		-webkit-transition: 0.3s;
		-moz-transition: 0.3s;
		-ms-transition: 0.3s;
		-o-transition: 0.3s;
		opacity: 0.7;
		font-size: 1rem;
	}

	a:hover {
		transform: scale(1.01);
		-webkit-transform: scale(1.01);
		-moz-transform: scale(1.01);
		-ms-transform: scale(1.01);
		-o-transform: scale(1.01);
		opacity: 1;
		font-size: 1.2rem;
	}
`;

export default Error;
