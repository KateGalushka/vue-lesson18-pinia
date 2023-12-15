<template>
	<div class="mb-10 w-75 mx-auto">
		<h3 class="text-center mb-5">Розподіл подарунків</h3>
		<div class="mb-5">
			<div v-if="noDividedGifts">
				Поки немає призначених подарунків
			</div>
			<div v-else>
				<v-list lines="two" density="compact" elevation="5" class="mb-5 bg-light-green-lighten-3">
					<v-list-item
						v-for="item in getDividerListWithNames"
						:key="item.id"
						:title="item.friendName+' - '+item.giftName"
						prepend-icon="mdi-view-list"
					>
						<template v-slot:append>
							<v-btn 
								prepend-icon="mdi-delete"
								density="comfortable"
								class="mb-2"
								@click="deleteItem(item.id)"
							>
							Видалити
							</v-btn>
					  </template>
						<v-divider></v-divider>
					</v-list-item>
				</v-list>
			</div>
		</div>
	
		<v-select
			v-model="dividerObj.friendId"
			:items="friendsList"
			label="Виберіть друга"
			item-title="name"
			item-value="id"
			variant="solo"
			clearable
		>
		</v-select>
		<v-select
			v-model="dividerObj.giftId"
			:items="giftsList"
			label="Подарунок"
			item-title="title"
			item-value="id"
			variant="solo"
			clearable
		>
		</v-select>
			
		<v-btn block elevation="8" @click="onAdd">Додати</v-btn>
		<p class="text-center font-italic text-red p-3 mt-5"> {{ message }}</p>
	</div> 
	
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useDividerStore } from '../store/giftsDivider';
import { useFriendsStore } from '../store/friends';
import { useGiftsStore } from '../store/gifts'

	export default {
		name: 'DividerView',
		data() {
			return {
				dividerObj: {},
				message:''
			}
		},
		computed: {
			...mapState(useDividerStore, ['dividerList', 'getDividerListWithNames']),
			...mapState(useFriendsStore, ['friendsList']),
			...mapState(useGiftsStore, ['giftsList']),

			noDividedGifts(){
				return !this.dividerList.length
			}
		},
		methods: {
			...mapActions(useDividerStore, ['addItem', 'deleteItem']) ,

			onAdd(){
				if (this.dividerObj.friendId && this.dividerObj.giftId) {
					this.addItem(this.dividerObj);
					this.dividerObj ={};
					this.message = '';
					
				} else {
					this.message = "Виберіть і друга, і подарунок";
					setTimeout(() => this.message = "", 3000)
				}
			}
		},

	}
</script>

<style lang="scss" scoped>

</style>