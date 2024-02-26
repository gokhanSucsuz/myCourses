/* eslint-disable react/prop-types */
function Course({ course }) {
    const image = `${course.image}`
    return (
        <>
            <div className="col">
                <div className="card">
                    <img src={image} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title"> Course: {course.title}</h5>
                        <p className="card-text">Content: {course.content}</p>
                        <span className="card-text">Price: {course.price}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Course;