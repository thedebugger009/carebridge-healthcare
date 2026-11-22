# CareBridge

Healthcare recruitment and hospital consultancy website scaffold built with React, Vite, Tailwind CSS and Vercel Functions.

## Local setup

```bash
npm create vite@latest carebridge-healthcare -- --template react
cd carebridge-healthcare
npm install react-router-dom framer-motion lucide-react react-hook-form zod @hookform/resolvers
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm run dev
```

This repository is already scaffolded; use `npm install` followed by `npm run dev`.

## Structure

```text
api/                 Vercel serverless functions
src/components/      Shared layout and design-system components
src/pages/           Route-level views
src/styles/          Global Tailwind styles
src/App.jsx          Router and application shell
```

## Production deployment on Vercel

Run the following commands in the project root (`carebridge-healthcare`) in VS Code's terminal:

```powershell
git init
git add .
git commit -m "Initial CareBridge website"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/carebridge-healthcare.git
git push -u origin main
```

First create the empty `carebridge-healthcare` repository in GitHub. Do not initialise it with a README, `.gitignore`, or licence, because this project already contains those files.

Then in [Vercel](https://vercel.com):

1. Choose **Add New → Project**, import the GitHub repository, and select the `main` branch.
2. Vercel detects Vite automatically. Keep the build command as `npm run build` and output directory as `dist`.
3. Under **Environment Variables**, add every value from `.env.example` for Production, Preview, and Development as appropriate.
4. Set `SITE_URL` to the exact canonical production URL, for example `https://www.yourdomain.com`.
5. Deploy. Every future push to `main` will make a production deployment.

After the first deployment, open the Vercel production URL and confirm `/`, `/contact`, `/robots.txt`, `/sitemap.xml`, and a direct route such as `/jobs/cardiology-mumbai` load successfully.

### Custom domain

In Vercel, open **Project → Settings → Domains**, add your domain, then add the DNS records Vercel provides at your domain registrar. Once Vercel marks the domain as valid, change `SITE_URL` to that final HTTPS address and redeploy so `robots.txt` and `sitemap.xml` use it.

## Enquiry email

The contact page posts to `/api/enquiry`. In Vercel, add `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL`, and `ENQUIRY_FROM_EMAIL` from `.env.example`. The sender address must use a domain verified in Resend. For local serverless testing, use `vercel dev`; Vite's development server does not run Vercel API functions.

To test live delivery after deploying: submit each Contact tab once using a controlled test email address, confirm the business inbox receives the right subject and all fields, and use that test email to reply. Test one invalid email, empty required fields, and a rapid repeat submission to confirm browser validation and server rate limiting. Never paste `RESEND_API_KEY` into source code or a `VITE_` variable.

## Launch checklist

- [ ] `npm install` and `npm run build` complete successfully.
- [ ] Production, Preview, and Development environment variables are configured in Vercel.
- [ ] The `ENQUIRY_FROM_EMAIL` domain is verified in Resend.
- [ ] `SITE_URL` matches the canonical HTTPS domain.
- [ ] `/robots.txt`, `/sitemap.xml`, favicon, all main routes, and direct deep links load.
- [ ] Each Contact tab validates errors and sends a controlled live test enquiry.
- [ ] Mobile navigation, forms, cards, and footer are visually checked at 360, 390, 768, 1024, and 1440 pixels.
- [ ] No real secrets, `.env` files, or Vercel project files are committed.
