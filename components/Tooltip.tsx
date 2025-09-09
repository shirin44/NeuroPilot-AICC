import React, { useState } from 'react';

interface TooltipProps {
  children: React.ReactElement;
  tip: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip: React.FC<TooltipProps> = ({ children, tip, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipId] = useState(() => `tooltip-${Math.random().toString(36).substr(2, 9)}`);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  const arrowClasses = {
    top: 'top-full left-1/2 -translate-x-1/2 border-t-brand-neutral-900 border-x-transparent',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-brand-neutral-900 border-x-transparent',
    left: 'left-full top-1/2 -translate-y-1/2 border-l-brand-neutral-900 border-y-transparent',
    right: 'right-full top-1/2 -translate-y-1/2 border-r-brand-neutral-900 border-y-transparent',
  }

  return (
    <div className="relative flex items-center">
      {React.cloneElement(children, {
        // FIX: The 'aria-describedby' attribute must be kebab-cased in React. As an object key with a hyphen, it must be quoted.
        'aria-describedby': isVisible ? tooltipId : undefined,
        onMouseEnter: showTooltip,
        onMouseLeave: hideTooltip,
        onFocus: showTooltip,
        onBlur: hideTooltip,
      })}
      {isVisible && (
        <div
          id={tooltipId}
          role="tooltip"
          className={`absolute z-10 w-max max-w-xs ${positionClasses[position]}`}
        >
          <div className="bg-brand-neutral-900 text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-lg animate-fadeIn">
            {tip}
            <div className={`absolute w-0 h-0 border-4 ${arrowClasses[position]}`}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
