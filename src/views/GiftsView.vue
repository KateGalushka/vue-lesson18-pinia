<template>
	<h2 class="text-center mb-5">Список подарунків</h2>
	<div class="w-75 mx-auto">
		<v-list lines="two" density="compact" elevation="5" class="mb-5">
			<v-list-item v-for="gift in giftsList" :key="gift.id" :title="gift.title" prepend-icon="mdi-gift">
				<template v-slot:append>
	          <v-btn prepend-icon="mdi-delete" density="comfortable" class="mb-2" @click="deleteGift(gift.id)" >Видалити</v-btn>
	        </template>
				
				<v-divider></v-divider>
			</v-list-item>
		</v-list>
		<v-input class="mx-auto w-75" >
			<v-text-field 
				label="Додати подарунок"
				v-model="gift.title"
				max-width="400"
				hint="Введіть назву подарунка"
				clearable
				persistent-clear
			></v-text-field>
			<template v-slot:append>
				<v-btn class="mb-3" @click="addGift(gift)">Додати</v-btn>
			</template>
		</v-input>

	</div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useGiftsStore } from '../store/gifts'

export default {
	name: 'GiftsView',
	data() {
		return {
			gift: {}
		}
	},
	computed: {
		...mapState(useGiftsStore, ['giftsList'])
	},
	
	methods: {
		...mapActions(useGiftsStore, ['addGift', 'deleteGift'])
	},

}
</script>

<style lang="scss" scoped></style>