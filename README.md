# 🍽️ ELSSE - Eco-Friendly Food Delivery Platform

A modern, sustainable food delivery website built with Next.js, featuring gamification, eco-tracking, and beautiful UI.

![ELSSE Preview](https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=400&fit=crop&crop=center)

## 🚀 Quick Deployment to Netlify

### Method 1: Direct Netlify Deploy (Recommended)

1. **Fork/Clone this repository**
2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose your repository
   - **Build settings are already configured!**
   - Click "Deploy site"

### Method 2: Manual Deploy

1. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Build the project:**
   \`\`\`bash
   npm run build
   \`\`\`

3. **Deploy the `out` folder to Netlify**

## 🔧 Build Configuration

The project is pre-configured for Netlify with:
- ✅ Static export enabled
- ✅ Image optimization disabled for static hosting
- ✅ Proper routing configuration
- ✅ Build optimizations

## 📁 Key Files for Deployment

- `netlify.toml` - Netlify configuration
- `next.config.mjs` - Next.js static export settings
- `package.json` - Dependencies and scripts
- `.nvmrc` - Node.js version specification

## 🛠️ Local Development

\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
\`\`\`

## ✨ Features

### 🍽️ Core Functionality
- Shopping cart with localStorage persistence
- Restaurant browsing with ratings
- Menu categorization and search
- Order tracking system
- Contact forms

### 🌱 Eco-Friendly Features
- Carbon footprint calculator
- Tree planting community tracker
- Sustainability dashboard
- Eco-friendly restaurant badges

### 🎮 Gamification
- XP system and user leveling
- Achievement badges and rewards
- Community leaderboards
- Weekly eco-challenges

### 📱 Technical Features
- Fully responsive design
- TypeScript for type safety
- Tailwind CSS for styling
- Radix UI components
- SEO optimized
- Accessibility compliant

## 🌐 Live Demo

Once deployed, your site will include:
- 🏠 Homepage with food gallery
- 🍽️ Interactive menu with cart
- 🛒 Shopping cart with tip system
- 🎮 Gamification hub
- 🌱 Sustainability pages
- 📞 Contact forms
- 🌳 Tree planting tracker

## 🔧 Troubleshooting

### Build Issues
If you encounter build errors:

1. **Clear cache:**
   \`\`\`bash
   rm -rf .next node_modules package-lock.json
   npm install
   \`\`\`

2. **Check Node.js version:**
   \`\`\`bash
   node --version  # Should be 18+
   \`\`\`

3. **Manual build test:**
   \`\`\`bash
   npm run build
   \`\`\`

### Netlify Deployment Issues
- Ensure `netlify.toml` is in root directory
- Check build logs for specific errors
- Verify Node.js version is 18+

## 📊 Performance

- ⚡ Lighthouse Score: 95+
- 📱 Mobile Optimized
- 🔍 SEO Ready
- ♿ Accessible

## 🤝 Support

Need help?
- Check build logs in Netlify dashboard
- Ensure all files are properly uploaded
- Verify Node.js version compatibility

---

Made with 💚 for a sustainable future 🌍
