# shadcn/ui Starter

A modern, beautiful, and performant Next.js starter template built with shadcn/ui, Tailwind CSS, and TypeScript.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui)

## ✨ Features

- **🚀 Next.js 15** - Latest version with App Router and Turbopack
- **🎨 shadcn/ui** - Beautiful, accessible, and customizable components
- **💄 Tailwind CSS** - Utility-first CSS framework with modern design tokens
- **📝 TypeScript** - Full type safety with strict mode enabled
- **🎯 ESLint** - Code linting with Next.js recommended config
- **🌙 Dark Mode** - Built-in dark mode support
- **📱 Responsive** - Mobile-first responsive design
- **♿ Accessible** - WCAG compliant components from Radix UI
- **⚡ Performance** - Optimized for Core Web Vitals

## 🎨 Included Components

This starter includes the following shadcn/ui components pre-configured and ready to use:

- Button
- Card
- Dialog
- Input
- Label
- Select
- Switch
- Tabs
- Slider
- Badge
- Separator
- Sheet
- Radio Group

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd shadcn-starter
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see your application.

## 📁 Project Structure

```
├── src/
│   ├── app/                  # App Router pages
│   │   ├── globals.css       # Global styles and CSS variables
│   │   ├── layout.tsx        # Root layout component
│   │   └── page.tsx          # Home page
│   ├── components/
│   │   └── ui/               # shadcn/ui components
│   └── lib/
│       └── utils.ts          # Utility functions
├── public/                   # Static assets
├── components.json           # shadcn/ui configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── next.config.js           # Next.js configuration
```

## 🎨 Customization

### Theme Configuration

The project uses CSS variables for theming. You can customize the color scheme by modifying the CSS variables in `src/app/globals.css`:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  /* ... more variables */
}
```

### Adding New Components

To add new shadcn/ui components:

```bash
npx shadcn-ui@latest add <component-name>
```

For example:
```bash
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add toast
npx shadcn-ui@latest add form
```

### Component Configuration

The shadcn/ui configuration is stored in `components.json`:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Pages

Create new pages in the `src/app` directory following the App Router conventions:

```typescript
// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [shadcn/ui Documentation](https://ui.shadcn.com) - Learn about the component library
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn about utility-first CSS
- [Radix UI Documentation](https://www.radix-ui.com) - Learn about the underlying primitives

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com/new):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms

This Next.js app can be deployed to any platform that supports Node.js:

- **Netlify** - Connect your Git repository
- **Railway** - Deploy with their CLI or GitHub integration
- **DigitalOcean App Platform** - Deploy directly from GitHub
- **AWS Amplify** - Full-stack deployment with AWS
- **Docker** - Containerize and deploy anywhere

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn](https://twitter.com/shadcn) for the amazing component library
- [Vercel](https://vercel.com) for Next.js and deployment platform
- [Tailwind Labs](https://tailwindlabs.com) for Tailwind CSS
- [Radix UI](https://www.radix-ui.com) for the accessible primitives
