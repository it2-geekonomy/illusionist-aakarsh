# 🚀 Step-by-Step Vercel Deployment Guide

## ✅ Pre-Deployment Checklist

Your project is **100% ready** for deployment:
- ✅ Build passes successfully
- ✅ All dependencies installed
- ✅ Production optimizations configured
- ✅ Logo/favicon added
- ✅ Instagram API optimized for Vercel
- ✅ Email service configured

---

## 📋 STEP-BY-STEP DEPLOYMENT

### **STEP 1: Push Code to GitHub** (If not already done)

1. **Open terminal in your project folder:**
   ```bash
   cd "c:\Geekonomy Projects\aakarsh\illusionist-aakarsh"
   ```

2. **Check git status:**
   ```bash
   git status
   ```

3. **Add all files:**
   ```bash
   git add .
   ```

4. **Commit changes:**
   ```bash
   git commit -m "Ready for Vercel production deployment"
   ```

5. **Push to GitHub:**
   ```bash
   git push origin main
   ```
   *(Replace `main` with your branch name if different)*

---

### **STEP 2: Create Vercel Account**

1. **Go to:** [vercel.com](https://vercel.com)
2. **Click:** "Sign Up" (top right)
3. **Choose:** Sign up with **GitHub** (recommended - easiest)
   - This connects your GitHub account
   - Makes deployment automatic
4. **Complete signup** (follow prompts)

---

### **STEP 3: Import Project to Vercel**

1. **After login, click:** "Add New Project" (or "New Project")
2. **Import Git Repository:**
   - You'll see your GitHub repositories
   - Find and select: **"illusionist-aakarsh"** (or your repo name)
   - Click **"Import"**

3. **Configure Project:**
   - **Framework Preset:** Next.js (auto-detected) ✅
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `npm run build` (auto-filled) ✅
   - **Output Directory:** `.next` (auto-filled) ✅
   - **Install Command:** `npm install` (auto-filled) ✅

4. **DO NOT CLICK DEPLOY YET!** ⚠️
   - We need to set up environment variables first

---

### **STEP 4: Set Up Vercel KV Database**

1. **Before deploying, go to your project dashboard**
   - (You can skip deployment for now and come back)

2. **In Vercel Dashboard:**
   - Click on **"Storage"** tab (left sidebar)
   - Click **"Create Database"** button
   - Select **"KV"** (Key-Value store)
   - **Name it:** `instagram-tokens` (or any name)
   - Click **"Create"**
   - ✅ This automatically adds KV environment variables

3. **Note the KV database:**
   - It's now linked to your project
   - Environment variables are auto-added

---

### **STEP 5: Configure Environment Variables**

1. **In your Vercel project:**
   - Go to **"Settings"** tab
   - Click **"Environment Variables"** (left sidebar)

2. **Add these variables one by one:**

   **Variable 1:**
   - **Key:** `INSTAGRAM_ACCESS_TOKEN`
   - **Value:** `your_actual_instagram_token_here`
   - **Environments:** ✅ Production ✅ Preview ✅ Development
   - Click **"Save"**

   **Variable 2:**
   - **Key:** `EMAIL_USER`
   - **Value:** `your_email@example.com`
   - **Environments:** ✅ Production ✅ Preview ✅ Development
   - Click **"Save"**

   **Variable 3:**
   - **Key:** `EMAIL_PASS`
   - **Value:** `your_email_password_or_app_password`
   - **Environments:** ✅ Production ✅ Preview ✅ Development
   - Click **"Save"**

   **Variable 4:**
   - **Key:** `EMAIL_HOST`
   - **Value:** `smtp.gmail.com` (or your SMTP server)
   - **Environments:** ✅ Production ✅ Preview ✅ Development
   - Click **"Save"**

   **Variable 5 (Optional):**
   - **Key:** `EMAIL_PORT`
   - **Value:** `465`
   - **Environments:** ✅ Production ✅ Preview ✅ Development
   - Click **"Save"**

   **Variable 6 (Optional - for custom domain):**
   - **Key:** `NEXT_PUBLIC_SITE_URL`
   - **Value:** `https://yourdomain.com` (your actual domain)
   - **Environments:** ✅ Production ✅ Preview ✅ Development
   - Click **"Save"**

3. **Verify all variables are added:**
   - You should see all 5-6 variables listed
   - KV variables are added automatically (don't need to add manually)

---

### **STEP 6: Deploy Your Project**

1. **Go back to:** "Deployments" tab or project overview
2. **Click:** "Deploy" button (if you skipped earlier)
   - OR if already deployed, click **"Redeploy"** on latest deployment
3. **Wait for deployment:**
   - Build process starts automatically
   - Takes 1-3 minutes
   - Watch the build logs

4. **Deployment Success:**
   - ✅ You'll see "Ready" status
   - ✅ Your site is live at: `your-project-name.vercel.app`

---

### **STEP 7: Verify Deployment**

1. **Visit your site:**
   - Click the deployment URL
   - Or go to: `https://your-project-name.vercel.app`

2. **Test everything:**
   - ✅ Homepage loads
   - ✅ All pages work
   - ✅ Images load correctly
   - ✅ Logo appears in browser tab
   - ✅ Instagram feed loads (check Media section)
   - ✅ Contact form works (test submission)

3. **Check function logs:**
   - Go to "Functions" tab in Vercel
   - Check for any errors in logs

---

### **STEP 8: Add Custom Domain (Optional)**

1. **In Vercel Dashboard:**
   - Go to **"Settings"** → **"Domains"**
   - Click **"Add Domain"**

2. **Enter your domain:**
   - Type: `illusionistaxe.com` (or your domain)
   - Click **"Add"**

3. **Configure DNS:**
   
   **For Root Domain (illusionistaxe.com):**
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Add **A Record:**
     - **Name/Host:** `@` (or leave blank)
     - **Value/IP:** `76.76.21.21`
     - **TTL:** 3600

   **For WWW (www.illusionistaxe.com):**
   - Add **CNAME Record:**
     - **Name/Host:** `www`
     - **Value:** `cname.vercel-dns.com`
     - **TTL:** 3600

4. **Wait for DNS:**
   - Usually 5-60 minutes
   - Vercel shows "Valid Configuration" when ready
   - SSL certificate auto-issues (1-5 minutes)

---

## 🔍 POST-DEPLOYMENT CHECKLIST

After deployment, verify:

- [ ] Site loads at `your-project.vercel.app`
- [ ] All pages accessible
- [ ] Logo/favicon shows in browser tab
- [ ] Instagram feed loads (Media section)
- [ ] Contact form sends emails
- [ ] Mobile responsive design works
- [ ] Custom domain configured (if added)
- [ ] HTTPS/SSL working (padlock icon)
- [ ] No errors in Vercel function logs

---

## 🐛 TROUBLESHOOTING

### Build Fails
- **Check build logs** in Vercel dashboard
- Ensure all dependencies in `package.json`
- Verify Node.js version (Vercel auto-detects)

### Environment Variables Not Working
- ✅ Make sure you selected **all environments** (Production, Preview, Development)
- ✅ **Redeploy** after adding variables
- ✅ Check variable names match exactly (case-sensitive)

### Instagram API Not Working
- ✅ Verify `INSTAGRAM_ACCESS_TOKEN` is set
- ✅ Check Vercel KV is created
- ✅ Check function logs for errors
- ✅ Ensure token is valid

### Contact Form Not Working
- ✅ Verify all email variables are set
- ✅ Check email provider allows SMTP
- ✅ Use app password for Gmail
- ✅ Check function logs

### Domain Not Working
- ✅ Wait 24-48 hours for DNS propagation
- ✅ Verify DNS records are correct
- ✅ Check domain is added in Vercel
- ✅ Wait for SSL certificate (1-5 minutes)

---

## 📊 MONITORING

**After deployment, you can:**

1. **View Analytics:**
   - Go to "Analytics" tab
   - See page views, performance

2. **Check Function Logs:**
   - Go to "Functions" tab
   - View API route logs

3. **Monitor Deployments:**
   - Every Git push = new deployment
   - Preview deployments for PRs

---

## 🔄 UPDATING YOUR SITE

**To update your site:**

1. **Make changes locally**
2. **Commit and push:**
   ```bash
   git add .
   git commit -m "Update website"
   git push origin main
   ```
3. **Vercel automatically:**
   - Detects the push
   - Builds new version
   - Deploys to production
   - **Zero downtime!**

---

## 💰 COST BREAKDOWN

**Vercel Hobby (Free) Plan:**
- ✅ Hosting: **FREE**
- ✅ Custom Domain: **FREE**
- ✅ SSL Certificate: **FREE**
- ✅ Vercel KV: **FREE** (256MB)
- ✅ Bandwidth: **FREE** (100GB/month)
- ✅ Deployments: **UNLIMITED**

**Total: $0/month** 🎉

---

## ✅ YOU'RE ALL SET!

Your website is now:
- ✅ Live on Vercel
- ✅ Production-ready
- ✅ Automatically deploying on Git pushes
- ✅ Free forever (Hobby plan)

**Next Steps:**
1. Test everything thoroughly
2. Share your live URL
3. Add custom domain (optional)
4. Monitor performance

---

## 📞 NEED HELP?

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Vercel Support:** Available in dashboard
- **Community:** [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

---

**🎉 Congratulations! Your website is live!**
