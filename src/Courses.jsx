import { useContext } from 'react'
import { CoursesContext } from './context/CourseContext'
import Course from './components/Course'

export default function Courses() {

    const { courses } = useContext(CoursesContext)
    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4 p-5 ">
                {
                    courses.map((course) => {
                        return <Course key={course.id} course={course} />
                    })
                }
            </div>
        </>
    )
}
