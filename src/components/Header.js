import * as React from 'react';
import Search from './Search';

function Header({ title, onSearch }) {
  return (
    <header className="bg-orange-500 text-white py-2 px-4 sm:px-6 md:px-8 lg:px-10 h-16">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl md:text-4xl font-semibold">{title}</h1>
        <Search onSearch={onSearch} />
      </div>
    </header>
  );
}

export default Header;