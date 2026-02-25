# How to Deploy to cPanel

Since your application uses **Next.js Server-Side features** (like Middleware for the Admin Login and API routes), you cannot just upload static HTML files. You must use the **"Setup Node.js App"** feature in cPanel.

## Prerequisites
- Your cPanel hosting must support **Node.js**.
- You need access to **File Manager** or **FTP**.

## Step 1: Prepare the Application
1. We have created a `server.js` file in your project root. This is the entry point cPanel will use.
2. Ensure `package.json` is ready (it is).

## Step 2: Upload Files to cPanel
1. Login to cPanel and go to **File Manager**.
2. Create a folder for your app (e.g., `afrokokoroot`).
3. Upload the following files/folders from your local project to that folder:
   - `package.json`
   - `package-lock.json`
   - `server.js`
   - `next.config.ts`
   - `public/` (folder)
   - `src/` (folder)
   - `.env` (Create this if you have one, or set environment variables in cPanel)
   
   **Do NOT upload `node_modules` or `.next` folders.** It is better to install and build on the server.

## Step 3: Setup Node.js App in cPanel
1. Go to **"Setup Node.js App"** in cPanel.
2. Click **"Create Application"**.
3. **Node.js Version**: Select 18.x or 20.x (Recommended).
4. **Application Mode**: Production.
5. **Application Root**: Enter the folder name you created (e.g., `afrokokoroot`).
6. **Application URL**: Select your domain.
7. **Application Startup File**: Enter `server.js`.
8. Click **Create**.

## Step 4: Install Dependencies and Build
1. Once created, stop the app if it's running.
2. Scroll down to the "Detected configuration file" section usually, or look for the **"Run NPM Install"** button. Click it to install dependencies.
   - *If the button fails or isn't there:*
     - Copy the "Enter to the virtual environment" command (it looks like `source /home/user/nodevenv/...`).
     - Open **Terminal** in cPanel (or SSH).
     - Paste the command to enter the environment.
     - Run `npm install`.
3. **Build the Next.js App**:
   - In the same terminal (inside the virtual environment), run:
     ```bash
     npm run build
     ```
   - This will create the `.next` folder on the server.

## Step 5: Environment Variables
1. In the "Setup Node.js App" page, scroll to "Environment Variables".
2. Add the following:
   - `NODE_ENV` = `production`
   - `ADMIN_USERNAME` = `your_admin_username` (optional, default is admin)
   - `ADMIN_PASSWORD` = `your_secure_password` (optional, default is password123)

## Step 6: Restart
1. Go back to the "Setup Node.js App" page.
2. Click **Restart**.

Your site should now be live!

## Troubleshooting
- **500 Error?** Check the `stderr.log` in your application root folder.
- **Admin Login not working?** Ensure cookies are working and `middleware.ts` is active (the build step ensures this).
