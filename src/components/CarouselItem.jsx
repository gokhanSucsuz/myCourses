/* eslint-disable react/prop-types */
export default function CarouselItem({ course }) {
    const isActive = (course.id === 1 ? "carousel-item active" : "carousel-item");
    const image = `${course.image}`
    return (
        <>
            <div className={isActive}>
                <img src={image} className="d-block w-100" height="500px" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>{course.title}</h5>
                    <p>{course.content}</p>
                    <h3>${course.price}</h3>
                </div>
            </div>

        </>
    )
}