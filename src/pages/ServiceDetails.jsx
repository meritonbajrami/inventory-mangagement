import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import backspace from "../assets/backspace.svg";
import save from "../assets/save.svg";
import CustomTable from "../components/UI/Table";
import magnifyingGlass from "../assets/magnifyingGlass.svg";
import close from "../assets/close.svg";
import { sidewalkShedColumns } from "../constants/sidewalkShedData";
import sidewalkShedData from "../data/sidewalkShed.json";
import scaffoldData from "../data/scaffold.json";
import CustomModal from "../components/UI/CustomModal";
import noData from "../assets/no-data.svg";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import whiteX from "../assets/white-x.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  selectService,
  selectServiceData,
  setSelectedService,
  setServiceData,
  updateServiceData,
} from "../store/features/serviceSlice";

const services = [
  {
    name: "Sidewalk Shed",
    data: sidewalkShedData,
  },
  {
    name: "Scaffold",
    data: scaffoldData,
  },
];

export default function ServiceDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const selectedService = useSelector(selectService);
  const tableData = useSelector(selectServiceData);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    item: "",
    quantity: "",
    description: "",
    notes: "",
  });

  const [search, setSearch] = useState("");
  const {
    state: { jobsiteName },
  } = useLocation();

  const navigate = useNavigate();
  const filteredData = tableData.filter((data) =>
    data.item.toLowerCase().includes(search.toLowerCase())
  );

  const onRowSelect = (record) => {
    return {
      onClick: (event) => {
        setIsModalOpen(true);
        setFormData(record);
      },
    };
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  const onSaveChanges = (e) => {
    e.preventDefault();
    dispatch(updateServiceData(formData));
    setIsModalOpen(false);
    setFormData({
      item: "",
      quantity: "",
      description: "",
      notes: "",
    });
  };

  return (
    <>
      <CustomModal isOpen={isModalOpen} onClose={onCloseModal}>
        <form onSubmit={onSaveChanges} className="w-full flex flex-col gap-4">
          <div className="flex gap-2 justify-between w-full">
            <div className="w-1/2">
              <Input
                label="Item"
                id="item"
                name="item"
                value={formData.item}
                onChange={(e) => handleInputChange(e)}
                type="text"
                placeholder="Search & Select Item"
              />
            </div>
            <div className="w-1/2">
              <Input
                label="Quantity"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={(e) => handleInputChange(e)}
                type="text"
                placeholder="Set Quantity"
              />
            </div>
          </div>
          <Input
            textarea
            label="Description"
            id="description"
            name="description"
            value={formData.description}
            onChange={(e) => handleInputChange(e)}
            placeholder="Type the description..."
          />
          <Input
            textarea
            label="Notes"
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={(e) => handleInputChange(e)}
            placeholder="Type a note..."
          />

          <div className="flex justify-end gap-2">
            <Button
              type="submit"
              label="Save Changes"
              icon={whiteX}
              color="custom-green"
              border="darkGreen"
              alt="Close icon"
            />
          </div>
        </form>
      </CustomModal>

      <div className="flex flex-wrap md:flex-nowrap p-2 gap-2 w-full max-h-[40%]">
        <aside className="w-full md:w-[20%] md:min-w-[20%] flex flex-col gap-4 bg-white justify-between max-h-[500px] rounded-md shadow-sidebar">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-base p-2 px-4 bg-alabaster rounded-tl-md rounded-tr-md">
              {jobsiteName}
            </h1>
            <div className="flex flex-col gap-2 px-2">
              {services.map((service) => (
                <button
                  key={service.name}
                  onClick={() => {
                    dispatch(setServiceData(service.data));
                    dispatch(setSelectedService(service.name));
                  }}
                  className={`rounded-md p-1 flex items-center justify-between ${
                    selectedService === service.name
                      ? "bg-mantis text-white"
                      : "bg-alabaster text-black"
                  }`}
                >
                  <p className="flex-grow text-center">{service.name}</p>
                  {selectedService === service.name && (
                    <img src={save} className="pr-2" alt="Active service" />
                  )}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center pb-4">
            <Button
              onClick={() => navigate(-1)}
              label="Go Back"
              icon={backspace}
              color="matisse"
              border="venice"
              alt="Back icon"
            />
          </div>
        </aside>
        <div className="w-full md:w-[80%] min-h-[500px] max-h-[500px] shadow-sidebar rounded-tr-md rounded-tl-md rounded-lg overflow-hidden">
          <CustomTable
            className="custom-table"
            scroll={{ y: 400 }}
            columns={filteredData.length ? sidewalkShedColumns : []}
            data={!filteredData.length ? [] : filteredData}
            locale={{
              emptyText: " ",
            }}
            onRowClick={onRowSelect}
            header={
              <>
                <div className="w-full h-full">
                  <div className="bg-alabaster rounded-tl-md rounded-tr-md flex items-center md:justify-between px-2">
                    <h4 className="w-full flex items-center font-semibold text-base p-2 rounded-tl-md rounded-tr-md">
                      {selectedService}
                    </h4>
                    <div className="w-full relative md:min-w-[492px] flex items-center gap-2">
                      <img
                        src={magnifyingGlass}
                        className="absolute top-0 left-[5px] translate-y-1/2"
                      />
                      <input
                        value={search}
                        onChange={(e) => {
                          setSearch(e.target.value);
                        }}
                        type="text"
                        placeholder="Search a driver"
                        className="rounded-md w-full h-[32px] border-custom-gray border-2 px-2 pl-8"
                      />
                      <img
                        onClick={() => setSearch("")}
                        src={close}
                        className="h-[17px] w-[17px cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
                {!filteredData.length && (
                  <div className=" h-[460px] w-full flex items-center justify-center">
                    <img src={noData} />
                  </div>
                )}
              </>
            }
          />
        </div>
      </div>
    </>
  );
}
