<script lang="ts">
	import type { HTMLButtonAttributes } from "svelte/elements";
	import { Motion } from 'svelte-motion'

	interface $$Props extends HTMLButtonAttributes {
		variant: "primary" | "secondary";
		size?: "block" | null;
		type: "submit" | "button";
		onClick?: ((e: MouseEvent) => void) | null | undefined;
	}

	export let variant: "primary" | "secondary";
	export let size: "block" | null = null;
	export let type: "submit" | "button";
	export let onClick: ((e: MouseEvent) => void) | null = null;
</script>

<Motion let:motion initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 'revert-layer' }} transition={{ duration: .5 }}>
	<button
		class={`
		btn 
		${variant === "primary" ? "btn--primary" : ""} 
		${variant === "secondary" ? "btn--secondary" : ""}
		${size === "block" ? "btn--block" : ""}
	`}
		{type}
		on:click={onClick}
		{...$$restProps}
    use:motion
	>
		<slot />
	</button>
</Motion>


<style lang="scss">
	.btn {
		border: none;
		border-radius: 8px;
		line-height: normal;
		padding: 1rem;
		transition: all 0.3s ease-in-out;

		&:hover,
		&:focus {
			box-shadow: 0 0 1rem var(--violet-400);
			cursor: pointer;
			outline-color: var(--violet-900);
			outline-offset: 2px;
			transform: translateY(-0.25rem);
		}

		&--primary {
			background-color: var(--violet-900);
			color: var(--white);
		}

		&--block {
			width: 100%;
		}

		&:disabled {
			box-shadow: none;
			cursor: not-allowed;
			opacity: 0.5;
			transform: none;
		}
	}
</style>
