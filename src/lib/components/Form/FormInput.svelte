<script lang="ts">
  import type { HTMLInputAttributes } from "svelte/elements";
  import { Motion } from 'svelte-motion'

  interface $$Props extends HTMLInputAttributes {
    error: boolean;
    id: string;
    placeholder?: string;
    value: string | number;
  }

  export let id: string;
  export let placeholder: string = "e.g. Jane Appleseed";
  export let value: string | number = "";
  export let error: boolean;
</script>

<Motion let:motion initial={{ y: 32, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .5 }}>
  <div class={`form-input-wrapper ${error && 'form-input-wrapper--error'}`} use:motion>
    <input class="form-input" {...$$restProps} {id} {placeholder} bind:value />
  </div>
</Motion>


<style lang="scss">
  $borderWidth: 1px;
  $borderRadius: 8px;

  .form-input-wrapper {
    background-clip: padding-box;
    border: $borderWidth solid var(--violet-100);
    border-radius: $borderRadius;
    position: relative;
    z-index: 0;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      margin: -$borderWidth;
      border-radius: $borderRadius + $borderWidth;
      background: var(--primary-gradient);
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }

    &:hover,
    &:focus-within {
      &::before {
        opacity: 1;
      }
    }

    &--error {
      border-color: var(--error);
    }
  }

  .form-input {
    background-color: var(--white);    
    border: none;
    border-radius: 8px;
    color: var(--violet-900);
    line-height: normal;
    width: 100%;
    padding: 12px 16px;
    
    transition: all 0.3s ease-in-out;    

    &::placeholder {
      color: var(--violet-900);
      opacity: 0.25;
    }

    &:hover,
    &:focus {      
      outline: none;    
    }
  }
</style>
