import { mkdir, writeFile } from 'node:fs/promises'
const siteUrl=(process.env.SITE_URL||'https://carebridge-healthcare.vercel.app').replace(/\/$/,'')
const routes=['','/about','/doctors','/jobs','/hospitals','/hospital-lease-sale','/medical-equipment','/contact','/candidates','/employers','/consultancy']
await mkdir('public',{recursive:true})
await writeFile('public/robots.txt',`User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`)
await writeFile('public/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map(route=>`  <url><loc>${siteUrl}${route||'/'}</loc></url>`).join('\n')}\n</urlset>\n`)
