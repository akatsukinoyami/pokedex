<script lang="ts">
    export let pokemon: Record<string, any>;

    const pokemonSprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
</script>

<figure class="image is-4by3">
    <img src={pokemonSprite} alt="{pokemon.name}'s Sprite" loading="lazy" decoding="async" />
</figure>

<style lang="sass">
    img
        filter: drop-shadow(10px 10px 10px #222)
        -webkit-filter: drop-shadow(10px 10px 10px #222)
</style>