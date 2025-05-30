import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function TermsOfServicePage() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-gray-600 mb-8">
            Last updated: January 1, 2025
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using Sentriva's mental health assessment platform, you accept and agree 
                to be bound by the terms and provision of this agreement. If you do not agree to abide 
                by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Service Description</h2>
              <p className="text-gray-600 leading-relaxed">
                Sentriva provides a digital mental health assessment platform specifically designed for 
                construction industry professionals. Our service includes PHQ-9 assessments, progress tracking, 
                and mental health resources tailored to the construction workplace.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Medical Disclaimer</h2>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                <p className="text-orange-800 font-medium">Important Notice:</p>
                <p className="text-orange-700 mt-2">
                  Sentriva is not a substitute for professional medical advice, diagnosis, or treatment. 
                  Our assessments are screening tools only and should not be used as the sole basis for 
                  medical decisions.
                </p>
              </div>
              <ul className="space-y-2 text-gray-600 leading-relaxed list-disc list-inside">
                <li>Always seek the advice of qualified health providers</li>
                <li>Never disregard professional medical advice because of our assessments</li>
                <li>If you are experiencing a mental health emergency, contact emergency services immediately</li>
                <li>Our platform does not provide crisis intervention services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Responsibilities</h2>
              <p className="text-gray-600 leading-relaxed">By using our service, you agree to:</p>
              <ul className="space-y-2 text-gray-600 leading-relaxed list-disc list-inside mt-4">
                <li>Provide accurate and honest information in assessments</li>
                <li>Use the platform only for its intended purposes</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Not share your account with others</li>
                <li>Report any security vulnerabilities or misuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Privacy and Confidentiality</h2>
              <p className="text-gray-600 leading-relaxed">
                Your privacy is paramount to us. All health information is treated as confidential 
                and protected according to applicable privacy laws and our Privacy Policy. 
                We implement appropriate safeguards to protect your personal and health data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                Sentriva shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages resulting from your use of the platform. Our total liability 
                shall not exceed the amount paid by you for the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Account Termination</h2>
              <p className="text-gray-600 leading-relaxed">
                You may terminate your account at any time. We reserve the right to suspend or 
                terminate accounts that violate these terms or engage in inappropriate behavior. 
                Upon termination, your access to the platform will cease immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these terms at any time. Significant changes will be 
                communicated to users via email or platform notifications. Continued use of the 
                service after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  Email: legal@sentriva.com<br />
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
