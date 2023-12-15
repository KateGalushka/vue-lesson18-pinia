import { defineStore } from "pinia";
import { useFriendsStore } from './friends'
import {useGiftsStore} from './gifts'

export const useDividerStore = defineStore('divider', {
	state: () => ({
		dividerList: []
	}),
	getters: {
		getDividerListWithNames: (state) => {
			const friends = useFriendsStore();
			const gifts = useGiftsStore();
			if (state.dividerList.length) {
				 return state.dividerList.map(item =>{
					const friend = friends.getFriendById(item.friendId);
					const gift = gifts.getGiftById(item.giftId);
					return {
						id: item.id,
						friendName: friend.name,
						giftName: gift.title
					}
				})
			} 
		},
		getItemByFriendId: (state) => (friendId) => state.dividerList.find(item => item.friendId == friendId),
		getItemByGiftId: (state) => (giftId) => state.dividerList.find(item => item.giftId == giftId),

	
		
	},
	actions: {
		addItem(dividerObj) {
			this.dividerList.push({
				id: new Date().getTime(),
				...dividerObj
			});
			// console.log(this.dividerList)
		},
		deleteItem(itemId) {
			this.dividerList = this.dividerList.filter(item => item.id !== itemId);
		},
		deleteItemByFriendId(friendId){
			const id = this.getItemByFriendId(friendId).id;
			this.deleteItem(id);
		},
		deleteItemByGiftId(giftId){
			const id = this.getItemByGiftId(giftId).id;
			this.deleteItem(id);
		},
	}
})