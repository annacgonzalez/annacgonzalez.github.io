import React from "react";

type SectionProps = {
	section_title: string;
	section_content: React.ReactNode;
}

function InfoSection({ section_title, section_content }: SectionProps) {
	
	const title_options = JSON.parse(section_title);

	// console.log(title_options["font-family"]);
	
	return (
		<div>
			{/* Section Pointer Shape */}
			{/* <div className="section-shape-aligner">
				<div className="section-pointer-container">
					<div className="section-pointer"></div>
				</div>
			</div> */}

			{/* Section Title */}
			<section className="section-container">
				{
					title_options["text"] ? (
						<div className="section-title-container">
							<div className="section-title" style={{fontFamily: title_options["font-family"], fontSize: title_options["font-size"], color: title_options["font-color"]}}>
								{title_options["text"]}
							</div>
						</div>
					) : (
						<></>
					)
				}
				
				<div className="section-content" style={{boxSizing: "border-box"}}> {/* section-content doesn't have a decorator css */}
					{section_content}
				</div>
			</section>
		</div>
	)
}

export { InfoSection }