import { ChartType } from '../app/types';

export interface ModelsListProps {
    handleClick: (value: any) => Promise<void>;
    charts: ChartType[];
};
