<script lang="ts">
  import { Motion } from 'svelte-motion';

  export let id: string;
  export let name: string;
</script>

<Motion let:motion initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .5 }}>
  <label class="form-label" for={id} use:motion>{name}</label>
</Motion>


<style lang="scss">
  .form-label {
    color: var(--violet-900);
    font-size: var(--fs-200);
    letter-spacing: 2px;
    text-transform: uppercase;
  }
</style>
