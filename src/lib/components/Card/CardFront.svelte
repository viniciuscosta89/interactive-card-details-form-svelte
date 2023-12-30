<script lang="ts">
  import { Motion } from "svelte-motion";

  export let cardNumber: string;
  export let cardName: string;
  export let expireMonth: string | number = "MM";
  export let expireYear: string | number = "YY";

  function formatCardNumber(number: string | number) {
    return number
      .toString()
      .replace(/\W/gi, "")
      .replace(/(.{4})/g, "$1 ");
  }
</script>

<Motion
  let:motion
  initial={{ x: -50, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  <article class="card" use:motion>
    <section class="card__header">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 84 47">
        <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
        <path
          d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
          stroke="#fff"
        />
      </svg>
    </section>

    <section class="card__number">
      {formatCardNumber(cardNumber || "0000000000000000")}
    </section>
    <section class="card__footer">
      <span>{cardName || "Jane Appleseed"}</span>
      <span>{expireMonth || "00"}/{expireYear || "00"}</span>
    </section>
  </article>
</Motion>

<style lang="scss">
  .card {
    background-image: url("/src/assets/bg-card-front-mobile.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 0.375rem;
    color: var(--white);
    display: flex;
    font-feature-settings:
      "clig" off,
      "liga" off;
    flex-direction: column;
    order: 1;
    margin-top: -4rem;
    width: 17.8125rem;
    padding: 1.1rem 1.2rem;

    @media (768px <= width < 1280px) {
      margin-inline-start: -5rem;
    }

    @media (width >= 1280px) {
      background-image: url("/src/assets/bg-card-front-desktop.png");
      border-radius: 0.625rem;
      order: 0;
      margin-block-end: 2.3rem;
      padding: 1.75rem 2rem;
      width: 27.9375rem;
    }

    &__header {
      display: flex;
      align-items: center;
      margin-block-end: 2.3rem;
      width: 3.375rem;

      @media (width >= 1280px) {
        margin-block-end: 4rem;
        width: 5.25rem;
      }

      svg {
        width: auto;
        height: auto;
      }
    }

    &__number {
      font-size: var(--fs-400);
      letter-spacing: 2.2px;
      line-height: normal;
      margin-block-end: 1rem;

      overflow: hidden;      
      white-space: nowrap;
      margin-inline-end: auto;
      animation:
        typing 2s steps(40, end);        

      @media (width >= 1280px) {
        font-size: var(--fs-800);
        letter-spacing: 0.21388rem;
        margin-block-end: 1.6rem;
      }
    }

    &__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;

      font-size: var(--fs-100);
      letter-spacing: 0.08038rem;
      text-transform: uppercase;

      @media (width >= 1280px) {
        font-size: var(--fs-300);
        letter-spacing: 0.125rem;
      }
    }
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: var(--violet-100);
    }
  }
</style>
