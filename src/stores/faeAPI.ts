import {writable} from 'svelte/store';

export const profile = writable({})

const fetchProfile = async () => {
    const url = 'https://api.prod.findanexpert.unimelb.edu.au/profile/5800';
    const res = await fetch(url);
    const data = await res.json();
    profile.set(data);
}
fetchProfile();