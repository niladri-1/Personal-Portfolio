import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

	const projects = [
		{
			title: "Facebook Clone",
			description: "Front end",
			imgUrl: projImg1,
		},
		{
			title: "Email Spam Classification",
			description: "Python Program",
			imgUrl: projImg2,
		},
		{
			title: "Restaurant Website",
			description: "Front-End & Little bit Backend",
			imgUrl: projImg3,
		},
		{
			title: "Traveling Website",
			description: "Frontend",
			imgUrl: projImg4,
		},
		{
			title: "Adidas Landing Page",
			description: "Design & Development",
			imgUrl: projImg5,
		},
		{
			title: "Netflix Clone Page",
			description: "Design & Development",
			imgUrl: projImg6,
		},
		{
			title: "Simplex Web Clone",
			description: "Design & Development",
			imgUrl: projImg7,
		},
		{
			title: "Driving Website",
			description: "Frontend & Bootstrap",
			imgUrl: projImg8,
		},
	];

	return (
		<section className="project" id="projects">
			<Container>
				<Row>
					<Col size={12}>
						<TrackVisibility>
							{({ isVisible }) =>
								<div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
									<h2>Projects</h2>
									<p>As a college student, I undertook diverse projects, including a driving website, Simplex web clone, Netflix clone page, Adidas landing page, traveling website, restaurant website, email spam classification, and Facebook clone, showcasing my versatile skills.</p>
									<Tab.Container id="projects-tabs" defaultActiveKey="first">
										<Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
											<Nav.Item>
												<Nav.Link eventKey="first">Tab 1</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="second">Tab 2</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="third">Tab 3</Nav.Link>
											</Nav.Item>
										</Nav>
										<Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
											<Tab.Pane eventKey="first">
												<Row>
													{
														projects.map((project, index) => {
															return (
																<ProjectCard
																	key={index}
																	{...project}
																/>
															)
														})
													}
												</Row>
											</Tab.Pane>
											<Tab.Pane eventKey="second">
												<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
											</Tab.Pane>
											<Tab.Pane eventKey="third">
												<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
											</Tab.Pane>
										</Tab.Content>
									</Tab.Container>
								</div>}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
			<img className="background-image-right" src={colorSharp2}></img>
		</section>
	)
}
