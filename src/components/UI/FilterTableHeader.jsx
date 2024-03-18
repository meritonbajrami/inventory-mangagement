import magnifyingGlass from "../../assets/magnifyingGlass.svg";
import info from "../../assets/info.svg";
import plus from "../../assets/plus.svg";
import Button from "./Button";

export default function FilterTableHeader({
  title,
  description,
  onSearch,
  onBtnClick,
  btnLabel,
}) {
  return (
    <div className="w-full flex flex-col gap-1">
      <h4 className="w-full flex items-center font-medium text-base py-2 px-4 bg-alabaster rounded-tl-md rounded-tr-md">
        {title}
      </h4>
      <div className="flex flex-wrap md:flex-nowrap w-full items-center justify-between gap-2 mt-4">
        <span className="w-full md:w-[66%] pl-4 pt-2 bg-white flex gap-2 items-center">
          <img src={info} />
          <p>{description}</p>
        </span>
        <div className="flex gap-4 w-full md:w-[34%] p-4 md:p-0 md:pr-4">
          <div className="relative w-full">
            <img
              src={magnifyingGlass}
              className="absolute top-0 left-[5px] translate-y-1/2"
            />
            <input
              type="text"
              placeholder="Search a driver"
              className="rounded-md w-full h-[32px] border-custom-gray border-2 px-2 pl-8"
              onChange={({ target: { value } }) => onSearch(value)}
            />
          </div>
          <Button
            onClick={onBtnClick}
            label={btnLabel}
            color="custom-green"
            icon={plus}
            border="darkGreen"
            className="max-w-[150px] justify-evenly items-center"
          />
        </div>
      </div>
    </div>
  );
}
