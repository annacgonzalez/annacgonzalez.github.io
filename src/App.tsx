import React, { useEffect, useRef, useState } from 'react';

// import { InstagramEmbed } from 'react-social-media-embed';

// stylesheets
import './App.css';
import './style/nav_bar.css';
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
import * as logos from './components/logos';

// images to be used
import anna_header_picture from './content/Anna_nyc_edge_2_cropped.jpg';
import anna_banner from './content/Anna_Banner.jpg';
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
import { SocialMedia } from './components/social_media';

function App() {

	console.log(logos.twitter);

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

	// const navbarWidth = useRef(0);
	const options_visible = useRef(false);

	useEffect(() => {
		const curr_nav_title = document.getElementById("nav-tab-title");
		const curr_nav_tabs = document.getElementById("nav-tab-wrapper");
		const curr_nav_settings = document.getElementById("nav-hamburger-settings");

		if(curr_nav_title && curr_nav_tabs && curr_nav_settings) {
			if(curr_nav_title.offsetWidth + 50 >= curr_nav_tabs.offsetLeft) {
				curr_nav_tabs.style.visibility = "hidden";
				curr_nav_settings.style.display = "flex";
			}
			else {
				curr_nav_tabs.style.visibility = "visible";
				curr_nav_settings.style.display = "none";
			}
		}
	}, []);

	useEffect(() => {

		const nav_hamb_opt = document.getElementById("nav-hamburger-options");
		if(nav_hamb_opt) {
			if(options_visible.current) {
				nav_hamb_opt.style.display = "";
			}
			else {
				nav_hamb_opt.style.display = "none";
			}
		}
		
		window.addEventListener("resize", () => {

			const curr_nav_title = document.getElementById("nav-tab-title");
			const curr_nav_tabs = document.getElementById("nav-tab-wrapper");
			const curr_nav_tabs_vertical = document.getElementById("nav-hamburger-options");
			const curr_nav_settings = document.getElementById("nav-hamburger-settings");

			if(curr_nav_title && curr_nav_tabs && curr_nav_settings && curr_nav_tabs_vertical) {
				if(curr_nav_title.offsetWidth + 50 >= curr_nav_tabs.offsetLeft) {
					curr_nav_tabs.style.visibility = "hidden";
					curr_nav_tabs_vertical.style.display = "none";
					options_visible.current = false;
					curr_nav_settings.style.display = "flex";
				}
				else {
					curr_nav_tabs.style.visibility = "visible";
					curr_nav_tabs_vertical.style.display = "none";
					options_visible.current = false;
					curr_nav_settings.style.display = "none";
				}
			}
		})
	}, []);

	return (
		<div className="page-body-container">

			{/* Navigation Bar */}
			<div className="nav-bar-container" id="nav-bar-container">
					<div className="nav-tab-title" id="nav-tab-title">
						<h1 className="portfolio-name">
							Anna Cristina Gonzalez
						</h1>
					</div>
					
					<div className="nav-tab-wrapper" id="nav-tab-wrapper">
						<div className="nav-tab">
							<button
								className="nav-link"
								onClick={() => document.getElementById('about-me')?.scrollIntoView()}>
								about me
							</button>
						</div>
						<div className="nav-tab">
							<button
								className="nav-link"
								onClick={() => document.getElementById('academics')?.scrollIntoView()}>
									education
							</button>
						</div>
						<div className="nav-tab">
							<button
								className="nav-link"
								onClick={() => document.getElementById('experience')?.scrollIntoView()}>
									experience
							</button>
						</div>
						<div className="nav-tab">
							<button
								className="nav-link"
								onClick={() => document.getElementById('projects')?.scrollIntoView()}>
									socials
							</button>
						</div>
						<div className="nav-tab">
							<button
								className="nav-link"
								onClick={() => document.getElementById('socials')?.scrollIntoView()}>
									analytics
							</button>
						</div>
						<div className="nav-tab-media">
							<a
								className="media-logo-container"
								href="https://twitter.com/AnnaGonzalez01"
								rel="noreferrer"
								target="_blank">
								<svg className="media-logo" version="1.1" viewBox="-3 -3 25 25">
									<path
										d={logos.twitter}>
									</path>
								</svg>
							</a>
						</div>
						<div className="nav-tab-media">
							<a
								className="media-logo-container"
								href="https://www.instagram.com/Anna_gonzalez01/"
								rel="noreferrer"
								target="_blank">
								<svg className="media-logo" version="1.1" viewBox="-1 -1 32 32">
									<path
										d={logos.instagram}>
									</path>
								</svg>
							</a>
						</div>
						<div className="nav-tab-media">
							<a
								className="media-logo-container"
								href="https://www.facebook.com/profile.php?id=100033010072606"
								rel="noreferrer"
								target="_blank">
								<svg className="media-logo" version="1.1" viewBox="0 0 32 32">
									<path
										d={logos.facebook}>
									</path>
								</svg>
							</a>
						</div>
						<div className="nav-tab">
							<a
								className="inquire-link-container"
								href="https://mail.google.com/mail/?view=cm&source=mailto&to=annawhereinaustin@gmail.com"
								rel="noreferrer"
								target="_blank">
								<button className="inquire-link">inquire</button>
							</a>
						</div>
					</div>
					<div className="nav-tab" id="nav-hamburger-settings">
						<button
							className="icon"
							onClick={() => {
								options_visible.current = !options_visible.current;
								const nav_hamb_opt = document.getElementById("nav-hamburger-options");
								if(nav_hamb_opt) {
									if(options_visible.current) {
										console.log("show");
										nav_hamb_opt.style.display = "";
									}
									else {
										console.log("hide");
										nav_hamb_opt.style.display = "none";
									}
								}
							}}>
							<i className="fa fa-bars"></i>
						</button>
					</div>
				</div>
				<div className="nav-tab-settings" id="nav-hamburger-options">
					<div className="nav-tab-wrapper-vertical">
						<div className="nav-tab">
							<button
								className="nav-link-vertical"
								onClick={() => document.getElementById('about-me')?.scrollIntoView()}>
								about me
							</button>
						</div>
						<div className="nav-tab">
							<button
								className="nav-link-vertical"
								onClick={() => document.getElementById('academics')?.scrollIntoView()}>
									education
							</button>
						</div>
						<div className="nav-tab">
							<button
								className="nav-link-vertical"
								onClick={() => document.getElementById('experience')?.scrollIntoView()}>
									experience
							</button>
						</div>
						<div className="nav-tab">
							<button
								className="nav-link-vertical"
								onClick={() => document.getElementById('projects')?.scrollIntoView()}>
									socials
							</button>
						</div>
						<div className="nav-tab">
							<button
								className="nav-link-vertical"
								onClick={() => document.getElementById('socials')?.scrollIntoView()}>
									analytics
							</button>
						</div>
						<div className="nav-tab">
							<a
								className="media-logo-container"
								href="https://twitter.com/AnnaGonzalez01"
								rel="noreferrer"
								target="_blank">
								<button
									className="nav-link-vertical">
									twitter
								</button>
							</a>
						</div>
						<div className="nav-tab">
							<a
								className="media-logo-container"
								href="https://www.instagram.com/Anna_gonzalez01/"
								rel="noreferrer"
								target="_blank">
								<button
									className="nav-link-vertical">
									instagram
								</button>
							</a>
						</div>
						<div className="nav-tab">
							<a
								className="media-logo-container"
								href="https://www.facebook.com/profile.php?id=100033010072606"
								rel="noreferrer"
								target="_blank">
								<button
									className="nav-link-vertical">
									facebook
								</button>
							</a>
						</div>
					</div>
				</div>

			{/* Banner and Profile Pictures */}
			<div className="banner-container">
				<div className="banner" style={{ backgroundImage: `url(${anna_header_picture})`}}></div>
				{/* <div className="banner" style={{ backgroundImage: `url(${anna_banner})`}}></div> */}
				<div className="banner">
					<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
						width="100%" height="100%" viewBox="70 30 375 336"
						preserveAspectRatio="xMidYMid meet">

						<g transform="translate(0,448) scale(0.1,-0.1)"
							fill="#000000" stroke="none">
							{
								logos.anna_graphic.map((svg_elem) => {
									return(
										<path
											d={svg_elem}>
										</path>
									)
								})
							}
						</g>
					</svg>
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
									"font-size": "clamp(2vw, 1.5rem, 5.5vw)",
									"font-color": "#FFFFFF"
								})
							}
							section_content={
								<>
									<div className="edu-side-by-side-container">
										<div className="edu-side-by-side">
											<div className="edu-image-container">
												<img className="edu-image" src={require("./content/UT_Austin_Emblem.png")} alt="UT Austin"></img>
											</div>
											<div className="edu-desc-container">
												<p className="edu-desc">
													I recently received a Bachelor of Science in Political Communications
													and a Bachelor of Arts in Rhetoric & Writing
													from the University of Texas at Austin. I graduated with Honors and
													currently getting ready to apply to Law School.
												</p>
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
						style={{width: "100%", fontSize: "clamp(0.5vw, 5rem, 3vw)"}}>
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
								</>
							}
						/>
					</div>

					{/* Projects */}
					<div id="projects"></div>
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
								<SocialMedia
									media={
										[
											JSON.stringify({
												"thumbnail": instagram_reel_jade_restaurant.toString(),
												"title": "Jade Restaurant",
												// "text": "@jaderestaurantatx: Asian Cuisine 🥟",
												"url": "https://www.instagram.com/reel/CshnJgCPs7a/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_lazarus_brew.toString(),
												"title": "Lazarus Brewing",
												"text": "@lazarusbrewing: Brewpub, Tacos, Coffee and more! 🌮🍺",
												"url": "https://www.instagram.com/reel/CsRv3wJJ0s0/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_cranky_granny.toString(),
												"title": "Cranky Granny's",
												"text": "",
												"url": "https://www.instagram.com/reel/Cr_1vaJJnff/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_bouquet_building.toString(),
												"title": "Florecita",
												"description": "",
												"url": "https://www.instagram.com/reel/ClUXgS8J2kL/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_chilantro.toString(),
												"title": "Chilantro",
												"description": "",
												"url": "https://www.instagram.com/reel/CmKSZKbpy47/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_ciao_austin.toString(),
												"title": "Ciao Austin",
												"description": "",
												"url": "https://www.instagram.com/reel/CrrJrivJRbS/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_cinnaholic.toString(),
												"title": "Cinnaholic",
												"description": "",
												"url": "https://www.instagram.com/reel/CmfYIRKh53f/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_cookie_wookie.toString(),
												"title": "Cookie Wookie",
												"description": "",
												"url": "https://www.instagram.com/reel/CmCX77gpliV/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_cranky_granny_1.toString(),
												"title": "Cranky Granny's New Location",
												"description": "",
												"url": "https://www.instagram.com/reel/CnaddfmBs-O/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_crawfish_boil.toString(),
												"title": "Crawfish Boil",
												"description": "",
												"url": "https://www.instagram.com/reel/CrtYxbRJhRE/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_east_side_golf.toString(),
												"title": "East Side Golf",
												"description": "",
												"url": "https://www.instagram.com/reel/CkJq3U2J1gU/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_fairways.toString(),
												"title": "Fairways Cantina",
												"description": "",
												"url": "https://www.instagram.com/reel/CjB6A9dPHW2/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_fat_city_stacks.toString(),
												"title": "Fat City Stacks",
												"description": "",
												"url": "https://www.instagram.com/reel/CkPMF_TpBiZ/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_islas_canarias.toString(),
												"title": "Islas Canarias",
												"description": "",
												"url": "https://www.instagram.com/reel/ClHzqPys5EF/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_la_popular.toString(),
												"title": "La Popular",
												"description": "",
												"url": "https://www.instagram.com/reel/CreSeIapjUH/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_moic.toString(),
												"title": "Museum of Ice Cream",
												"description": "",
												"url": "https://www.instagram.com/reel/Cj3DaMFLlRS/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_omg_squee.toString(),
												"title": "OMG Squee",
												"description": "",
												"url": "https://www.instagram.com/reel/Clbo-6NJfx4/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_peach_bum.toString(),
												"title": "Peach Bum",
												"description": "",
												"url": "https://www.instagram.com/reel/Cko3FCQNqEP/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_salsa_limon.toString(),
												"title": "Salsa Limon",
												"description": "",
												"url": "https://www.instagram.com/reel/CqJOxuhJwtL/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_san_pellegrino.toString(),
												"title": "San Pellegrino",
												"description": "",
												"url": "https://www.instagram.com/reel/Cpp2vzLjVpH/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_stride.toString(),
												"title": "Stride",
												"description": "",
												"url": "https://www.instagram.com/reel/CmPWgLsJrKO/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_surreal_garden.toString(),
												"title": "Surreal Garden",
												"description": "",
												"url": "https://www.instagram.com/reel/Cq6RViPtUyp/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_sweet_water_oysters.toString(),
												"title": "Sweet Water Oyster",
												"description": "",
												"url": "https://www.instagram.com/reel/CpGgSljJdRd/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_taquero_mucho.toString(),
												"title": "Taquero Mucho",
												"description": "",
												"url": "https://www.instagram.com/reel/ClEvNUDJ3GX/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_tenten.toString(),
												"title": "TenTen",
												"description": "",
												"url": "https://www.instagram.com/reel/CrrJrivJRbS/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_tonys_jamaican.toString(),
												"title": "Tony's Jamaican",
												"description": "",
												"url": "https://www.instagram.com/reel/CnPiH0GBN0t/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_boxt.toString(),
												"title": "Boxt",
												"description": "",
												"url": "https://www.instagram.com/reel/Cn77-NZpEGs/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_Yelp_Review_2022.toString(),
												"title": "Yelp Review 2022",
												"description": "",
												"url": "https://www.instagram.com/reel/Cm2Oc7rhWPf/"
											})
										]
									}
								/>
							}
						/>
					</div>

					{/* Social Media */}
					<div id="socials"></div>
					<div className="info-section-container">
						<InfoSection
							section_title={
								JSON.stringify({
									"text": "How it works",
									"font-family": "",
									"font-size": ""
								})
							}
							section_content={
								<>
									<p style={{width: "100%", textAlign: "center"}}>[insert graphics here]</p>
								</>
							}
						/>
					</div>

				</div>
			</div>

		</div>
	);
}

export default App;
