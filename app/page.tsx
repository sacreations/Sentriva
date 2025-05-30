import Link from 'next/link';
import { 
  ArrowRightIcon, 
  ShieldCheckIcon, 
  HeartIcon, 
  UserGroupIcon,
  CheckCircleIcon,
  SparklesIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-wellness text-accent border border-accent/20">
                <SparklesIcon className="h-4 w-4 mr-2" />
                Prioritizing Mental Wellbeing
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Mental Health Assessment for{' '}
              <span className="gradient-text">Construction Professionals</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Take charge of your mental wellbeing with our specialized assessment tool designed 
              specifically for the construction industry. Track, monitor, and improve your mental health journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/assessment" className="btn-primary inline-flex items-center text-lg">
                Start Your Assessment
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/download" className="btn-secondary inline-flex items-center text-lg">
                <ArrowDownTrayIcon className="mr-2 h-5 w-5" />
                Download App
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-accent mr-2" />
                Confidential & Secure
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-accent mr-2" />
                Professionally Validated
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-accent mr-2" />
                Industry Specific
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 slide-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose <span className="gradient-text">Sentriva</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive mental health support tailored specifically for construction workers
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-wellness text-center group hover:scale-105 transition-transform duration-200">
              <div className="gradient-icon w-12 h-12 mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                <ShieldCheckIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Confidential & Secure</h3>
              <p className="text-gray-600 leading-relaxed">
                Your mental health data is protected with enterprise-grade security and complete confidentiality.
              </p>
            </div>

            <div className="card-wellness text-center group hover:scale-105 transition-transform duration-200">
              <div className="gradient-icon w-12 h-12 mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                <HeartIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Industry-Specific</h3>
              <p className="text-gray-600 leading-relaxed">
                Assessments designed specifically for the unique challenges faced by construction professionals.
              </p>
            </div>

            <div className="card-wellness text-center group hover:scale-105 transition-transform duration-200">
              <div className="gradient-icon w-12 h-12 mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                <UserGroupIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Professional Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with mental health professionals who understand the construction industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding wellness-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card-wellness max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Prioritize Your Mental Health?
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Take the first step towards better mental wellbeing today. Your mental health matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/assessment" className="btn-primary">
                Start Assessment Now
              </Link>
              <Link href="/login" className="btn-secondary">
                Sign In to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <HeartIcon className="h-5 w-5 text-white" />
              </div>
              <h4 className="text-2xl font-bold">Sentriva</h4>
            </div>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Supporting the mental health and wellbeing of construction professionals worldwide.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              
            </div>
            <p className="text-gray-500 text-sm mt-6">
              © 2025 Sentriva. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
