# Kiratech Frontend Assignment - User Hub

A modern Vue 3 web application that displays a list of users with detailed information, built for the Kiratech frontend assignment.

## 🚀 Features

- **User List Display**: Shows users from RandomUser API with profile pictures, names, and basic info
- **User Details Modal**: Click on any user to view comprehensive information in a popup dialog
- **Search Functionality**: Filter users by name with real-time search
- **Sorting**: Sort users by date and name columns
- **Pagination**: Navigate through user pages with configurable page sizes
- **Refresh Data**: Refresh the user list with updated data

## 🛠️ Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **TanStack Table** - Powerful table component with sorting, filtering, and pagination
- **Lucide Icons** - Beautiful, customizable icons
- **shadcn/ui** - Re-usable components built with Radix UI and Tailwind CSS
- **Vite** - Fast build tool and development server

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher or suggested to use lts/iron)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nblkmal/kiratech-user-hub
cd fe-assignment-bootstrap
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Development

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## 📦 Available Scripts

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Type checking
npm run type-check
```

### Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Testing

```bash
# Run unit tests
npm run test:unit

# Run end-to-end tests
npm run test:e2e

# Run e2e tests in headless mode
npm run test:e2e:ci
```

### Code Quality

```bash
# Lint code
npm run lint

# Format code
npm run format
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── user/
│   │   ├── DataTable.vue          # Main table component with sorting/filtering
│   │   ├── DataTablePagination.vue # Pagination controls
│   │   ├── UserHighlight.vue      # User profile banner
│   │   ├── UserInfoDialog.vue     # User details modal
│   │   └── column.ts              # Table column definitions
│   └── ui/                        # shadcn/ui components
├── types/
│   └── index.d.ts                 # TypeScript type definitions
├── views/
│   └── UserIndex.vue              # Main user list page
```

## 🔧 Key Components

- **UserIndex.vue**: Main page that orchestrates the user list display
- **UserInfoDialog.vue**: Modal dialog for detailed user information

## 🎯 Features in Detail

### User List Display
- Fetches users from RandomUser API
- Displays user profile pictures, names, gender, country, and email
- Responsive table layout with proper spacing

### Search & Filtering
- Real-time search by user name
- Case-insensitive filtering
- Instant results as you type

### Sorting
- Sort by registration date (chronological)
- Sort by user name (alphabetical)
- Toggle between ascending and descending order

### Pagination
- Navigate through user pages
- Configurable page sizes (10, 20, 30, 40, 50)
- Page count display and navigation controls

### User Details Modal
- Click on user names to view detailed information
- Shows complete user profile including:
  - Large profile picture
  - Contact information (email, phone)
  - Full address
  - Birth date and age
  - Registration date

### Refresh Functionality
- Refresh button to reload user data
- Loading states during data fetch
- Error handling for failed requests

This project is created for the Kiratech frontend assignment.
