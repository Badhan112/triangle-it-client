import React from 'react';
import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import AddProject from './components/Admin/AddProject/AddProject';
import AddService from './components/Admin/AddService/AddService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import ManageProject from './components/Admin/ManageProject/ManageProject';
import ManageService from './components/Admin/ManageService/ManageService';
import OrderList from './components/Admin/OrderList/OrderList';
import AllServices from './components/AllServices/AllServices';
import Book from './components/Dashboard/Book/Book';
import BookingList from './components/Dashboard/BookingList/BookingList';
import Review from './components/Dashboard/Review/Review';
import Home from './components/Home/Home/Home';
import LogIn from './components/LogIn/LogIn';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Projects from './components/Projects/Projects/Projects';
import PrivateRoute from './components/Shared/PrivateRoute/PrivateRoute';
import UserProfile from './components/UserProfile/UserProfile';

export const UserContext = createContext();
export const ServiceContext = createContext();

function App() {
  const [user, setUser] = useState({});
  const [selectedService, setSelectedService] = useState({});

  return (
    <div>
      <UserContext.Provider value={[user, setUser]}>
        <ServiceContext.Provider value={[selectedService, setSelectedService]}>
            
            <Router>
              <Switch>

                <Route exact path='/'>
                  <Home />
                </Route>

                <Route path='/home'>
                  <Home />
                </Route>

                <Route path='/about'>
                  <AboutUs />
                </Route>

                <PrivateRoute path='/admin/orderlist'>
                  <OrderList />
                </PrivateRoute>

                <PrivateRoute path='/admin/addservice'>
                  <AddService />
                </PrivateRoute>

                <PrivateRoute path='/admin/addproject'>
                  <AddProject />
                </PrivateRoute>

                <PrivateRoute path='/admin/manageproject'>
                  <ManageProject />
                </PrivateRoute>

                <PrivateRoute path='/admin/makeadmin'>
                  <MakeAdmin />
                </PrivateRoute>

                <PrivateRoute path='/admin/manageservice'>
                  <ManageService />
                </PrivateRoute>

                <PrivateRoute path='/userprofile'>
                  <UserProfile />
                </PrivateRoute>

                <PrivateRoute path='/dashboard/book'>
                  <Book />
                </PrivateRoute>

                <PrivateRoute path='/dashboard/bookinglist'>
                  <BookingList />
                </PrivateRoute>

                <PrivateRoute path='/dashboard/review'>
                  <Review />
                </PrivateRoute>

                <Route path='/services'>
                  <AllServices />
                </Route>

                <Route path='/projects'>
                  <Projects />
                </Route>

                <Route path='/login'>
                  <LogIn />
                </Route>

                <Route path='*'>
                  <PageNotFound />
                </Route>

              </Switch>
            </Router>

        </ServiceContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
