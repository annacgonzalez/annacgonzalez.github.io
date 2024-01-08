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
			<div
				style={parseInlineStyle("background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);")}>
				<div
					style={parseInlineStyle("padding:8px;")}>
					<div
						style={parseInlineStyle("background:#F8F8F8; line-height:0; margin-top:40px; padding:0.0% 0; text-align:center; width:100%;")}>
						
						<img className='social-media-content' alt={content_alt} style={{height: "auto", width: "100%"}} src={content_thumbnail}></img>
						
					</div>
					<p
						style={parseInlineStyle("color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;")}>
						<a
							rel="noreferrer"
							href="https://www.instagram.com/p/BGUPwmztyzw/"
							style={parseInlineStyle("color:#c9c8cd; font-family:Arial,sans-serif; font-size:1rem; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;")}
							target="_blank">
							{content_desc}
						</a>
					</p>
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
