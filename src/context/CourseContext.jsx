/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

const CoursesContext = createContext()

function CoursesContextProvider({ children }) {
    const [courses, setCourses] = useState([])
    const fetchCourses = async () => {
        const response = await axios.get("http://localhost:3000/courses")
        setCourses(response.data)
        console.log(response.data)
    }
    useEffect(() => {
        fetchCourses();
    }, [])

    return (
        <CoursesContext.Provider value={{ courses }}>
            {children}
        </CoursesContext.Provider>
    )
}

export { CoursesContext, CoursesContextProvider }