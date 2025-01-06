import React from "react";

const data = [
  {
    name: "Gross Sales",
    FYTD: 520000,
    "Previous Year": 690000,
    Budgeted: 800000,
  },
  {
    name: "Operating Cost",
    FYTD: 280000,
    "Previous Year": 250000,
    Budgeted: 300000,
  },
  {
    name: "Gross Profit",
    FYTD: 320000,
    "Previous Year": 430000,
    Budgeted: 500000,
  },
  {
    name: "Expenses",
    FYTD: 135000,
    "Previous Year": 177000,
    Budgeted: 200000,
  },
  {
    name: "Net Profit",
    FYTD: 255000,
    "Previous Year": 270000,
    Budgeted: 300000,
  },
];

const IncomeExpensesChart = () => {
  return (
    <div style={{ padding: "20px" }}>
      {/* Table Section */}
      <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Account Classes</th>
            <th>FYTD</th>
            <th>Previous Year</th>
            <th>FYTD/Budgeted</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>${(row.FYTD / 1000).toFixed(1)}K</td>
              <td>${(row["Previous Year"] / 1000).toFixed(1)}K</td>
              <td>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      width: `${(row.FYTD / row.Budgeted) * 100}%`,
                      backgroundColor: "#007bff",
                      height: "10px",
                      borderRadius: "5px",
                    }}
                  />
                  <div
                    style={{
                      width: `${
                        100 - (row.FYTD / row.Budgeted) * 100
                      }%`,
                      backgroundColor: "#ccc",
                      height: "10px",
                      borderRadius: "5px",
                    }}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncomeExpensesChart;

