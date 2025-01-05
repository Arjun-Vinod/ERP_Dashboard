import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
  { month: 'Apr', previous: 400, grossSales: 240, budgeted: 280 },
  { month: 'May', previous: 500, grossSales: 139, budgeted: 200 },
  { month: 'Jun', previous: 600, grossSales: 980, budgeted: 390 },
  { month: 'Jul', previous: 700, grossSales: 300, budgeted: 350 },
  { month: 'Aug', previous: 800, grossSales: 200, budgeted: 400 },
  { month: 'Sep', previous: 900, grossSales: 450, budgeted: 500 },
  { month: 'Oct', previous: 1000, grossSales: 320, budgeted: 420 },
  { month: 'Nov', previous: 1100, grossSales: 420, budgeted: 380 },
  { month: 'Dec', previous: 1200, grossSales: 550, budgeted: 450 },
  { month: 'Jan', previous: 1300, grossSales: 240, budgeted: 280 },
  { month: 'Feb', previous: 1400, grossSales: 139, budgeted: 200 },
  { month: 'Mar', previous: 1500, grossSales: 980, budgeted: 390 },
];

const Secondgraph = () => (
  <BarChart width={600} height={300} data={data}>
    <XAxis dataKey="month" />
    <YAxis domain={['auto', 'auto']} />
    <Tooltip />
    <Legend />
    <Bar dataKey="grossSales" fill="#00bcd4" /> {/* Darker Cyan */}
    <Bar dataKey="budgeted" fill="#8a2be2" /> {/* Darker Violet */}
  </BarChart>
);

export default Secondgraph;