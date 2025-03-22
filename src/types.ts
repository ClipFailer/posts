export type Product = {
	userId: string
	id: string
	title: string
	body: string
}

// export type User = {
// 	id: string
// 	name: string
// 	username: string
// 	email: string
// 	address: {
// 		street: string
// 		suite: string
// 		city: string
// 		zipcode: string
// 		geo: {
// 			lat: string
// 			lng: string
// 		}
// 	}
// 	phone: string
// 	website: string
// 	company: {
// 		name: string
// 		catchPhrase: string
// 		bs: string
// 	}
// }

export enum FilterEnum {
	ALL = 'all',
	FAVORITES = 'favorites',
}

export enum SortEnum {
	TITLE = 'title',
	BODY = 'body',
}
