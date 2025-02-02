<div role="presentation" class="flex h-full w-full items-center justify-center">
	<span
		class="outer-ring flex h-10 w-10 items-center justify-center rounded-full border-2 border-t-gray-400 border-r-gray-400 border-b-white border-l-white"
	>
		<span
			class="inner-ring border-t-yellow border-l-yellow h-7 w-7 rounded-full border-2 border-transparent"
		></span>
	</span>
</div>

<style>
	.outer-ring {
		animation: spin 1.1s linear infinite;
	}

	.inner-ring {
		animation: spin-counter 0.5s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
	@keyframes spin-counter {
		to {
			transform: rotate(-360deg);
		}
	}
</style>
