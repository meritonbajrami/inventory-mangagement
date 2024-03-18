import { useMemo } from "react";

export default function DashboardInsights({ data }) {
  const groupedItems = useMemo(() => {
    const statuses = {
      "In Progress": {
        count: 0,
        color: "bg-custom-yellow",
      },
      Completed: {
        count: 0,
        color: "bg-mantis",
      },
      "On Hold": {
        count: 0,
        color: "bg-coral-red",
      },
    };
    data.forEach((item) => {
      statuses[item.status].count += 1;
    });
    return statuses;
  }, [data]);

  return (
    <header className="flex flex-col md:flex-row p-2 gap-2 items-center justify-between text-white rounded-md bg-white shadow-header">
      {Object.entries(groupedItems).map(([title, { count, color }]) => (
        <div
          key={title}
          className={`p-4 ${color} w-full rounded-md capitalize flex justify-center`}
        >
          {count} {title}
        </div>
      ))}
    </header>
  );
}
