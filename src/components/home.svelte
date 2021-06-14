<script>
    import { fade, slide, fly } from 'svelte/transition';
    import Business from './home/business.svelte';
    import Supervision from './home/supervision.svelte';
    import banner from '../img/banner.webp';
    let search = 'E.g. Biofuels or John Smith';
    let catSelecter = '>'
    let status = '';
    let categories = {
        'business': true, 
        'research': false, 
        'supervision': false, 
        'media': false,
    }

    function toggleButton(Bid){
        Object.keys(categories).forEach(v => categories[v] = false)
        if (Object.prototype.hasOwnProperty.call(categories, Bid)) {
            categories[Bid] = true;
        }
    }

</script>
<home>
    <div class="w-full bg-gray-600 h-96 flex justify-items-start bg-cover bg-center" style="background-image: url({banner});">
        <div class="grid-rows-1 w-2/3 m-auto">
            <div class="m-auto w-full text-white text-5xl">___<br/><br/>Find an Expert at the<br/>University of Melbourne</div><br/>
            <div class="m-auto w-full text-white text-xl">Search by area of expertise or name</div>
            <div class="m-auto w-full">
                <input type="text" class="w-1/2 rounded-md h-10 text-lg text-gray-500" id="search" placeholder={search}>
                <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" viewBox="0 0 24 24" class="w-8 h-8"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
            </div>
        </div>
    </div>
    <div class="w-full bg-gray-600 h-32 flex justify-items-start"></div>
    <div class="grid grid-cols-4 gap-4 m-auto w-2/3">
        <div class="grid grid-rows-2">
            <button on:click={() => toggleButton('business')}
                class="{categories.business? 'bg-purple-200': 'bg-gray-200'} w-64 h-32 -my-16 hover:bg-purple-200"></button>
            {#if categories.business}
                <p class="transform rotate-90 font-medium text-blue-900 text-4xl absolute lg:mt-20 lg:ml-32" in:fly="{{y:200 }}" out:fly="{{y:-200}}">{catSelecter}</p>
            {/if}
        </div>
        <div class="grid grid-rows-2">
            <button on:click={() => toggleButton('research')}
                class="{categories.research? 'bg-green-200': 'bg-gray-200'} w-64 h-32 -my-16 hover:bg-green-200"></button>
            {#if categories.research}
                <p class="transform rotate-90 font-medium text-blue-900 text-4xl absolute lg:mt-20 lg:ml-32" in:fly="{{y:200 }}" out:fly="{{y:-200}}">{catSelecter}</p>
            {/if}
        </div>
        <div class="grid grid-rows-2">
            <button on:click={() => toggleButton('supervision')}
                class="{categories.supervision? 'bg-red-200': 'bg-gray-200'} w-64 h-32 -my-16 hover:bg-red-200"></button>
            {#if categories.supervision}
                <p class="transform rotate-90 font-medium text-blue-900 text-4xl absolute lg:mt-20 lg:ml-32" in:fly="{{y:200 }}" out:fly="{{y:-200}}">{catSelecter}</p>
            {/if}
        </div>
        <div class="grid grid-rows-2">
            <button on:click={() => toggleButton('media')}
                class="{categories.media? 'bg-blue-200': 'bg-gray-200'} w-64 h-32 -my-16 hover:bg-blue-200"></button>
            {#if categories.media}
                <p class="transform rotate-90 font-medium text-blue-900 text-4xl absolute lg:mt-20 lg:ml-32" in:fly="{{y:200 }}" out:fly="{{y:-200}}">{catSelecter}</p>
            {/if}
        </div>
    </div>
    {#if categories.business}
        <div
        in:fly="{{x:-800, }}"
        on:outroend="{() => status = 'outro ended'}"
        on:introstart="{() => status = 'intro started'}"
        >
            <Business/>
        </div>
    {/if}
    {#if categories.supervision}

        <div
        in:fly="{{x:-800, }}"
        >
            <Supervision/>
        </div>
    {/if}
</home>