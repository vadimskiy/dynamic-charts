export const initialState: any = {
    isRunning: false,
    charts: [],
};

export function reducer(state: any = {}, action: any) {
    switch (action.type) {
        case 'SET_INITIAL_DATA':
            const newCharts = [
                ...state.charts,
                action.payload
            ];
            return {
                ...state,
                isRunning: true,
                charts: newCharts
            };
        case 'SET_NEW_DATA':
            return {
                ...state,
                charts: action.payload
            };
        case 'STOP_RUNNING':
            return {
                ...state,
                isRunning: false,
            };
        default:
            return state;
    }
};
