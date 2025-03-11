# cric-monex-root-template

A boilerplate template for building a monorepo architecture with Turborepo, Next.js, Express and cric-packages. Designed to streamline development and enhance scalability for full-stack applications.

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `frontend`: A [Next.js](https://nextjs.org/) app
- `backend`: An [Express](https://expressjs.com/) server
- `workshop`: Component documentation/workshop site with 📖 [Storybook](https://storybook.js.org/) — UI component environment powered by Vite

- `@repo/design-system`: per-project design system setup with tailwind and constants

- `@repo/cric-ui`: prebuilt component with tailwind and cn utilities
- `@repo/cric-form`: form components impremented and managed by React Hook Form extended from @repo/cric-ui
- `@repo/eslint-config`: ESLint configurations used throughout the monorepo
- `@repo/typescript-config`: tsconfig.json's used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

## Running the Project

To set up and run the project, follow these steps:

### Step 1: Start Docker Containers

```bash
npm i
```

Prerequisite: docker, mikro-orm cli

Run the following command to start the Docker containers (Postgres, etc.):

```bash
npm run docker:up
```

### Step 2: Start the Development Environment

Once the Docker containers are up and running, you can start the development environment by running:

```bash
npm run setup-env
```

```bash
npm run setup-db
```

```bash
npm run dev
```

### Step 3 (Optional): Change all apps and packages name prefix

To change all apps and package name prefixes in every package.json, Docker container, etc. within one step, globally search `cric-monex-root-template` and replace all. (through IDE)

if has error about node version/dependency mismatch, try:

```bash
npm run clean-node
```

Remark: commit-lint rules require the commit name to be in format `<type>(monex-root): <description>` ...See `commitlint.config.js`

## Cric's MONEX Template Development Process
![image](https://github.com/user-attachments/assets/79f526de-17a0-4a08-afc1-2ee88d4ebed2)

Cric's MONEX Template is designed to be a comprehensive, extensible template system that generates a CLI with customizable technology stacks. The development process follows these key principles:

1. Core Changes: Any modifications that should affect all derived templates must be implemented in or merged back to the root template.

2. Template Extension: Each derived template extends from the root, allowing for adding new tools/implementations while maintaining core functionality.

3. CLI Generation: All extended templates are aimed to ultimately composed together to create a unified CLI tool at the end, enabling developers to select their preferred technology stack. (Unless doing so make the work flow more unneccessarily sophisticated -- stick with using per tool Template Extension)

Project-specific modifications can be maintained in their respective repositories without affecting the root template.
