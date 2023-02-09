export const debounce = (fn: (args: any) => void, delay = 300) => {
  let timer: number | null = null;

  return (arg: any) => {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn(arg);
    }, delay);
  };
};
