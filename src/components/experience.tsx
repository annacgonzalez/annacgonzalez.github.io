

type JobsProp = {
    jobs: Array<string>;
}

function Experience({ jobs }: JobsProp) {
    
    return(
        <>
        {
            jobs.map((job_json) => {
                const job = JSON.parse(job_json);

                const job_desc = ("description" in job)? (
                    <ul className="exp-info-list">
                        {
                            job["description"].map((desc_bullet: string) => {
                                return(
                                    <li className="exp-info-elem" key={desc_bullet}>{desc_bullet}</li>
                                )
                            })
                        }
                    </ul>
                ):(
                    ("descriptions" in job)? (
                        <>
                            <br /><br />
                            {
                                job["descriptions"].map(({sub_desc_title, sub_desc}: any) => {
                                    const sub_desc_bullets = sub_desc as Array<string>;
                                    return(
                                        <div key={sub_desc_title}>
                                            <span className="exp-sub-desc">{sub_desc_title}</span>
                                            <ul className="exp-info-list">
                                                {
                                                    sub_desc_bullets.map((elem) => {
                                                        return(
                                                            <li className="exp-info-elem" key={elem}>{elem}</li>
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
                    // <div key={job["employer"]}>{job["employer"]}</div>
                    <div className="exp" key={job["employer"]}>
                        <span className="resume-header">
                            <div className="resume-employer-container">
                                <span className="resume-employer">{job["employer"]}, </span>
                                <span className="resume-location">{job["location"]}</span>
                            </div>
                            <div className="resume-dates">
                                <span>{job["duration"]}</span>
                            </div>
                        </span>
                        <div className="exp-info">
                            <i>{job["position"]}</i>
                            {job_desc}
                        </div>
                    </div>
                )
            })
        }
        </>
    )
}

export {Experience};