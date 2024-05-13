// PDFExportComponent.jsx
import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const PDFExportComponent = ({ data, columns }) => {
  const exportPDF = () => {
    const doc = new jsPDF();

    // Filter columns to exclude the 'actions' and handle other columns appropriately
    const tableColumns = columns
      .filter((col) => col.accessor !== "actions")
      .map((col) => ({
        title: col.Header,
        dataKey:
          col.accessor === "_manualId"
            ? "_manualId"
            : typeof col.accessor === "function"
            ? col.Header
            : col.accessor,
      }));

    // Prepare data for the PDF, including the manual ID
    const tableRows = data.map((item, index) => {
      const row = {};
      columns.forEach((col) => {
        if (col.accessor === "_manualId") {
          row["_manualId"] = index + 1; // Manually set the ID based on row index
        } else if (col.accessor !== "actions") {
          const value =
            typeof col.accessor === "function"
              ? col.accessor(item)
              : item[col.accessor];
          row[
            col.accessor === "_manualId"
              ? "_manualId"
              : typeof col.accessor === "function"
              ? col.Header
              : col.accessor
          ] = value || "";
        }
      });
      return row;
    });

    // Generate PDF using autoTable
    autoTable(doc, {
      columns: tableColumns,
      body: tableRows,
      startY: 20,
      theme: "striped",
      styles: {
        fontSize: 10,
        cellPadding: 3,
        overflow: "linebreak",
      },
      headStyles: {
        fillColor: [181, 213, 255], // Matching blue header color
      },
      margin: { top: 20 },
    });

    // Save the PDF
    doc.save("table_report.pdf");
  };

  return (
    <button
      onClick={exportPDF}
      className="flex gap-2 px-3 py-2 font-inter font-[500] text-[14px] text-white bg-[#dc2727] rounded-md"
    >
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
      PDF
    </button>
  );
};

export default PDFExportComponent;
