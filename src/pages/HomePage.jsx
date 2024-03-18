import { useEffect, useState } from "react";
import CustomModal from "../components/UI/CustomModal";
import { useNavigate } from "react-router-dom";
import { columns } from "../constants/HomeTableData.jsx";
import JobsiteForm from "../components/JobsiteForm";
import { useSelector } from "react-redux";
import DashboardInsights from "../components/UI/DashboardInsights";
import CustomTable from "../components/UI/Table";
import FilterTableHeader from "../components/UI/FilterTableHeader";
import { selectJobsites } from "../store/features/jobSiteSlice";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState();
  const navigate = useNavigate();
  const data = useSelector(selectJobsites);
  const [tableData, setTableData] = useState([...data]);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const onSearch = (keyword) => {
    if (data?.length > 0) {
      setTableData(
        data.filter((item) => {
          return Object.values(item)
            .join(",")
            .toLowerCase()
            .includes(keyword.toLowerCase());
        })
      );
    }
  };

  const onRowSelect = (record) => {
    return {
      onClick: () => {
        navigate(`services/${record?.id}`, { state: record });
      },
    };
  };

  return (
    <div className="p-2 flex flex-col gap-2">
      <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <JobsiteForm onCloseModal={() => setIsModalOpen(false)} />
      </CustomModal>
      <DashboardInsights data={data} />
      <CustomTable
        columns={columns}
        data={tableData}
        onRowClick={onRowSelect}
        header={
          <FilterTableHeader
            title="Title"
            description="Informative piece of text that can be used regarding this modal."
            onSearch={onSearch}
            btnLabel="Create"
            onBtnClick={() => setIsModalOpen(true)}
          />
        }
      />
    </div>
  );
}
