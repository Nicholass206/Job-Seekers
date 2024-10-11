// src/App.jsx
import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage from './pages/JobPage';
import LoginPage from './pages/LoginPage';
import AddJobPage from './pages/AddJobPage';
import CompaniesPage from './pages/CompaniesPage';
import CompanyPage from './pages/CompanyPage';
import ProfilePage from './pages/ProfilePage';
import JobsCategoriesPage from './pages/JobsCategories';
import BlogsPage from './pages/BlogsPage';
import RegisterCompany from './pages/RegisterCompany'; 
import CompanyProfile from './pages/CompanyProfile';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/jobs/:id' element={<JobPage />} />
      <Route path='/login' element={<LoginPage />} />
      {/* <Route path='/add-job' element={<ProtectedRoute component={<AddJobPage />} requiredRole={2} />} /> */}
      <Route path='/add-job' element = {<AddJobPage/>}/>
      <Route path='/companies' element={<CompaniesPage/>} />
      <Route path='/companies/:id'element={<CompanyPage />} />
      <Route path='/register-company' element={<RegisterCompany />} />
      <Route path='/company-profile' element={<CompanyProfile />} />
      {/* <Route path='/profile' element={<ProtectedRoute component={<ProfilePage />} requiredRole={1} />} /> */}
      <Route path='/profile' element ={<ProfilePage/>}/>
      <Route path='/category' element ={<JobsCategoriesPage/>}/>
      <Route path="/blogs" element={<BlogsPage />} />




      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return (
      <RouterProvider router={router} />
  );
};

export default App;
