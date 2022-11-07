import React from 'react'
import { Tree, AnimatedTree } from 'react-tree-graph';
import { LineChart, Line, PieChart, Pie, Area, ResponsiveContainer, AreaChart, YAxis, CartesianGrid, Tooltip, ReferenceLine, XAxis } from 'recharts';
import { RadialBarChart, Legend, RadialBar, BarChart, Bar, Colors, Cell, Label, LabelList } from 'recharts'
const Charts = (prop) => {
  let data = {
    name: 'Calculator',
    children: [{
      name: 'src',
      children: [{
        name: 'simplejavacalulator',
        children: [{
          name: 'buffered customs'
        }, {
          name: 'calculator'
        }, {
          name: 'simplecalculator'
        }, {
          name: 'UI'
        }]
      }, {
        name: 'javacalculator test',
        children: [{ name: 'test' }]
      }]
    }]
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF0000', '#CCCCFF', '#ff007f'];
  return (
    <div style={{ textAlign: "center" }}>

      <div>
        <h1 className='text-info heading'>Tree</h1>
        <AnimatedTree
          data={data}
          height={400}
          width={400}
          label="#0dcaf0" />);
      </div>



      <div>
        <h1 className='text-info heading'>Pie Chart</h1>
        <ResponsiveContainer width="95%" height={400}>
          <PieChart width={1000} height={500}>
            <Pie
              data={prop.dataofpie}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#CCCCFF"
              label>
              {
                prop.dataofpie.map((entry, index) => {
                  const color = entry.value > 4000 ? COLORS[0] : COLORS[1];
                  console.log("COLLORRRR: " + color)
                  return <Cell fill={COLORS[index % 20]} />;
                })
              }
            </Pie>

          </PieChart>
        </ResponsiveContainer>
      </div>

      <div >
        <h1 className='text-info heading'>Radial Bar Chart</h1>
        <ResponsiveContainer width="95%" height={400}>
          <RadialBarChart
            width={1000}
            height={500}
            innerRadius="10%"
            outerRadius="80%"
            data={prop.dataofpie}
            startAngle={180}
            endAngle={0}
          >
            <RadialBar
              minAngle={15}
              label={{ fill: '#0000FF', position: 'insideStart' }}
              background clockWise={true}
              dataKey='value'>
              {
                prop.dataofpie.map((entry, index) => {
                  const color = entry.value > 4000 ? COLORS[0] : COLORS[1];
                  console.log("COLLORRRR: " + color)
                  return <Cell fill={COLORS[index % 20]} />;
                })
              }
            </RadialBar>

            <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
            <Tooltip />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h1 className='text-info heading'>Bar Chart</h1>
        <ResponsiveContainer width="95%" height={400}>
          <BarChart
            width={1000}
            height={500}
            data={prop.dataofpie}
            margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name">
              <Label value="Information" offset={0} position="insideBottom" />
            </XAxis>
            <YAxis label={{ value: 'Numbers', angle: -90, position: 'insideLeft', textAnchor: 'middle' }} />
            <Bar dataKey="name" fill="#8884d8">
              <LabelList dataKey="name" position="insideTop" angle="45" />
            </Bar>
            <Bar dataKey="value" fill="#8884d8">
              <LabelList dataKey="value" position="top" />
              {
                prop.dataofpie.map((entry, index) => {
                  const color = entry.value > 4000 ? COLORS[0] : COLORS[1];
                  console.log("COLLORRRR: " + color)
                  return <Cell fill={COLORS[index % 20]} />;
                })
              }
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}


export default Charts;









