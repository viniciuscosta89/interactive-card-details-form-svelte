<script lang="ts">
  import Background from "./lib/components/Background/index.svelte";
  import Button from "./lib/components/Button/index.svelte";
  import Card from "./lib/components/Card";
  import Container from "./lib/components/Container/index.svelte";
  import Form from "./lib/components/Form";
  import Success from "./lib/components/Success/index.svelte";

  import { createForm } from "felte";
  import { validator } from "@felte/validator-zod";
  import { reporter, ValidationMessage } from "@felte/reporter-svelte";
  import { z } from "zod";
  import { schema } from "./lib/components/Form/Form.schema";
  import { formSubmittedStore, formInputs } from "./store/formStatus";

  let {
    cardholderName,
    cardNumber,
    cardExpireDateMonth,
    cardExpireDateYear,
    cvcCode,
  } = $formInputs;

  type FormSchema = z.infer<typeof schema>;

  const { form, errors, isValid, reset } = createForm<FormSchema>({    
    onSubmit(values, context) {
        console.log(values)
    },
    onSuccess(values) {
      reset();      
      $formSubmittedStore = true;
    },
    onError(err, context) {
      console.log("onError", { err, context });
    },
    extend: [validator({ schema }), reporter],
  });

  const handleSuccessPage = () => {
    $formSubmittedStore = false;
    cardholderName = "";
    cardNumber = '';
    cardExpireDateMonth = '';
    cardExpireDateYear = '';
    cvcCode = '';
  };
</script>

<main>
  <Background>
    <Card.Root>
      <Card.Front
        cardName={cardholderName}
        {cardNumber}
        expireMonth={cardExpireDateMonth}
        expireYear={cardExpireDateYear}
      />
      <Card.Back {cvcCode} />
    </Card.Root>

    <Container>
      {#if $formSubmittedStore}
        <Success handleClick={handleSuccessPage} />
      {:else}
        <form use:form class="form">
          <Form.Fieldset>
            <Form.Label id="cardholder-name" name="Cardholder Name" />
            <Form.Input
              id="cardholder-name"
              bind:value={cardholderName}
              name="cardholderName"
              placeholder="e.g. Jane Appleseed"
              maxlength={27}
              error={!!$errors.cardholderName}
            />
            <ValidationMessage for="cardholderName" let:messages={message}>
              <ul class="form__input-error">
                {#if message}
                  {#each message as error}<li>{error}</li>{/each}
                {/if}
              </ul>
            </ValidationMessage>
          </Form.Fieldset>

          <Form.Fieldset>
            <Form.Label id="card-number" name="Card Number" />
            <Form.Input
              id="card-number"
              placeholder="e.g. 1234 5678 9123 0000"
              bind:value={cardNumber}
              maxlength={16}
              name="cardNumber"
              error={!!$errors.cardNumber}
            />
            <ValidationMessage for="cardNumber" let:messages={message}>
              <ul class="form__input-error">
                {#if message}
                  {#each message as error}<li>{error}</li>{/each}
                {/if}
              </ul>
            </ValidationMessage>
          </Form.Fieldset>

          <div
            class="columns-grid columns-grid--2-columns columns-grid--gap-16"
          >
            <Form.Fieldset>
              <Form.Label id="expire-date-mm" name="Exp. Date (MM/YY)" />
              <div
                class="columns-grid columns-grid--2-columns columns-grid--gap-8"
              >
                <div>
                  <Form.Input
                    name="cardExpireDateMonth"
                    id="expire-date-mm"
                    placeholder="MM"
                    bind:value={cardExpireDateMonth}
                    maxlength={2}
                    error={!!$errors.cardExpireDateMonth}
                  />
                  <ValidationMessage
                    for="cardExpireDateMonth"
                    let:messages={message}
                  >
                    <ul class="form__input-error">
                      {#if message}
                        {#each message as error}<li>{error}</li>{/each}
                      {/if}
                    </ul>
                  </ValidationMessage>
                </div>

                <div>
                  <Form.Input
                    name="cardExpireDateYear"
                    id="expire-date-yy"
                    placeholder="YY"
                    bind:value={cardExpireDateYear}
                    maxlength={2}
                    error={!!$errors.cardExpireDateYear}
                  />
                  <ValidationMessage
                    for="cardExpireDateYear"
                    let:messages={message}
                  >
                    <ul class="form__input-error">
                      {#if message}
                        {#each message as error}<li>{error}</li>{/each}
                      {/if}
                    </ul>
                  </ValidationMessage>
                </div>
              </div>
            </Form.Fieldset>

            <Form.Fieldset>
              <Form.Label id="cvc" name="CVC" />
              <Form.Input
                id="cvc"
                placeholder="e.g. 123"
                bind:value={cvcCode}
                name="cvcCode"
                error={!!$errors.cvcCode}
                maxlength={3}
              />
              <ValidationMessage for="cvcCode" let:messages={message}>
                <ul class="form__input-error">
                  {#if message}
                    {#each message as error}<li>{error}</li>{/each}
                  {/if}
                </ul>
              </ValidationMessage>
            </Form.Fieldset>
          </div>

          <Button
            variant="primary"
            disabled={!$isValid}
            type="submit"
            on:submit={() => console.log("submit")}>Confirm</Button>
        </form>
      {/if}
    </Container>
  </Background>
</main>

<style lang="scss">
  main {
    min-height: 100%;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    &__input-error {
      color: var(--error);
      display: flex;
      flex-direction: column;
      font-size: var(--fs-200);
      font-weight: var(--fw-medium);
      gap: 4px;
      list-style: none;
    }
  }

  .columns-grid {
    display: grid;

    &--2-columns {
      grid-template-columns: repeat(2, 1fr);
    }

    &--gap-8 {
      gap: 0.5rem;
    }

    &--gap-16 {
      gap: 1rem;
    }
  }
</style>
