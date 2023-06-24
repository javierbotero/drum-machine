import React, { useRef } from 'react';
import { useDispatch, keyUpdated } from '@/lib/redux';

type KeyType = { letter: string, audio: string, id: string }

const Key = ({ letter, audio, id }: KeyType) => {
  const dispatch = useDispatch();
  const audioRef = useRef<HTMLAudioElement>(null);
  const handleClick = () => {
    if (audioRef.current) { audioRef.current.play(); }
    dispatch(keyUpdated(id));
  }
  return (
    <button
      className="drum-pad"
      id={id}
      data-testid="drum-pad"
      onClick={handleClick}
    >
      {letter}
      <audio ref={audioRef} className="clip" id={letter} src={audio}></audio>
    </button>
  )
}

export default Key;
