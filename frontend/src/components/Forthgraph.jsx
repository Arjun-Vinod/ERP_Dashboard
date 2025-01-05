import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const data = [
  {
    name: "Gross Sales",
    FYTD: 527,
    PreviousYear: 689,
    Budgeted: 600,
  },
  {
    name: "Operating Cost",
    FYTD: 188,
    PreviousYear: 259,
    Budgeted: 200,
  },
  {
    name: "Gross Profit",
    FYTD: 329,
    PreviousYear: 438,
    Budgeted: 400,
  },
  {
    name: "Expenses",
    FYTD: 213,
    PreviousYear: 277,
    Budgeted: 230,
  },
  {
    name: "Net Profit",
    FYTD: 195,
    PreviousYear: 252,
    Budgeted: 220,
  },
];

const IncomeExpensesChart = () => {
  return (
    
    <ResponsiveContainer width="100%" height={250}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{ top: 20, right: 30, left: 50, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        <Bar dataKey="FYTD" fill="#8884d8">
          <LabelList dataKey="FYTD" position="insideRight" />
        </Bar>
        <Bar dataKey="PreviousYear" fill="#82ca9d">
          <LabelList dataKey="PreviousYear" position="insideRight" />
        </Bar>
        <Bar dataKey="Budgeted" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default IncomeExpensesChart;