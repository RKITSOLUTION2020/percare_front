import React, { useState } from 'react';

const FilterBar = ({ onFilterChange }) => {
  const [activeMood, setActiveMood] = useState('All');

  const handleFilterChange = (mood) => {
    setActiveMood(mood);
    onFilterChange(mood);
  };

  return (
    <div className='flex space-x-2'>
      {['All', 'Happy', 'Sad', 'Neutral'].map((mood) => (
        <button
          key={mood}
          onClick={() => handleFilterChange(mood)}
          className={`px-3 py-1 rounded ${
            activeMood === mood ? 'bg-gray-400 text-white' : 'bg-gray-200'
          }`}
        >
          {mood}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
