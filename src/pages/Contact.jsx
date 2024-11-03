import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import DoneAnimation from "../animations/done.json";
import ContactAnimation from "../animations/contact.json";
import styled from "styled-components";

function Contact() {
	const [state, handleSubmit] = useForm("xqazqnwd");

	return (
		<StyledContact>
			<div className="header">
				<h1 className="mb-1">
					<span className="icon-envelope"></span>
					<span>Contact Me</span>
				</h1>
				<p className="mb-1">
					Contact me for more information about my current status, or schedule
					an interview with me.
				</p>
			</div>
			<div className="flex align-center gap-1 space-between">
				<div className="left">
					<form onSubmit={handleSubmit}>
						<div className="mb-1 flex align-center gap-1">
							<label htmlFor="email">Email Address:</label>
							<input
								autoComplete="off"
								required
								type="email"
								name="email"
								placeholder="Email Address"
								id="email"
							/>
							<ValidationError
								prefix="Email"
								field="email"
								errors={state.errors}
							/>
						</div>
						<div className="mb-1 flex align-center gap-1">
							<label htmlFor="message">Your Message:</label>
							<textarea
								required
								name="message"
								placeholder="Message"
							></textarea>
							<ValidationError
								prefix="Message"
								field="message"
								errors={state.errors}
							/>
						</div>
						<div className="submit">
							<button type="submit" disabled={state.submitting}>
								{state.submitting ? "Submitting..." : "Submit"}
							</button>
						</div>

						{state.succeeded && (
							<p className="mt-1 green flex align-center">
								<span style={{ width: 67 }} className="sm-hidden">
									<Lottie
										loop={false}
										animationData={DoneAnimation}
										style={{ height: 55, width: 100 }}
									/>
								</span>
								<span>Your Message has been sent successfully 👌.</span>
							</p>
						)}
					</form>
				</div>
				<div className="right sm-hidden">
					<Lottie animationData={ContactAnimation} />
				</div>
			</div>
		</StyledContact>
	);
}

const StyledContact = styled.section`
	.header {
		width: 100%;
		flex-grow: 1;
	}
	h1 span:first-child {
		margin-right: 10px;
		color: var(--subTitle);
	}

	p {
		color: var(--subTitle);
		font-size: 0.9rem;
	}

	form input,
	form textarea {
		all: unset;
		padding: 10px;
		border-radius: 5px;
		-webkit-border-radius: 5px;
		-moz-border-radius: 5px;
		-ms-border-radius: 5px;
		-o-border-radius: 5px;
		background-color: rgba(63, 63, 70, 0.15);
		border: 1px solid rgb(63 63 70);
		min-width: 250px;
		transition: 0.3s;
		-webkit-transition: 0.3s;
		-moz-transition: 0.3s;
		-ms-transition: 0.3s;
		-o-transition: 0.3s;
		font-size: 1.1rem;
	}

	form input,
	form textarea {
		background-color: var(--primary);
	}

	form textarea {
		min-height: 11rem;
	}

	form input:focus,
	form textarea:focus {
		border: 1px solid rgb(45 212 191);
	}

	form input:hover,
	form textarea:hover {
		border: 1px solid rgb(45 212 191);
	}

	form button {
		background-color: #050505;
		padding: 10px;
		border-radius: 5px;
		-webkit-border-radius: 5px;
		-moz-border-radius: 5px;
		-ms-border-radius: 5px;
		-o-border-radius: 5px;
		width: 7rem;
		text-align: center;
		font-size: 1.1rem;
		transition: 0.3s;
		-webkit-transition: 0.3s;
		-moz-transition: 0.3s;
		-ms-transition: 0.3s;
		-o-transition: 0.3s;
		border: 1px solid rgb(63 63 70);
		color: #fefefe;
	}

	form button:hover {
		scale: 0.98;
		border: 1px solid rgb(45 212 191);
	}

	form button:disabled {
		cursor: not-allowed;
		opacity: 0.4;
	}

	p.green {
		color: #27ee2e;
	}

	.light p.green {
		color: #006712;
	}

	.right div svg {
		max-height: 350px;
	}

	@media (max-width: 767px) {
		div.flex {
			flex-direction: column;
			align-items: flex-start;
			margin-inline: auto;
			width: fit-content;
		}
		.left {
			margin-inline: auto;
		}
		.left div {
			width: 100%;
		}
		.left .submit button,
		form input,
		form textarea {
			width: 98%;
			padding: 10px 0 10px 10px;
			min-width: 220px;
			width: 100%;
		}
	}
`;

export default Contact;
