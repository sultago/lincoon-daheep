export const ADD_ITEM = 'ADD_ITEM';

export function addItem(text:string) {
	return {
		type: ADD_ITEM,
		text: text
	}
}
