import React, { useEffect, useRef, useState } from 'react';

// import { InstagramEmbed } from 'react-social-media-embed';

// stylesheets
import './App.css';
import './style/about_me.css';
import './style/education.css';
import './style/experience.css';
import './style/projects.css';
import './style/social_media.css';

// typescript functions
import {InfoSection} from './components/section';
// import {RelevantCoursework} from './components/relevant_courses';
import {Experience} from './components/experience';
// import {Projects} from './components/projects';
// import {SocialMedia} from './components/social_media';

// images to be used
import galaxy_banner from './content/Anna_nyc_edge_2_cropped.jpg';
import instagram_reel_jade_restaurant from './content/Insta_Reel_Jade_Restaurant.jpg';
import instagram_reel_lazarus_brew from './content/Insta_Reel_Lazarus_Brewing.jpg';
import instagram_reel_cranky_granny from './content/Insta_Reel_Cranky_Grannys.jpg';
import instagram_reel_bouquet_building from './content/Insta_Reel_Bouquet_Building.jpg';
import instagram_reel_chilantro from './content/Insta_Reel_Chilantro.jpg';
import instagram_reel_ciao_austin from './content/Insta_Reel_Ciao_Austin.jpg';
import instagram_reel_cinnaholic from './content/Insta_Reel_Cinnaholic.jpg';
import instagram_reel_cookie_wookie from './content/Insta_Reel_Cookie_Wookie.jpg';
import instagram_reel_cranky_granny_1 from './content/Insta_Reel_Cranky_Grannys_1.jpg';
import instagram_reel_crawfish_boil from './content/Insta_Reel_Crawfish_Boil.jpg';
import instagram_reel_east_side_golf from './content/Insta_Reel_East_Side_Mini_Open.jpg';
import instagram_reel_fairways from './content/Insta_Reel_Fairways.jpg';
import instagram_reel_fat_city_stacks from './content/Insta_Reel_Fat_City_Stacks.jpg';
import instagram_reel_islas_canarias from './content/Insta_Reel_Islas_Canarias.jpg';
import instagram_reel_la_popular from './content/Insta_Reel_La_Popular.jpg';
import instagram_reel_moic from './content/Insta_Reel_Museum_of_Ice_Cream.jpg';
import instagram_reel_omg_squee from './content/Insta_Reel_OMG_Squee.jpg';
import instagram_reel_peach_bum from './content/Insta_Reel_Peach_Bum.jpg';
import instagram_reel_salsa_limon from './content/Insta_Reel_Salsa_Limon.jpg';
import instagram_reel_san_pellegrino from './content/Insta_Reel_San_Pellegrino.jpg';
import instagram_reel_stride from './content/Insta_Reel_Stride.jpg';
import instagram_reel_surreal_garden from './content/Insta_Reel_Surreal_Garden.jpg';
import instagram_reel_sweet_water_oysters from './content/Insta_Reel_Sweetwater_Oysters.jpg';
import instagram_reel_taquero_mucho from './content/Insta_Reel_Taquero_Mucho.jpg';
import instagram_reel_tenten from './content/Insta_Reel_Ten_Ten.jpg';
import instagram_reel_tonys_jamaican from './content/Insta_Reel_Tonys_Jamaican.jpg';
import instagram_reel_Yelp_Review_2022 from './content/Insta_Reel_Yelp_Review_2022.jpg';
import instagram_reel_boxt from './content/Insta_Reel_Boxt.jpg';

function App() {

	const [resume_cont, setResume_cont] = useState([]);

	const resume_arr = [
		JSON.stringify({
			"employer": "The Carlson Lawfirm",
			"location": "Austin, TX",
			"duration": "July 2023 – Present",
			"position": "Paralegal",
			"description": [
				"Assist attorneys in personal injury cases.",
				"Write and revise legal demands.",
				"Provide support to clients that desire to be represented by the Carlson Lawfirm."
			]
		}),
		JSON.stringify({
			"employer": "Yelp",
			"location": "Austin, TX",
			"duration": "February 2022 – July 2023",
			"position": "Community & Marketing Intern",
			"description": [
				"Co-planned more than 20+ events for the Yelp Austin Community for over 2,000 Yelp Elites",
				"Co-led pitches and communication between Austin businesses and Yelp Austin Community Team",
				"Content created for Yelp page, blogs, collections and Instagram has had over 15K+ impressions"
			]
		}),
		JSON.stringify({
			"employer": "CCR Legal",
			"location": "Austin, TX",
			"duration": "January 2022 – January 2023",
			"position": "Clerk/Administrative Associate",
			"description": [
				"Arranged subpoenas and affidavits for over 200+ custodians",
				"Managed invoices, wrote and printed checks utilizing QuickBooks Software",
				"Utilized MR8 Software to track records, client information, custodian information and legal documents"
			]
		}),
		JSON.stringify({
			"employer": "Annie's List",
			"location": "Austin, TX",
			"duration": "January 2022 – June 2022",
			"position": "Communications Intern",
			"description": [
				"Assisted in tracking stories for 15+ woman candidates through news sources",
				"Monitored and analyzed media engagement for woman candidates through Instagram and Twitter",
				"Researched and drafted content for social media, emails, press releases and website",
			]
		}),
		JSON.stringify({
			"employer": "American Red Cross",
			"location": "New York, NY",
			"duration": "September 2021 – January 2022",
			"position": "Marketing Intern",
			"description": [
				"Researched local/national news for potential ‘hero’ award recipients in the NYC metro area",
				"Produced social media posts for Instagram and Twitter which had over 5K+ impressions",
				"Created infographics for donors in the areas of home-fire and disaster prevention for the ARC Gala",
			]
		}),
		JSON.stringify({
			"employer": "NYU Grossman School of Medicine",
			"location": "New York, NY",
			"duration": "September 2021 – January 2022",
			"position": "Research Intern",
			"description": [
				"Was part of the research team on the study of children’s bilingual education in low-income communities of NYC",
				"Decoded over 100+ audio clips by translating and using proper coding terms to analyze data",
				"Co-authored and edited research report on children bilingual education",
			]
		}),
		JSON.stringify({
			"employer": "LBJ School of Public Affairs",
			"location": "Austin, TX",
			"duration": "September 2021 – January 2022",
			"position": "Graphic Design Intern",
			"description": [
				"Developed, drafted, and created 10+ report covers for Dr. Eaton’s policy research",
				"Assisted Dr. Eaton with 20+ graduate student Summer course by assisting with technological aspects",
				"Created and designed marketing materials for policy projects and course certificates for graduate students",
			]
		}),
		JSON.stringify({
			"employer": "Liberal Arts Career Services",
			"location": "Austin, TX",
			"duration": "August 2019 – May 2020",
			"position": "Clerical Assistant",
			"description": [
				"Informed and facilitated the scheduling of over 1,000 students in the College of Liberal Arts",
				"Implemented a weekly newsletter to keep students up to date with liberal arts events and job/internship fairs"
			]
		})
	];

	const navbarOffset = useRef(0);

	useEffect(() => {
		window.addEventListener("resize", () => {

			// assign value of navbar offset based on static element
			const portfolio_title = document.getElementById("pre-tabs-static");
			if(portfolio_title) {
				const title_offset = portfolio_title.offsetTop;
				const title_height = portfolio_title.offsetHeight;
				const title_margin = Number.parseFloat(window.getComputedStyle(portfolio_title).marginTop);

				navbarOffset.current = title_offset + title_height + title_margin;
			}
		})
	}, []);

	return (
		<div className="page-body-container">

			{/* Navigation Bar */}
			<div className="portfolio-header" id="tabs">
				<div className="portfolio-name-container">
					<h1 className="portfolio-name">
						Anna Cristina Gonzalez
					</h1>
				</div>
				<div className="nav-bar-container">
					<ul className="nav-bar">
						<li className="nav-tab-container">
							<button
								className="nav-tab"
								onClick={() => document.getElementById('about-me')?.scrollIntoView()}>
								about me
							</button>
						</li>
						<li className="nav-tab-container">
							<button
								className="nav-tab"
								onClick={() => document.getElementById('academics')?.scrollIntoView()}>
								academics
							</button>
						</li>
						<li className="nav-tab-container">
							<button
								className="nav-tab"
								onClick={() => document.getElementById('experience')?.scrollIntoView()}>
								resume
							</button>
						</li>
						<li className="nav-tab-container">
							<button
								className="nav-tab"
								onClick={() => document.getElementById('projects')?.scrollIntoView()}>
								social media
							</button>
						</li>
						<li className="nav-tab-container">
							<button
								className="nav-tab"
								onClick={() => document.getElementById('socials')?.scrollIntoView()}>
								analytics
							</button>
						</li>
						<li className="nav-social-container">
							<a
								className="media-logo-container"
								href="https://www.facebook.com/profile.php?id=100033010072606"
								rel="noreferrer"
								target="_blank">
								<svg className="media-logo" version="1.1" viewBox="0 0 32 32">
									<path
										d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z">
									</path>
								</svg>
							</a>
						</li>
						<li className="nav-social-container">
							<a
								className="media-logo-container"
								href="https://www.instagram.com/Anna_gonzalez01/"
								rel="noreferrer"
								target="_blank">
								<svg className="media-logo" version="1.1" viewBox="-1 -1 32 32">
									<path
										d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z">
									</path>
								</svg>
							</a>
						</li>
						<li className="nav-social-container">
							<a
								className="media-logo-container"
								href="https://twitter.com/AnnaGonzalez01"
								rel="noreferrer"
								target="_blank">
								<svg className="media-logo" version="1.1" viewBox="-3 -3 25 25">
									<path
										d="M17.316 6.246c0.008 0.162 0.011 0.326 0.011 0.488 0 4.99-3.797 10.742-10.74 10.742-2.133 0-4.116-0.625-5.787-1.697 0.296 0.035 0.596 0.053 0.9 0.053 1.77 0 3.397-0.604 4.688-1.615-1.651-0.031-3.046-1.121-3.526-2.621 0.23 0.043 0.467 0.066 0.71 0.066 0.345 0 0.679-0.045 0.995-0.131-1.727-0.348-3.028-1.873-3.028-3.703 0-0.016 0-0.031 0-0.047 0.509 0.283 1.092 0.453 1.71 0.473-1.013-0.678-1.68-1.832-1.68-3.143 0-0.691 0.186-1.34 0.512-1.898 1.861 2.285 4.644 3.787 7.781 3.945-0.064-0.277-0.097-0.564-0.097-0.861 0-2.084 1.689-3.773 3.774-3.773 1.086 0 2.067 0.457 2.756 1.191 0.859-0.17 1.667-0.484 2.397-0.916-0.282 0.881-0.881 1.621-1.66 2.088 0.764-0.092 1.49-0.293 2.168-0.594-0.506 0.758-1.146 1.422-1.884 1.953z">
									</path>
								</svg>
							</a>
						</li>
						<li className="nav-inquire-contaier">
							<a
								className="nav-inquire-link"
								href="https://mail.google.com/mail/?view=cm&source=mailto&to=annawhereinaustin@gmail.com"
								rel="noreferrer"
								target="_blank">
								<button className="nav-tab-inquire">
									inquire
								</button>
							</a>
						</li>
					</ul>
				</div>
			</div>

			{/* Banner and Profile Pictures */}
			<div className="banner-container">
				<div className="banner" style={{ backgroundImage: `url(${galaxy_banner})`}}></div>
				<div className="banner" style={{ display: "flex", alignItems: "center", textAlign: "center"}}>
					<p style={{width: "100%"}}>
						Design,<br/>
						Create,<br/>
						Post!<br/>
					</p>
				</div>
			</div>

			<div className="portfolio-content-container">

				<div className="portfolio-content">
					
					{/* About Me Section */}
					<div id="about-me"></div>
					<div className="info-section-container" style={{backgroundColor: "white"}}>
						<InfoSection
							section_title={
								JSON.stringify({
									"text": "",
									"font-family": "",
									"font-size": ""
								})
							}
							section_content={
								<>
									<div className="me-side-by-side">
										<div className="me-image-container">
											<img className='me-image' alt="Jan Profile" src={require("./content/Anna_nyc_edge_1.jpg")}></img>
										</div>
										<div className="me-desc-container">
											<div>
												<div className="me-desc" style={{fontWeight: "bold"}}>Anna Cristina Gonzalez</div>
												<div className="me-desc" style={{fontStyle: "italic"}}>B.S. in Political Communications</div>
												<div className="me-desc" style={{fontStyle: "italic"}}>B.A. in Rhetoric & Writing</div>
												<div className="me-desc" style={{fontStyle: "italic"}}>
													Hello, I am a recent college graduate with degree in Political Communications and Rhetoric & Writing.
												</div>
											</div>
										</div>
									</div>
								</>
							}
						/>
					</div>

					{/* Education Section */}
					<div id="academics"></div>
					<div className="info-section-container" style={{backgroundColor: "#C05600"}}>
						<InfoSection
							section_title={
								JSON.stringify({
									"text": "The University of Texas at Austin",
									"font-family": "Georgia, 'Times New Roman', Times, serif",
									"font-size": "4vw",
									"font-color": "#FFFFFF"
								})
							}
							section_content={
								<>
									<div className="edu-side-by-side">
										<div className="edu-image-container">
											<img className="edu-image" src={require("./content/UT_Austin_Emblem.png")} alt="UT Austin"></img>
										</div>
										<div className="edu-desc-container">
											<div className="edu-desc">
												I recently received a Bachelor of Science in Political Communications
												and a Bachelor of Arts in Rhetoric & Writing
												from the University of Texas at Austin. I graduated with Honors and
												currently getting ready to apply to Law School.
											</div>
										</div>
									</div>
								</>
							}
						/>
					</div>
					
					{/* Experience Section */}
					<div id="experience"></div>
					<button
						id="show-resume-button"
						className="show-resume-button"
						onClick={
							(e) => {
								const resume_section = document.getElementById("resume-section");
								if(resume_section) {
									// resume_section.style.display = "block";
									// console.log(resume_section.style.opacity);

									if(resume_section.style.height === "0") {
										resume_section.style.height = "auto";
									}
									else if(resume_section.style.height === "auto") {
										resume_section.style.height = "0";
									}

									if(resume_section.style.opacity === "0") {
										resume_section.style.opacity = "1";
									}
									else if(resume_section.style.opacity === "1") {
										resume_section.style.opacity = "0";
									}
									const resume_section_button = document.getElementById("show-resume-button");
									if(resume_section_button) {
										if(resume_section_button.innerText === "See Resume") {
											resume_section_button.innerText = "Hide Resume";
											const new_resume:any = [];
											resume_arr.forEach((elem) => {
												new_resume.push(elem)
											})
											setResume_cont(new_resume);
										}
										else if(resume_section_button.innerText === "Hide Resume") {
											resume_section_button.innerText = "See Resume";
											setResume_cont([]);
										}
									}
								}
							}
						}
						style={{width: "100%"}}>
						See Resume
					</button>
					<div id="resume-section" className="info-section-container" style={{ backgroundColor: "white", opacity: "0", transition: "1s"}}>
						<InfoSection
							section_title={
								JSON.stringify({
									"text": "",
									"font-family": "",
									"font-size": ""
								})
							}
							section_content={
								<>
									<Experience
										jobs={ resume_cont }
									/>
									<div id="projects"></div>
								</>
							}
						/>
					</div>

					{/* Projects */}
					<div className="info-section-container" style={{backgroundColor: "#ffffff"}}>
						<InfoSection
							section_title={
								JSON.stringify({
									"text": "Insta Reels, Examples...",
									"font-family": "font-family: Georgia, 'Times New Roman', Times, serif",
									"font-size": "4vw"
								})
							}
							section_content={
								<>
									<section className="post-list">

										<div className="post" style={{boxSizing: "border-box"}}>
											{instagram_embed_foramtter(instagram_reel_jade_restaurant, "Jade Restaurant", "@jaderestaurantatx: Asian Cuisine 🥟")}
											<a
												rel="noreferrer"
												className="post-overlay"
												href="https://www.instagram.com/reel/CshnJgCPs7a/"
												target="_blank">
											</a>
										</div>

										<div className="post" style={{boxSizing: "border-box"}}>
											{instagram_embed_foramtter(instagram_reel_lazarus_brew, "Lazarus Brewing", "@lazarusbrewing: Brewpub, Tacos, Coffee and more! 🌮🍺")}
											<a
												rel="noreferrer"
												className="post-overlay"
												href="https://www.instagram.com/reel/CsRv3wJJ0s0/"
												target="_blank">
											</a>
										</div>

										<div className="post" style={{boxSizing: "border-box"}}>
											{instagram_embed_foramtter(instagram_reel_cranky_granny, "Cranky Granny's", "")}
											<a
												rel="noreferrer"
												className="post-overlay"
												href="https://www.instagram.com/reel/Cr_1vaJJnff/"
												target="_blank">
											</a>
										</div>

										<div className="post" style={{boxSizing: "border-box"}}>
											{instagram_embed_foramtter(instagram_reel_bouquet_building, "Florecita", "")}
											<a
												rel="noreferrer"
												className="post-overlay"
												href="https://www.instagram.com/reel/ClUXgS8J2kL/"
												target="_blank">
											</a>
										</div>

										<div className="post" style={{boxSizing: "border-box"}}>
											{instagram_embed_foramtter(instagram_reel_chilantro, "Chilantro", "")}
											<a
												rel="noreferrer"
												className="post-overlay"
												href="https://www.instagram.com/reel/CmKSZKbpy47/"
												target="_blank">
											</a>
										</div>

										<div className="post" style={{boxSizing: "border-box"}}>
											{instagram_embed_foramtter(instagram_reel_ciao_austin, "Ciao Austin", "")}
											<a
												rel="noreferrer"
												className="post-overlay"
												href="https://www.instagram.com/reel/CrrJrivJRbS/"
												target="_blank">
											</a>
										</div>

										<div className="post" style={{boxSizing: "border-box"}}>
											{instagram_embed_foramtter(instagram_reel_cinnaholic, "Cinnaholic", "")}
											<a
												rel="noreferrer"
												className="post-overlay"
												href="https://www.instagram.com/reel/CmfYIRKh53f/"
												target="_blank">
											</a>
										</div>
										
										<div className="post" style={{boxSizing: "border-box"}}>
											{instagram_embed_foramtter(instagram_reel_cookie_wookie, "Cookie Wookie", "")}
											<a
												rel="noreferrer"
												className="post-overlay"
												href="https://www.instagram.com/reel/CmCX77gpliV/"
												target="_blank">
											</a>
										</div>
										
										<div className="post" style={{boxSizing: "border-box"}}>
											{instagram_embed_foramtter(instagram_reel_cranky_granny_1, "Cranky Granny's", "")}
											<a
												rel="noreferrer"
												className="post-overlay"
												href="https://www.instagram.com/reel/CnaddfmBs-O/"
												target="_blank">
											</a>
										</div>
										
										<div className="post" style={{boxSizing: "border-box"}}>
											{instagram_embed_foramtter(instagram_reel_crawfish_boil, "Crawfish Boil", "")}
											<a
												rel="noreferrer"
												className="post-overlay"
												href="https://www.instagram.com/reel/CrtYxbRJhRE/"
												target="_blank">
											</a>
										</div>
										
										<div className="post" style={{boxSizing: "border-box"}}>
											{instagram_embed_foramtter(instagram_reel_east_side_golf, "East Side Golf", "")}
											<a
												rel="noreferrer"
												className="post-overlay"
												href="https://www.instagram.com/reel/CkJq3U2J1gU/"
												target="_blank">
											</a>
										</div>
										
										<div className="post" style={{boxSizing: "border-box"}}>
											{instagram_embed_foramtter(instagram_reel_fairways, "Fairways Cantina", "")}
											<a
												rel="noreferrer"
												className="post-overlay"
												href="https://www.instagram.com/reel/CjB6A9dPHW2/"
												target="_blank">
											</a>
										</div>
										
										<div className="post" style={{boxSizing: "border-box"}}>
											{instagram_embed_foramtter(instagram_reel_fat_city_stacks, "Fat City Stacks", "")}
											<a
												rel="noreferrer"
												className="post-overlay"
												href="https://www.instagram.com/reel/CkPMF_TpBiZ/"
												target="_blank">
											</a>
										</div>
										
										<div className="post" style={{boxSizing: "border-box"}}>
											{instagram_embed_foramtter(instagram_reel_islas_canarias, "Islas Canarias", "")}
											<a
												rel="noreferrer"
												className="post-overlay"
												href="https://www.instagram.com/reel/ClHzqPys5EF/"
												target="_blank">
											</a>
										</div>
										
										<div className="post" style={{boxSizing: "border-box"}}>
											{instagram_embed_foramtter(instagram_reel_la_popular, "La Popular", "")}
											<a
												rel="noreferrer"
												className="post-overlay"
												href="https://www.instagram.com/reel/CreSeIapjUH/"
												target="_blank">
											</a>
										</div>
										
										<div className="post" style={{boxSizing: "border-box"}}>
											{instagram_embed_foramtter(instagram_reel_moic, "Museum of Ice Cream", "")}
											<a
												rel="noreferrer"
												className="post-overlay"
												href="https://www.instagram.com/reel/Cj3DaMFLlRS/"
												target="_blank">
											</a>
										</div>
										
										<div className="post" style={{boxSizing: "border-box"}}>
											{instagram_embed_foramtter(instagram_reel_omg_squee, "OMG Squee", "")}
											<a
												rel="noreferrer"
												className="post-overlay"
												href="https://www.instagram.com/reel/Clbo-6NJfx4/"
												target="_blank">
											</a>
										</div>
										
										<div className="post" style={{boxSizing: "border-box"}}>
											{instagram_embed_foramtter(instagram_reel_peach_bum, "Peach Bum", "")}
											<a
												rel="noreferrer"
												className="post-overlay"
												href="https://www.instagram.com/reel/Cko3FCQNqEP/"
												target="_blank">
											</a>
										</div>
										
										<div className="post" style={{boxSizing: "border-box"}}>
											{instagram_embed_foramtter(instagram_reel_salsa_limon, "Salsa Limon", "")}
											<a
												rel="noreferrer"
												className="post-overlay"
												href="https://www.instagram.com/reel/CqJOxuhJwtL/"
												target="_blank">
											</a>
										</div>
										
										<div className="post" style={{boxSizing: "border-box"}}>
											{instagram_embed_foramtter(instagram_reel_san_pellegrino, "San Pellegrino", "")}
											<a
												rel="noreferrer"
												className="post-overlay"
												href="https://www.instagram.com/reel/Cpp2vzLjVpH/"
												target="_blank">
											</a>
										</div>
										
										<div className="post" style={{boxSizing: "border-box"}}>
											{instagram_embed_foramtter(instagram_reel_stride, "Stride", "")}
											<a
												rel="noreferrer"
												className="post-overlay"
												href="https://www.instagram.com/reel/CmPWgLsJrKO/"
												target="_blank">
											</a>
										</div>
										
										<div className="post" style={{boxSizing: "border-box"}}>
											{instagram_embed_foramtter(instagram_reel_surreal_garden, "Surreal Garden", "")}
											<a
												rel="noreferrer"
												className="post-overlay"
												href="https://www.instagram.com/reel/Cq6RViPtUyp/"
												target="_blank">
											</a>
										</div>
										
										<div className="post" style={{boxSizing: "border-box"}}>
											{instagram_embed_foramtter(instagram_reel_sweet_water_oysters, "Sweet Water Oyster", "")}
											<a
												rel="noreferrer"
												className="post-overlay"
												href="https://www.instagram.com/reel/CpGgSljJdRd/"
												target="_blank">
											</a>
										</div>
										
										<div className="post" style={{boxSizing: "border-box"}}>
											{instagram_embed_foramtter(instagram_reel_taquero_mucho, "Taquero Mucho", "")}
											<a
												rel="noreferrer"
												className="post-overlay"
												href="https://www.instagram.com/reel/ClEvNUDJ3GX/"
												target="_blank">
											</a>
										</div>
										
										<div className="post" style={{boxSizing: "border-box"}}>
											{instagram_embed_foramtter(instagram_reel_tenten, "TenTen", "")}
											<a
												rel="noreferrer"
												className="post-overlay"
												href="https://www.instagram.com/reel/CrrJrivJRbS/"
												target="_blank">
											</a>
										</div>
										
										<div className="post" style={{boxSizing: "border-box"}}>
											{instagram_embed_foramtter(instagram_reel_tonys_jamaican, "Tony's Jamaican", "")}
											<a
												rel="noreferrer"
												className="post-overlay"
												href="https://www.instagram.com/reel/CnPiH0GBN0t/"
												target="_blank">
											</a>
										</div>

										<div className="post" style={{boxSizing: "border-box"}}>
											{instagram_embed_foramtter(instagram_reel_boxt, "Boxt", "")}
											<a
												rel="noreferrer"
												className="post-overlay"
												href="https://www.instagram.com/reel/Cn77-NZpEGs/"
												target="_blank">
											</a>
										</div>
										
										<div className="post" style={{boxSizing: "border-box"}}>
											{instagram_embed_foramtter(instagram_reel_Yelp_Review_2022, "Yelp Review 2022", "")}
											<a
												rel="noreferrer"
												className="post-overlay"
												href="https://www.instagram.com/reel/Cm2Oc7rhWPf/"
												target="_blank">
											</a>
										</div>
									</section>
								</>
							}
						/>
					</div>

					{/* Social Media */}
					<div id="socials"></div>
					<div className="info-section-container">
						{/* hello */}
					</div>

				</div>
			</div>

		</div>
	);
}

function instagram_embed_foramtter(content_thumbnail:string, content_alt:string, content_desc:string) {

	// console.log("background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);")
	// console.log(parseInlineStyle("background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"));


	return(
		<>
			{/* #FFF */}
			<div
				style={parseInlineStyle("background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);")}>
				<div
					style={parseInlineStyle("padding:8px;")}>
						{/* background:#F8F8F8 */}
					<div
						style={parseInlineStyle("background:#F8F8F8; line-height:0; margin-top:40px; padding:0.0% 0; text-align:center; width:100%;")}>
						
						<img className='social-media-content' alt={content_alt} style={{height: "auto", width: "100%"}} src={content_thumbnail}></img>
						
					</div>
					<p
						style={parseInlineStyle("color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;")}>
						<a
							rel="noreferrer"
							href="https://www.instagram.com/p/BGUPwmztyzw/"
							style={parseInlineStyle("color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;")}
							target="_blank">
							{content_desc}
						</a>
					</p>
				</div>
			</div>
			{/* <script async defer src="//platform.instagram.com/en_US/embeds.js"></script> */}

		</>
	)
}

function parseInlineStyle(style: string) {
    const template = document.createElement('template');
    template.setAttribute('style', style);

    const jsonStyling:any = Object.entries(template.style)
        .filter(([ key ]) => !/^[0-9]+$/.test(key))
        .filter(([ , value ]) => Boolean(value))
        .reduce((acc, [ key, value ]) => ({ ...acc, [key]: value }), {});

	// fix non-existent fields
	replaceJsonElem(jsonStyling, "webkitBackgroundClip", "WebkitBackgroundClip");
	replaceJsonElem(jsonStyling, "webkitBackgroundOrigin", "WebkitBackgroundOrigin");
	replaceJsonElem(jsonStyling, "webkitBackgroundSize", "WebkitBackgroundSize");
	replaceJsonElem(jsonStyling, "webkitBorderBottomLeftRadius", "WebkitBorderBottomLeftRadius");
	replaceJsonElem(jsonStyling, "webkitBorderBottomRightRadius", "WebkitBorderBottomRightRadius");
	replaceJsonElem(jsonStyling, "webkitBorderRadius", "WebkitBorderRadius");
	replaceJsonElem(jsonStyling, "webkitBorderTopLeftRadius", "WebkitBorderTopLeftRadius");
	replaceJsonElem(jsonStyling, "webkitBoxShadow", "WebkitBoxShadow");
	replaceJsonElem(jsonStyling, "webkitBorderTopRightRadius", "WebkitBorderTopRightRadius");

	return jsonStyling;
}

function replaceJsonElem(jsonData:any, oldJsonKey:String, newJsonKey:String) {
	if(jsonData[String(oldJsonKey)]) {
		var curr_json_val = jsonData[String(oldJsonKey)]; // or data['oldKey']
		jsonData[String(newJsonKey)] = curr_json_val;
		delete jsonData[String(oldJsonKey)];
	}
}

export default App;
