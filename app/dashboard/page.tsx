'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/stores/authStore';
import Link from 'next/link';
import { 
  ClipboardDocumentListIcon,
  ChartBarIcon,
  HeartIcon,
  UserIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline';

export default function DashboardPage() {
  const { user, isLoading } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen wellness-bg flex items-center justify-center">
        <div className="card text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen wellness-bg">
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="card-wellness mb-8 fade-in">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <HeartIcon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome back, {user.displayName || user.email?.split('@')[0]}!
              </h1>
              <p className="text-gray-600">
                How are you feeling today? Take care of your mental wellness.
              </p>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Take Assessment Card */}
          <Link 
            href="/assessment"
            className="card-wellness group hover:scale-105 transition-all duration-200"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
              <div className="gradient-icon w-10 h-10 group-hover:shadow-lg transition-shadow">
                <ClipboardDocumentListIcon className="h-5 w-5" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold text-gray-900">Take Assessment</h3>
              </div>
            </div>
            <p className="text-gray-600 mb-4 text-center sm:text-left">
              Complete your PHQ-9 mental health assessment to track your wellbeing.
            </p>
            <div className="flex items-center justify-center sm:justify-start text-primary text-sm font-medium">
              Start Assessment →
            </div>
          </Link>

          {/* View History Card */}
          <div className="card-wellness">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <ChartBarIcon className="h-5 w-5 text-gray-600" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold text-gray-900">Assessment History</h3>
              </div>
            </div>
            <p className="text-gray-600 mb-4 text-center sm:text-left">
              Review your previous assessment results and track your progress over time.
            </p>
            <div className="text-gray-500 text-sm text-center sm:text-left">
              Coming soon...
            </div>
          </div>

          {/* Profile Settings Card */}
          <div className="card-wellness">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <UserIcon className="h-5 w-5 text-gray-600" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold text-gray-900">Profile Settings</h3>
              </div>
            </div>
            <p className="text-gray-600 mb-4 text-center sm:text-left">
              Manage your account settings and preferences.
            </p>
            <div className="text-gray-500 text-sm text-center sm:text-left">
              Coming soon...
            </div>
          </div>

          {/* Wellness Tips Card */}
          <div className="card-wellness sm:col-span-2 lg:col-span-3">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
              <div className="gradient-icon w-10 h-10">
                <HeartIcon className="h-5 w-5" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold text-gray-900">Daily Wellness Tips</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border border-gray-100">
                <h4 className="font-medium text-gray-900 mb-2">Take Breaks</h4>
                <p className="text-sm text-gray-600">
                  Regular breaks during work can help reduce stress and improve focus.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-100">
                <h4 className="font-medium text-gray-900 mb-2">Stay Connected</h4>
                <p className="text-sm text-gray-600">
                  Maintain social connections with colleagues and loved ones.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-100">
                <h4 className="font-medium text-gray-900 mb-2">Practice Mindfulness</h4>
                <p className="text-sm text-gray-600">
                  Take a few minutes each day for mindfulness or meditation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
