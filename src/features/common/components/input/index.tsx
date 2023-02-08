import { cva } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
}

export function Input({ className, icon, ...rest }: IInput) {
  return (
    <div className="py-2 px-3 flex items-center gap-2 border border-gray-300 rounded-lg overflow-hidden transition-all focus-within:ring ring-offset-4 ">
      {!!icon && icon}
      <input {...rest} className={twMerge(styles({ className }))} />
    </div>
  );
}

const styles = cva(
  'w-full h-full focus:outline-none placeholder:text-gray-400 font-medium placeholder:tracking-wide'
);
