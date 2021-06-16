<script context="module">  
    export const prerender = true;
    export async function load({page}) {
        const id = page.params.id;
        const url = `https://api.prod.findanexpert.unimelb.edu.au/profile/${id}`;
        const res = await fetch(url);
        const profile = await res.json();
        return {props: {profile}};

    }
</script>
<script>
    export let profile;
    import { page } from '$app/stores';
    import {onMount} from 'svelte';
    import { fly, slide } from 'svelte/transition';

    let navVisible = true;

    onMount(async () => {
        window.onscroll = () => {scrollFunction()}
        })

    const scrollFunction = () => {
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            //document.getElementById("test").classList.add('bg-gray-500');
            navVisible = true;

        }
        else {
            //document.getElementById("test").classList.remove('bg-gray-500');
            navVisible = false;
        }
    }

</script>
<svelte:head>
    <title>{profile.preferred_name}'s Profile</title>
</svelte:head>
<!-- travelling sticky navBar-->



<!--/Navbar-->

<div class="h-96 w-full bg-gray-200 text-blue-900 flex lg:justify-start">
    <div class="grid grid-cols-2 w-1/3 my-auto lg:mx-96">
        <div>
            <!-- <img src="{profile.profile_picture}" alt="{profile.preferred_name}'s photo"> -->
            <img src="https://findanexpert.unimelb.edu.au/img/placeholders/profile.png"
            alt="{profile.preferred_name}'s photo"
            class="relative z-30 inline object-cover w-40 h-40 border-2 border-blue-900 rounded-full">
        </div>
        <div class="-mx-28">
            <p class="text-lg font-medium py-2">{profile.title}</p>
            <p class="text-5xl font-semibold">{profile.preferred_name}</p>
            <p class="py-2">{profile.position}</p>
            <p class="">{profile.organization}</p>
        </div>
    </div>
</div>
{#if navVisible}
<div class="w-full h-24 bg-white shadow-md flex justify-center text-indigo-900 z-50" transition:slide="{{  }}">
    <div class="flex justify-around my-auto w-2/3" id="test">
        <div>
            <p>Division</p>
            <p>{profile.faculty}</p>
        </div>
        <div>
            <p>Print</p>
            <p></p>
        </div>
        <div>
            <p>Enquiries</p>
            <p></p>
        </div>
    </div>
</div>

{/if}

<div class="w-full h-96 bg-yellow-50">
    
</div>

<div class="w-60 h-60 bg-white fixed text-blue-900 z-50">
    <a href="{$page.path}/#" class="w-full">Scroll to Top</a>

</div>
