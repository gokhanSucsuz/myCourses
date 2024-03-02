/* eslint-disable react/jsx-no-undef */
import { useContext } from 'react'
import { CoursesContext } from './context/CourseContext'
import Course from './components/Course'
import Loading from "./components/Loading"

export default function Courses() {

    const { courses, fetchCourses, loading } = useContext(CoursesContext)
    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4 p-5 ">
                {
                    loading ? courses.map((course) => {
                        return <Loading key={course.id} />
                    }) :

                        courses.length === 0 ?
                            (
                                <>
                                    <div className='d-flex flex-column w-100 shadow p-4'>
                                        <h1>There is no course here!</h1>
                                        <button className='btn btn-success btn-sm w-25' onClick={() => fetchCourses()}>Refresh Courses</button>
                                    </div>
                                </>
                            )
                            :
                            (
                                courses.map((course) => {
                                    return <Course key={course.id} course={course} />
                                })
                            )
                }
            </div>
        </>
    )
}
