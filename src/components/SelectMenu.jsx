import { useState } from "react";
import { Select } from "antd";
import chevronDown from "../assets/chevronDown.svg";
import chevronUp from "../assets/chevronUp.svg";
import check from "../assets/check.svg";
import { selectOptions } from "../constants/statusData";

const categoryColors = {
  sidewalkShed: "apple",
  scaffold: "energy",
  shoring: "studio",
};

export default function SelectMenu({
  setSelectedCategories,
  selectedCategories,
}) {
  const [menuSelected, setMenuSelected] = useState(false);
  const ToggleIcon = () => {
    return menuSelected ? (
      <img src={chevronUp} alt="Collapse" />
    ) : (
      <img src={chevronDown} alt="Expand" />
    );
  };

  const onSelectOption = (value, option) => {
    setSelectedCategories(option);
  };

  return (
    <div className="flex flex-col w-[60%] justify-center gap-2">
      <label className="font-semibold text-base ml-2">Category Included</label>
      <Select
        mode="multiple"
        className={`max-h-[32px] h-full hide-selected-items w-full ${
          menuSelected ? "custom-select mb-0" : ""
        }`}
        value={selectedCategories}
        placeholder="Select"
        onChange={onSelectOption}
        options={selectOptions}
        popupClassName="select-menu"
        onDropdownVisibleChange={(open) => setMenuSelected(open)}
        suffixIcon={<ToggleIcon />}
        optionRender={(option) => {
          const isOptionSelected = selectedCategories.some(
            (cat) => cat.value === option.value
          );
          return (
            <div
              className={`flex items-center w-full justify-between px-2.5 py-[5px] h-[32px] m-0 bg-${
                isOptionSelected ? categoryColors[option.value] : "white"
              }`}
              role="img"
              aria-label={option.data.label}
              data-value={option.value}
            >
              <p
                className={
                  isOptionSelected ? "text-white" : "text-black text-normal"
                }
              >
                {option.data.value}
              </p>
              <img src={check} className="w-[14px] h-[14px]" />
            </div>
          );
        }}
      />
    </div>
  );
}
