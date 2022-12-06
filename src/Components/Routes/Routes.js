import { createBrowserRouter} from "react-router-dom";
import Blog from "../BlogSection/Blog";
import AllCourse from "../Courses/Course/AllCourse";
import Home from "../Courses/Home/Home";
import ErrorPage from "../Error/ErrorPage";
import FAQ from "../FAQ/FAQ";
import Login from "../Login/Login";
import Main from "../Main/Main";
import PremeumComponent from "../PremeumComponent/PremeumComponent";
import Registration from "../Registration/Registration";
import SingleCourseDetails from "../SingleCoursesDetails/SingleCourseDetails";
import PrivateRoutes from "./PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <AllCourse></AllCourse>,
                loader: () => fetch('https://code-solution-forces-server.vercel.app/totalCourses')
            },
            {
                path: '/singleItems/:id',
                element:<SingleCourseDetails></SingleCourseDetails>,
                loader: ({params}) => fetch(`https://code-solution-forces-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/regitration',
                element: <Registration></Registration>
            },
            {
                path: '/premium/:id',
                element: <PrivateRoutes><PremeumComponent></PremeumComponent></PrivateRoutes>,
                loader: ({params}) => fetch(`https://code-solution-forces-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);