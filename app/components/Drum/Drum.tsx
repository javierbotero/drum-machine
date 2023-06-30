'use client'

/* Core */
import { useEffect } from 'react';

/* Instruments */
import {
  useSelector,
  useDispatch,
  selectedKey,
  selectKeys,
  keysSliceState,
  keyUpdated
} from '@/lib/redux'
import Key from '@/app/components/Key/Key';
import { addAndRemoveClasses, btnAnimationClasses } from '@/utils';

export const Drum = () => {
  const currentKey = useSelector(selectedKey)
  const keys = useSelector(selectKeys)
  const dispatch = useDispatch()
  const urlsToKeys = (arr: keysSliceState['keys']) => arr.map(objKey => {
    const id = objKey.path.
      replace(/\/keys\//, '').
      replace(/\.mp3/, '');
    return <Key id={id} letter={objKey.letter} audio={objKey.path} key={id} />
  })

  useEffect(() => {
    const handleKeyStroke = (event: any) => {
      const letter = event.key.toUpperCase();
      const audio = document.getElementById(letter) as HTMLAudioElement;

      if(audio) {
        audio.play();
        const idStr = audio.getAttribute('data-id') || '';
        const btn = document.getElementById(idStr);
        if (btn) {
          btn.focus();
          addAndRemoveClasses(btn as HTMLButtonElement, btnAnimationClasses);
        }
        dispatch(keyUpdated(idStr));
      }
    }

    document.addEventListener('keydown', handleKeyStroke);

    return () => {
      document.removeEventListener('keydown', handleKeyStroke);
    }
  }, []);

  return (
    <div className="h-3/6 w-1/2 md:w-1/3 lg:w-1/4" id="drum-machine" data-testid="drum-machine">
      <div className="h-14 text-slate-100 bg-gradient-to-b from-cyan-950 via-cyan-800 to-from-cyan-950 flex items-center justify-center" data-testid="display" id="display">
        {currentKey}
      </div>
      <div className="grid grid-cols-3 h-full">
        {urlsToKeys(keys)}
      </div>
    </div>
  )
}
