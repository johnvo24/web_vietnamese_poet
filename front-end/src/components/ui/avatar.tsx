import React from 'react'
import * as Avatar from '@radix-ui/react-avatar';

interface UserAvatarProps {
  src?: string;
  alt?: string;
  fallbackText: string;
  id?: string;
  className?: string;
  onClick?: () => void;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ src, alt, fallbackText, id, className , onClick}) => {
  return (
    <Avatar.Root 
      id={id}
      className={`avatar ${className} inline-flex rounded-full w-10 h-10`}
      onClick={onClick}
    >
      <Avatar.Image
        className='w-full h-full rounded-full object-cover'
        src={src}
        alt={alt || 'Avatar'}
      />
      <Avatar.Fallback
        className='flex items-center justify-center w-full h-full bg-gray-400 text-white font-bold'
        delayMs={600}
      >
        {fallbackText}
      </Avatar.Fallback>
    </Avatar.Root>
  )
}

export default UserAvatar;