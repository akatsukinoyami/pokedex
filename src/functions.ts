export function runAll(funcArr: Array<() => void>): void {
    funcArr.forEach(func => func());
};