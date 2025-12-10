# React Component Library

A modern React component library built with TypeScript, featuring comprehensive testing and interactive documentation.

## Features

- Built with **TypeScript** for type safety
- **Vite** for fast builds and development
- **Vitest** + **React Testing Library** for testing
- **Storybook** for interactive component documentation
- **ESLint** + **Prettier** for code quality
- **Changesets** for version management

## Installation

```bash
npm install @luizaugustocs/components
# or
yarn add @luizaugustocs/components
```

## Usage

### Components

```tsx
import { Button } from '@luizaugustocs/components'
import '@luizaugustocs/components/style.css'

function App() {
  return (
    <Button variant="primary" size="medium" onClick={() => console.log('Clicked!')}>
      Click me
    </Button>
  )
}
```

### Hooks

```tsx
import { useIncrement } from '@luizaugustocs/components'

function Counter() {
  const { value, increment, decrement, reset } = useIncrement({
    initialValue: 0,
    min: 0,
    max: 10,
    step: 1
  })

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{value}</span>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
```

**Important**: Make sure to import the CSS file in your app's entry point (e.g., `main.tsx` or `App.tsx`).

## Development

### Install dependencies

```bash
yarn install
```

### Run Storybook

```bash
yarn storybook
```

Visit http://localhost:6006 to view your components.

### Run tests

```bash
yarn test          # Run tests in watch mode
yarn test:ui       # Run tests with UI
yarn test:coverage # Generate coverage report
```

### Build

```bash
yarn build
```

### Lint and format

```bash
yarn lint          # Run ESLint
yarn format        # Format code with Prettier
```

## Project Structure

```
lib/
├── src/
│   ├── components/
│   │   └── Button/
│   │       ├── Button.tsx
│   │       ├── Button.css
│   │       ├── Button.test.tsx
│   │       ├── Button.stories.tsx
│   │       └── index.ts
│   ├── test/
│   │   └── setup.ts
│   └── index.ts
├── .storybook/
│   ├── main.ts
│   └── preview.ts
├── dist/           # Built library output
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vitest.config.ts
```

## Adding New Components

1. Create a new directory in `src/components/`
2. Add your component file (e.g., `ComponentName.tsx`)
3. Create tests (`ComponentName.test.tsx`)
4. Create Storybook stories (`ComponentName.stories.tsx`)
5. Export from `index.ts`
6. Add to main `src/index.ts`

Example structure:

```
src/components/NewComponent/
├── NewComponent.tsx
├── NewComponent.css
├── NewComponent.test.tsx
├── NewComponent.stories.tsx
└── index.ts
```

## Publishing

1. Create a changeset:
   ```bash
   yarn changeset
   ```

2. Version packages:
   ```bash
   yarn version
   ```

3. Publish to npm:
   ```bash
   yarn release
   ```

## License

MIT
