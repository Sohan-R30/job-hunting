import React, { PureComponent } from 'react';
import {ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip ,Area, Legend} from 'recharts';

const data = [  
    {    
        "assignmentId": 1,    
        "assignmentName": "NewYearAssignment",    
        "assignmentMarks": 57  
    },
    {    
        "assignmentId": 2,    
        "assignmentName": "g3-architects-project",    
        "assignmentMarks": 58  
    },
    {    
        "assignmentId": 3,    
        "assignmentName": "legal-solution-resources",    
        "assignmentMarks": 60  
    },  
    {    
        "assignmentId": 4,    
        "assignmentName": "javascript problem solving",    
        "assignmentMarks": 59  
    },  
    {    
        "assignmentId": 5,    
        "assignmentName": "geometry-genius",    
        "assignmentMarks": 60  
    },  
    {    
        "assignmentId": 6,    
        "assignmentName": "ai-universe-assignment",    
        "assignmentMarks": 58  
    },  
    {    
        "assignmentId": 7,    
        "assignmentName": "b7a7-quiz-hero",    
        "assignmentMarks": 60  
    }
]
const Chart = () => {
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
                    <Area type="natural" dataKey='assignmentMarks' stroke="#82ca9d" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="natural" dataKey='assignmentName' stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;