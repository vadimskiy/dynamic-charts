import React, { useState, useReducer } from 'react';

import './App.css';
import Header from '../header/Header';
import Chart from '../chart/Chart';
import ModelsList from '../modelsList/ModelsList';

import { getInitialDiagramData, getNewNumber } from '../../api/helpers';
import { useInterval } from '../../hooks/useInterval';
import { reducer, initialState } from '../../reducers/reducer';
import { ChartType } from './types';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [timeNow, setTime] = useState<number>(Date.now());
  const {charts, isRunning} = state;

  useInterval(async () => {
    setTime(Date.now());

    const newData: ChartType[] = await Promise.all(charts.map(async (chart: any, i: any) => {
        const newNumber = await getNewNumber();
        const [lastChartDataElement] = chart?.data?.slice(-1);
        const newChartData = [
            ...chart?.data, 
            {
                x: lastChartDataElement.x + (timeNow - lastChartDataElement.x),
                y: newNumber
            }
        ];
        const newChart: ChartType = {name: chart.name, data: newChartData.slice(-10)};

        return newChart;
    }));

    dispatch({type: 'SET_NEW_DATA', payload: newData});

  }, isRunning ? 1000 : null);

  const setInitialChartData = async (currentValue: string) => {
    const initialData = await getInitialDiagramData(timeNow);

    dispatch({type: 'SET_INITIAL_DATA', payload: {name: currentValue, data: initialData}});
  };

  const handleClick = async (value: any) => {
    setInitialChartData(value);
  };

  return (
    <div className="App">
      <Header />
      <ModelsList
        handleClick={handleClick}
        charts={charts}
      />
      <button onClick={() => dispatch({type: 'STOP_RUNNING'})}>Stop Chart</button>
      <Chart
        charts={charts}
        timeNow={timeNow}
      />
    </div>
  );
}

export default App;
