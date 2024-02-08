type MediaProp = {
	media: Array<string>;
}

function SocialMedia({ media }: MediaProp) {

	return (
		<>
			<section className="post-list">
				{
					media.map((media_content) => {
						const content = JSON.parse(media_content);
						return(
							<div className="post" key={content["title"]} style={{ boxSizing: "border-box" }}>
								{instagram_embed_foramtter(content["thumbnail"], content["title"], content["text"])}
								<a
									rel="noreferrer"
									className="post-overlay"
									href={content["url"]}
									target="_blank">
								</a>
							</div>
						)
					})
				}
			</section>
		</>
	)
}

function instagram_embed_foramtter(content_thumbnail:string, content_alt:string, content_desc:string) {

	return(
		<>
			<div className="social-media-container">
				<div className="social-media">
					<div className="social-media-content-container" style={parseInlineStyle("text-align:center;")}>
						<img className="social-media-content" alt={content_alt} src={content_thumbnail}></img>
					</div>
					{/* <div className="social-media-caption-container"> */}
						<p className="social-media-caption">
							{content_desc}
						</p>
					{/* </div> */}
					
				</div>
			</div>
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
		var curr_json_val = jsonData[String(oldJsonKey)];
		jsonData[String(newJsonKey)] = curr_json_val;
		delete jsonData[String(oldJsonKey)];
	}
}

export { SocialMedia };
