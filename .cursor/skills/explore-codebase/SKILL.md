---
name: explore-codebase
description: Explore and analyze the project codebase structure, technologies, components, and architecture. Use this skill when studying the portfolio project, understanding project organization, identifying key components, technologies used, or mapping out the application flow.
---

# Explore Codebase

This skill guides exploration of the portfolio project to build comprehensive understanding of its structure, architecture, and key components.

## Initial Exploration Steps

When starting to explore the codebase, follow this sequence:

1. **Read project metadata**
   - `package.json` - project dependencies, scripts, and build setup
   - `tsconfig.json` - TypeScript configuration
   - `tailwind.config.js` - Tailwind CSS configuration
   - `README.md` - project overview and setup instructions

2. **Map directory structure**
   - `/src` - main application source code
   - `/public` - static assets and public files
   - `/src/components` - React components
   - `/src/pages` - page components
   - `/src/assets` - images and static assets
   - `/src/locales` - internationalization files
   - `/.github/workflows` - CI/CD pipeline

3. **Identify key technologies**
   - React (based on .tsx files)
   - TypeScript for type safety
   - Tailwind CSS for styling
   - i18n for internationalization (English and French)
   - Three.js/WebGL (Desktop.gltf model)

## Component Architecture Analysis

### Analyze React Components

Look at `/src/components` to understand component structure:
- List all component files (.tsx)
- Note component purposes and relationships
- Identify reusable components vs page-specific components
- Check for prop interfaces and type definitions

### Analyze Pages

Examine `/src/pages` to understand page structure:
- Note all page components
- Identify routing structure (if any)
- Check how pages use components
- Look for shared page logic

### Study App Entry Point

Read `App.tsx` to understand:
- Main application structure
- How pages/components are organized
- Routing implementation
- Global styling or configuration

## Technology Stack Identification

### Frontend Framework
- React (TypeScript) - UI framework
- React Router (if used) - client-side routing
- i18next - internationalization

### Styling
- Tailwind CSS - utility-first CSS framework
- CSS modules or regular CSS files
- Output CSS file generation

### Build Tools
- Check package.json scripts for build system
- Look for webpack, vite, or other bundler config

### 3D Graphics
- Three.js or similar (Desktop.gltf model present)
- Check components like `Gltf.tsx`

## Analysis Output

When exploring, provide a summary including:

1. **Project Overview**
   - Purpose and type of application
   - Primary technologies
   - Target audience

2. **Architecture Summary**
   - Directory organization
   - Component hierarchy
   - Page structure
   - Key data flows

3. **Technology Stack**
   - Frontend framework and versions
   - Styling approach
   - Build tools
   - Notable libraries

4. **Key Components and Pages**
   - List main components
   - List main pages
   - Note any complex or custom components

5. **Build and Development Setup**
   - How to run locally
   - Build process
   - Any special configurations

## File Reference Priority

Read these files first (in order):
1. `package.json` - understand project setup
2. `src/App.tsx` - understand app structure
3. `src/pages/*.tsx` - understand main pages
4. `src/components/*.tsx` - understand reusable components
5. `tsconfig.json` - understand type configuration
6. `tailwind.config.js` - understand styling setup
7. `src/locales/en/translation.json` - understand content structure

## Internationalization Exploration

The project uses i18next for i18n:
- Check `/src/locales` directory
- Read translation files (JSON format)
- Note supported languages (en, fr)
- Check `i18n.js` configuration

## Additional Resources

For code-specific details during exploration:
- Use Grep to search for specific patterns
- Use Glob to find files by name
- Use SemanticSearch for understanding relationships
- Read specific files as needed based on discoveries
