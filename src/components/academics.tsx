

type SchoolsProp = {
    schools: Array<string>;
}

function Academics({ schools }: SchoolsProp) {
    
    return(
        <>
        {
            schools.map((school_json) => {
                const school = JSON.parse(school_json);

                const school_desc = ("description" in school)? (
                    <ul className="edu-info-list">
                        {
                            school["description"].map((desc_bullet: string) => {
                                return(
                                    <li className="edu-info-elem" key={desc_bullet}>{desc_bullet}</li>
                                )
                            })
                        }
                    </ul>
                ):(
                    ("descriptions" in school)? (
                        <>
                            <br /><br />
                            {
                                school["descriptions"].map(({sub_desc_title, sub_desc}: any) => {
                                    const sub_desc_bullets = sub_desc as Array<string>;
                                    return(
                                        <div key={sub_desc_title}>
                                            <span className="edu-sub-desc">{sub_desc_title}</span>
                                            <ul className="edu-info-list">
                                                {
                                                    sub_desc_bullets.map((elem) => {
                                                        return(
                                                            <li className="edu-info-elem" key={elem}>{elem}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    )
                                })
                            }
                        </>
                    ) : (
                        <></>
                    )
                );
                
                return(
                    // <div key={school["employer"]}>{school["employer"]}</div>
                    <div className="edu" key={school["employer"]}>
                        <span className="resume-header">
                            <div className="resume-employer-container">
                                <span className="resume-employer">{school["employer"]}, </span>
                                <span className="resume-location">{school["location"]}</span>
                            </div>
                            <div className="resume-dates">
                                <span>{school["duration"]}</span>
                            </div>
                        </span>
                        <div className="edu-info">
                            <i>{school["major0"]}</i>
                            <br></br>
                            <i>{school["major1"]}</i>
                            {school_desc}
                        </div>
                    </div>
                )
            })
        }
        </>
    )
}

export {Academics};