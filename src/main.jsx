import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom'
import { CoursesContextProvider } from './context/CourseContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CoursesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CoursesContextProvider>
)
import "bootstrap/dist/js/bootstrap.bundle.min.js"


