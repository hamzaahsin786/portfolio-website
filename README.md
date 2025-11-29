# Muhammad Hamza - AI Engineer Portfolio

A modern, interactive portfolio website showcasing AI/ML projects, skills, and experience. Built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

✨ **Modern Design** - Clean, professional UI with smooth animations
🎨 **Interactive Components** - Engaging user experience with Framer Motion
📱 **Responsive** - Fully responsive design for all devices
🚀 **Fast Performance** - Built with Vite for lightning-fast load times
🎯 **SEO Optimized** - Proper meta tags and semantic HTML

## Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Deployment:** Vercel (Free)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your profile picture:**
   - Place your profile photo in the `public` folder
   - Name it `profile.jpg` (or update the path in `src/components/Hero.jsx`)

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Deployment on Vercel (FREE)

Vercel offers **free hosting** for personal projects with:
- Unlimited bandwidth
- Automatic SSL certificates
- Global CDN
- Automatic deployments from Git

### Method 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Select "Yes" to deploy
   - Choose your project settings

4. **Deploy to Production:**
   ```bash
   vercel --prod
   ```

### Method 2: Deploy via Vercel Dashboard

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Go to Vercel Dashboard:**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub

3. **Import Project:**
   - Click "Add New" → "Project"
   - Select your GitHub repository
   - Vercel will auto-detect Vite settings

4. **Deploy:**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your site will be live at `your-project.vercel.app`

### Method 3: Quick Deploy (One Command)

```bash
npm run build && vercel --prod
```

## Customization

### Update Personal Information

1. **Contact Information:**
   - Update email, phone, LinkedIn in `src/components/Hero.jsx` and `src/components/Contact.jsx`

2. **Profile Picture:**
   - Add your photo to `public/profile.jpg`
   - Recommended size: 500x500px or higher (square format)

3. **LinkedIn URL:**
   - Update the LinkedIn link in `src/components/Hero.jsx` line 65

4. **Projects:**
   - Modify projects in `src/components/Projects.jsx`

5. **Skills:**
   - Update skills and proficiency levels in `src/components/Skills.jsx`

6. **Experience:**
   - Modify work experience in `src/components/Experience.jsx`

### Color Scheme

Edit colors in `tailwind.config.js`:

```js
colors: {
  primary: '#3b82f6',    // Blue
  secondary: '#8b5cf6',  // Purple
  dark: '#0f172a',       // Dark background
  light: '#f8fafc',      // Light text
}
```

## Project Structure

```
portfolio-website/
├── public/
│   └── profile.jpg          # Your profile picture
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Hero.jsx         # Hero section with intro
│   │   ├── About.jsx        # About section
│   │   ├── Experience.jsx   # Work experience & education
│   │   ├── Projects.jsx     # Project showcase
│   │   ├── Skills.jsx       # Skills & expertise
│   │   └── Contact.jsx      # Contact information
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
└── vercel.json              # Vercel deployment config
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Adding Your Profile Picture

1. Take or choose a professional photo (headshot recommended)
2. Crop it to a square format (1:1 aspect ratio)
3. Save it as `profile.jpg` in the `public` folder
4. Recommended resolution: 500x500px or higher

If you don't add a picture, a nice gradient placeholder with your initials (MH) will appear instead.

## Vercel Free Tier Limits

✅ **What's Included (FREE):**
- Unlimited websites
- Unlimited bandwidth
- Automatic SSL certificates
- Global CDN (Content Delivery Network)
- Automatic Git integration
- Custom domains (you can connect your own domain)
- Analytics (basic)

❌ **Paid Features:**
- Team collaboration
- Advanced analytics
- Password protection
- More build minutes for complex projects

**For a portfolio website, the free tier is more than enough!**

## Support & Issues

If you encounter any issues:
1. Check that Node.js is properly installed: `node --version`
2. Clear npm cache: `npm cache clean --force`
3. Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

## License

This project is open source and available under the MIT License.

## Credits

Built by Muhammad Hamza
- Email: hamzaahsin786@gmail.com
- LinkedIn: [Muhammad Hamza](https://www.linkedin.com/in/muhammad-hamza-ai-engineer)

---

**Made with ❤️ using React, Tailwind CSS, and Framer Motion**
