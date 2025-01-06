import React from "react";
import { BarChart, Bar,  LineChart,  Line,  XAxis,  YAxis,  Tooltip,  CartesianGrid,  Legend,  ResponsiveContainer,  ComposedChart,} from "recharts";

const data = [
  { month: "Apr-19", cashIn: 20, cashOut: 10, netAmount: 10 },
  { month: "May-19", cashIn: 25, cashOut: 15, netAmount: 10 },
  { month: "Jun-19", cashIn: 30, cashOut: 10, netAmount: 20 },
  { month: "Jul-19", cashIn: 10, cashOut: 30, netAmount: -20 },
  { month: "Aug-19", cashIn: 20, cashOut: 20, netAmount: 0 },
  { month: "Sep-19", cashIn: 25, cashOut: 15, netAmount: 10 },
  { month: "Oct-19", cashIn: 30, cashOut: 10, netAmount: 20 },
  { month: "Nov-19", cashIn: 15, cashOut: 25, netAmount: -10 },
  { month: "Dec-19", cashIn: 20, cashOut: 20, netAmount: 0 },
  { month: "Jan-20", cashIn: 35, cashOut: 15, netAmount: 20 },
  { month: "Feb-20", cashIn: 10, cashOut: 30, netAmount: -20 },
  { month: "Mar-20", cashIn: 25, cashOut: 15, netAmount: 10 },
];

const Thirdgraph = () => {
  return (
    <div style={{ width: "100%", height: 250 }}>
      <ResponsiveContainer width="100%" height="100%" >
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="cashIn" stackId="a" fill="#8c6bb1" />
          <Bar dataKey="cashOut" stackId="a" fill="#d1b3d9" />
          <Line type="monotone" dataKey="netAmount" stroke="#5a3c8a" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

const styles = {
  moneyInfo: {
    marginBottom: "20px",
    fontSize: "18px",
    fontWeight: "500",
  },
  moneyItem: {
    marginBottom: "10px",
    textAlign: "center", 
  },
  moneyValue: {
    color: "#5a3c8a", 
    fontWeight: "bold",
    fontSize: "20px", 
  },
};

export default Thirdgraph;