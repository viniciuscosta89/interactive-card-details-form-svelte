import { writable } from "svelte/store";

export const formSubmittedStore = writable(false);
export const formInputs = writable({
    cardholderName: '',
    cardNumber: '',
    cardExpireDateMonth: '',
    cardExpireDateYear: '',
    cvcCode: '',
})