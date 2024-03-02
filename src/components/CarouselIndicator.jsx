/* eslint-disable react/prop-types */

export default function CarouselIndicator({ course }) {

    const isActive = (course.id === 1 ? "active" : " ");
    const id = `${course.id}`
    return (
        <>
            <button key={course.id} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={id - 1} className={isActive + " bg-warning"} aria-current="true" aria-label="Slide 1"></button>
        </>
    )
}