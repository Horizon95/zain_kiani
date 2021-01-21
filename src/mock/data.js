import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
	title       : 'Zain Kiani Web Developer', // e.g: 'Name | Developer'
	lang        : '', // e.g: en, es, fr, jp
	description : '' // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
	title    : '',
	name     : 'Zain Kiani',
	subtitle : 'Web Developer',
	cta      : ''
};

// ABOUT DATA
export const aboutData = {
	img            : 'profile.jpg',
	paragraphOne   :
		"I'm a front-end web developer based in Glasgow. I love all things Javascript, and I'm always looking for ways to enhance my skills. Currently learning React and Node.JS and looking for a role where I can progress and challenge myself.",

	paragraphTwo   : '',
	paragraphThree : '',
	resume         : '' // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
	{
		id    : nanoid(),
		img   : 'covid_demo.png',
		title : 'React Covid-19 Tracker',
		info  :
			'This tracks current cases, as well as recoveries and deaths, from the Covid-19 pandemic. The project was built with React and uses an API for the data. ',
		info2 : '',
		url   : 'https://dreamy-torvalds-6bd16b.netlify.app/',
		repo  : 'https://github.com/Horizon95/covid_tracker' // if no repo, the button will not show up
	},
	{
		id    : nanoid(),
		img   : 'book_demo.png',
		title : 'React Book List',
		info  :
			'A book list built with React. This app also uses key React features such as hooks, contexts, components and so on. The user can add and remove books and keep a consistent list thanks to local storage. ',
		info2 : '',
		url   : 'https://eloquent-jackson-356f45.netlify.app',
		repo  : 'https://github.com/Horizon95/book_list' // if no repo, the button will not show up
	},
	{
		id    : nanoid(),
		img   : 'food_screen.png',
		title : 'Food Recipes API',
		info  :
			'This site, built with vanilla JavaScript, uses an API to fetch different recipies based on user input. Information such as serving sizes is also provided and quantities can also be adjusted by the user. ',
		info2 : '',
		url   : 'https://horizon95.github.io/food_app/',
		repo  : 'https://github.com/Horizon95/food_app' // if no repo, the button will not show up
	},
	{
		id    : nanoid(),
		img   : 'material_demo.png',
		title : 'Photography Site',
		info  :
			'This is a mock photography site built with the Materialize front-end framework. The framework is great for builiding clean and intuitive sites based on the Google Material design. ',
		info2 : '',
		url   : 'https://horizon95.github.io/materialize_site/',
		repo  : 'https://github.com/Horizon95/materialize_site' // if no repo, the button will not show up
	}
];

// CONTACT DATA
export const contactData = {
	cta   : '',
	btn   : '',
	email : 'nisarkiani949@protonmail.com'
};

// FOOTER DATA
export const footerData = {
	networks : [
		{
			id   : nanoid(),
			name : 'linkedin',
			url  : 'https://www.linkedin.com/in/zain-kiani-9472a723/'
		},
		{
			id   : nanoid(),
			name : 'github',
			url  : 'https://github.com/Horizon95?tab=repositories'
		}
	]
};

// Github start/fork buttons
export const githubButtons = {
	isEnabled : false // set to false to disable the GitHub stars/fork buttons
};
