import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobsListing from '../components/JobsListing'
import ViewAllJobs from '../components/ViewAllJobs'
import CompaniesListing from '../components/CompaniesListing'
import ViewAllCompanies from '../components/ViewAllCompanies'
import ViewAllBlogs from '../components/ViewAllBlogs'
import BlogsListing from '../components/BlogsListing'

const HomePage = () => {
  return (<>
  <Hero />
  <HomeCards/>
  <JobsListing isHome={true}/>
  <ViewAllJobs/>
  <CompaniesListing isHome={true}/>
  <ViewAllCompanies/>
  <BlogsListing isHome={true}/>
  <ViewAllBlogs/>


  </>
  )
}

export default HomePage