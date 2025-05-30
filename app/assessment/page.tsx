'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/stores/authStore';
import { QuestionClass } from '@/lib/models/Question';
import { TestResultClass } from '@/lib/models/TestResult';
import toast from 'react-hot-toast';

const PHQ9_QUESTIONS = [
  {
    id: 'q1',
    text: 'Little interest or pleasure in doing things',
    options: [
      'Not at all',
      'Several days',
      'More than half the days',
      'Nearly every day'
    ],
    scores: [0, 1, 2, 3]
  },
  {
    id: 'q2',
    text: 'Feeling down, depressed, or hopeless',
    options: [
      'Not at all',
      'Several days',
      'More than half the days',
      'Nearly every day'
    ],
    scores: [0, 1, 2, 3]
  },
  {
    id: 'q3',
    text: 'Trouble falling or staying asleep, or sleeping too much',
    options: [
      'Not at all',
      'Several days',
      'More than half the days',
      'Nearly every day'
    ],
    scores: [0, 1, 2, 3]
  },
  {
    id: 'q4',
    text: 'Feeling tired or having little energy',
    options: [
      'Not at all',
      'Several days',
      'More than half the days',
      'Nearly every day'
    ],
    scores: [0, 1, 2, 3]
  },
  {
    id: 'q5',
    text: 'Poor appetite or overeating',
    options: [
      'Not at all',
      'Several days',
      'More than half the days',
      'Nearly every day'
    ],
    scores: [0, 1, 2, 3]
  },
  {
    id: 'q6',
    text: 'Feeling bad about yourself or that you are a failure',
    options: [
      'Not at all',
      'Several days',
      'More than half the days',
      'Nearly every day'
    ],
    scores: [0, 1, 2, 3]
  },
  {
    id: 'q7',
    text: 'Trouble concentrating on things',
    options: [
      'Not at all',
      'Several days',
      'More than half the days',
      'Nearly every day'
    ],
    scores: [0, 1, 2, 3]
  },
  {
    id: 'q8',
    text: 'Moving or speaking slowly, or being fidgety or restless',
    options: [
      'Not at all',
      'Several days',
      'More than half the days',
      'Nearly every day'
    ],
    scores: [0, 1, 2, 3]
  },
  {
    id: 'q9',
    text: 'Thoughts that you would be better off dead or hurting yourself',
    options: [
      'Not at all',
      'Several days',
      'More than half the days',
      'Nearly every day'
    ],
    scores: [0, 1, 2, 3]
  }
];

export default function AssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  const handleAnswer = (score: number) => {
    const questionId = PHQ9_QUESTIONS[currentQuestion].id;
    setAnswers(prev => ({ ...prev, [questionId]: score }));
    
    if (currentQuestion < PHQ9_QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      
      // Calculate total score
      const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
      const level = TestResultClass.getSeverityLevel(totalScore);
      
      // Create test result
      const testResult = new TestResultClass({
        score: totalScore,
        level,
        date: new Date(),
        answers
      });

      // In a real app, you would save this to Firebase
      console.log('Test Result:', testResult.toJson());
      
      toast.success('Assessment completed successfully!');
      router.push(`/results?score=${totalScore}&level=${encodeURIComponent(level)}`);
    } catch (error) {
      toast.error('Failed to submit assessment');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  const progress = ((currentQuestion + 1) / PHQ9_QUESTIONS.length) * 100;
  const question = PHQ9_QUESTIONS[currentQuestion];
  const isLastQuestion = currentQuestion === PHQ9_QUESTIONS.length - 1;
  const allQuestionsAnswered = Object.keys(answers).length === PHQ9_QUESTIONS.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold text-gray-900">Mental Health Assessment</h1>
              <span className="text-sm text-gray-500">
                {currentQuestion + 1} of {PHQ9_QUESTIONS.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Over the last 2 weeks, how often have you been bothered by:
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              {question.text}
            </p>

            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(question.scores[index])}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                    answers[question.id] === question.scores[index]
                      ? 'border-primary bg-blue-50 text-primary'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="px-6 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            {isLastQuestion && allQuestionsAnswered ? (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Complete Assessment'}
              </button>
            ) : (
              <button
                onClick={() => setCurrentQuestion(prev => prev + 1)}
                disabled={!(question.id in answers) || currentQuestion >= PHQ9_QUESTIONS.length - 1}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
