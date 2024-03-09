<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	// Stores
	import { getModalStore } from '@skeletonlabs/skeleton';

	// Props
	/** Exposes parent props to this component. */
	export let parent: SvelteComponent;

	const modalStore = getModalStore();

	// // Form Data
	// const formData = {
	// 	name: 'Jane Doe',
	// 	tel: '214-555-1234',
	// 	email: 'jdoe@email.com'
	// };

    const formData = {
        title: '',
        value: ''
    }

	// We've created a custom submit function to pass the response and close the modal.
	function onFormSubmit(): void {
        // when submit form, we need to send the data to the parent component
        // get title and value from select
        console.log({title})
        console.log('Form Submitted:', formData);


		// if ($modalStore[0].response) $modalStore[0].response(formData);
		modalStore.close();
	}

	// Base Classes
	const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';
	const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';

    export let title
    console.log({title})
</script>

<!-- @component This example creates a simple form modal. -->

{#if $modalStore[0]}
	<div class="modal-example-form {cBase}">
		<header class={cHeader}>{$modalStore[0].title ?? '(title missing)'}</header>
		<article>{$modalStore[0].body ?? '(body missing)'}</article>
		<!-- Enable for debugging: -->
		<form class="modal-form {cForm}">
			<label class="label">
				<span>Title</span>
				<input class="input" type="text" bind:value={title} placeholder="Enter name..." />
			</label>
            <select class="select">
                <option value="toDoList">To Do</option>
                <option value="doingList">Doing</option>
                <option value="doneList">Done</option>
            </select>
			<!-- <label class="label">
				<span>Phone Number</span>
				<input class="input" type="tel" bind:value={formData.tel} placeholder="Enter phone..." />
			</label>
			<label class="label">
				<span>Email</span>
				<input class="input" type="email" bind:value={formData.email} placeholder="Enter email address..." /> 
			</label> -->
		</form>
		<!-- prettier-ignore -->
		<footer class="modal-footer {parent.regionFooter}">
			<button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
			<button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Submit Form</button>
		</footer>
	</div>
{/if}