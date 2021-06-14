<script>
    import { page } from '$app/stores';
    //let pageValue = $page;
</script>
<breadcrumbs>
    {#if $page.path !== '/'}
    <div class="w-full bg-white text-blue-900 h-14">
        <div class="w-1/3 lg:mx-96 py-4 text-lg flex flex-1">
            <p class="hover:underline"><a href="/">Find an Expert</a></p>
            <p class="lg:mx-2"> > </p>
            <p class="hover:underline lg:mx-2">Profile</p>
            <p class=""> > </p>
            <p class="hover:underline font-bold lg:mx-2"><a href="{$page.path}">{$page.path.replace('/', '')}</a></p>
        </div>
    </div>
    {/if}
</breadcrumbs>