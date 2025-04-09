# LetsGo NextJS

A movie information website built with Next.js 14

## Project Structure

```
app/
├── (home)/          # Home page route group
├── (movies)/        # Movies route group
│   └── movies/      # Movie details and credits
│       └── [id]/    # Movie detail page
│           ├── credits/    # Movie credits
│           ├── similar/    # Similar movies
│           └── provider/   # Streaming providers
├── about-us/        # About us page
├── layout.tsx       # Root layout
└── not-found.tsx    # 404 page

components/
├── movie.tsx        # Movie card component
├── movie-credits.tsx # Movie credits component
├── movie-info.tsx   # Movie information component
├── movie-videos.tsx # Movie videos component
├── movie-providers.tsx # Movie providers component
├── movie-similar.tsx # Movie similar component
└── navigation.tsx   # Navigation component

styles/
├── global.css       # Global styles
├── home.module.css  # Home page styles
├── movie.module.css # Movie card styles
├── movie-credits.module.css # Movie credits styles
├── movie-info.module.css   # Movie info styles
├── movie-videos.module.css # Movie videos styles
├── movie-providers.module.css # Movie providers styles
├── movie-similar.module.css # Movie similar styles
└── navigation.module.css   # Navigation styles

lib/
└── constants.ts     # API constants
```

## Upcoming Features

- Similar Movies: Show movies similar to the current movie
- Streaming Providers: Display where the movie is available to stream

## Styling

The project uses CSS Modules for component-specific styling:

- `global.css`: Global styles and CSS variables
- Component-specific styles are scoped using CSS Modules (`.module.css`)
- Each component has its own style module for better maintainability

## Tech Stack

- Next.js 14
- React 19
- TypeScript
- CSS Modules

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Start production server:

```bash
npm start
```
