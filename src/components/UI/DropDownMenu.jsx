import { Dropdown, Menu, Space } from "antd";
import { useState } from "react";
import chevronDown from "../../assets/chevronDown.svg";
import chevronUp from "../../assets/chevronUp.svg";
import { items } from "../../constants/statusData";

export default function DropDownMenu({
  label,
  name,
  setDropDownSelected,
  dropDownSelected,
  onStatusChange,
}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const menu = (
    <Menu>
      {items.map((item) => (
        <Menu.Item
          key={item.key}
          onClick={(e) => {
            setSelectedOption(item);
            onStatusChange(item);
          }}
          className={`${
            selectedOption?.key === item.key ? item.bgColor : "bg-transparent"
          } ${dropDownSelected ? "rounded-tl-none rounded-tr-none" : ""}`}
        >
          <span
            className={`${
              selectedOption?.key === item.key ? "text-white" : ""
            }`}
            data-value={item.text}
          >
            {item.text}
          </span>
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <Space className="flex flex-col w-[40%] justify-center min-h-[40px]">
      <label className="font-semibold text-base ml-2">{label}</label>
      <Dropdown
        name={name}
        value={selectedOption}
        overlay={menu}
        trigger={["click"]}
        onOpenChange={(open) => setDropDownSelected(open)}
      >
        <a
          className={`bg-alabaster flex justify-between items-center max-h-[32px] h-screen rounded-md pr-2 ${
            dropDownSelected ? "rounded-bl-none rounded-br-none" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          {selectedOption ? (
            <div className="flex items-center gap-2">
              <span
                className={`inline-block ml-4 w-2 h-2 ${selectedOption.color} rounded-full`}
              />
              <span>{selectedOption.text}</span>
            </div>
          ) : (
            <span className="px-2 text-mercury">Select one</span>
          )}
          <img src={dropDownSelected ? chevronUp : chevronDown} />
        </a>
      </Dropdown>
    </Space>
  );
}
