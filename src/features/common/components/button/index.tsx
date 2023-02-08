import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { cva, VariantProps } from 'class-variance-authority';

type TVariants = VariantProps<typeof styles>;

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variants?: TVariants;
}

export function Button({ children, variants, className, ...rest }: IButton) {
  return (
    <button {...rest} className={twMerge(styles({ className, ...variants }))}>
      {children}
    </button>
  );
}

const styles = cva('flex items-center justify-center', {
  variants: {
    type: {
      icon: 'p-3 w-fit rounded-full aspect-square transition-colors bg-zinc-900 hover:bg-zinc-800 text-white hover:text-amber-500',
    },
  },
});
