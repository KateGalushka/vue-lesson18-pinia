import { defineStore } from "pinia";
import { friends } from '../store/data';
import { useDividerStore } from "./giftsDivider";

export const useFriendsStore = defineStore('friends', {
	state: () => ({
		friendsList: friends
	}),
	getters: {
		getFriendById: (state) => (friendId) => state.friendsList.find(friend => friend.id == friendId)
	},
	actions: {
		addFriend(friend){
			this.friendsList.push({
				id: new Date().getTime(),
				...friend
			})
		},
		deleteFriend(friendId){
			this.friendsList = this.friendsList.filter(friend => friend.id !== friendId);
			const divider = useDividerStore();
			divider.deleteItemByFriendId(friendId);
		},
	}

})