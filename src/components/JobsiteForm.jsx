import { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "./UI/Input";
import save from "../assets/save.svg";
import whiteX from "../assets/white-x.svg";
import Button from "./UI/Button";
import DropDownMenu from "./UI/DropDownMenu";
import SelectMenu from "./SelectMenu";
import Tag from "./UI/Tag";
import { addJobSites } from "../store/features/jobSiteSlice";

export default function JobsiteForm({ onCloseModal }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [dropDownSelected, setDropDownSelected] = useState(false);
  const [status, setStatus] = useState();
  const [jobsiteName, setJobsiteName] = useState("");
  const dispatch = useDispatch();

  const onTagRemove = (tag) => {
    setSelectedCategories((prev) => prev.filter((item) => item.value !== tag));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!jobsiteName || !status || !selectedCategories.length) {
      alert("Please fill in all fields.");
      return;
    }
    const newJobSite = {
      id: Math.random().toString(36).substr(2, 9),
      jobsiteName,
      status,
      categories: selectedCategories.map((cat) => cat.value),
    };
    dispatch(addJobSites(newJobSite));
    onCloseModal();
  };

  const handleStatusChange = (item) => {
    setStatus(item.text);
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
      <Input
        id="name"
        name="jobsiteName"
        label="Name"
        type="text"
        placeholder="Name"
        value={jobsiteName}
        onChange={(e) => setJobsiteName(e.target.value)}
      />
      <div className="flex justify-between w-full gap-8">
        <SelectMenu
          setSelectedCategories={setSelectedCategories}
          selectedCategories={selectedCategories}
        />
        <DropDownMenu
          label="Status"
          setDropDownSelected={setDropDownSelected}
          dropDownSelected={dropDownSelected}
          value={status}
          onStatusChange={handleStatusChange}
        />
      </div>
      <div className="flex flex-wrap md:flex-nowrap w-[200px] md:w-full gap-2">
        {selectedCategories.map((item) => (
          <Tag
            option={{ label: item.label, value: item.value }}
            onRemove={onTagRemove}
          ></Tag>
        ))}
      </div>

      <div className="flex justify-end gap-2 mt-20">
        <Button
          onClick={onCloseModal}
          color="coral-red"
          label="Cancel Changes"
          icon={whiteX}
          border="torch"
          className="px-2"
          type="button"
        />
        <Button
          color="custom-green"
          label="Save Changes"
          icon={save}
          border="darkGreen"
          className="px-2"
          type="submit"
        />
      </div>
    </form>
  );
}
