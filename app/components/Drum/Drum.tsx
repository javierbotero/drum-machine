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
import styles from './drum.module.css'
import Key from '@/app/components/Key/Key'

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
        dispatch(keyUpdated(idStr));
      }
    }

    document.addEventListener('keydown', handleKeyStroke);

    return () => {
      document.removeEventListener('keydown', handleKeyStroke);
    }
  }, []);

  return (
    <div id="drum-machine" data-testid="drum-machine">
      <div data-testid="display" id="display">
        {currentKey}
      </div>
      <div>
        {urlsToKeys(keys)}
      </div>
    </div>
  )
}
