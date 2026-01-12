# Illusionist Aakarsh - Professional Website

This is a [Next.js](https://nextjs.org) project for Aakarsh S Bhat's professional illusionist website.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Instagram API Configuration
INSTAGRAM_ACCESS_TOKEN=your_instagram_access_token_here

# Email Service Configuration (for contact form)
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password_or_app_password
EMAIL_HOST=smtp.example.com
EMAIL_PORT=465
```

### Getting Your Instagram Access Token

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create an app and get an Instagram Basic Display API access token
3. Add the token to your environment variables

### Email Configuration

For the contact form to work, you need to configure email settings:
- **EMAIL_USER**: Your email address
- **EMAIL_PASS**: Your email password or app-specific password
- **EMAIL_HOST**: Your SMTP server (e.g., `smtp.gmail.com` for Gmail)
- **EMAIL_PORT**: SMTP port (usually 465 for SSL)

## Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Deploy on Vercel

### Quick Start

1. **Push your code to GitHub/GitLab/Bitbucket**
2. **Sign up at [vercel.com](https://vercel.com)** (free account)
3. **Import your repository** in Vercel dashboard
4. **Set up Vercel KV** (Storage tab → Create Database → KV)
5. **Add environment variables** (see below)
6. **Deploy!** Your site will be live at `your-project.vercel.app`

### 📖 Complete Deployment Guide

**See [DEPLOYMENT.md](./DEPLOYMENT.md) for:**
- ✅ Step-by-step deployment instructions
- ✅ Custom domain setup (with DNS configuration)
- ✅ Environment variables setup
- ✅ Troubleshooting guide
- ✅ Post-deployment checklist
- ✅ Free tier information

### Environment Variables Required

Add these in Vercel project settings → Environment Variables:

```
INSTAGRAM_ACCESS_TOKEN=your_initial_token
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=465
```

### Important Notes

- ✅ **Vercel Free Tier is enough!** Unlimited bandwidth, free SSL, custom domains
- ✅ **Automatic Token Refresh:** Instagram tokens auto-refresh via Vercel KV
- ✅ **Zero Configuration:** Vercel auto-detects Next.js
- ✅ **Custom Domain:** Free SSL certificate included

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)
