export const formatXAxis = (tickItem: number) => {
    const time = new Date(tickItem);
    return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
}
