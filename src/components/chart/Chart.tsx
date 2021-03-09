import React, { FC } from 'react';
import {
    ResponsiveContainer,
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Label,
    Line,
} from "recharts";

import { formatXAxis } from '../../helpers/formatXAxis';
import { models } from '../modelsList/ModelsList';
import { ChartProps } from './interfaces';

const Chart: FC<ChartProps> = ({ charts, timeNow }) => {
    return (
        <>
            <ResponsiveContainer width={"100%"} height={400}>
                <LineChart margin={{ top: 30, right: 50, left: 30, bottom: 30 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" dataKey={"x"} domain={['dataMin', 'dataMax']} tickFormatter={formatXAxis} tickCount={2}>
                        <Label
                            value={"Time"}
                            position="bottom"
                            style={{ textAnchor: "middle" }}
                        />
                    </XAxis>
                    <YAxis type="number" dataKey={"y"} domain={[0, 99]}>
                        <Label
                            value={"Numbers"}
                            position="left"
                            angle={-90}
                            style={{ textAnchor: "middle" }}
                        />
                    </YAxis>
                    {
                        charts?.map((line: any) => (
                            <Line dataKey="y" data={line.data} name={line.name} key={line.name} stroke={models[line.name].color} />
                        ))
                    }
                </LineChart>
            </ResponsiveContainer>
        </>
    );
};

export default Chart;