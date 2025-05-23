# 🎬 Next.js Movie App

## 🎯 What is this?
A simple movie app that shows movie information. Built with Next.js (supports both v12 and v15).

## ✨ Features
- 🎯 Show movie list
- 🔍 Show movie details
- 👥 Show movie credits
- 🎬 Show similar movies
- 📺 Show streaming providers
- 📱 Works well on mobile
- 🎨 Nice and clean design

## 🛠 Tech Stack
- ⚛️ Next.js (v12 or v15)
- ⚡ React (17 or 19)
- 📝 TypeScript
- 🎨 CSS Modules
- 🌐 TMDB API

## 🚀 Getting Started

### You need
- Node.js
- npm or yarn
- TMDB API key

### Setup steps
1. Clone this project
```bash
git clone [repository-url]
```

2. Install packages
```bash
npm install
```

3. Add `.env` file
```
API_KEY=your_tmdb_api_key_here
```

4. Start the app
```bash
npm run dev
```

## 📁 Project Structure
```
letsgo-nextjs/
├── app/           # Pages and routes (Next.js 15)
├── pages/         # Screen pages (Next.js 12)
│   ├── api/      # API functions
│   └── movies/   # Movie pages
├── components/    # UI components
├── styles/       # CSS files
├── lib/          # Shared code
└── public/       # Static assets
```

## 🔄 Switching Next.js Versions

### To Next.js 12
```bash
# 1. Switch branch
git checkout nextjs-12

# 2. Clean up
rm -rf node_modules .next package-lock.json
rm -rf .eslintcache .next-cache
npm cache clean --force

# 3. Install
npm install
```

### To Next.js 15
```bash
# 1. Switch branch
git checkout master

# 2. Clean up
rm -rf node_modules .next package-lock.json
rm -rf .eslintcache .next-cache
npm cache clean --force

# 3. Install & Build
npm install
npm run build
```

## 📦 Dependencies

### Next.js 12
```json
{
  "dependencies": {
    "next": "12.0.7",
    "react": "17.0.2",
    "react-dom": "17.0.2"
  },
  "devDependencies": {
    "eslint": "8.4.1",
    "eslint-config-next": "12.0.7"
  }
}
```

### Next.js 15
```json
{
  "dependencies": {
    "next": "15.2.4",
    "react": "19.0.0",
    "react-dom": "19.0.0"
  },
  "devDependencies": {
    "@types/node": "22.13.13",
    "@types/react": "19.0.12",
    "typescript": "5.8.2",
    "eslint": "8.56.0",
    "eslint-config-next": "15.2.4"
  }
}
```

## 💡 Important Notes
- Each version has its own branch
- Clean all caches when switching versions
- Check TypeScript types after switching
- Update ESLint rules if needed
- Test the app after switching

## 🎨 Design Inspiration
- [Imdb Mobile App Design](https://dribbble.com/shots/11413278-Imdb-mobile-app-design)