# Ibrahim Sohofi - Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

![Portfolio Screenshot](https://iad.microlink.io/Bs2CdxaX93us0bwGxuVb-muxpCZSz_xkF6ezYI7JiGTNn0GM0q8G4MEFYmn7ajU5kpjOPygCnrCfq6t0BMIQcw.png)

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: User-toggleable theme preference that's saved to localStorage
- **Interactive Animations**: Smooth animations and transitions powered by Framer Motion
- **Optimized Performance**: Fast loading with optimized images and fonts
- **Accessibility**: Designed with accessibility in mind for all users

## Tech Stack

- **React**: Frontend framework
- **TypeScript**: Type safety and improved developer experience
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for smooth transitions and effects
- **Vite**: Fast build tool and development server
- **Bun**: JavaScript runtime and package manager

## Sections

- **Hero**: Full-screen welcome section with animated name and CTA buttons
- **About**: Background information and approach to development
- **Skills**: Interactive grid showing technical skills
- **Projects**: Showcase of recent projects with 3D hover effect
- **Contact**: Contact form with social media links
- **Footer**: Copyright and quick links

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/ibrahimsohofi/myportfolio.git
   cd myportfolio
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Start the development server:
   ```bash
   bun run dev
   ```

4. Build for production:
   ```bash
   bun run build
   ```

## Deployment

The site is configured for easy deployment to Netlify:

```bash
bun run deploy
```

## Customization

- Update project information in `src/components/projects/Projects.tsx`
- Modify skills in `src/components/skills/Skills.tsx`
- Change personal information and bio in `src/components/about/About.tsx`
- Replace the resume file in `public/resume.pdf`

## License

MIT

## Author

Ibrahim Sohofi - [GitHub](https://github.com/ibrahimsohofi)
