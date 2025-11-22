import React from 'react'
import Card from './components/Card'
const App = () => {

const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    role: "Frontend Developer",
    datePosted: "5 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$85/hr",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    role: "iOS Engineer",
    datePosted: "2 weeks ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$60/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    role: "Backend Developer",
    datePosted: "10 days ago",
    tag1: "Part Time",
    tag2: "Junior Level",
    payPerHour: "$45/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    role: "Full Stack Engineer",
    datePosted: "3 weeks ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$90/hr",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    role: "Machine Learning Engineer",
    datePosted: "1 week ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$70/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    role: "Cloud Engineer (Azure)",
    datePosted: "4 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$80/hr",
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    role: "Software Developer (Autopilot)",
    datePosted: "6 days ago",
    tag1: "Part Time",
    tag2: "Junior Level",
    payPerHour: "$50/hr",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    companyName: "OpenAI",
    role: "AI Research Engineer",
    datePosted: "10 weeks ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$120/hr",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
    companyName: "Oracle",
    role: "Database Administrator",
    datePosted: "3 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$55/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://img.icons8.com/color/48/ibm.png",
    companyName: "IBM",
    role: "Data Engineer",
    datePosted: "8 days ago",
    tag1: "Part Time",
    tag2: "Senior Level",
    payPerHour: "$65/hr",
    location: "Delhi, India"
  }
];


  return (
    <div className='parent'>
     
    {jobOpenings.map(function(elem, idx){    {/*elem print element one by one and idx shows index of the element */}
     return <div key = {idx}>
      <Card   company = {elem.companyName} role = {elem.role} PostedOn = {elem.datePosted} tag1 ={elem.tag1}  tag2 ={elem.tag2} payment = {elem.payPerHour} location = {elem.location} logo = {elem.brandLogo}/>
     </div>
    } )}
    </div>
  )
}

export default App