import { motion } from 'framer-motion';
import { PushPin, Trash } from 'phosphor-react';
import { ChangeEvent } from 'react';
import { Button } from '../../../common/components/button';
import { debounce } from '../../../common/utils/debounce';
import { useDeleteNote } from '../../mutations/use-delete-note';
import { useEditNote } from '../../mutations/use-edit-note';

import { INote } from '../../service/notes-service/i-notes-service';
import { NoteOptions } from '../note-options';

export function NoteCard(props: INote) {
  const editMutation = useEditNote();
  const deleteMutation = useDeleteNote();

  const onChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    editMutation({ id: props.id, content: e.target.value });
  };

  const onChangeTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    editMutation({ id: props.id, title: e.target.value });
  };

  const onDeleteNote = () => {
    deleteMutation(props.id);
  };

  const onPinNote = () => {
    editMutation({ id: props.id, isPinned: !props.isPinned });
  };

  return (
    <motion.li
      layoutId={props.id}
      initial={{ y: 10, scale: 0.8, opacity: 0.85 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      className={`${props.color} focus-within:ring ring-offset-4 flex-1 min-h-[20rem] min-w-[16rem] max-w-[20rem] flex flex-col justify-between px-6 py-7 rounded-3xl font-medium leading-[1.4]`}
    >
      <header className="mb-2">
        <input
          placeholder="What I need to do ?"
          onChange={debounce(onChangeTitle)}
          defaultValue={props.title}
          className="w-full bg-transparent focus:outline-none placeholder:text-zinc-800 font-bold"
        />
      </header>

      <textarea
        placeholder="Time to take some notes!"
        className="placeholder:text-zinc-800 resize-none focus:outline-none w-full h-full bg-transparent"
        defaultValue={props.content}
        onChange={debounce(onChangeContent)}
      />

      <div className="flex items-center justify-between">
        <span className="font-normal">{new Date(props.date).toLocaleDateString()}</span>

        <NoteOptions>
          <Button
            onClick={onDeleteNote}
            id="option"
            variants={{ type: 'icon' }}
            className="bg-zinc-800"
          >
            <Trash className="text-xl" />
          </Button>

          <Button
            onClick={onPinNote}
            id="option"
            variants={{ type: 'icon' }}
            className={`${props.isPinned ? 'bg-amber-400' : 'bg-zinc-800'}`}
          >
            <PushPin className="text-xl" />
          </Button>
        </NoteOptions>
      </div>
    </motion.li>
  );
}
