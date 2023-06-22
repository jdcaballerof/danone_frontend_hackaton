import React from 'react'


interface Props {
    src: string, 
    width?: string, 
    autoplay?: boolean, 
    loop?: boolean,
    muted?: boolean
}
export const VideoPlayer = ({
    src, 
    width    = '100%', 
    autoplay = true, 
    loop     = true, 
    muted    = true
}:Props) => {
  return (
    <div>
        <video 
            src={src}
            width={width} 
            height={'auto'}
            autoPlay = {autoplay} 
            loop  = {loop}
            muted = {muted}
        />
    </div>
  )
}
