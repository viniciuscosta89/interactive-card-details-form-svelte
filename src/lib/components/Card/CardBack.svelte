<script lang="ts">
  import { Motion } from 'svelte-motion'

  export let cvcCode: string | number = 123;  
</script>

<Motion let:motion initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .5 }}>
  <article class="card" use:motion>
    <section class="card__header">
      <div class="card__strip"></div>
    </section>
  
    <section class="card__main">
      <div class="card__ccv">{cvcCode || '000'}</div>
    </section>
  
    <section class="card__footer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="186"
        height="26"
        viewBox="0 0 186 26"
        fill="none"
      >
        <rect width="115" height="4" rx="2" fill="#ADB5BE" />
        <rect x="121" width="22" height="4" rx="2" fill="#ADB5BE" />
        <rect x="149" width="22" height="4" rx="2" fill="#ADB5BE" />
        <rect x="177" width="9" height="4" rx="2" fill="#ADB5BE" />
        <rect
          width="115"
          height="4"
          rx="2"
          transform="matrix(-1 0 0 1 186 22)"
          fill="#ADB5BE"
        />
        <rect
          width="22"
          height="4"
          rx="2"
          transform="matrix(-1 0 0 1 65 22)"
          fill="#ADB5BE"
        />
        <rect
          width="22"
          height="4"
          rx="2"
          transform="matrix(-1 0 0 1 37 22)"
          fill="#ADB5BE"
        />
        <rect
          width="9"
          height="4"
          rx="2"
          transform="matrix(-1 0 0 1 9 22)"
          fill="#ADB5BE"
        />
        <rect x="42" y="11" width="60" height="4" rx="2" fill="#ADB5BE" />
        <rect x="14" y="11" width="22" height="4" rx="2" fill="#ADB5BE" />
        <rect x="108" y="11" width="46" height="4" rx="2" fill="#ADB5BE" />
        <rect x="160" y="11" width="9" height="4" rx="2" fill="#ADB5BE" />
      </svg>
    </section>
  </article>
</Motion>


<style lang="scss">
  .card {
    background: linear-gradient(169deg, #FFF 5%, #D2D3D9 91.69%);    
    border-radius: 0.625rem;
    color: var(--white);
    display: flex;
    font-feature-settings:
      "clig" off,
      "liga" off;
    flex-direction: column;
    width: 17.8125rem;
    order: 0;
    align-self: flex-end;
    padding: 1rem 0;

    @media (width >= 1280px) {  
      align-self: flex-start;  
      order: 1;  
      padding: 1.44rem 0;
      margin-inline-start: 7rem;
      width: 27.9375rem;
    }

    &__header {
      display: flex;
      align-items: center;
      margin-block-end: 1rem;

      @media (width >= 1280px) {
        margin-block-end: 1.5rem;
      }
    }

    &__strip {
      background-color: hsla(0, 0%, 18%, 1);
      width: 100%;
      height: 2.16275rem;
      
      @media (width >= 1280px) {
        height: 3.375rem;
      }
    }

    &__main {
      margin-block-end: 2.9rem;
      padding-inline: 1.8rem;

      @media (width >= 1280px) {
        padding-inline: 2.8rem;
      }
    }

    &__ccv {
      background-color: hsla(213, 11%, 71%, 1);
      border-radius: 0.25rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      font-size: var(--fs-100);
      height: 1.85869rem;
      letter-spacing: 0.08038rem;
      line-height: normal;            
      padding: 0.6rem;      
      width: 100%;

      @media (width >= 1280px) {
        font-size: var(--fs-300);
        letter-spacing: 0.125rem;                
      }
    }

    &__footer {
      display: none;
      justify-content: center; 
      margin-inline: auto;      
      width: 11.625rem;     
      
      @media (width >= 1280px) {
        display: flex;
        margin-block-end: 3rem;
        width: 11.625rem;
      }
    }
  }
</style>
