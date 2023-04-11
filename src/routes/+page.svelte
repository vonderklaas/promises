<script>
	import AddTodoSection from '../components/AddTodoSection.svelte';
	import TodoSection from '../components/TodoSection.svelte';
</script>

<div class="min-h-screen bg-olive-one p-0 selection:bg-green-two md:px-8 md:py-24">
	<main
		class="mx-auto min-h-screen max-w-none rounded-none bg-cream-four px-5 py-10 outline-none md:min-h-max md:max-w-[60rem] md:rounded-2xl md:px-8 md:outline md:outline-4 md:outline-offset-8 md:outline-cream-four"
	>
		<h1 class="flex items-center text-2xl font-bold text-gray-three">
			<span>Dashboard</span>
			<img class="w-[40px ml-3 h-[40px]" src="/favicon.png" alt="Svelte" />
		</h1>
		<div class="mt-10">
			<AddTodoSection />
			<TodoSection />
		</div>
	</main>
</div>
