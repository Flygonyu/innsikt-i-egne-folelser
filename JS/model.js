//Model

const model = {
	//app
	app: {
		currentUser: '', 
		currentPage: "logIn",
		disable: "disabled",
		userIndex: null,
	},

	//inputs
	login: {
		userName: "",
		pwd: "",
	},

	newUser: {
		userName: '',
		firstName: '',
		lastName: '',
		pwd: '',
		confirmPwd: '',
	},

	overView: {
		selectedDate: "",
		selectedDay: "",
		selectedId: null,
		selectedUserId: null,
	},

	
	newExperience: {
		id: "",
		feelings: [], 
		triggers: [],
		location: "",
		comments: [],
		time: "",
		date: "",
		day: "",
		weekId: 1,
	},

	//data
	feelings: [
		{ name: "Glad", subFeels: [
			{ name: 'Spent'},
			{ name: 'Attraktiv'},
			{ name: 'Energisk'},
			{ name: 'Leken'},
			{ name: 'Kreativ'},
			{ name: 'Oppmerksom'},
		], 
	},
		{ name: "Trist", subFeels: [
			{name: 'Skyldig',},
			{name: 'Skamfull',},
			{name: 'Deprimert',},
			{name: 'Ensom',},
			{name: 'Kjedelig',},
			{name: 'Trøtt',},
		],
	},
		{ name: "Sint", subFeels: [
			{ name: 'Frustrert',},
			{ name: 'Rasende',},
			{ name: 'Fiendtlig',},
			{ name: 'Såret',},
			{ name: 'Hatefull',},
			{ name: 'Kritisk',},
		], 
	},
		{ name: "Sterk", subFeels: 
		[
			{name: 'Trofast', },
			{name: 'Viktig',},
			{name: 'Håpefull',},
			{name: 'Verdsatt',},
			{name: 'Respektert',},
			{name: 'Stolt',},
		], 
	},	
		{ name: "Rolig", subFeels: 
		[
			{name: 'Tilfreds',},
			{name: 'Intim',},
			{name: 'Kjærlig',},
			{name: 'Tillitsfull',},
			{name: 'Oppbygget',},
		], 
	},
		{ name: "Redd", subFeels: 
			[
			{name: 'Avvist', },
			{name: 'Forvirret',},
			{name: 'Hjelpesløs',},
			{name: 'Føyelig', },
			{name: 'Utrygg',},
			{name: 'Engstelig', },
			], 
	},
	],
	locations: [
		{ name: "Hjemme" },
		{ name: "Jobb" },
		{ name: "Butikk" },
		{ name: "Transport" },
		{ name: "Aktivitet" },
		{ name: "Annet" },
	],
	triggers: [
		{ name: "Møte" },
		{ name: "Syn" },
		{ name: "Berøring" },
		{ name: "Hørsel" },
		{ name: "Smak" },
		{ name: "Lukt" },
		{ name: "Tanke" },
		{ name: "Vet ikke" },
	],

	hensiktApp: "Øk bevissthet rundt dine følelsesmessige mønstre og reaksjoner. Informasjonen som du samler om dine følelser og mestringsstrategier gir grunnlag for refleskjonsamtale med din veileder",

	users: [
		{
			id: 1,
			userName: "ims",
			firstName: "Kristoffer",
			lastName: "Knutsen",
			pwd: "123",
			isAdmin: false,
			isPersonal: false,
			register: [1, 2, 3, 4, 5, 6, 7,], // array med ID over exp register til bruker
			challenges: [1, 2, 3, 4], // array med ID over challenges til bruker
			instillinger: {
				colorChooser: "mørk",
				themeChooser: "pill",
				locations:[
				{name: "Hjemme"},
				{name: "Jobb"},
				{name: "Butikk"},
				{name: "Transport"},
				{name: "Aktivitet"},
				{name: "Annet"},
				],
			},
		},
		{
			id: 2,
			userName: "veileder",
			firstName: "Admin",
			lastName: "Admin",
			pwd: "123",
			isAdmin: true,
			isPersonal: true,
			instillinger: {
				colorChooser: "standard",
				themeChooser: "square",
				locations:[
				{name: "Hjemme"},
				{name: "Jobb"},
				{name: "Butikk"},
				{name: "Transport"},
				{name: "Aktivitet"},
				{name: "Annet"},
				],
			},
		},
		
	],

	challenges: [
		{ id: 1, 
			text: "Flinkere til å presentere dette!", 
			isActive: true 
		},
		{
			id: 2,
			text: "Vue.js uke! vuehuu!",
			isActive: false,
		},
		{ id: 3, 
			text: "Bli bedre kjent med teamet", 
			isActive: false 
		},
		{
			id: 4,
			text: "Bli en CSS mester",
			isActive: false,
		},
	],
	experiences: [
		{
			id: 1,
			feelings: [
				{
					name: "Glad",
					value: 5,
					subFeels: [],
				},
			],
			triggers: ["lukt", "berøring",],
			otherTrigger: "",
			location: "Butikken",
			time: "13:37",
			date: "8.11.2021",
			day: "Mandag",
			comments: [
				{
				date: "8.11.2021",
				time: "13:37",
				text: "Møte med Anita",
				}, 
				{
				date: "8.11.2021",
				time: "13:39",
				text: "På kontoret til Bjørnar",
				},
				{
				date: "16.11.2021",
				time: "11:39",
				text: "Stigh lurer på hvilken ID jeg har?",
				},
				{
				date: "16.11.2021",
				time: "14:39",
				text: "Ims lurer på hva skjer?",
				},
				{
				date: "16.11.2021",
				time: "14:39",
				text: "Ims lurer på hva skjer? igjen og igjen",
				},
			],
			weekId: 1,
		},
		{
			id: 2,
			feelings: [
				{
					name: "Glad",
					value: 5,
					subFeels: [],
				},
			],
			triggers: ["lukt",],
			otherTrigger: "",
			location: "Butikken",
			time: "13:37",
			date: "18.11.2021",
			day: "Mandag",
			comments: [
				{
				date: "8.11.2021",
				time: "13:37",
				text: "Møte med Anita igjen",
				}, 
				{
				date: "8.11.2021",
				time: "13:39",
				text: "På GetAcademy",
				},
			],
			weekId: 1,
		},
		{
			id: 3,
			feelings: [
				{
					name: "Redd",
					value: 5,
					subFeels: [],
				},
			],
			triggers: ["lukt", "berøring",],
			otherTrigger: "",
			location: "Butikken",
			time: "13:37",
			date: "19.11.2021",
			day: "Tirsdag",
			comments: [
				{
				date: "8.11.2021",
				time: "13:37",
				text: "Møte med Linn",
				}, 
				{
				date: "8.11.2021",
				time: "13:39",
				text: "På kontoret til Bjørnar",
				},
			],
			weekId: 1,
		},
		{
			id: 4,
			feelings: [
				{
					name: "Sint",
					value: 10,
					subFeels: [],
				},
			],
			triggers: ["lukt", "berøring",],
			otherTrigger: "",
			location: "Butikken",
			time: "13:37",
			date: "8.11.2021",
			day: "Mandag",
			comments: [
				{
				date: "8.11.2021",
				time: "13:37",
				text: "Møte med Terje",
				}, 
				{
				date: "8.11.2021",
				time: "13:39",
				text: "På kontoret til Geir",
				},
			],
			weekId: 1,
		},
		{
			id: 5,
			feelings: [
				{
					name: "Glad",
					value: 5,
					subFeels: [],
				},
			],
			triggers: ["lukt", "berøring",],
			otherTrigger: "",
			location: "Butikken",
			time: "13:37",
			date: "8.11.2021",
			day: "Mandag",
			comments: [
				{
				date: "8.11.2021",
				time: "13:37",
				text: "Møte med Eskil",
				}, 
				{
				date: "8.11.2021",
				time: "13:39",
				text: "På kontoret til Bjørnar",
				},
			],
			weekId: 1,
		},
		{
			id: 6,
			feelings: [
				{
					name: "Glad",
					value: 10,
					subFeels: [],
				},
			],
			triggers: ["lukt", "hørsel",],
			otherTrigger: "",
			location: "Jobb",
			time: "13:37",
			date: "29.11.2021",
			day: "Tirsdag",
			comments: [
				{
				date: "8.11.2021",
				time: "13:37",
				text: "Møte med Linn",
				}, 
				{
				date: "8.11.2021",
				time: "13:39",
				text: "På kontoret til Bjørnar",
				},
			],
			weekId: 1,
		},
		{
			id: 7,
			feelings: [
				{
					name: "Redd",
					value: 1,
					subFeels: [],
				},
			],
			triggers: ["lukt", "hørsel",],
			otherTrigger: "",
			location: "Jobb",
			time: "13:37",
			date: "9.11.2021",
			day: "Tirsdag",
			comments: [
				{
				date: undefined,
				time: undefined,
				text: undefined,
				}, 	
			],
			weekId: 1,
		},
	],

	chat: [
		{
			id: 1,
			text: "Ims's dialog",
			date: "9.11.2021",
			time: "13:37",
			user: "ims",
			chatId: 1,
		},
		{
			id: 2,
			text: "Og vi er i gang",
			date: "10.11.2021",
			time: "09:00",
			user: "ims",
			chatId: 1,
		},
		{
			id: 3,
			text: "Veldig bra Stigh!",
			date: "11.11.2021",
			time: "23:59",
			user: "veileder",
			chatId: 1,
		},
		{
			id: 4,
			text: "Bjørnar og Linn er best",
			date: "16.11.2021",
			time: "12:27",
			user: "smørbukk",
			chatId: 1,
		},
	],
};
