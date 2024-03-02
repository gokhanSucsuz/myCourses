import { useContext } from "react"
import { CoursesContext } from "../context/CourseContext"
import CarouselItem from "./CarouselItem"
import CarouselIndicator from "./CarouselIndicator"

export default function Slider() {
    const { courses } = useContext(CoursesContext)

    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    {
                        courses.map((course) => {
                            return <CarouselIndicator key={course.id} course={course} />
                        })
                    }
                </div>
                <div className="carousel-inner">
                    {
                        courses.map((course) => {
                            return <CarouselItem key={course.id} course={course} />
                        })
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bg-danger rounded-5" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon bg-danger rounded-5" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}