import { writable } from "svelte/store";

function getNumberFromLocalStorage(text: string){
    const item = localStorage.getItem(text);
    if (item) return parseInt(item);
    
    return;
}

export const searchStore = writable<string>(
    localStorage.getItem("search") || ""
);

export const pageSizeStore = writable<number>(
    getNumberFromLocalStorage("pageSize") || 24
);

export const pageStore = writable<number>(
    getNumberFromLocalStorage("page") || 0
);

export const countStore = writable<number>(0);