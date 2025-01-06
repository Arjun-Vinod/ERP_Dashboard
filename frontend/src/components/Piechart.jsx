import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
const COLORS = ['#0000FF', '#FF8C00']; 
const data1 = [{ name: 'Group A', value: 64 }, { name: 'Group B', value: 36 }];
const data2 = [{ name: 'Group A', value: 36 }, { name: 'Group B', value: 64 }];
const data3 = [{ name: 'Group A', value: 38 }, { name: 'Group B', value: 62 }];

const FirstGraph = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        
        {/* First Graph */}
        <div style={{ width: '30%', height: '300px', position: 'relative' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data1}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data1.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div
            style={{
              position: 'absolute',
              top: '40%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '24px',
              fontWeight: 'bold',
            }}
          >
            64%
          </div>
          <div
            style={{
              position: 'absolute',
              top: '55%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '14px',
              fontWeight: 'normal',
              color: 'gray',
            }}
          >
            Target 100%
          </div>
          <div
            style={{
              position: 'absolute',
              top: '70%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '14px',
              fontWeight: 'normal',
              color: 'black',
            }}
          >
          </div>
        </div>

        <div style={{ width: '30%', height: '300px', position: 'relative' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data2}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data2.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div
            style={{
              position: 'absolute',
              top: '40%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '24px',
              fontWeight: 'bold',
            }}
          >
            36%
          </div>
          <div
            style={{
              position: 'absolute',
              top: '55%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '14px',
              fontWeight: 'normal',
              color: 'gray',
            }}
          >
            Target 100%
          </div>
          <div
            style={{
              position: 'absolute',
              top: '70%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '14px',
              fontWeight: 'normal',
              color: 'black',
            }}
          >
          </div>
        </div>

        <div style={{ width: '30%', height: '300px', position: 'relative' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data3}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data3.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div
            style={{
              position: 'absolute',
              top: '40%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '24px',
              fontWeight: 'bold',
            }}
          >
            38%
          </div>
          <div
            style={{
              position: 'absolute',
              top: '55%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '14px',
              fontWeight: 'normal',
              color: 'gray',
            }}
          >
            Target 100%
          </div>
          <div
            style={{
              position: 'absolute',
              top: '70%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '14px',
              fontWeight: 'normal',
              color: 'black',
            }}
          >
          </div>
        </div>
        
      </div>
    </ResponsiveContainer>
  );
};

export default FirstGraph;
