'use client';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import {useState} from 'react';

interface BlurImageProps {
  src: string | StaticImport;
  alt   : string;
  width : number;
  height: number;
  className?: string;
  blurDataURL?: string;
}


export default function BlurImage({src, alt, width, height, blurDataURL, className} : BlurImageProps){
  const [isLoading, setIsLoading] = useState(true);
  
  return <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        placeholder={blurDataURL ? 'blur' : 'empty'}
        blurDataURL={blurDataURL}
        className={`object-cover transition-all duration-700 ease-in-out ${
          isLoading ? 'blur-xl scale-105' : 'blur-none scale-100'
        }`}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  

}
  