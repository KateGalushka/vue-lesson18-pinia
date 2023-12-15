import { defineStore } from "pinia";
import { gifts } from '../store/data';
import { useDividerStore } from "./giftsDivider";

export const useGiftsStore = defineStore('gifts', {
	state: () => ({
		giftsList: gifts
	}),
	getters: {
		getGiftById: (state) => (giftId) => state.giftsList.find(gift => gift.id == giftId)
	},
	actions: {
		addGift(gift) {
			this.giftsList.push({
				id: new Date().getTime(),
				...gift
			})
		},
		deleteGift(giftId) {
			this.giftsList = this.giftsList.filter(gift => gift.id !== giftId);
			const divider = useDividerStore();
			divider.deleteItemByGiftId(giftId);
		},
	}
})