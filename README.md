# Sentriva Web Application

Mental health assessment and wellness tracking tool for construction professionals - Web version.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up Firebase configuration:
   - Add your Firebase config to `lib/firebase.ts`
   - Ensure you have the same Firebase project as your Flutter app

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- **Landing Page**: Professional landing page with hero section and features
- **Authentication**: Firebase authentication integration with Google Sign-in
- **Responsive Navigation**: Mobile-optimized navigation with authentication-aware menu items
- **Dashboard**: Mental health assessment dashboard (requires authentication)
- **Assessment**: PHQ-9 mental health assessment tool (requires authentication)
- **Results**: Detailed assessment results with mental health resources
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **State Management**: Zustand for efficient state management
- **TypeScript**: Full TypeScript support for type safety
- **Mental Wellbeing Theme**: Calming colors and design focused on mental health

## Navigation Features

- **Authentication-aware**: Shows different menu items based on login status
- **Protected Routes**: Assessment and Dashboard only visible when logged in
- **Mobile Responsive**: Hamburger menu with smooth animations
- **User Context**: Displays user welcome message and sign-out option
- **Smooth Transitions**: Animated navigation states and hover effects

## Firebase Configuration for Vercel Deployment

### Required Environment Variables
Add these to your Vercel project settings:
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

### Firebase Console Configuration
1. **Authorized Domains**: Add your Vercel domain to Firebase Console
   - Go to Firebase Console → Authentication → Settings → Authorized domains
   - Add your Vercel domain (e.g., `your-app.vercel.app`)
   - Also add `localhost` for local development

2. **OAuth Configuration**: 
   - Go to Google Cloud Console → APIs & Credentials
   - Add your Vercel domain to authorized JavaScript origins
   - Add your Vercel domain + `/api/auth/callback/google` to authorized redirect URIs

3. **Common Issues**:
   - Ensure all environment variables are properly set in Vercel
   - Verify domain is added to Firebase authorized domains
   - Check that Google OAuth is properly configured
   - Ensure Firebase project has Google Sign-in enabled

## Project Structure

```
webapp/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles with mental wellbeing theme
│   ├── layout.tsx      # Root layout with Navigation
│   ├── page.tsx        # Landing page
│   ├── login/          # Login page
│   ├── dashboard/      # Dashboard page (protected)
│   ├── assessment/     # Assessment page (protected)
│   └── results/        # Results page
├── components/         # Reusable components
│   └── Navigation.tsx  # Main navigation component
├── lib/                # Utilities and configurations
│   ├── firebase.ts     # Firebase configuration
│   ├── models/         # Data models
│   └── stores/         # Zustand stores
└── tailwind.config.js  # Tailwind with mental health color palette
```

## Technology Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework with custom mental health theme
- **Firebase**: Authentication and database
- **Zustand**: State management
- **Heroicons**: Icon library
- **React Hot Toast**: Beautiful notifications

## Authentication Flow

1. **Unauthenticated**: Users see Home and Login in navigation
2. **Authenticated**: Users see Home, Assessment, Dashboard, and user menu
3. **Protected Routes**: Assessment and Dashboard redirect to login if not authenticated
4. **Smooth UX**: Loading states and proper redirects for better user experience

## Deployment

The application is ready for deployment on Vercel, Netlify, or any other Next.js-compatible platform.
