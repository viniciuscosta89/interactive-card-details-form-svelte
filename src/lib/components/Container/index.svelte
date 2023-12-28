<div class="container">
  <slot />
</div>

<style lang="scss">
  .container {
    margin-inline: auto;
    padding: 1.25rem 1.5rem 2.8rem;
    width: 100%;

    @media (width >= 1280px) {
      padding: 17rem 14rem 17rem 21rem;
    }
  }
</style>
