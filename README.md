# folio
My personal portfolio made using Nuxt. This serves as a central hub for all my development and design work.

## Prerequisites

- Node.js (version 18 or later recommended)
- Yarn package manager

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/davidwallacesadler/folio.git
   cd folio
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

## Development

To start the development server:

```bash
yarn dev
```

The app will be available at `http://localhost:3000`.

## Building

To build the application for production:

```bash
yarn build
```

To generate static files for deployment:

```bash
yarn generate
```

## Deployment

This project is configured to deploy to GitHub Pages.

1. Build the static site:
   ```bash
   yarn generate
   ```

2. Deploy to GitHub Pages:
   ```bash
   yarn deploy
   ```

This will push the generated files in the `dist` directory to the `gh-pages` branch of your repository, making the site available at `https://davidwallacesadler.github.io/folio`.

Note: Ensure your repository settings have GitHub Pages enabled and set to deploy from the `gh-pages` branch.