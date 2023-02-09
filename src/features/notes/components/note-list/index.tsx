import { motion } from 'framer-motion';
import { Bug, CircleNotch, Link, XCircle } from 'phosphor-react';
import { Button } from '../../../common/components/button';
import { useFetchNotes } from '../../queries/use-fetch-notes';
import { NoteCard } from '../note-card';

export function NoteList() {
  const { data, isFetching, isLoading, isError } = useFetchNotes();

  if (isLoading) {
    return (
      <div className="mt-14 flex flex-col items-center gap-5 text-zinc-600">
        <CircleNotch className="text-4xl animate-spin" />
        <span>Hi! We are loading your notes, just a second.</span>
      </div>
    );
  }

  if (!data || isError) {
    return (
      <div className="mt-14 flex flex-col items-center gap-5 text-zinc-600">
        <Bug className="text-4xl" />
        <span>
          Oh no, sorry about that, something went wrong, please{' '}
          <a
            href=""
            target="_blank"
            className="text-amber-400 font-semibold inline-flex items-center gap-1"
          >
            contact us
            <Link className="text-lg" />
          </a>
          .
        </span>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="mt-14 flex flex-col items-center gap-5 text-zinc-600 text-center">
        <XCircle className="text-4xl" />

        <span>
          Hmmm, it's seems you don't have any notes created.
          <span className="block">
            Let's{' '}
            <Button className="bg-amber-400 inline px-3 rounded text-zinc-800 font-semibold hover:bg-amber-300">
              create
            </Button>{' '}
            one right away ?{' '}
          </span>
        </span>
      </div>
    );
  }

  return (
    <motion.ul layout className="mt-14 flex flex-wrap gap-6">
      {isFetching && (
        <div className="absolute top-8 w-full flex items-center justify-center gap-1 text-zinc-600">
          <CircleNotch className="text-lg animate-spin" />
          <span>Updating</span>
        </div>
      )}

      {data.map((note) => (
        <NoteCard key={note.id} {...note} />
      ))}
    </motion.ul>
  );
}
