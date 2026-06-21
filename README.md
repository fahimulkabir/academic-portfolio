## 🚀 How to Use This Template for Your Own Portfolio

This project uses **Vite + React** for the frontend, **Decap CMS** for content management, and is configured to deploy the public site to **GitHub Pages** while handling authentication securely via **Vercel Serverless Functions**.

If you want to use this template, follow these exact steps to connect it to your own GitHub account and Vercel deployment.

### Step 1: Fork and Clone

1. Click the **Fork** button at the top right of this repository to create a copy in your GitHub account.
2. Clone your forked repository to your local machine:
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   cd YOUR_REPO_NAME
   npm install
   ```

### Step 2: Update Repository & URL Configurations

You must point the configuration files to your new repository, otherwise, the code will try to save changes to the original author's repository.

1. **Update Vite Base Path**

   Open `vite.config.js` and update the base path to match your new repository name:

   ```javascript
   // Change "/academic-portfolio/" to your exact repository name
   base: process.env.GITHUB_ACTIONS ? "/YOUR_REPO_NAME/" : "/",
   ```

2. **Update CMS Configuration**

   Open `public/admin/config.yml` and update the following fields:

   ```javascript
   backend:
    name: github
    // MUST CHANGE to your username and repo
    repo: YOUR_USERNAME/YOUR_REPO_NAME
    branch: main
    auth_scope: repo
    // This will be your Vercel URL (e.g., (https://my-portfolio.vercel.app))
    base_url: https://YOUR_VERCEL_APP_URL.vercel.app
    auth_endpoint: api/auth

    // Update to your final public Vercel or GitHub Pages URL
    site_url: https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
   ```

### Step 3: Setup GitHub Authentication (OAuth)

To log into the `/admin` dashboard securely, you need to create a GitHub OAuth application.

1. Go to your GitHub Settings -> Developer settings -> OAuth Apps -> New OAuth App.
2. Application name: Your Portfolio CMS
3. Homepage URL: `https://YOUR_VERCEL_APP_URL.vercel.app`
4. Authorization callback URL: `https://YOUR_VERCEL_APP_URL.vercel.app/api/callback`
5. Click Register application and then Generate a new client secret. Keep this tab open for the next step.

### Step 4: Deploy to Vercel & Add Environment Variables

Vercel is required to run the serverless backend (`/api/auth` and `/api/callback`) that handles the GitHub login handshake.

1. Go to [Vercel](https://vercel.com/) and import your forked repository.
2. Before clicking Deploy (or immediately after in the project **Settings -> Environment Variables**), you **MUST** add these exactly as written:
   - `OAUTH_CLIENT_ID`: (Paste your Client ID from GitHub)
   - `OAUTH_CLIENT_SECRET`: (Paste your Client Secret from GitHub)
   - `COMPLETE_URL`: `https://YOUR_VERCEL_APP_URL.vercel.app/api/callback`
   - `ORIGIN`: `https://YOUR_VERCEL_APP_URL.vercel.app`
3. If you added these after deploying, go to the **Deployments** tab and manually trigger a **Redeploy**.

### Step 5: Enable GitHub Pages (Optional)

If you want your public site hosted at `github.io` (while keeping Vercel strictly for the Admin CMS):

1. Go to your GitHub repository **Settings** -> **Pages**.
2. Under **Build and deployment**, change the Source dropdown to **GitHub Actions**.
3. Push any change to your `main` branch. The pre-configured `.github/workflows/deploy.yml` file will automatically build and publish your site!

### Accessing Your Admin Panel

Once everything is deployed, visit `https://YOUR_VERCEL_APP_URL.vercel.app/admin/` to log in with GitHub and start adding your publications, news, and projects!
