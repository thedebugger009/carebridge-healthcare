import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const pages={
  '/':['CareBridge | Healthcare Recruitment & Consultancy','Healthcare recruitment, hospital hiring, medical equipment and hospital consultancy support from CareBridge.'],
  '/doctors':['Doctor Jobs | CareBridge','Explore healthcare career opportunities and connect with CareBridge for doctor recruitment support.'],
  '/jobs':['Healthcare Jobs | CareBridge','Search healthcare jobs by role, specialty, location and employment type.'],
  '/hospitals':['Hospital Recruitment | CareBridge','Recruit doctors and healthcare teams with specialist hospital hiring support from CareBridge.'],
  '/hospital-lease-sale':['Hospital Lease & Sale | CareBridge','Confidential hospital lease and sale enquiries for owners, investors and healthcare operators.'],
  '/medical-equipment':['Medical Equipment Enquiries | CareBridge','Buy or sell medical equipment through a considered CareBridge enquiry.'],
  '/contact':['Contact CareBridge | Healthcare Enquiries','Contact CareBridge for doctor careers, hospital hiring, hospital property and equipment enquiries.'],
  '/about':['About CareBridge | Healthcare Consultancy','Learn about CareBridge’s considered approach to healthcare recruitment and consultancy.'],
  '/candidates':['For Healthcare Candidates | CareBridge','Career support for doctors and healthcare professionals considering their next opportunity.'],
  '/employers':['For Healthcare Employers | CareBridge','Recruit capable clinical, operational and healthcare leadership talent with CareBridge.'],
  '/consultancy':['Hospital Consultancy | CareBridge','Practical healthcare and hospital consultancy support for stronger operations and growth.']
}
const setMeta=(selector,attribute,value)=>{let tag=document.head.querySelector(selector);if(!tag){tag=document.createElement('meta');const [key,name]=attribute.split('=');tag.setAttribute(key,name);document.head.appendChild(tag)}tag.setAttribute('content',value)}
export default function Seo(){const {pathname}=useLocation();useEffect(()=>{const [title,description]=pathname.startsWith('/jobs/')?['Healthcare Job Details | CareBridge','Review a healthcare opportunity and send a secure enquiry to CareBridge.']:pages[pathname]||['Page Not Found | CareBridge','The requested CareBridge page could not be found.'];const url=`${window.location.origin}${pathname}`;document.title=title;setMeta('meta[name="description"]','name=description',description);setMeta('meta[property="og:title"]','property=og:title',title);setMeta('meta[property="og:description"]','property=og:description',description);setMeta('meta[property="og:url"]','property=og:url',url);let canonical=document.head.querySelector('link[rel="canonical"]');if(!canonical){canonical=document.createElement('link');canonical.setAttribute('rel','canonical');document.head.appendChild(canonical)}canonical.setAttribute('href',url)},[pathname]);return null}
