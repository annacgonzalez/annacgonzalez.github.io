import React from "react";

type CoursesProp = {
    courses: string;
}

// type CoursesInfo = {
//     course_title: string;
//     course_desc: string;
// }

function RelevantCoursework({ courses }: CoursesProp) {

    // create an array of JSON with course info
    const courses_json = JSON.parse(courses);
    const courses_arr = [];
    for(let idx in courses_json) {
        courses_arr.push({
            course_title: idx,
            course_desc: courses_json[idx]
        })
    }

    // render the course information into html
    return (
        <div className="coursework-container">
            
            {/* Coursework Header */}
            <div>
                <span className="coursework-title">Relevant Coursework:</span>
            </div>
            <br/>

            {/* Coursework Content */}
            {
                courses_arr.map(({course_title, course_desc}: any) =>

                    <div
                        className="coursework-spacing"
                        key={course_title}
                    >
                        <span className="coursework">{course_title}</span>
                        <i className="coursework-desc">{course_desc}</i>
                    </div>

                )
            }

        </div>
    )
}

export {RelevantCoursework};