<template>
	<div v-if="currentTask" class="flex items-center justify-center min-h-screen bg-pattern">
		<div class="bg-indigo-100 px-8 py-4 shadow-cool flex flex-col items-center justify-center rounded-lg border border-indigo-300">
			<div class="flex items-center">
				<span v-for="(tag, index) in currentTask.tags" :class="{ 'ml-4': index != 0 }" class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-pattern text-indigo-50" v-text="tag" :key="tag"></span>
			</div>
			<a :href="doneURL" @click="closeWindow" class="leading-tight text-6xl text-indigo-800 hover:line-through" v-text="currentTask.title">Task goes here</a>
			<svg v-if="currentTask.description" class="w-6 h-6 cursor-pointer text-indigo-600" @click="showDescription = !showDescription" fill="currentColor" viewBox="0 0 20 20">
				<path v-if="showDescription" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" fill-rule="evenodd"></path>
				<path v-else d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path>
			</svg>
			<p v-if="showDescription" v-html="currentTask.description.autoLink({ class: 'underline' })" class="mt-4 text-indigo-600 text-lg"></p>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	data: () => ({
		showDescription: false,
		tasks: []
	}),
	computed: {
		currentTask() {
			return this.tasks[0]
		},
		doneURL() {
			return `things:///update?auth-token=${process.env.THINGS_TOKEN}&id=${this.currentTask.id}&completed=true`
		}
	},
	async mounted() {
		this.tasks = await axios.get(process.env.THINGS_SERVER).then(res => res.data)
	},
	methods: {
		closeWindow() {
			setTimeout(() => window.close(), 500)
		}
	}
}
</script>