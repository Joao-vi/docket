import { motion } from 'framer-motion';

import { INote } from '../../service/notes-service/i-notes-service';
import { NoteOptions } from '../note-options';

export function NoteCard(props: INote) {
  return (
    <motion.li
      layoutId={props.id}
      initial={{ y: 10, scale: 0.5, opacity: 0.85 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      className={`${props.color} flex-1 min-h-[20rem] min-w-[16rem] max-w-[20rem] flex flex-col justify-between px-6 py-7 rounded-3xl font-medium leading-[1.4]`}
    >
      <div>
        <p>{props.content}</p>
      </div>

      <div className="flex items-center justify-between">
        <span className="font-normal">{new Date(props.date).toLocaleString()}</span>

        <NoteOptions />
      </div>
    </motion.li>
  );
}
