import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import Home from './pages/Home'
import { About, Employers, Candidates, Consultancy, NotFound } from './pages/Pages'
import { Doctors, Hospitals, JobDetails, Jobs } from './pages/Careers'
import { HospitalLeaseSale, MedicalEquipment } from './pages/Marketplace'
import Contact from './pages/Contact'
export default function App(){ const location=useLocation(); return <AnimatePresence mode="wait"><Routes location={location} key={location.pathname}><Route element={<Layout/>}><Route index element={<Home/>}/><Route path="about" element={<About/>}/><Route path="employers" element={<Employers/>}/><Route path="hospitals" element={<Hospitals/>}/><Route path="doctors" element={<Doctors/>}/><Route path="jobs" element={<Jobs/>}/><Route path="jobs/:jobId" element={<JobDetails/>}/><Route path="candidates" element={<Candidates/>}/><Route path="consultancy" element={<Consultancy/>}/><Route path="hospital-lease-sale" element={<HospitalLeaseSale/>}/><Route path="medical-equipment" element={<MedicalEquipment/>}/><Route path="contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Route></Routes></AnimatePresence> }
