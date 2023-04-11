import { v4 as uuidv4 } from 'uuid';
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const data = browser ? JSON.parse(window.localStorage.getItem('svelte-checklist')) ?? [] : [];

export const todos = writable(data);

// Sync 'todos' updates with localStorage
todos.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('svelte-checklist', JSON.stringify(value));
	}
});

export const addTodo = (todo) => {
	todos.update((currentTodos) => {
		return [{ id: uuidv4(), text: '', complete: false }, ...currentTodos];
	});
};

export const deleteTodo = (id) => {
	todos.update((currentTodos) => {
		return currentTodos.filter((todo) => todo.id !== id);
	});
};

export const toggleTodo = (id) => {
	todos.update((currentTodos) => {
		return currentTodos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, complete: !todo.complete };
			}
			return todo;
		});
	});
};

export const editTodo = (id, text) => {
	todos.update((currentTodos) => {
		return currentTodos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, text };
			}
			return todo;
		});
	});
};
