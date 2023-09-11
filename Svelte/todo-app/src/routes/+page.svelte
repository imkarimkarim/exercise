<script>
	// @ts-nocheck

	import { onMount } from 'svelte';

	let newTodo = '';
	let todos = [];

	onMount(async () => {
		let tmp = [];
		Object.keys(localStorage).forEach((key) => {
			tmp.push(key);
		});
		todos = tmp;
	});

	function handleAddTodo() {
		if (newTodo === '') return;
		localStorage.setItem(newTodo, newTodo);
		let tmp = todos;
		tmp.unshift(newTodo);
		todos = tmp;
		newTodo = '';
	}

	function handleDeleteTodo(name) {
		localStorage.removeItem(name);
		let tmp = todos;
		todos = tmp.filter((v) => {
			return v !== name;
		});
	}
</script>

<main class="container text-center mt-4 flex flex-col items-center">
	<h1>Todo App</h1>
	<div class="w-72 justify-self-center mt-4 flex">
		<input
			on:keydown={(e) => {
				e.key === 'Enter' && handleAddTodo();
			}}
			bind:value={newTodo}
			class="w-3/4"
			autofocus
			placeholder="add a todo..."
		/>
		<button on:click={handleAddTodo} role="button" class="w-1/4 ml-2 h-12">+</button>
	</div>
	<div class="flex flex-col gap-2">
		{#each todos as todo}
			<button class="w-72 outline" role="button" on:click={handleDeleteTodo(todo)}>
				{todo}
			</button>
		{/each}
	</div>
</main>
