# Vercel Production Deployment Guide

## ✅ Vercel Free Tier - Is It Enough?

**Yes!** The Vercel Hobby (Free) plan is sufficient for your website:

- ✅ **Unlimited Bandwidth** - Perfect for your site
- ✅ **100GB Bandwidth/month** - More than enough
- ✅ **100 Serverless Function Invocations/day** - Sufficient for API routes
- ✅ **Free SSL Certificate** - Automatic HTTPS
- ✅ **Custom Domain Support** - Free on all plans
- ✅ **Vercel KV** - Free tier includes 256MB storage (plenty for token storage)
- ✅ **Automatic Deployments** - From Git pushes
- ✅ **Preview Deployments** - For every PR

**Limits that won't affect you:**
- 100 function invocations/day (your site won't hit this)
- 100GB bandwidth/month (more than enough for a portfolio site)

## 🚀 Step-by-Step Deployment

### Step 1: Prepare Your Code

1. **Push to GitHub/GitLab/Bitbucket:**
   ```bash
   git add .
   git commit -m "Ready for production deployment"
   git push origin main
   ```

### Step 2: Deploy to Vercel

1. **Sign up/Login to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub (recommended) or email

2. **Import Your Project:**
   - Click **"Add New Project"**
   - Select your repository
   - Vercel will auto-detect Next.js

3. **Configure Build Settings:**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (auto)
   - **Output Directory:** `.next` (auto)
   - **Install Command:** `npm install` (auto)

4. **Click "Deploy"** - First deployment will start!

### Step 3: Set Up Vercel KV (For Instagram Token)

1. **After first deployment, go to your project dashboard**
2. **Click on "Storage" tab**
3. **Click "Create Database"**
4. **Select "KV" (Key-Value)**
5. **Name it** (e.g., "instagram-tokens")
6. **Click "Create"**
   - This automatically adds KV environment variables to your project

### Step 4: Configure Environment Variables

1. **Go to Project Settings → Environment Variables**
2. **Add these variables:**

   ```
   INSTAGRAM_ACCESS_TOKEN=your_initial_instagram_token
   EMAIL_USER=your_email@example.com
   EMAIL_PASS=your_email_password_or_app_password
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=465
   ```

3. **Important:** 
   - Select **"Production"**, **"Preview"**, and **"Development"** for each variable
   - Click **"Save"** after adding each variable

4. **KV variables are added automatically** when you create the KV database

### Step 5: Redeploy

1. **After adding environment variables:**
   - Go to **"Deployments"** tab
   - Click the **"..."** menu on the latest deployment
   - Click **"Redeploy"**
   - This ensures all environment variables are loaded

## 🌐 Custom Domain Setup

### Option A: Domain You Already Own

1. **In Vercel Dashboard:**
   - Go to your project → **"Settings"** → **"Domains"**
   - Click **"Add Domain"**
   - Enter your domain (e.g., `illusionistaxe.com`)

2. **Configure DNS Records:**
   
   **For Root Domain (illusionistaxe.com):**
   - Add an **A Record**:
     - **Name:** `@` or leave blank
     - **Value:** `76.76.21.21`
     - **TTL:** 3600 (or default)
   
   **For WWW Subdomain (www.illusionistaxe.com):**
   - Add a **CNAME Record**:
     - **Name:** `www`
     - **Value:** `cname.vercel-dns.com`
     - **TTL:** 3600 (or default)

3. **Wait for DNS Propagation:**
   - Usually takes 5-60 minutes
   - Vercel will show "Valid Configuration" when ready
   - SSL certificate is automatically issued (takes a few minutes)

### Option B: Buy Domain Through Vercel

1. **In Vercel Dashboard:**
   - Go to **"Domains"** tab
   - Click **"Buy a Domain"**
   - Search for your desired domain
   - Purchase through Vercel
   - **Automatic setup** - no DNS configuration needed!

### Domain Configuration Details

**Vercel provides:**
- ✅ Free SSL certificate (automatic)
- ✅ Automatic HTTPS redirect
- ✅ WWW to non-WWW redirect (or vice versa)
- ✅ Domain verification via DNS

**DNS Provider Examples:**
- **Namecheap:** Go to Domain List → Manage → Advanced DNS
- **GoDaddy:** DNS Management → Add Record
- **Cloudflare:** DNS → Add Record
- **Google Domains:** DNS → Custom Records

## 🔒 SSL Certificate

- **Automatic:** Vercel issues free SSL certificates via Let's Encrypt
- **Time:** Usually 1-5 minutes after DNS is configured
- **Renewal:** Automatic (no action needed)

## 📊 Post-Deployment Checklist

- [ ] Site loads at `your-project.vercel.app`
- [ ] Custom domain configured and working
- [ ] HTTPS enabled (check for padlock icon)
- [ ] Environment variables set
- [ ] Vercel KV database created
- [ ] Instagram API working (check Media section)
- [ ] Contact form working (test submission)
- [ ] All images loading correctly
- [ ] Mobile responsive design working

## 🔄 Updating Your Site

**Every time you push to your main branch:**
1. Vercel automatically detects changes
2. Creates a new deployment
3. Runs build process
4. Deploys to production
5. **Zero downtime** - old version stays live until new one is ready

**Preview Deployments:**
- Every PR gets its own preview URL
- Test changes before merging
- Share preview links with clients

## 🐛 Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version (Vercel auto-detects)

### Environment Variables Not Working
- Make sure you selected all environments (Production, Preview, Development)
- Redeploy after adding variables
- Check variable names match exactly (case-sensitive)

### Domain Not Working
- Wait 24-48 hours for DNS propagation
- Check DNS records are correct
- Verify domain is added in Vercel dashboard
- Check SSL certificate status

### Instagram API Not Working
- Verify `INSTAGRAM_ACCESS_TOKEN` is set
- Check Vercel KV is created
- Check function logs in Vercel dashboard
- Ensure token is valid

### Contact Form Not Sending Emails
- Verify all email environment variables are set
- Check email provider allows SMTP (some require app passwords)
- Check function logs for errors
- Test with a valid email configuration

## 📈 Monitoring & Analytics

**Vercel Analytics (Optional - Paid):**
- Real-time analytics
- Web Vitals monitoring
- Custom events

**Free Alternatives:**
- Google Analytics
- Vercel Speed Insights (free tier available)

## 💰 Cost Breakdown

**Vercel Hobby (Free) Plan:**
- ✅ Hosting: **FREE**
- ✅ Custom Domain: **FREE**
- ✅ SSL Certificate: **FREE**
- ✅ Vercel KV: **FREE** (256MB)
- ✅ Bandwidth: **FREE** (100GB/month)
- ✅ Deployments: **UNLIMITED**

**Total Cost: $0/month** 🎉

## 🎯 Next Steps After Deployment

1. **Test everything:**
   - Visit all pages
   - Test contact form
   - Check Instagram feed loads
   - Test on mobile devices

2. **Set up monitoring:**
   - Add Google Analytics (optional)
   - Monitor Vercel function logs

3. **Optimize:**
   - Check Core Web Vitals
   - Optimize images if needed
   - Monitor performance

4. **Share:**
   - Your site is live! Share your domain

## 📞 Support

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Vercel Support:** Available in dashboard
- **Community:** [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

---

**Your website is production-ready! 🚀**
