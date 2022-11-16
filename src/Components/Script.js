export function debounce (func, delay) {
    let timeOut;
    return function (...args) {
    clearTimeout(timeOut); 
    timeOut = setTimeout(() => {func(...args)}, delay);
    }
}