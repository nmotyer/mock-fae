<script>
    import Nav from "../components/nav.svelte";
    import Breadcrumbs from '../components/breadcrumbs.svelte';
    import { page } from '$app/stores';
</script>
<Nav/>
{#if $page.path !== '/'}
<Breadcrumbs/>
{/if}
<slot></slot>
<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    </style>