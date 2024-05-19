import React, { useEffect, useState } from "react";
import PDFExportComponent from "./pdfTable";
import CSVExportComponent from "./csvTable";
import { ClipLoader } from "react-spinners";
export default function BenefitTable({ columns, data, width }) {
  const [loading, setLoading] = useState(true);
  console.log(typeof width);
  function getNestedProperty(object, path) {
    return path.split(".").reduce((currentObject, key) => {
      return currentObject && currentObject[key] !== undefined
        ? currentObject[key]
        : null;
    }, object);
  }

  useEffect(() => {
    if (data && data.length > 0) {
      setLoading(false);
    }
  }, [data]);
  return (
    <>
      <div className="relative w-full bg-white rounded shadow-lg">
        <div className="overflow-x-scroll">
          <div style={{ width: width }} className="mx-auto">
            {loading ? (
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
                <ClipLoader size={50} color={"#0049FC"} loading={loading} />
              </div>
            ) : (
              <table className="table-auto w-full">
                <thead className="px-5 py-3">
                  <tr className="bg-[#BFD5FF]">
                    {columns?.map((column, index) => (
                      <th
                        key={index}
                        className={`pl-3 ${
                          column.Header === "ACCIÓN" ? "sticky-cols" : ""
                        }`}
                      >
                        {column.Header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data?.map((row, rowIndex) => (
                    <tr className="bg-white" key={rowIndex}>
                      {columns?.map((column, colIndex) => {
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
            )}
          </div>
        </div>
      </div>
      <div className="flex mt-5 gap-2">
        <CSVExportComponent data={data} columns={columns} />
        <PDFExportComponent data={data} columns={columns} css={"#000000"} />
      </div>
    </>
  );
}
