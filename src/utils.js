export function formatTime(totalMinutes) {
    if (!totalMinutes) return "N/A";
    const minutes = parseInt(totalMinutes, 10);
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    
    if (hours === 0) {
        return `${remainingMinutes}min`;
    }
    if (remainingMinutes === 0) {
        return `${hours}hr`;
    }
    return `${hours}hrs ${remainingMinutes}min`;
}
