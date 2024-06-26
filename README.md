# Frontend Repository

This repository contains the frontend implementation using Next.js with React MUI for UI components and Redux for state management.

## Directory Structure

```
frontend-repo/
├── apis/
│   └── userApi.ts
├── theme/
│   ├── theme.ts
│   └── ...
├── app/
│   ├── _app.tsx
│   └── ...
├── components/
│   └── UpdateButton.tsx
├── store/
│   ├── reducers.ts
│   └── store.ts
└── package.json
```

## Setup

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Firebase Configuration**

   Set up Firebase by creating a `firebaseConfig.ts` file in the root directory with your Firebase project credentials.

3. **Run Locally**

   To run the frontend application locally:

   ```bash
   npm run dev
   ```

## Redux Setup

Redux is used for state management. The store configuration is in `store/store.ts`.

## React MUI Theme

The React MUI theme is defined in `theme/theme.ts`.

## APIs

### `userApi`

- **Description:** Abstraction for backend API calls related to user operations.
- **Location:** `apis/userApi.ts`

## Components

### `UpdateButton`

- **Description:** Button component to trigger backend endpoint for updating data.
- **Location:** `components/UpdateButton.tsx`

## Notes

To test local change `next.config.mjs` in destination variable with right one
