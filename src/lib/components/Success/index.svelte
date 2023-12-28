<script lang="ts">  
  import Button from "../Button/index.svelte";
  import { Motion } from 'svelte-motion';

  export let handleClick = (e: MouseEvent) => {
    e.preventDefault();    
  };
</script>

<Motion let:motion initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
  <div class="success" use:motion>
    <svg
      class="success__icon"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 80 80"
    >
      <circle cx="40" cy="40" r="40" fill="url(#a)" />
      <path stroke="#fff" stroke-width="3" d="M28 39.92 36.08 48l16-16" />
      <defs>
        <linearGradient
          id="a"
          x1="-23.014"
          x2="0"
          y1="11.507"
          y2="91.507"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6348FE" />
          <stop offset="1" stop-color="#610595" />
        </linearGradient>
      </defs>
    </svg>
  
    <h1 class="success__title">THANK YOU!</h1>
  
    <p class="success__text">We’ve added your card details</p>
  
    <Button
      variant="primary"
      size="block"
      type="button"
      onClick={(e) => handleClick(e)}>Continue</Button
    >
  </div>
</Motion>


<style lang="scss">
  .success {
    display: grid;
    place-items: center;

    @media (width >= 1024px) {
      margin-inline: auto;
      max-width: 23.8125rem;
    }

    &__icon {
      border-radius: 5rem;
      margin-block-end: 2rem;
      width: 5rem;
      height: 5rem;
    }

    &__title {
      color: var(--violet-900);
      font-size: var(--fs-800);
      letter-spacing: 0.21388rem;
      margin-block-end: 1rem;
    }

    &__text {
      color: var(--violet-400);
      margin-block-end: 3rem;
    }
  }
</style>
