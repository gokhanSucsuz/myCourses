/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Loading from "../components/Loading";

const CoursesContext = createContext()

function CoursesContextProvider({ children }) {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(true)
    const fetchCourses = async () => {
        try {
            const response = await axios.get("http://localhost:3000/courses")
            setCourses(response.data)
            setLoading(false)
        } catch (error) {
            setLoading(true)
        }
    }
    useEffect(() => {
        fetchCourses();
    }, [])
    const removeCourse = (id) => {
        const afterDeletedCourses = courses.filter(course => course.id !== id)
        setCourses(afterDeletedCourses)
    }

    return (
        <CoursesContext.Provider value={{ courses, loading, fetchCourses, removeCourse }}>
            {children}
        </CoursesContext.Provider>
    )
}

export { CoursesContext, CoursesContextProvider }