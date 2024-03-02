import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CoursesContext } from "../context/CourseContext";

export default function Navbar() {
    const { fetchCourses } = useContext(CoursesContext)
    return (
        <nav className="navbar navbar-expand-lg bg-warning">
            <div className="container">
                <NavLink to="/" className="navbar-brand text-danger fw-bolder">My Courses</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link active" onClick={() => fetchCourses()}>Home Page</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/courses" className="nav-link">Courses</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    )
}