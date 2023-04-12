import React, { PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';
import {ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip ,Area, Legend} from 'recharts';


const Chart = () => {
    const data = useLoaderData();
    return (
        <div>
            <ResponsiveContainer width="100%" aspect={3}>
                <AreaChart width={730} height={250} data={data} margin={{ top: 50, right: 30, left: 30, bottom: 50 }}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorAssignmentName" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey='assignmentName' interval={'preserveStartEnd'}/>
                    <YAxis dataKey='assignmentMarks'/>
                    <Tooltip/>
                    <Legend verticalAlign="top" height={36} />
                    <Area type="Function" dataKey='assignmentName' stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="Function" dataKey='assignmentMarks' stroke="#82ca9d" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;