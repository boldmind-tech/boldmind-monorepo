"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { Input, Button } from '@boldmind/ui';

export default function SearchBar({ showTrending = false }: { showTrending?: boolean }) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-2xl mx-auto">
      <div className="relative flex items-center">
        <Input
          type="text"
          placeholder="Search for breaking gist, tech, or politics..."
          className="w-full pl-12 pr-4 h-14 text-lg rounded-full border-2 border-green-200 focus:border-green-500 transition-all shadow-sm"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Search className="absolute left-4 h-6 w-6 text-gray-400" />
        <Button 
          type="submit" 
          className="absolute right-2 h-10 px-6 rounded-full bg-green-600 hover:bg-green-700 text-white"
        >
          Search
        </Button>
      </div>
    </form>
  );
}
