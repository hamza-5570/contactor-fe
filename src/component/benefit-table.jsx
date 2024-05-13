import React from "react";
import PDFExportComponent from "./pdfTable";
import CSVExportComponent from "./csvTable";
export default function BenefitTable({ columns, data, width }) {
  console.log(typeof width);
  function getNestedProperty(object, path) {
    return path.split(".").reduce((currentObject, key) => {
      return currentObject && currentObject[key] !== undefined
        ? currentObject[key]
        : null;
    }, object);
  }
  return (
    <>
      <div className="overflow-x-scroll">
        <div style={{ width: width }} className="mx-auto">
          <table className="table-auto w-full">
            <thead className="px-5 py-3">
              <tr className="bg-[#BFD5FF]">
                {columns.map((column, index) => (
                  <th
                    key={index}
                    className={`pl-3 ${
                      column.Header === "AZIONE" ? "sticky-cols" : ""
                    }`}
                  >
                    {column.Header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr className="bg-white" key={rowIndex}>
                  {columns.map((column, colIndex) => {
                    const cellValue =
                      typeof column.accessor === "function"
                        ? column.accessor(row)
                        : getNestedProperty(row, column.accessor); // Handles nested paths
                    return (
                      <td
                        key={colIndex}
                        className={`px-5 py-3 text-center ${
                          column.accessor === "actions" ? "sticky-col" : ""
                        }`}
                      >
                        {column.Cell
                          ? column.Cell({ row, rowIndex })
                          : cellValue}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex mt-5 gap-2">
        <CSVExportComponent data={data} columns={columns} />
        <PDFExportComponent data={data} columns={columns} css={"#000000"} />
      </div>
    </>
  );
}
