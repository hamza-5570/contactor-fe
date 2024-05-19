// CSVExportComponent.jsx
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";

const CSVExportComponent = ({ data, columns }) => {
  const [loading, setLoading] = useState(false);
  const downloadCSV = () => {
    setLoading(true);
    // Filter out the action buttons from the columns for CSV export
    const filteredColumns = columns.filter(
      (col) => col.accessor !== "actions" && col.accessor !== "_manualId"
    );

    // Generate CSV header
    const csvHeader = filteredColumns
      ?.map((col) => `"${col.Header}"`)
      .join(",");

    // Generate CSV rows from data
    const csvRows = data?.map((row) => {
      return filteredColumns
        ?.map((col) => {
          // Check if accessor is a function, if so, use it to get the value, otherwise access directly
          const cellValue =
            typeof col.accessor === "function"
              ? col.accessor(row)
              : row[col.accessor];
          const escaped = `${cellValue}`.replace(/"/g, '\\"'); // Escape double quotes
          return `"${escaped}"`;
        })
        .join(",");
    });

    // Combine header and rows
    const csvString = [csvHeader, ...csvRows].join("\n");

    // Trigger download
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "exported_data.csv";
    link.click();
    setLoading(false);
  };

  return (
    <>
      <button
        onClick={downloadCSV}
        className="flex items-center gap-2 px-3 py-2 font-inter font-[500] text-[14px] text-white bg-[#87CD1B] rounded-md relative"
        disabled={loading}
      >
        {loading ? (
          <ClipLoader size={20} color={"#ffffff"} loading={loading} />
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mt-[2px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Excel
          </>
        )}
      </button>
    </>
  );
};

export default CSVExportComponent;
