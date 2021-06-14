<script context="module">
    export const prerender = true;
</script>
<script>
    import {profile} from '../stores/faeAPI';
    console.log($profile)
</script>
<svelte:head>
    <title>{$profile.preferred_name}'s Profile</title>
</svelte:head>



