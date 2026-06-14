'use client';

import React, { memo, useMemo } from 'react';
import AppIcon from './AppIcon';
import AppImage from './AppImage';

interface AppLogoProps {
  src?: string; // Image source (optional)
  iconName?: string; // Icon name when no image
  size?: number; // Size for icon/image
  className?: string; // Additional classes
  onClick?: () => void; // Click handler
}

const AppLogo = memo(function AppLogo({
  src = '/assets/images/maraki-logo.svg',
  iconName = 'SparklesIcon',
  size = 64,
  className = '',
  onClick,
}: AppLogoProps) {
  // Memoize className calculation
  const containerClassName = useMemo(() => {
    const classes = ['flex items-center'];
    if (onClick) classes.push('cursor-pointer hover:opacity-80 transition-opacity');
    if (className) classes.push(className);
    return classes.join(' ');
  }, [onClick, className]);

  return (
    <div data-component-id="src/components/ui/AppLogo.tsx:31:4" data-component-path="src/components/ui/AppLogo.tsx" data-component-line="31" data-component-end-line="46" data-component-file="AppLogo.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22%5Bvar%3AcontainerClassName%5D%22%7D" className={containerClassName} onClick={onClick}>
      {/* Show image if src provided, otherwise show icon */}
      {src ? (
        <AppImage data-component-id="src/components/ui/AppLogo.tsx:34:8" data-component-path="src/components/ui/AppLogo.tsx" data-component-line="34" data-component-end-line="42" data-component-file="AppLogo.tsx" data-component-name="AppImage" data-component-content="%7B%22elementName%22%3A%22AppImage%22%2C%22src%22%3A%22%5Bvar%3Asrc%5D%22%2C%22alt%22%3A%22Maraki%20Ladies%20Salon%20Logo%22%2C%22className%22%3A%22flex-shrink-0%22%7D"
          src={src}
          alt="Maraki Ladies Salon Logo"
          width={size}
          height={size}
          className="flex-shrink-0"
          priority={true}
          unoptimized={src.endsWith('.svg')}
        />
      ) : (
        <AppIcon data-component-id="src/components/ui/AppLogo.tsx:44:8" data-component-path="src/components/ui/AppLogo.tsx" data-component-line="44" data-component-end-line="44" data-component-file="AppLogo.tsx" data-component-name="AppIcon" data-component-content="%7B%22elementName%22%3A%22AppIcon%22%2C%22name%22%3A%22%5Bvar%3AiconName%5D%22%2C%22className%22%3A%22flex-shrink-0%22%7D" name={iconName} size={size} className="flex-shrink-0" />
      )}
    </div>
  );
});

export default AppLogo;
