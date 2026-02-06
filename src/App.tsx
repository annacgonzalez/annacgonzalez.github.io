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
import {Academics} from './components/academics';
// import {Projects} from './components/projects';
// import {SocialMedia} from './components/social_media';
import * as logos from './components/logos';

// images to be used
import anna_header_picture from './content/Anna_UNTD.jpg';
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
import instagram_reel_besame from './content/Insta_Reel_Besame.jpg';
import instagram_reel_Yelp_Review_2022 from './content/Insta_Reel_Yelp_Review_2022.jpg';
import instagram_reel_boxt from './content/Insta_Reel_Boxt.jpg';
import tiktok_la_plancha from './content/Tiktok_La_Plancha.webp';
import tiktok_chilantro from './content/Tiktok_Chilantro.webp';
import tiktok_ciao_austin from './content/Tiktok_Ciao_Austin.webp';
import tiktok_cookie_wookie from './content/TikTok_Cookie_Wookie.webp';
import tiktok_jades_kitchen from './content/Tiktok_Jades_Kitchen.webp';
import tiktok_la_popular from './content/Tiktok_La_Popular.webp';
import tiktok_munch_munch from './content/Tiktok_Munch_Munch.webp';
import tiktok_perrys_steakhouse from './content/Tiktok_Perrys_Steakhouse.webp';
import tiktok_pinches_tacos from './content/Tiktok_Pinches_Tacos.webp';
import tiktok_salsa_limon from './content/Tiktok_Salsa_Limon.webp';
import tiktok_san_pellegrino from './content/Tiktok_San_Pellegrino.webp';
import tiktok_tenten from './content/Tiktok_Tenten.webp';
import tiktok_the_well from './content/Tiktok_The_Well.webp';
import tiktok_tonys_jamaican from './content/Tiktok_Tonys_Jamaican.webp';
import tiktok_via313 from './content/Tiktok_Via313.webp';
import tiktok_peached_tortilla from './content/Tiktok_Peached_Tortilla.webp';
import { SocialMedia } from './components/social_media';

function App() {

	console.log(logos.twitter);

	const [resume_cont, setResume_cont] = useState([]);

	const school_arr = [
		JSON.stringify({
			"employer": "UNT Dallas College of Law",
			"location": "Dallas, TX",
			"duration": "May 2028",
			"major0": "Juris Doctor Candidate",
			"description": [
			]
		}),
		JSON.stringify({
			"employer": "The University of Texas at Austin",
			"location": "Austin, TX",
			"duration": "May 2023",
			"major0": "Bachelor of Arts in Rhetoric & Writing",
			"major1": "Bachelor of Science in Political Communications",
			"description": [
				"GPA: 3.8",
				"Honors: University Honors (Spring 2020-2023), Moody College of Communication Dean's List (Spring 2023) & Rhetoric & Writing Dean's List (Spring 2023)",
			]
		})
	];

	const resume_arr = [
		JSON.stringify({
			"employer": "The Carlson Lawfirm",
			"location": "Austin, TX",
			"duration": "July 2023 – July 2025",
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
						<p className="portfolio-name" style={{fontFamily:"sans-serif"}}>
							Anna Cristina Gonzalez
						</p>
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
									projects
							</button>
						</div>
						{/* <div className="nav-tab">
							<button
								className="nav-link"
								onClick={() => document.getElementById('socials')?.scrollIntoView()}>
									analytics
							</button>
						</div> */}
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
								href="https://www.instagram.com/annacristinagonzalez_/"
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
						<div className="nav-tab-media">
							<a
								className="media-logo-container"
								href="https://www.linkedin.com/in/anna-gonzalez-b2b599196/"
								rel="noreferrer"
								target="_blank">
								<svg className="media-logo" version="1.1" viewBox="0 0 32 32">
									<path
										d={logos.linkedin1}>
									</path>
								</svg>
							</a>
						</div>
						<div className="nav-tab">
							<a
								className="inquire-link-container"
								href="https://mail.google.com/mail/?view=cm&source=mailto&to=AnnaGonzalez2@my.unt.edu"
								rel="noreferrer"
								target="_blank">
								<button className="inquire-link">email me</button>
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
									projects
							</button>
						</div>
						{/* <div className="nav-tab">
							<button
								className="nav-link-vertical"
								onClick={() => document.getElementById('socials')?.scrollIntoView()}>
									analytics
							</button>
						</div> */}
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
								href="https://www.instagram.com/annacristinagonzalez_/"
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
				<div className="banner" style={{ backgroundImage: `url(${anna_header_picture})`, backgroundPosition: 'center'}}></div>
				{/* <div className="banner" style={{ backgroundImage: `url(${anna_banner})`}}></div> */}
				<div className="banner slideInUp">
					<div className="banner-portfolio-name-container">
						<h1 className="banner-portfolio-name">
							<span className="banner-portfolio-name-text">Anna C. Gonzalez</span>
						</h1>
						<p className="banner-portfolio-description">Creative Projects</p>
					</div>
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
									"text": "About Me",
									"font-family": "sans-serif",
									"font-size": "clamp(2vw, 2.5rem, 5.5vw)",
									"font-color": "#111"
								})
							}
							section_content={
								<>
									<div className="me-side-by-side">
										<div className="me-desc-container">
											<p className="me-desc">I believe that representation isn’t just a goal—it’s a necessity.</p>
											<p className="me-desc">
												<strong>Bridging Worlds</strong>: From the Border to the Bar My journey began in McAllen, Texas, and was shaped by a childhood spent in Rio Bravo, Tamaulipas. This cross-border upbringing instilled in me a deep passion for community and a clear understanding of the power of communication. Today, as a first-generation Latina and 1L student at UNT Dallas College of Law, I am turning that passion into a career of advocacy.
											</p>
											<p className="me-desc">
												<strong>The Mission</strong>: Representation Matters After graduating from the University of Texas at Austin with degrees in Political Communications and Rhetoric & Writing, I realized my true calling: ensuring our communities are seen, heard, and represented. I believe that being bilingual is more than a skill—it is a tool to bridge the gap in our legal system. Everything I do is driven by the goal of making my Latino community proud.
											</p>
											<p className="me-desc">
												<strong>The Creative</strong>: Law Meets Design I’m proof that you don’t have to set aside your creative spark to pursue a JD. During my time as an undergraduate, I fell in love with digital storytelling while working as a social media marketing intern. From producing engaging TikToks and Reels to designing impactful posters and flyers, I specialize in visual communication that cuts through the noise.
											</p>
											<p className="me-desc">
												Beyond the Books When I’m not diving into case law, you can find me:
											</p>
											<ul className="me-desc">
												<li>🐾 Spending time with my dog, Enzo.</li>
												<li>📚 Getting lost in a new book.</li>
												<li>🎧 Discovering new music to fuel my study sessions.</li>
											</ul>
										</div>
									</div>
								</>
							}
						/>
					</div>

					{/* Education Section */}
					<div id="academics"></div>
					<div className="info-section-container" style={{ backgroundColor: "white", opacity: "1", transition: "1s"}}>
						<InfoSection
							section_title={
								JSON.stringify({
									"text": "Education",
									"font-family": "sans-serif",
									"font-size": "clamp(2vw, 2.5rem, 5.5vw)",
									"font-color": "#111"
								})
							}
							section_content={
								<>
									<Academics
										schools={ school_arr }
									/>
								</>
							}
						/>
					</div>
					
					{/* Experience Section */}
					<div id="experience"></div>
					<div className="section-container">
							<div style={{paddingLeft: "2vw", marginLeft: "1%"}}>
								<div className="section-title" style={{fontFamily: "sans-serif", fontSize: "clamp(2vw, 2.5rem, 5.5vw)", color: "#111"}}>
									Experience <i>(press "See Resume" to expand)</i>
								</div>
							</div>
					</div>
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
									"text": "Instagram Reels",
									"font-family": "sans-serif",
									"font-size": "clamp(2vw, 2.5rem, 5.5vw)"
								})
							}
							section_content={
								<SocialMedia
									media={
										[
											JSON.stringify({
												"thumbnail": instagram_reel_jade_restaurant.toString(),
												"title": "Jade Restaurant",
												"text": "@jaderestaurantatx offers a variety of Asian cuisine with influences from China, Vietnam, & Japan and their dim sum is some of the best in Austin! 🫶🏻🥟",
												"url": "https://www.instagram.com/reel/CshnJgCPs7a/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_lazarus_brew.toString(),
												"title": "Lazarus Brewing",
												"text": "@lazarusbrewing is an award-winning brewpub offering a variety of delicious draft beers, tacos, coffee and so much more! 🌮🍺",
												"url": "https://www.instagram.com/reel/CsRv3wJJ0s0/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_cranky_granny.toString(),
												"title": "Cranky Granny's New Location",
												"text": "@crannygrannys sweet rolls come in a variety of flavors, toppings served warm and made fresh to order! 🥐",
												"url": "https://www.instagram.com/reel/Cr_1vaJJnff/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_bouquet_building.toString(),
												"title": "Florecita",
												"text": "@florecita.atx is a Latinx-owned & women-owned business specializing in creating floral arrangements for any occasion. Perfect time to book your holiday floral arrangement needs with @florecita.atx! 🌷",
												"url": "https://www.instagram.com/reel/ClUXgS8J2kL/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_chilantro.toString(),
												"title": "Chilantro",
												"text": "Try the new @Chilantro Curated Bowls made by their Rice Experts! Some of their curated bowls include the Bibimbap, Korean Esquites, Tofu Noodle, Japchae con Queso and Umma's (Mom's) Salad! 🥗",
												"url": "https://www.instagram.com/reel/CmKSZKbpy47/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_san_pellegrino.toString(),
												"title": "San Pellegrino",
												"text": "#FlashbackFriday @sanpellegrino_us brought an Italian extravaganza at the @frenchlegation during the week of SXSW! 🥳 It was a blast having @yelpaustin team up with them. 🥂",
												"url": "https://www.instagram.com/reel/CrT5tVyJIck/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_cinnaholic.toString(),
												"title": "Cinnaholic",
												"text": "@Cinnaholic.Austin has opened up a location in ATX and we are LOVING their 100% vegan Gourmet Cinnamon Rolls 🌱",
												"url": "https://www.instagram.com/reel/CmfYIRKh53f/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_cookie_wookie.toString(),
												"title": "Cookie Wookie",
												"text": "Some of the flavors from @cookiewookiekitchen we absolutely LOVED were the ube coconut, black sesame cookies and cream and the miso oatmeal cookies 🍪",
												"url": "https://www.instagram.com/reel/CmCX77gpliV/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_cranky_granny_1.toString(),
												"title": "Cranky Granny's",
												"text": "Enjoy sweet rolls at any time of the day for breakfast as a snack or for dessert with @crannygrannys soft, flaky and buttery cinnamon rolls 🧈",
												"url": "https://www.instagram.com/reel/CnaddfmBs-O/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_crawfish_boil.toString(),
												"title": "Crawfish Boil",
												"text": "@hoodoocrawfish will have crawfish available for purchase! Get ready to support some stellar local business with an evening of delicious crawfish 🦐, signature local craft beer, and more… 🤤",
												"url": "https://www.instagram.com/reel/CrtYxbRJhRE/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_east_side_golf.toString(),
												"title": "East Side Golf",
												"text": "Experience an 18-hole mini golf adventure ⛳️ on some of our favorite East Austin spots with @eastsideminiopen. Also, enjoy drink and food specials at some of the best bars. As well as, compete with other mini golf partners. 🏌️",
												"url": "https://www.instagram.com/reel/CkJq3U2J1gU/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_fairways.toString(),
												"title": "Fairways Cantina",
												"text": "Last night we took the Yelp Elite Squad to discover @fairwayscantina and it was an absolute hit. #TacoTuesday 🌮",
												"url": "https://www.instagram.com/reel/CjB6A9dPHW2/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_fat_city_stacks.toString(),
												"title": "Fat City Stacks",
												"text": "We had a #PAWesome time with @fatcitystacks & @yardbar 🐾. @yardbar offers a variety of beer, cocktails, wine and other non-alcoholic drinks. 🍻 Just right next door, @fatcitystacks was a delicious treat. Offering a variety of hamburgers, chicken strips, sauces, milkshakes and salads, they have something for everyone. 🍔",
												"url": "https://www.instagram.com/reel/CkPMF_TpBiZ/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_islas_canarias.toString(),
												"title": "Islas Canarias",
												"text": "We got the chance to taste and experience a little bit of Miami 🏝️ in a one-day pop-up with @islascanariasrestaurant and @croquetacounty at @nativehostel.",
												"url": "https://www.instagram.com/reel/ClHzqPys5EF/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_la_popular.toString(),
												"title": "La Popular",
												"text": "An elevated, energetic destination, @lapopular.cdmx features authentic Mexican cuisine that proudly represents the culture, traditions, and history of Mexico and an innovative and extensive agave-centric cocktail program combined with warm hospitality 🫶🏻",
												"url": "https://www.instagram.com/reel/CreSeIapjUH/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_moic.toString(),
												"title": "Museum of Ice Cream",
												"text": "BOO! Last weekend, the Yelp Elite Squad got to explore the @museumoficecream in the domain for their October Museum of I-Scream celebration! 👻",
												"url": "https://www.instagram.com/reel/Cj3DaMFLlRS/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_omg_squee.toString(),
												"title": "OMG Squee",
												"text": "@squeeclub is an Asian American dessert shop in Austin that offers 100% gluten free desserts 🍨! Some of their items include macarons, taiyaki, mochi donuts, cheesecakes and bubble tea.🧋",
												"url": "https://www.instagram.com/reel/Clbo-6NJfx4/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_peach_bum.toString(),
												"title": "Peach Bum",
												"text": "🍑Recently we got to try a Latinx-owned, women-only workout class with @peachbum and @fitcidence! 💃🏻 This women-empowered, Reggetaon dance class got us sweetin and feeling good! 🪩",
												"url": "https://www.instagram.com/reel/Cko3FCQNqEP/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_salsa_limon.toString(),
												"title": "Salsa Limon",
												"text": "@salsalimon is a Latinx owned and operated family joint that offers a variety of Mexican staples like tacos, burritos, tortas and so much more! 🌯.",
												"url": "https://www.instagram.com/reel/CqJOxuhJwtL/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_ciao_austin.toString(),
												"title": "Ciao Austin",
												"text": "Enjoy the vibrant and beautiful culture of Italy including bocce ball, wood-fired pizza, and a host's mercatino brought to life through @sanpellegrino_us in the heart of Austin, Texas at Piazza Sanpellegrino. 🍋",
												"url": "https://www.instagram.com/reel/Cpp2vzLjVpH/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_stride.toString(),
												"title": "Stride",
												"text": "@stride_5thstreet aims to reinvent the definition of a runner through strategically-designed treadmill-based interval training group classes taken at your own pace, empowering every client to cross their own personal finish line 🏁",
												"url": "https://www.instagram.com/reel/CmPWgLsJrKO/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_surreal_garden.toString(),
												"title": "Surreal Garden",
												"text": "For the second consecutive year, @ion_art_atx will illuminate the @zilkerbotanicalgarden with 30+ NEW neon art exhibits, live music, fantastical costumes, live entertainment, dancing, unlimited photo opportunities, and so much more! 🪷",
												"url": "https://www.instagram.com/reel/Cq6RViPtUyp/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_sweet_water_oysters.toString(),
												"title": "Sweet Water Oyster",
												"text": "We tried out @sweetwateroysterbar, a new seafood restaurant in Cedar Park! Featuring fresh flown oysters and seafood daily, your dining experience is guaranteed to be made with the freshest ingredients 🦪",
												"url": "https://www.instagram.com/reel/CpGgSljJdRd/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_taquero_mucho.toString(),
												"title": "Taquero Mucho",
												"text": "Looking for a yummy lunch spot to grab some delicious PINK tacos and some happy hour specials? Head over to @taqueromuchoaustin and try some of their signature drinks & tacos! 🌮",
												"url": "https://www.instagram.com/reel/ClEvNUDJ3GX/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_tenten.toString(),
												"title": "TenTen",
												"text": "@tentenatx menu highlights shareable dishes, from the freshest sashimi and sushi to flavor-forward robata, Japanese-style grilled meats and vegetables 🍣",
												"url": "https://www.instagram.com/reel/CrrJrivJRbS/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_tonys_jamaican.toString(),
												"title": "Tony's Jamaican",
												"text": "Oxtail is in the spotlight and we’re here for it! Oxtail saw a 45% increase in Yelp searches and we're going to show you where you can get one right here in @tonysjamaican 🔥",
												"url": "https://www.instagram.com/reel/CnPiH0GBN0t/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_boxt.toString(),
												"title": "Boxt",
												"text": "We got to enjoy a day of cheese, wine and more wine. Napa born, Austin made, women-owned, @drinkboxt offers an exclusive wine experience with their unique wine delivery concept 📦.",
												"url": "https://www.instagram.com/reel/Cn77-NZpEGs/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_besame.toString(),
												"title": "Besame ATX",
												"text": "For #NationalSundaeDay, we're giving you the inside scoop on where you should go! While the origins of the ice cream sundae are shrouded in hot fudge and whipped cream, one thing is sure: everyone loves this decadent dessert 🍨 Celebrate with the trio platter with Cookies & Cream 🍪Mango 🥭 and Birthday Cake Ice Cream 🎂 at @besameatx!",
												"url": "https://www.instagram.com/reel/CkycBN2pWJR/"
											}),
											JSON.stringify({
												"thumbnail": instagram_reel_Yelp_Review_2022.toString(),
												"title": "Yelp Review 2022",
												"text": "Cheers to the end of the year! 🥂 Raise a glass to all the memories made on our Yelp Elite Squad in 2022. From the @wanderlustwineco Drag Brunch to @museumoficecream PINKMAS we had a blast visiting new businesses and making endless memories. Here's to another year on Yelp! 🥳",
												"url": "https://www.instagram.com/reel/Cm2Oc7rhWPf/"
											})
										]
									}
								/>
							}
						/>
					</div>

					<div className="info-section-container" style={{backgroundColor: "#ffffff"}}>
						<InfoSection
							section_title={
								JSON.stringify({
									"text": "Tiktoks",
									"font-family": "sans-serif",
									"font-size": "clamp(2vw, 2.5rem, 5.5vw)"
								})
							}
							section_content={
								<SocialMedia
									media={
										[
											JSON.stringify({
												"thumbnail": tiktok_la_plancha.toString(),
												"title": "La Plancha ATX",
												"text": "@laplanchaatx: We like it A LOT! The tortas from La Plancha in Austin are a must 🤩🤤 #YelpAustin #AustinTX",
												"url": "https://www.tiktok.com/@yelptexas/video/7268719992085089582"
											}),
											JSON.stringify({
												"thumbnail": tiktok_perrys_steakhouse.toString(),
												"title": "Perry's Steakhouse",
												"text": "@perryssteakhouse: Perry's Steakhouse serves a variety of American classics but their Pork Chop is one ICONIC dish! Try them on your next Austin visit 🤩🍽️ #YelpAustin",
												"url": "https://www.tiktok.com/@yelptexas/video/7262050260380290347"
											}),
											JSON.stringify({
												"thumbnail": tiktok_via313.toString(),
												"title": "Via 313",
												"text": "@via313pizza: Nothing hits better than the delicious Detroit-style pizza from Via 313 in Austin, TX! 🍕🍹#YelpAustin #Austin,TX",
												"url": "https://www.tiktok.com/@yelptexas/video/7256866567269469486"
											}),
											JSON.stringify({
												"thumbnail": tiktok_jades_kitchen.toString(),
												"title": "Jade Restaurant",
												"text": "Our favorite spot in Austin is Jade Restaurant, their selection of dumplings is out of this world 🤯🤤🥟 #AsianOwned",
												"url": "https://www.tiktok.com/@yelptexas/video/7250556394020244782"
											}),
											JSON.stringify({
												"thumbnail": tiktok_the_well.toString(),
												"title": "The Well",
												"text": "We can't get over the delicious happy hour menu from The Well 🤩🤤 #OurSnakeMeal",
												"url": "https://www.tiktok.com/@yelptexas/video/7242001954199571754"
											}),
											JSON.stringify({
												"thumbnail": tiktok_ciao_austin.toString(),
												"title": "Ciao Austin",
												"text": "Thank you to everyone who attended the Piazza Sanpellegrino, Sanpellegrino, and to our partners 🫶🏻 We hope everyone had a blast!",
												"url": "https://www.tiktok.com/@yelptexas/video/7210812598823030058"
											}),
											JSON.stringify({
												"thumbnail": tiktok_la_popular.toString(),
												"title": "La Popular",
												"text": "The only thing I KNOW I am right about is that the Al Pastor tacos and cocktails from La Popular in Austin are delicious 🔥🌮 #AustinTX #LaPopular",
												"url": "https://www.tiktok.com/@yelptexas/video/7233455143352667435"
											}),
											JSON.stringify({
												"thumbnail": tiktok_tenten.toString(),
												"title": "TenTen",
												"text": "Oh, Joey... the Friday lunch menu from TenTen looks stunning 🤩🤤 #AustinTX #TenTen",
												"url": "https://www.tiktok.com/@yelptexas/video/7228285816731274542"
											}),
											JSON.stringify({
												"thumbnail": tiktok_salsa_limon.toString(),
												"title": "Salsa Limón",
												"text": "@salsa_limon: Never broke' enough for the happy hour deals at Salsa Limon in Austin, TX! 🍹🌮",
												"url": "https://www.tiktok.com/@yelptexas/video/7223807554185415978"
											}),
											JSON.stringify({
												"thumbnail": tiktok_munch_munch.toString(),
												"title": "Munch Munch",
												"text": "Munch Munch is #VeteranOwned & #BlackOwned restaurant offering a variety of deliciously, flakey waffles 🧇",
												"url": "https://www.tiktok.com/@yelptexas/video/7218639950454246702"
											}),
											JSON.stringify({
												"thumbnail": tiktok_san_pellegrino.toString(),
												"title": "San Pellegrino",
												"text": "Going to Austin for SXSW? 🤩Sanpellegrino & Yelp invite u to transport to Italy during SXSW at Piazza Sanpellegrino 🇮🇹 Visit yelp.com/events to RSVP",
												"url": "https://www.tiktok.com/@yelptexas/video/7238650677965131050"
											}),
											JSON.stringify({
												"thumbnail": tiktok_pinches_tacos.toString(),
												"title": "Pinches Tacos",
												"text": "Let's just say, life has been pretty good with the tacos and tortas from Pinches Tacos in Austin, TX 🌮🤤 #tacos #ATXfoodie #YelpAustin #supportlocal",
												"url": "https://www.tiktok.com/@yelptexas/video/7206369790661856558"
											}),
											JSON.stringify({
												"thumbnail": tiktok_tonys_jamaican.toString(),
												"title": "Tony's Jamaican Food",
												"text": "🚨2023 NEW FOOD TREND ALERT🚨Oxtail is making an appearance this year, and we are having it at Tony’s Jamaican Food! 🔥 #Yelp #Austin #FoodTrend",
												"url": "https://www.tiktok.com/@yelptexas/video/7200771160680697131"
											}),
											JSON.stringify({
												"thumbnail": tiktok_chilantro.toString(),
												"title": "Chilantro",
												"text": "Did you hear that Chi'Lantro has NEW curated bowls? Try their Japchae con Queso 🧀 or Tofu Noodle! 🍜#ChiLantro #Yelp #Foodie #NEW",
												"url": "https://www.tiktok.com/@yelptexas/video/7198218185168932139"
											}),
											JSON.stringify({
												"thumbnail": tiktok_cookie_wookie.toString(),
												"title": "Cookie Wookie",
												"text": "With flavors like Ube Coconut 💜 and Miso Oatmeal Raisin, you can't go wrong with any of the cookies from Cookie Wookie in Austin 🍪 #yelp #austin",
												"url": "https://www.tiktok.com/@yelptexas/video/7189344003828239662"
											}),
											JSON.stringify({
												"thumbnail": tiktok_peached_tortilla.toString(),
												"title": "Peached Tortilla",
												"text": "We certainly won't stop you if you're thinking of treating yourself to the delicious menu at The Peached Tortilla 🍽️ #yelp #austin #foodietok",
												"url": "https://www.tiktok.com/@yelptexas/video/7184846066020404526"
											}),
											// JSON.stringify({
											// 	// "thumbnail": ,
											// 	"title": "",
											// 	"text": "",
											// 	"url": ""
											// }),
											// JSON.stringify({
											// 	// "thumbnail": ,
											// 	"title": "",
											// 	"text": "",
											// 	"url": ""
											// }),
											// JSON.stringify({
											// 	// "thumbnail": ,
											// 	"title": "",
											// 	"text": "",
											// 	"url": ""
											// }),
										]
									}
								/>
							}
						/>
					</div>

					{/* Social Media */}
					{/* <div id="socials"></div>
					<div className="info-section-container">
						<InfoSection
							section_title={
								JSON.stringify({
									"text": "How it works",
									"font-family": "",
									"font-size": "clamp(2vw, 2.5rem, 5.5vw)"
								})
							}
							section_content={
								<>
									<p style={{width: "100%", textAlign: "center"}}>[insert graphics here]</p>
								</>
							}
						/>
					</div> */}

				</div>
			</div>

		</div>
	);
}

export default App;
