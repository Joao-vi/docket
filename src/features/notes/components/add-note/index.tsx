export function AddNote() {
  return (
    <article className="mt-20 flex flex-col gap-8 items-cente">
      <button>+</button>

      <div className="flex flex-col items-center gap-6">
        <div className="w-7 aspect-square bg-black rounded-full" />
        <div className="w-7 aspect-square bg-black rounded-full" />
        <div className="w-7 aspect-square bg-black rounded-full" />
        <div className="w-7 aspect-square bg-black rounded-full" />
        <div className="w-7 aspect-square bg-black rounded-full" />
      </div>
    </article>
  );
}
