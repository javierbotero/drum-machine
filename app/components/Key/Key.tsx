import React, { useRef } from 'react';
import { useSelector, useDispatch, keyUpdated, selectedKey } from '@/lib/redux';
import type { MouseEvent } from 'react';
import { addAndRemoveClasses, btnAnimationClasses } from '@/utils';

type KeyType = { letter: string, audio: string, id: string }

const Key = ({ letter, audio, id }: KeyType) => {
  const dispatch = useDispatch();
  const audioRef = useRef<HTMLAudioElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const key = useSelector(selectedKey);
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (audioRef.current) { audioRef.current.play(); }
    addAndRemoveClasses(e.currentTarget, btnAnimationClasses);
    dispatch(keyUpdated(id));
  }

  return (
    <button
      className="drum-pad w-full transition bg-cyan-800 text-slate-100 border-2 border-cyan-300"
      id={id}
      data-testid="drum-pad"
      onClick={handleClick}
      ref={btnRef}
    >
      {letter}
      <audio ref={audioRef} className="clip" id={letter} src={audio} data-id={id}></audio>
    </button>
  )
}

export default Key;
