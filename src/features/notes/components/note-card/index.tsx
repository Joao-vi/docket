import { motion } from 'framer-motion';
import { ChangeEvent } from 'react';
import { debounce } from '../../../common/utils/debounce';
import { useEditNote } from '../../mutations/use-edit-note';

import { INote } from '../../service/notes-service/i-notes-service';
import { NoteOptions } from '../note-options';

export function NoteCard(props: INote) {
  const mutate = useEditNote();

  const onChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    mutate({ id: props.id, content: e.target.value });
  };

  return (
    <motion.li
      layoutId={props.id}
      transition={{ duration: 0.3 }}
      initial={{ y: 10, scale: 0.8, opacity: 0.85 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      className={`${props.color} transition focus-within:ring ring-offset-4 flex-1 min-h-[20rem] min-w-[16rem] max-w-[20rem] flex flex-col justify-between px-6 py-7 rounded-3xl font-medium leading-[1.4]`}
    >
      <textarea
        autoFocus
        placeholder="Time to take some notes!"
        className="placeholder:text-zinc-800 resize-none focus:outline-none w-full h-full bg-transparent"
        defaultValue={props.content}
        onChange={debounce(onChangeContent)}
      />

      <div className="flex items-center justify-between">
        <span className="font-normal">{new Date(props.date).toLocaleString()}</span>

        <NoteOptions />
      </div>
    </motion.li>
  );
}
