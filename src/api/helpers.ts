import { getData } from './requests';
import { DataItem } from './types';

export const getInitialDiagramData = async (timeNow: number) => {
    const initialNumbers: number[] = await getData(10);
    const initialNumbersLength = initialNumbers?.length;

    const data: DataItem[] = initialNumbers.map((number: number, i: number) => {
        return {
            x: timeNow - (initialNumbersLength - i) * 1000,
            y: number,
        };
    });
    
    return data;
};

export const getNewNumber = async () => {
    const data = await getData(1) || [];
    return data[0];
};
