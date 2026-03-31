import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://trainee.fidelis.workers.dev/api',
    headers: {
        'Authorization': 'Bearer 2f6843a2-9924-4646-b782-206659372a67',
        'Content-Type': 'application/json',
    },
});