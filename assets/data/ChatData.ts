export default {
	id: '1',
	users: [{
		id: 'u1',
		name: 'Konno Yuuki',
		imageUri: 'https://i.imgur.com/Rbz8jcU.jpeg',
	}, {
		id: 'u2',
		name: 'Mana Mitsuya',
		imageUri: 'https://i.imgur.com/Kt2SeGg.jpeg',
	}],
	messages: [{
		id: 'm1',
		content: 'How are you, Mana!',
		createdAt: '2020-10-10T12:48:00.000Z',
		user: {
			id: 'u1',
			name: 'Konno Yuuki',
		},
	}, {
		id: 'm2',
		content: 'I am good, good',
		createdAt: '2020-10-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Mana Mitsuya',
		},
	}, {
		id: 'm3',
		content: 'What about you?',
		createdAt: '2020-10-03T14:49:40.000Z',
		user: {
			id: 'u2',
			name: 'Mana Mitsuya',
		},
	}, {
		id: 'm4',
		content: 'Good as well, preparing for the stream now.',
		createdAt: '2020-10-03T14:50:00.000Z',
		user: {
			id: 'u1',
			name: 'Konno Yuuki',
		},
	}, {
		id: 'm5',
		content: 'How are you doing?',
		createdAt: '2020-10-03T14:51:00.000Z',
		user: {
			id: 'u1',
			name: 'Konno Yuuki',
		},
	}, {
		id: 'm6',
		content: 'going to the Moooooon',
		createdAt: '2020-10-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Mana Mitsuya',
		},
	}, {
		id: 'm7',
		content: 'btw, you are interested in buying Sweetagram!',
		createdAt: '2020-10-03T14:53:00.000Z',
		user: {
			id: 'u2',
			name: 'Mana Mitsuya',
		},
	}]
}

