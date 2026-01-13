'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useAuth } from '@boldmind/auth';
import { pastQuestionsAPI, boldMindAPI } from '../../../lib/api';
import { SUBJECTS } from '../../../lib/config';
import toast from 'react-hot-toast';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  XCircle,
  Clock,
  Flag,
  RotateCcw,
} from 'lucide-react';

interface Question {
  id: string;
  question: string;
  option: Record<string, string>;
  section: string;
  image: string;
  answer: string;
  solution: string;
  examtype: string;
  examyear: string;
}

export default function PracticePage() {
  const router = useRouter();
  const params = useParams();
  const { user } = useAuth();
  const subject = params.subject as string;
  const year = params.year as string;

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(true);
  const [timeSpent, setTimeSpent] = useState(0);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const subjectLabel = SUBJECTS.find((s) => s.value === subject)?.label || subject;

  useEffect(() => {
    loadQuestions();
    
    // Start timer
    const interval = setInterval(() => {
      setTimeSpent((prev) => prev + 1);
    }, 1000);
    setTimer(interval);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [subject, year]);

  const loadQuestions = async () => {
    try {
      const response = await pastQuestionsAPI.getAllQuestions(subject, year);
      if (response.data && response.data.length > 0) {
        setQuestions(response.data);
        toast.success(`Loaded ${response.data.length} questions`);
      } else {
        toast.error('No questions found for this selection');
        router.back();
      }
    } catch (error) {
      console.error('Error loading questions:', error);
      toast.error('Failed to load questions');
      router.back();
    } finally {
      setLoading(false);
    }
  };

  const handleAnswer = (optionKey: string) => {
    if (showResults) return;
    setUserAnswers({ ...userAnswers, [currentIndex]: optionKey });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmit = async () => {
    if (Object.keys(userAnswers).length === 0) {
      toast.error('Please answer at least one question');
      return;
    }

    if (timer) clearInterval(timer);
    setShowResults(true);

    // Calculate score
    let correct = 0;
    questions.forEach((q, index) => {
      if (userAnswers[index] === q.answer) {
        correct++;
      }
    });

    // Save progress to backend
    try {
      for (const [index, answer] of Object.entries(userAnswers)) {
        const question = questions[Number(index)];
        await boldMindAPI.saveProgress({
          uid: user?.uid || '',
          subject,
          year,
          questionId: question.id,
          answer,
          isCorrect: answer === question.answer,
          timeSpent,
        });
      }
      toast.success('Progress saved!');
    } catch (error) {
      console.error('Error saving progress:', error);
      toast.error('Failed to save progress');
    }
  };

  const handleReset = () => {
    setUserAnswers({});
    setShowResults(false);
    setCurrentIndex(0);
    setTimeSpent(0);
    
    const interval = setInterval(() => {
      setTimeSpent((prev) => prev + 1);
    }, 1000);
    setTimer(interval);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, index) => {
      if (userAnswers[index] === q.answer) {
        correct++;
      }
    });
    return {
      correct,
      total: questions.length,
      percentage: Math.round((correct / questions.length) * 100),
    };
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading questions...</p>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">No questions available</p>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const score = showResults ? calculateScore() : null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                {subjectLabel} - {year}
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Question {currentIndex + 1} of {questions.length}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg">
                <Clock className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="font-mono font-semibold text-gray-900 dark:text-white">
                  {formatTime(timeSpent)}
                </span>
              </div>
              {!showResults && (
                <button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Question Navigator */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 sticky top-24">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Question Navigator</h3>
              <div className="grid grid-cols-5 gap-2">
                {questions.map((_, index) => {
                  const isAnswered = userAnswers[index] !== undefined;
                  const isCurrent = index === currentIndex;
                  const isCorrect = showResults && userAnswers[index] === questions[index].answer;
                  const isWrong = showResults && userAnswers[index] && userAnswers[index] !== questions[index].answer;

                  return (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`
                        w-10 h-10 rounded-lg font-semibold transition-all
                        ${isCurrent ? 'ring-2 ring-blue-500' : ''}
                        ${showResults && isCorrect ? 'bg-green-500 text-white' : ''}
                        ${showResults && isWrong ? 'bg-red-500 text-white' : ''}
                        ${!showResults && isAnswered ? 'bg-blue-500 text-white' : ''}
                        ${!showResults && !isAnswered && !isCurrent ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300' : ''}
                        ${!showResults && !isAnswered && isCurrent ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : ''}
                      `}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>

              {showResults && score && (
                <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Results</h4>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {score.percentage}%
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {score.correct} out of {score.total} correct
                  </p>
                  <button
                    onClick={handleReset}
                    className="w-full mt-4 flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <RotateCcw className="w-5 h-5" />
                    <span>Try Again</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Main Question Area */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
              {/* Question */}
              <div className="mb-8">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Question {currentIndex + 1}
                  </h2>
                  {showResults && (
                    <div>
                      {userAnswers[currentIndex] === currentQuestion.answer ? (
                        <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                          <CheckCircle className="w-6 h-6" />
                          <span className="font-semibold">Correct</span>
                        </div>
                      ) : userAnswers[currentIndex] ? (
                        <div className="flex items-center space-x-2 text-red-600 dark:text-red-400">
                          <XCircle className="w-6 h-6" />
                          <span className="font-semibold">Incorrect</span>
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>
                <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                  {currentQuestion.question}
                </p>
                {currentQuestion.image && (
                  <img
                    src={currentQuestion.image}
                    alt="Question diagram"
                    className="mt-4 max-w-full h-auto rounded-lg"
                  />
                )}
              </div>

              {/* Options */}
              <div className="space-y-4 mb-8">
                {Object.entries(currentQuestion.option).map(([key, value]) => {
                  const isSelected = userAnswers[currentIndex] === key;
                  const isCorrect = key === currentQuestion.answer;
                  const showCorrect = showResults && isCorrect;
                  const showWrong = showResults && isSelected && !isCorrect;

                  return (
                    <button
                      key={key}
                      onClick={() => handleAnswer(key)}
                      disabled={showResults}
                      className={`
                        w-full text-left p-4 rounded-xl border-2 transition-all
                        ${showCorrect ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : ''}
                        ${showWrong ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : ''}
                        ${!showResults && isSelected ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : ''}
                        ${!showResults && !isSelected ? 'border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/10' : ''}
                        ${showResults ? 'cursor-default' : 'cursor-pointer'}
                      `}
                    >
                      <div className="flex items-start space-x-3">
                        <div
                          className={`
                            w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold
                            ${showCorrect ? 'bg-green-500 text-white' : ''}
                            ${showWrong ? 'bg-red-500 text-white' : ''}
                            ${!showResults && isSelected ? 'bg-blue-500 text-white' : ''}
                            ${!showResults && !isSelected ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300' : ''}
                          `}
                        >
                          {key}
                        </div>
                        <span className="text-gray-800 dark:text-gray-200 flex-1">{value}</span>
                        {showCorrect && <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />}
                        {showWrong && <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Solution (shown after submission) */}
              {showResults && currentQuestion.solution && (
                <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                  <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Explanation</h3>
                  <p className="text-blue-800 dark:text-blue-200">{currentQuestion.solution}</p>
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                  className="flex items-center space-x-2 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Previous</span>
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentIndex === questions.length - 1}
                  className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Next</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}