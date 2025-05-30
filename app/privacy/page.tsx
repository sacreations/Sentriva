import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen wellness-bg">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link 
          href="/" 
          className="inline-flex items-center text-primary hover:text-accent transition-colors mb-8"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to Home
        </Link>

        <div className="card-wellness">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">
            Last updated: January 1, 2025
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                At Sentriva, we are committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, and safeguard your information 
                when you use our mental health assessment platform designed for construction professionals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p><strong>Personal Information:</strong> Name, email address, and account credentials.</p>
                <p><strong>Health Information:</strong> Mental health assessment responses and scores (PHQ-9).</p>
                <p><strong>Usage Data:</strong> Information about how you interact with our platform.</p>
                <p><strong>Technical Data:</strong> IP address, browser type, and device information.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <ul className="space-y-2 text-gray-600 leading-relaxed list-disc list-inside">
                <li>Provide mental health assessment services</li>
                <li>Track your progress over time</li>
                <li>Improve our platform and services</li>
                <li>Communicate with you about your account</li>
                <li>Ensure platform security and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement enterprise-grade security measures to protect your personal and health information. 
                All data is encrypted in transit and at rest. We regularly conduct security audits and follow 
                industry best practices for data protection.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Information Sharing</h2>
              <p className="text-gray-600 leading-relaxed">
                We do not sell, trade, or share your personal information with third parties except:
              </p>
              <ul className="space-y-2 text-gray-600 leading-relaxed list-disc list-inside mt-4">
                <li>When required by law or legal process</li>
                <li>To protect our rights or the safety of others</li>
                <li>With your explicit consent</li>
                <li>With service providers who assist in platform operations (under strict confidentiality agreements)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed">
                You have the right to access, update, or delete your personal information. 
                You may also request a copy of your data or withdraw consent for data processing. 
                Contact us at privacy@sentriva.com to exercise these rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  Email: privacy@sentriva.com<br />
                  Address: [Company Address]<br />
                  Phone: [Phone Number]
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
