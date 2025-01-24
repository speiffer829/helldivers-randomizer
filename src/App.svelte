<script>
	import "./app.css";
	import { primaryWeapons, secondaryWeapons, stratagemsDB, grenades, boosters } from "./lib/db";

	let primary = "";
	let secondary = "";
	let grenade = "";
	let stratagems = new Set();
	let booster = "";

	function randomize() {
		primary = primaryWeapons[Math.floor(Math.random() * primaryWeapons.length)];
		secondary = secondaryWeapons[Math.floor(Math.random() * secondaryWeapons.length)];
		grenade = grenades[Math.floor(Math.random() * grenades.length)];
		booster = boosters[Math.floor(Math.random() * boosters.length)];

		// select 4 random stratagems
		stratagems.clear();
		while (stratagems.size < 4) {
			stratagems.add(stratagemsDB[Math.floor(Math.random() * stratagemsDB.length)]);
		}

		stratagems = stratagems;
	}
</script>

<main>
	<button on:click={randomize}>Randomize</button>
	<h2 class="mb-6"><strong>Primary Weapon:</strong> {primary}</h2>
	<h2 class="mb-6"><strong>Secondary Weapon: </strong>{secondary}</h2>
	<h2 class="mb-6"><strong>Grenade: </strong>{grenade}</h2>
	<h2 class="mb-0"><strong>Stratagems: </strong></h2>
	<ul>
		{#each Array.from(stratagems) as stratagem}
			<li>{stratagem}</li>
		{/each}
	</ul>

	<h2 class="mt-6"><strong>Booster:</strong> {booster}</h2>
</main>

<style>
	strong {
		font-weight: black;
	}

	ul {
		list-style: disc;
		padding-inline-start: 1em;
	}
</style>
