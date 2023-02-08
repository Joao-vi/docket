import { Button } from '../../../common/components/button';
import { COLORS } from '../../constants/colors';

export function ColorsList() {
  return (
    <div className="z-[0] flex flex-col items-center gap-6">
      {COLORS.map((color) => (
        <ColorItem key={color.color} id={color.id} className={color.color} />
      ))}
    </div>
  );
}

interface IColorItem {
  id: string;
  className: string;
}

const ColorItem = ({ className, id }: IColorItem) => {
  return <Button id={id} className={`w-7 aspect-square bg-amber-400 rounded-full ${className}`} />;
};
