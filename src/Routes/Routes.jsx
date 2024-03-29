import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SingleMealsDetails from "../Pages/Home/MealsCategory/SingleMealsDetails/SingleMealsDetails";
import CheckoutForm from "../Pages/Dashboard/Payment/CheckoutForm";
import Login2 from "../Pages/Login/Login2";
import SingUp2 from "../Pages/SingUp/SingUp2";
import AllMeals from "../Pages/AllMeals/AllMeals";
import Dashboard from "../Layout/Dashboard";
import MyProfile from "../Pages/Dashboard/UserHome/MyProfile";
import RequestMeals from "../Pages/Dashboard/UserHome/RequestMeals";
import MyReviews from "../Pages/Dashboard/UserHome/MyReviews";
import ManageUsers from "../Pages/Dashboard/AdminHome/ManageUsers";
import AddMeals from "../Pages/Dashboard/AdminHome/AddMeals";
import MealsAll from "../Pages/Dashboard/AdminHome/MealsAll";
import ReviewsAll from "../Pages/Dashboard/AdminHome/ReviewsAll";
import Serve from "../Pages/Dashboard/AdminHome/Serve";
import ComigUpMeals from "../Pages/Dashboard/AdminHome/ComigupMeals";
// import Upcoming from "../Pages/Upcoming/Upcoming";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import UpdateMeal from "../Pages/Dashboard/AdminHome/UpdateMeal";
import Review from "../Pages/Home/MealsCategory/Review";
import UpdateReview from "../Pages/Dashboard/AdminHome/UpdateReview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login2></Login2>,
      },
      {
        path: "/reviews/:id",
        element: <Review></Review>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/reviews/${params.id}`),
        // element: <Upcoming></Upcoming>,
      },

      {
        path: "/singup",
        element: <SingUp2></SingUp2>,
      },
      {
        path: "/singlemeals/:id",
        element: <SingleMealsDetails></SingleMealsDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/meals/${params.id}`),
      },
      // {
      //   pat: "/reviewsreq",
      //   element: <Review></Review>,
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:5000/meals/${params.id}`),
      // },
      {
        path: "/checkout/:id",
        element: <CheckoutForm></CheckoutForm>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/membarship/${params.id}`),
      },
      {
        path: "/allmeals",
        element: <AllMeals></AllMeals>,
        loader: () => fetch(`http://localhost:5000/meals`),
      },
    ],
  },

  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "myprofile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "requesMeals",
        element: <RequestMeals></RequestMeals>,
        //   loader: ({ params }) =>
        //     fetch(`http://localhost:5000/request/${params.id}`),
        // },
        // loader: () => fetch("http://localhost:5000/request"),
      },

      {
        path: "adminProfile",
        element: <AdminHome></AdminHome>,
      },

      {
        path: "myReviews",
        element: <MyReviews></MyReviews>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "addMeals",
        element: <AddMeals></AddMeals>,
      },
      {
        path: "mealsAll",
        element: <MealsAll></MealsAll>,
        loader: () => fetch("http://localhost:5000/meals"),
      },
      {
        path: "updateReviews",
        element: <UpdateReview></UpdateReview>,
      },
      {
        path: "updateMeal/:id",
        element: <UpdateMeal></UpdateMeal>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/meal/${params.id}`),
      },

      {
        path: "reviewsAll",
        element: <ReviewsAll></ReviewsAll>,
      },
      {
        path: "serve",
        element: <Serve></Serve>,
        loader: () => fetch("http://localhost:5000/requestedallmeals"),
      },
      {
        path: "comingUpMeals",
        element: <ComigUpMeals></ComigUpMeals>,
      },
    ],
  },
]);
