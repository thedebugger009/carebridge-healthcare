export const jobs=[
  {id:'cardiology-mumbai',title:'Consultant Cardiologist',specialty:'Cardiology',location:'Mumbai',hospital:'Demo Heart & Care Hospital',experience:'5+ years',salary:'₹30–45 LPA',salaryBand:'30+',type:'Full time',summary:'Join a multidisciplinary cardiac care team in a well-equipped tertiary setting.'},
  {id:'nursing-bengaluru',title:'Nursing Superintendent',specialty:'Nursing',location:'Bengaluru',hospital:'Demo City Hospital',experience:'8+ years',salary:'₹16–22 LPA',salaryBand:'15-30',type:'Full time',summary:'Lead nursing operations, quality standards and workforce development.'},
  {id:'radiology-pune',title:'Radiology Technician',specialty:'Radiology',location:'Pune',hospital:'Demo Diagnostics Centre',experience:'2–4 years',salary:'₹4–6 LPA',salaryBand:'under-8',type:'Contract',summary:'Support a high-volume diagnostic imaging service with a patient-first approach.'},
  {id:'operations-delhi',title:'Hospital Operations Manager',specialty:'Operations',location:'Delhi NCR',hospital:'Demo Multispecialty Hospital',experience:'7+ years',salary:'₹20–28 LPA',salaryBand:'15-30',type:'Full time',summary:'Oversee day-to-day operations and improve care delivery across departments.'},
  {id:'paediatrics-hyderabad',title:'Consultant Paediatrician',specialty:'Paediatrics',location:'Hyderabad',hospital:'Demo Children’s Hospital',experience:'4+ years',salary:'₹22–32 LPA',salaryBand:'30+',type:'Visiting consultant',summary:'Deliver outpatient and inpatient paediatric care alongside a collaborative clinical team.'}
]
export const specialties=[...new Set(jobs.map(job=>job.specialty))]
export const locations=[...new Set(jobs.map(job=>job.location))]
