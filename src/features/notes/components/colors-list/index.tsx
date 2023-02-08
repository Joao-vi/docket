import { Button } from '../../../common/components/button';
import { COLORS } from '../../constants/colors';
import { useAddNote } from '../../mutations/use-add-note';

export function ColorsList() {
  const mutate = useAddNote();

  return (
    <div className="z-[0] flex flex-col items-center gap-6">
      {COLORS.map((color) => (
        <ColorItem
          key={color.color}
          onClick={() => mutate(color.color)}
          id={color.id}
          className={color.color}
        />
      ))}
    </div>
  );
}

interface IColorItem {
  id: string;
  className: string;
  onClick(): void;
}

const ColorItem = ({ className, id, onClick }: IColorItem) => {
  return (
    <Button
      onClick={onClick}
      id={id}
      className={`w-7 aspect-square rounded-full ${className} hover:brightness-[.85]`}
    />
  );
};
