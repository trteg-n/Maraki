'use client';

import React from 'react';
import * as HeroIcons from '@heroicons/react/24/outline';
import * as HeroIconsSolid from '@heroicons/react/24/solid';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

type IconVariant = 'outline' | 'solid';

interface IconProps {
    name: string; // Changed to string to accept dynamic values
    variant?: IconVariant;
    size?: number;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    [key: string]: any;
}

function Icon({
    name,
    variant = 'outline',
    size = 24,
    className = '',
    onClick,
    disabled = false,
    ...props
}: IconProps) {
    const iconSet = variant === 'solid' ? HeroIconsSolid : HeroIcons;
    const IconComponent = iconSet[name as keyof typeof iconSet] as React.ComponentType<any>;

    if (!IconComponent) {
        return (
            <QuestionMarkCircleIcon data-component-id="src/components/ui/AppIcon.tsx:34:12" data-component-path="src/components/ui/AppIcon.tsx" data-component-line="34" data-component-end-line="40" data-component-file="AppIcon.tsx" data-component-name="QuestionMarkCircleIcon" data-component-content="%7B%22elementName%22%3A%22QuestionMarkCircleIcon%22%2C%22%5Bspread%5D%22%3A%22true%22%7D"
                width={size}
                height={size}
                className={`text-gray-400 ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
                onClick={disabled ? undefined : onClick}
                {...props}
            />
        );
    }

    return (
        <IconComponent data-component-id="src/components/ui/AppIcon.tsx:45:8" data-component-path="src/components/ui/AppIcon.tsx" data-component-line="45" data-component-end-line="51" data-component-file="AppIcon.tsx" data-component-name="IconComponent" data-component-content="%7B%22elementName%22%3A%22IconComponent%22%2C%22%5Bspread%5D%22%3A%22true%22%7D"
            width={size}
            height={size}
            className={`${disabled ? 'opacity-50 cursor-not-allowed' : onClick ? 'cursor-pointer hover:opacity-80' : ''} ${className}`}
            onClick={disabled ? undefined : onClick}
            {...props}
        />
    );
}

export default Icon; 