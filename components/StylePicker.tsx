import { type Dispatch, type SetStateAction } from "react";
import { styleOptions } from "@/app/(dashboard)/(routes)/svg/constants";
import Image from "next/image";

interface Props {
  imageSrc: string;
  styleOptions: string;
  chosenStyle: string;
  setChosenStyle: Dispatch<SetStateAction<string>>;
}
const StylePicker: React.FC<Props> = ({
  imageSrc,
  styleOptions,
  chosenStyle,
  setChosenStyle,
}) => {
  return (
    <div className="flex items-center">
      <label className="flex flex-col gap-y-3 text-center">
        <input
          type="radio"
          className="peer absolute h-28 w-28 opacity-0"
          name="styleOptions"
          checked={styleOptions === chosenStyle}
          value={styleOptions}
          onChange={(e) => setChosenStyle(e.target.value as string)}
        />
        <Image
          src={imageSrc}
          width={100}
          height={100}
          alt={styleOptions}
          className="z-20 h-36 w-36 cursor-pointer rounded-xl opacity-40 peer-checked:scale-110 peer-checked:opacity-100"
        />
        <p>{styleOptions}</p>
      </label>
    </div>
  );
};

export default StylePicker;
