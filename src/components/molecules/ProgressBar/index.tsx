// components/ProgressBar.tsx
import React from 'react';

interface ProgressBarProps {
  percentage: number; // expects a value between 0 and 100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  return (
    <div className="w-full bg-brown rounded-full h-4 dark:bg-gray-700">
      <div
        className="bg-orange h-4 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
