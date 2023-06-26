import React, { useRef, useEffect } from 'react';
import type { KeyboardEvent } from 'react';
import { useDispatch, keyUpdated } from '@/lib/redux';

type KeyType = { letter: string, audio: string, id: string }

const Key = ({ letter, audio, id }: KeyType) => {
  const dispatch = useDispatch();
  const audioRef = useRef<HTMLAudioElement>(null);
  const handleClick = () => {
    if (audioRef.current) { audioRef.current.play(); }
    dispatch(keyUpdated(id));
  }

  // useEffect(() => {
  //   function handleKeyStroke(event: any): any {
  //     if (event.key === letter) { handleClick(); }
  //   }

  //   document.addEventListener('keydown', handleKeyStroke);
  // }, [letter, handleClick]);

  return (
    <button
      className="drum-pad"
      id={id}
      data-testid="drum-pad"
      onClick={handleClick}
    >
      {letter}
      <audio ref={audioRef} className="clip" id={letter} src={audio} data-id={id}></audio>
    </button>
  )
}

export default Key;
