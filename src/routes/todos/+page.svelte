<script lang="ts">
	import ToDoModal from '$lib/ToDoModal/ToDoModal.svelte';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	// Modals Utils
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
	import { getModalStore } from '@skeletonlabs/skeleton';

	export let data;
	const { todos } = data;

    const modalStore = getModalStore();

    function modalComponentForm(title: string): void {
		const c: ModalComponent = { ref: ToDoModal, props: { title: title } };
		const modal: ModalSettings = {
			type: 'component',
			component: c,
			title: 'Custom Form Component',
			body: 'Complete the form below and then press submit.',
            props: { foo: 'bar' },
			response: (r) => console.log('response:', r.name)
		};
		modalStore.trigger(modal);
	}

	let toDo = 'toDo';
	type ComplexItem = {
		id: number;
		userId: number;
		title: string;
		completed: boolean;
	};

	let kanbanBoard: Record<string, ComplexItem[]> = {
		toDoList: todos,
		doingList: [],
		doneList: []
	};
    
	function nextKey(key: string) {
		if (key === 'toDoList') return 'doingList';
		if (key === 'doingList') return 'doneList';
		return 'doneList';
	}

	const moveItem = (item: ComplexItem, from: string, to: string) => {
		console.log(item, from, to);
		kanbanBoard[from] = kanbanBoard[from].filter((i) => i.id !== item.id);
		kanbanBoard[to] = [...kanbanBoard[to], item];
	};

</script>

<div class="grid grid-cols-3 grid-rows-1 gap-8 h-full">
	{#each Object.keys(kanbanBoard) as list}
		<div class="bg-primary-500/50 border border-primary-500">
			<ListBox>
				{list}
				{#each kanbanBoard[list] as item}
					<!-- <ListBoxItem
						bind:group={toDo}
						name="medium"
						value={item.id}
						on:click={() => moveItem(item, list, nextKey(list))}
					>
						{item.title}
					</ListBoxItem> -->
					<ListBoxItem bind:group={toDo} name="medium" value={item.id} 
                on:click={modalComponentForm(item.title)}>
                    {item.title}
                </ListBoxItem>
				{/each}
			</ListBox>
		</div>
	{/each}
</div>

<!-- TODO then
Use a form inside Modal to move the item to the next list
Show more info about the item inside the modal
-->
