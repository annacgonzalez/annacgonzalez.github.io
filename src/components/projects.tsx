

type ProjectProp = {
    projects: Array<string>;
}

function Projects({ projects }: ProjectProp) {
    
    return(<>
        {
            projects.map((proj_json) => {
                const project = JSON.parse(proj_json);
                return(
                    <div key={project["title"]}>
                        <div className="resume-header">
                            <div className="resume-employer">
                                <span style={{fontWeight: "bold"}}>{project["title"]}</span>
                            </div>
                        </div>
                        <div className="exp-info">
                            <i>{project["desc_brief"]}</i>
                            <br />
                            <button
                                className="proj-btn"
                                onClick={() => show_project(`${project["title"]}-modal`)}>
                                view project
                            </button>
                            {
                                project["links"].map(({button, url}:any) => {
                                    return(
                                        <button className="proj-btn" key={button}>
                                            <a
                                                className="proj-btn-link"
                                                key={button}
                                                href={url}
                                                target="_blank"
                                                rel="noreferrer">
                                                {button}
                                            </a>
                                        </button>
                                    )
                                })
                            }
                            <br/>
                            <div id={`${project["title"]}-modal`} className="modal">
                                <div className="close" onClick={() => hide_project(project["title"])}>&times;</div>
                                {
                                    (project["visual"] !== undefined)?
                                    (
                                        <img className="modal-image-content" src={project["visual"]} alt="modal00" id="img01" />
                                    ):(
                                        <iframe className="modal-video-content" title="offensive-app" allow="autoplay; encrypted-media" src="https://clipchamp.com/watch/WP8xuRuz2EZ/embed"></iframe>
                                        // <iframe src="https://clipchamp.com/watch/WP8xuRuz2EZ?utm_source=share&utm_medium=social&utm_campaign=watch"></iframe>
                                    )
                                    
                                }
                                
                                <div id="caption">{project["desc_brief"]}</div>
                            </div>
                            <ul className="exp-info-list" id="hardware-text" style={{marginLeft: "3%", lineHeight: "200%"}}>
                                {
                                    project["desc_bullets"].map((bullet:string) => {
                                        return(
                                            <li className="exp-info-elem" key={bullet}>
                                                {bullet}
                                            </li>
                                        )
                                    })
                                }
                                {
                                    ((project["github"] !== undefined) && (project["github"] !== "")) ?
                                    (
                                        <li className="exp-info-elem" key={project["title"]}>
                                            <a href={project} target="_blank" rel="noreferrer">
                                                View source code
                                            </a>
                                        </li>
                                    ) :
                                    (<></>)
                                }
                            </ul> 
                        </div>
                    </div>
                )
            })
        }
    </>)
}

function show_project(modal_id:string): undefined {
    var modal = document.getElementById(modal_id);
    // var modalImg = document.getElementById(`${id}`) as HTMLImageElement;
    if(modal) {
        modal.style.display = "block";
    }
    
    return undefined;
}

function hide_project(id:string): undefined {
    var modal = document.getElementById(`${id}-modal`);
    if(modal) {
        modal.style.display = "none";
    }

    return undefined
}

export {Projects};