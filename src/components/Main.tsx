'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Main(){
    const [query, setQuery] = useState('');
  const router = useRouter();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      window.open(searchUrl, '_blank'); // opens in new tab
    }
    };
    return (
    <section className='text-center pb-30'>
      <header className="text-center ">
        <p className="google pt-20"><span className="text-blue-600">G</span><span className="text-red-500">o</span><span className="text-yellow-400">o</span><span className="text-blue-600">g</span><span className="text-green-500">l</span><span className="text-red-500">e</span></p><br />
      </header>
     
    
      <form onSubmit={handleSearch} className='-mt-4' >
        <main className="flex justify-center ">
          <div className="relative w-150 ">
           <MagnifyingGlassIcon className="absolute left-4 top-1/2 h-5 w-5 text-gray-400 transform -translate-y-1/2" />
           <input
           type="text"
           placeholder="Search"
           value={query}
           onChange={(e) => setQuery(e.target.value)}
           className="w-150 pl-12 pr-4 py-2 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
           />
           </div>
        </main>
  
        <button  type='submit' className='bg-gray-700 border px-2 mt-3'>Google Search</button>
      </form>
    </section>
    )
}