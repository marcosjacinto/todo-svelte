<script lang="ts">
	import { AppBar, AppShell, Modal, type ModalComponent } from '@skeletonlabs/skeleton';
	import '../app.postcss';

	import { initializeStores } from '@skeletonlabs/skeleton';
	import ToDoModal from '$lib/ToDoModal/ToDoModal.svelte';

	initializeStores();

	const modalComponentRegistry: Record<string, ModalComponent> = {
		toDoModal: { ref: ToDoModal },
	};

	</script>

<Modal />
<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Skeleton</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://discord.gg/EXqV7W8MtY"
					target="_blank"
					rel="noreferrer"
				>
					Discord
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://twitter.com/SkeletonUI"
					target="_blank"
					rel="noreferrer"
				>
					Twitter
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/skeletonlabs/skeleton"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<svelte:fragment slot="sidebarLeft">
		<AppBar class="flex items-center p-10 gap-24 h-full">
			Meu App Bar
			<!-- <AppRail>
				<svelte:fragment slot="lead">
					<AppRailAnchor href="/todos" >(icon)</AppRailAnchor>
				</svelte:fragment>
				<AppRailTile href="/" >{count}</AppRailTile>
			</AppRail> -->
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="footer">
		duhasoduihasoudhapsudhapoiusdhpaudshapuhdpauh
	</svelte:fragment>
</AppShell>


<!-- /* left sideBar */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;
gap: 24px;

width: 240px;
max-width: 240px;
height: 400px;

background: rgba(76, 90, 139, 0.2);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px 0px 0px 8px;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 1; -->

<!-- transform the css above into tailwind css -->
<!-- <style>
	.left-side-bar {
		@apply ;
	}
</style> -->
