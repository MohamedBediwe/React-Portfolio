import React from "react";
import styled from "styled-components";

const ContactInfo = () => {
	return (
		<Styled_Div>
			<h1>Mohamed Bediwe</h1>
			<h2>Front End Developer</h2>
			<div className="info-item">
				<span role="img" aria-label="location">
					📍
				</span>{" "}
				Alexandria, Egypt
			</div>
			<div className="info-item">
				<span role="img" aria-label="email">
					✉️
				</span>{" "}
				mohamed.bediwe@gmail.com
			</div>
			<div className="info-item">
				<span role="img" aria-label="phone">
					📞
				</span>{" "}
				+201203290058
			</div>
			<div className="info-item">
				<span
					role="img"
					className="icon-social-linkedin icon"
					aria-label="linkedin"
				></span>
				Mohamed Bediwe
			</div>
			<div className="info-item">
				<span role="img" aria-label="birthday">
					📅
				</span>{" "}
				22/06/1999
			</div>
		</Styled_Div>
	);
};

const Styled_Div = styled.div`
	color: white;
	font-family: Arial, sans-serif;
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	.contact-info h1 {
		font-size: 1.8em;
		font-weight: bold;
		margin: 0;
	}

	.contact-info h2 {
		font-size: 1.2em;
		font-weight: normal;
		margin-top: 5px;
		margin-bottom: 15px;
	}

	.info-item {
		font-size: 1em;
		margin: 8px 0;
		display: flex;
		align-items: center;
	}

	.info-item span {
		margin-right: 8px;
		font-size: 1.2em;
	}
`;

export default ContactInfo;
