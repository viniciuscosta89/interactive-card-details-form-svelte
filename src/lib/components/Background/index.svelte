<div class="background">
  <slot />
</div>

<style lang="scss">
  .background {
    background-color: var(--white);
    background-image: url("/src/assets/bg-gradient-mobile.jpg");
    background-repeat: no-repeat;
    background-position: top;
    background-size: 100% 15rem;
    width: 100%;
    height: 100svh;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (width >= 90rem) {
      background-image: url("/src/assets/bg-gradient-desktop.jpg");
      background-position: left;
      background-size: 30.1875rem 100%;
      display: grid;
      grid-template-columns: 30.1875rem 1fr;
      height: 100%;
    }
  }
</style>
