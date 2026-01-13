'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { SUBJECTS } from '../../../../lib/config';
import {
  BookOpen,
  Search,
  ArrowRight,
  FlaskConical,
  Calculator,
  Globe,
  Landmark,
  DollarSign,
  Microscope,
  Book,
  Cross,
  MapPin,
} from 'lucide-react';

const subjectIcons: Record<string, any> = {
  mathematics: Calculator,
  english: Book,
  physics: FlaskConical,
  chemistry: Microscope,
  biology: Microscope,
  geography: MapPin,
  government: Landmark,
  economics: DollarSign,
  commerce: DollarSign,
  crk: Cross,
  default: BookOpen,
};

export default function SubjectsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSubjects = SUBJECTS.filter((subject) =>
    subject.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubjectClick = (subjectValue: string) => {
    router.push(`/study-hub/subjects/${subjectValue}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/study-hub"
            className="inline-flex items-center text-blue-100 hover:text-white mb-4 transition-colors"
          >
            <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
            Back to Study Hub
          </Link>
          <h1 className="text-4xl font-bold mb-2">Select Subject</h1>
          <p className="text-blue-100">Choose a subject to start practicing</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search subjects..."
              className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-lg"
            />
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSubjects.map((subject) => {
            const Icon = subjectIcons[subject.value] || subjectIcons.default;
            
            return (
              <button
                key={subject.value}
                onClick={() => handleSubjectClick(subject.value)}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 text-left"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 dark:text-gray-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {subject.label}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Practice past questions
                </p>
              </button>
            );
          })}
        </div>

        {/* No Results */}
        {filteredSubjects.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No subjects found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search query
            </p>
          </div>
        )}
      </div>
    </div>
  );
}