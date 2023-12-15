<template>
	<h2 class="text-center mb-5">Список друзів</h2>
	<div class="w-75 mx-auto">
		<v-list lines="two" density="compact" elevation="5" class="mb-5">
			<v-list-item v-for="friend in friendsList" :key="friend.id" :title="friend.name" prepend-icon="mdi-face">
				<template v-slot:append>
	          <v-btn prepend-icon="mdi-delete" density="comfortable" class="mb-2" @click="deleteFriend(friend.id)" >Видалити</v-btn>
	        </template>
				
				<v-divider></v-divider>
			</v-list-item>
		</v-list>
		<v-input class="mx-auto w-75" >
			<!-- <template v-slot:prepend>
					<span>Новий друг</span> 
			</template> -->
			<v-text-field 
				label="Новий друг"
				v-model="friend.name"
				max-width="400"
				hint="Введіть ім'я друга"
				clearable
				persistent-clear
			></v-text-field>
			<template v-slot:append>
				<v-btn class="mb-3" @click="addFriend(friend)">Додати</v-btn>
			</template>
		</v-input>

	</div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useFriendsStore } from '../store/friends'

export default {
	name: 'FriendsView',
	data() {
		return {
			friend: {}
		}
	},
	computed: {
		...mapState(useFriendsStore, ['friendsList'])
	},
	
	methods: {
		...mapActions(useFriendsStore, ['addFriend', 'deleteFriend'])
	},

}
</script>

<style lang="scss" scoped></style>