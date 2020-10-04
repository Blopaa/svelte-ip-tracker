import { writable } from "svelte/store";

const initialState = [40.463667, -3.74922]

export let ipt = writable(initialState);
