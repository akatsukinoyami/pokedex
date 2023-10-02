<script lang="ts">

  export let 
    title: string,
    statList: any[],
    color: "primary" | "link" | "info" | "success" | "warning" | "danger",
    receiver: (item: any) => string;

  
  function notEmpty(): boolean {
    return statList?.length && (statList.length > 1 || (statList.length === 1 && statList[0].form_name))
  };
  //{JSON.stringify(statList)}
</script>


{#if notEmpty()}
  <article class="panel is-{color} is-capitalized">
    <div class="panel-heading">{title}</div>
    {#each statList as item }
      <p class="panel-block">{receiver(item)}</p>
    {/each}
  </article>
{/if}


