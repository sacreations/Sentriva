'use client';

import Link from 'next/link';
import { 
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  ExclamationTriangleIcon,
  ArrowDownTrayIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function DownloadPage() {
  return (
    <div className="min-h-screen wellness-bg">
      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 fade-in">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get <span className="gradient-text">Sentriva</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose how you'd like to use Sentriva for your mental health assessment and wellness tracking.
          </p>
        </div>

        {/* Two boxes grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Web Version Box */}
          <div className="card-wellness slide-in">
            <div className="text-center mb-6">
              <div className="gradient-icon w-16 h-16 mx-auto mb-4">
                <ComputerDesktopIcon className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Web Version</h2>
              <p className="text-gray-600">Use Sentriva directly in your browser</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <CheckCircleIcon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Full assessment features available now</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircleIcon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">No download required</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircleIcon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Works on all devices with internet</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircleIcon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Secure and confidential</span>
              </div>
            </div>

            <div className="bg-mild/10 border border-mild/30 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <ExclamationTriangleIcon className="h-5 w-5 text-mild mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Beta Version</p>
                  <p className="text-sm text-gray-700">
                    The web version is currently in beta. While functional, some features may be limited 
                    or experience occasional issues as we continue development.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-wellness border border-accent/20 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-700">
                <strong>Recommended:</strong> Start with the web version for immediate access to available features. 
                Perfect for getting started with your mental health assessment journey while we finalize development.
              </p>
            </div>

            <Link href="/assessment" className="btn-primary w-full text-center">
              Use Web Version
            </Link>
          </div>

          {/* Mobile App Box */}
          <div className="card-wellness slide-in">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gray-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <DevicePhoneMobileIcon className="h-8 w-8 text-gray-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Mobile App</h2>
              <p className="text-gray-600">Native app for iOS and Android</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <ExclamationTriangleIcon className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Development & Testing Stage - Extremely Unstable</p>
                  <p className="text-sm text-gray-700">
                    The mobile app is in early development and is extremely unstable. Features are severely limited, 
                    crashes are frequent, and the app is not suitable for regular use.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-6 text-sm text-gray-600">
              <p>• Extremely unstable and prone to crashes</p>
              <p>• Very limited features compared to web version</p>
              <p>• Frequent bugs and performance issues</p>
              <p>• Not recommended for any practical use</p>
              <p>• Data loss may occur</p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <p className="text-sm text-gray-700 mb-4">
                If you'd like to try the beta version and provide feedback to help us improve:
              </p>
              
              <button 
                className="btn-secondary w-full flex items-center justify-center"
                onClick={() => {
                  // This would typically trigger a download or redirect to beta program
                  alert('Beta download will be available soon. Please use the web version for now.');
                }}
              >
                <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                Download Beta App
              </button>
              
              <p className="text-xs text-gray-500 mt-3 text-center">
                By downloading, you acknowledge this is beta software and may have limitations.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Need help deciding? <Link href="/" className="text-primary hover:underline">Learn more about Sentriva</Link> or{' '}
            <Link href="/assessment" className="text-primary hover:underline">start with the web version</Link>.
          </p>
        </div>
      </main>
    </div>
  );
}
