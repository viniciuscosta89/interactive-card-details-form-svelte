<div class="cards">
  <slot />
</div>

<style lang="scss">
  .cards {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    padding: 2rem 1rem;
    position: relative;
    width: 100%;

    @media (width >= 1280px) {
      overflow-x: visible;
      padding: 11.7rem 0 11.7rem 10.5rem;
    }
  }
</style>
