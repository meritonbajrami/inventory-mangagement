export const columns = [
  {
    title: "",
    dataIndex: "",
    key: "empty",
    width: "33%",
  },
  {
    title: "Jobsite name",
    dataIndex: "jobsiteName",
    key: "jobsiteName",
    render: (text) => {
      return (
        <span className={text ? "text-matisse font-semibold" : ""}>{text}</span>
      );
    },
    width: "33%",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: "33%",
    render: (text) => {
      const statuses = {
        Completed: "mantis",
        "On Hold": "coral-red",
        "In Progress": "custom-yellow",
      };
      return (
        <p
          className={`bg-${statuses[text]} flex max-w-[129px] leading-[21.79px] justify-center font-sans font-normal text-base px-2.5 py-1.5 rounded-lg text-white`}
        >
          {text}
        </p>
      );
    },
  },
];
