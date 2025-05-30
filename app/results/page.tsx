'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { HeartIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

export default function ResultsPage() {
  const [score, setScore] = useState<number>(0);
  const [level, setLevel] = useState<string>('');
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const scoreParam = searchParams.get('score');
    const levelParam = searchParams.get('level');
    
    if (scoreParam && levelParam) {
      setScore(parseInt(scoreParam));
      setLevel(levelParam);
    } else {
      router.push('/dashboard');
    }
  }, [searchParams, router]);

  const getSeverityInfo = (level: string) => {
    switch (level.toLowerCase()) {
      case 'minimal':
        return {
          color: 'text-accent',
          bgColor: 'bg-wellness',
          borderColor: 'border-accent/30',
          description: 'Your responses suggest minimal depression symptoms. Continue maintaining your mental wellness with regular self-care.',
          recommendation: 'Keep up the great work! Consider maintaining healthy habits like regular exercise, good sleep, and stress management.'
        };
      case 'mild':
        return {
          color: 'text-mild',
          bgColor: 'bg-peaceful',
          borderColor: 'border-mild/30',
          description: 'Your responses suggest mild depression symptoms. This is a good time to focus on self-care and consider speaking with a healthcare professional.',
          recommendation: 'Consider implementing stress reduction techniques and connecting with support resources.'
        };
      case 'moderate':
        return {
          color: 'text-moderate',
          bgColor: 'bg-orange-50',
          borderColor: 'border-moderate/30',
          description: 'Your responses suggest moderate depression symptoms. We recommend seeking professional support to help manage your mental health.',
          recommendation: 'Professional guidance can provide valuable strategies for managing your mental health.'
        };
      case 'moderately severe':
        return {
          color: 'text-moderatelySevere',
          bgColor: 'bg-red-50',
          borderColor: 'border-moderatelySevere/30',
          description: 'Your responses suggest moderately severe depression symptoms. Please consider seeking immediate professional help.',
          recommendation: 'Mental health support is important. Consider reaching out to a healthcare provider or counselor.'
        };
      case 'severe':
        return {
          color: 'text-severe',
          bgColor: 'bg-red-100',
          borderColor: 'border-severe/30',
          description: 'Your responses suggest severe depression symptoms. Please seek immediate professional help.',
          recommendation: 'Your mental health is important. Please reach out to a healthcare provider or crisis support immediately.'
        };
      default:
        return {
          color: 'text-gray-500',
          bgColor: 'bg-gray-50',
          borderColor: 'border-gray-200',
          description: 'Unable to determine severity level.',
          recommendation: 'Please retake the assessment or consult with a healthcare professional.'
        };
    }
  };

  const severityInfo = getSeverityInfo(level);

  if (!score && !level) {
    return (
      <div className="min-h-screen wellness-bg flex items-center justify-center">
        <div className="card">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="text-center mt-4 text-gray-600">Loading your results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen wellness-bg py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="card-wellness fade-in">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <HeartIcon className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Assessment Results</h1>
            <div className="text-6xl font-bold mb-4">
              <span className={severityInfo.color}>{score}</span>
              <span className="text-gray-400 text-4xl">/27</span>
            </div>
            <div className={`inline-block px-6 py-3 rounded-xl border-2 ${severityInfo.bgColor} ${severityInfo.borderColor}`}>
              <span className={`font-semibold text-lg ${severityInfo.color}`}>{level}</span>
            </div>
          </div>

          {/* Results Description */}
          <div className={`p-6 rounded-xl border-2 ${severityInfo.bgColor} ${severityInfo.borderColor} mb-6`}>
            <h3 className={`font-semibold mb-3 ${severityInfo.color} flex items-center`}>
              <InformationCircleIcon className="h-5 w-5 mr-2" />
              What This Means
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              {severityInfo.description}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {severityInfo.recommendation}
            </p>
          </div>

          {/* Important Note */}
          <div className="bg-calm border-2 border-primary/20 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-primary mb-3 flex items-center">
              <InformationCircleIcon className="h-5 w-5 mr-2" />
              Important Note
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              This assessment is not a substitute for professional medical advice, diagnosis, or treatment. 
              If you're experiencing thoughts of self-harm or suicide, please contact emergency services 
              immediately or call a crisis helpline.
            </p>
          </div>

          {/* Crisis Resources */}
          <div className="bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-200 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-red-800 mb-3">Crisis Support Resources</h3>
            <div className="space-y-2 text-sm">
              <p className="text-red-700">• National Crisis Hotline: 988</p>
              <p className="text-red-700">• Crisis Text Line: Text HOME to 741741</p>
              <p className="text-red-700">• Emergency Services: 911</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/dashboard"
              className="flex-1 text-center px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:shadow-lg transition-all"
            >
              View Dashboard
            </Link>
            <Link 
              href="/assessment"
              className="flex-1 text-center px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all"
            >
              Take Assessment Again
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
