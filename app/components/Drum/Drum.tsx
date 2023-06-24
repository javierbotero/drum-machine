'use client'

/* Core */
import { useState } from 'react';


/* Instruments */
import {
  useSelector,
  useDispatch,
  selectedKey,
  selectKeys,
  keysSliceState
} from '@/lib/redux'
import styles from './drum.module.css'
import Key from '@/app/components/Key/Key'

export const Drum = () => {
  const currentKey = useSelector(selectedKey)
  const keys = useSelector(selectKeys)
  const urlsToKeys = (arr: keysSliceState['keys']) => arr.map(objKey => {
    const id = objKey.path.
      replace(/\/keys\//, '').
      replace(/\.mp3/, '');
    return <Key id={id} letter={objKey.letter} audio={objKey.path} key={id} />
  })

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
