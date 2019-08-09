import React from 'react';
import { ModuleData, Icon, Data } from '../types';
import { FaGithubAlt, FaLinkedinIn, FaSkype, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const modules: ModuleData[] = [
	{ title: 'HOME', margin: '0', route: '/', module: 'home' },
	{ title: 'PROJECTS', margin: '2.1rem 0', route: '/projects', module: 'projects' },
	{ title: 'PHOTOS', margin: '1.3rem 0', route: '/photos', module: 'photos' },
	{ title: 'CONTACT', margin: '1.9rem 0', route: '/contact', module: 'contact' }
];

export const icons: Icon[] = [
	{
		element: <FaGithubAlt id='contact__icon_github' />,
		label: 'GitHub repositories for projects',
		link: 'https://github.com/d-mv'
	},
	{
		element: <FaLinkedinIn id='contact__icon_linkedin' />,
		label: 'LinkedIn page',
		link: 'https://www.linkedin.com/in/dmitry-melnikov-pm/'
	},
	{
		element: <FaSkype id='contact__icon_skype' />,
		label: 'Skype',
		link: 'skype:dmitry.melnikov?chat'
	},
	{
		element: <FaInstagram id='contact__icon_instagram' />,
		label: 'Instagram',
		link: 'https://www.instagram.com/melnikov_dm/'
	},
	{
		element: <MdEmail id='contact__icon_email' />,
		label: 'Mail',
		link: 'mailto:d.dash.mv@gmail.com'
	}
];

export const data: Data = {
					photos: [
						{
							title: 'Pond with vegetation',
							location: 'Gan Garoo, Israel',
							large:
								'https://res.cloudinary.com/diciu4xpu/image/upload/v1551907630/home/photos/gan_garoo_pond.jpg',
							thumb:
								'https://res.cloudinary.com/diciu4xpu/image/upload/c_thumb,w_200,g_face/v1551905690/home/photos/gan_garoo_pond.jpg'
						},
						{
							title: 'Branch of tree',
							location: 'Beit Shean, Israel',
							large:
								'https://res.cloudinary.com/diciu4xpu/image/upload/v1551907617/home/photos/beit_shean_branch.jpg',
							thumb:
								'https://res.cloudinary.com/diciu4xpu/image/upload/c_thumb,w_200,g_face/v1551905690/home/photos/beit_shean_branch.jpg'
						},
						{
							title: 'Blossoming bush',
							location: 'Yarkon Park, Israel',
							large:
								'https://res.cloudinary.com/diciu4xpu/image/upload/v1551907602/home/photos/yarkon_park_flower.jpg',
							thumb:
								'https://res.cloudinary.com/diciu4xpu/image/upload/c_thumb,w_200,g_face/v1551905690/home/photos/yarkon_park_flower.jpg'
						},
						{
							title: 'Flowers of the tree',
							location: 'Herzliya Park, Israel',
							large:
								'https://res.cloudinary.com/diciu4xpu/image/upload/v1551907566/home/photos/tree_red_flowers.jpg',
							thumb:
								'https://res.cloudinary.com/diciu4xpu/image/upload/c_thumb,w_200,g_face/v1551905690/home/photos/tree_red_flowers.jpg'
						},
						{
							title: 'Cup of espresso',
							location: 'Somewhere at home',
							large:
								'https://res.cloudinary.com/diciu4xpu/image/upload/v1552757048/home/photos/home_cup_of_coffee.jpg',
							thumb:
								'https://res.cloudinary.com/diciu4xpu/image/upload/c_thumb,w_200,g_face/v1552757048/home/photos/home_cup_of_coffee.jpg'
						},
						{
							title: 'Sky through trees',
							location: 'Yarkon Park, Israel',
							large:
								'https://res.cloudinary.com/diciu4xpu/image/upload/v1551907623/home/photos/yarkon_park_tree.jpg',
							thumb:
								'https://res.cloudinary.com/diciu4xpu/image/upload/c_thumb,w_200,g_face/v1551905690/home/photos/yarkon_park_tree.jpg'
						},
						{
							title: 'Mountains',
							location: 'Ujarma, Georgia',
							large:
								'https://res.cloudinary.com/diciu4xpu/image/upload/v1551905690/home/photos/ujarma_dark.jpg',
							thumb:
								'https://res.cloudinary.com/diciu4xpu/image/upload/c_thumb,w_200,g_face/v1551905690/home/photos/ujarma_dark.jpg'
						},
						{
							title: 'Panorama',
							location: 'Napoli, Italy',
							large:
								'https://res.cloudinary.com/diciu4xpu/image/upload/v1552062523/home/photos/napoli_panorama.jpg',
							thumb:
								'https://res.cloudinary.com/diciu4xpu/image/upload/c_thumb,w_200,g_face/v1551905690/home/photos/napoli_panorama.jpg'
						},
						{
							title: 'Autumn field',
							location: 'Russia',
							large:
								'https://res.cloudinary.com/diciu4xpu/image/upload/v1552062527/home/photos/russia_autumn_field.jpg',
							thumb:
								'https://res.cloudinary.com/diciu4xpu/image/upload/c_thumb,w_200,g_face/v1551905690/home/photos/russia_autumn_field.jpg'
						},
						{
							title: 'Autumn park',
							location: 'St.Petersburg, Russia',
							large:
								'https://res.cloudinary.com/diciu4xpu/image/upload/v1552062539/home/photos/russia_autumn_park.jpg',
							thumb:
								'https://res.cloudinary.com/diciu4xpu/image/upload/c_thumb,w_200,g_face/v1551905690/home/photos/russia_autumn_park.jpg'
						},
						{
							title: 'Yellow house',
							location: 'St. Petersburg, Russia',
							large:
								'https://res.cloudinary.com/diciu4xpu/image/upload/v1552062521/home/photos/russia_yellow_house.jpg',
							thumb:
								'https://res.cloudinary.com/diciu4xpu/image/upload/c_thumb,w_200,g_face/v1551905690/home/photos/russia_yellow_house.jpg'
						}
					],
					projects: [
						{
							title: 'Our Change',
							description: 'Collection of historical places.',
							photo: {
								card: [
									'https://res.cloudinary.com/diciu4xpu/image/upload/v1564834311/home/v2/projects/card__our-change.jpg',
									'https://res.cloudinary.com/diciu4xpu/image/upload/v1564834311/home/v2/projects/card__our-change_2x.jpg'
								],
								details: {
									s:
										'https://res.cloudinary.com/diciu4xpu/image/upload/v1564839459/home/v2/projects/details__our-change_s.png',
									m:
										'https://res.cloudinary.com/diciu4xpu/image/upload/v1564839464/home/v2/projects/details__our-change_m.png',
									l:
										'https://res.cloudinary.com/diciu4xpu/image/upload/v1564839480/home/v2/projects/details__our-change_l.png',
									xl:
										'https://res.cloudinary.com/diciu4xpu/image/upload/v1564839481/home/v2/projects/details__our-change_xl.png',
									xxl:
										'https://res.cloudinary.com/diciu4xpu/image/upload/v1564839490/home/v2/projects/details__our-change_xxl.png'
								}
							},
							details:
								"A social app for citizens to communicate the issues to the municipality. Created for a client as an MVP, the app bears all the required features for posting illustrated mini-posts with optional solutions as well as votes. Municipality can post news, well as post notes to the users' posts, and users can reply to them. Desktop version for analytics, while opening the app from mobile gives full functionality",
							technology: ['react', 'redux', 'styled', 'node', 'express', 'mongo'],
							links: { deploy: 'https://our-change.herokuapp.com/' }
						},
						{
							title: 'Homepage SPA',
							description: 'Homepage app',
							photo: {
								card: [
									'https://res.cloudinary.com/diciu4xpu/image/upload/v1565386526/home/v2/projects/card__home-app.png',
									'https://res.cloudinary.com/diciu4xpu/image/upload/v1565386526/home/v2/projects/card__home-app_2x.png'
								],
								details: {
									s:
										'https://res.cloudinary.com/diciu4xpu/image/upload/v1565387703/home/v2/projects/details__homepage-spa_s.png',
									m:
										'https://res.cloudinary.com/diciu4xpu/image/upload/v1565387705/home/v2/projects/details__homepage-spa_m.png',
									l:
										'https://res.cloudinary.com/diciu4xpu/image/upload/v1565387714/home/v2/projects/details__homepage-spa_l.png',
									xl:
										'https://res.cloudinary.com/diciu4xpu/image/upload/v1565387718/home/v2/projects/details__homepage-spa_xl.png',
									xxl:
										'https://res.cloudinary.com/diciu4xpu/image/upload/v1565387725/home/v2/projects/details__homepage-spa_xxl.png'
								}
							},
							details:
								'At certain point faced the need to make a homepage, which will act as a business card and a showcase. It had to reflect... basically me. From the beginning the decision was made not to use templates and work out something different. The result - you are looking at it. The initial mockup was done in Sketch, the working mockup in HTML/CSS. As main tool I used Vue.js (+ Vuex) with SCSS. To simplify dev process, the project is using JSON file with all the data and links to images on Cloudinary. Favicon designed  in Affinity Designer, while the pack with manifest.json done with Image2icon app. Later if has been reworked from ground in React. Styled Components instead of SCSS and React Icons instead of Font Awesome. TypeScript, auto Dark Mode on macOS.',
							technology: ['react', 'ts', 'styled', 'ricons'],
							links: {
								github: 'https://github.com/d-mv/home-react-styled',
								deployed: 'https://melnikov.dev'
							}
						},
						{
							title: 'Chaserz',
							description: 'Scooter race web game',
							photo: {
								card: [
									'https://res.cloudinary.com/diciu4xpu/image/upload/v1564835061/home/v2/projects/card__chaserz.jpg',
									'https://res.cloudinary.com/diciu4xpu/image/upload/v1564835061/home/v2/projects/card__chaserz_2x.jpg'
								],
								details: {
									s:
										'https://res.cloudinary.com/diciu4xpu/image/upload/v1564833036/home/v2/projects/details__our-change_s.png',
									l:
										'https://res.cloudinary.com/diciu4xpu/image/upload/v1564833042/home/v2/projects/details__our-change_l.png',
									m:
										'https://res.cloudinary.com/diciu4xpu/image/upload/v1564833040/home/v2/projects/details__our-change_m.png',
									xl:
										'https://res.cloudinary.com/diciu4xpu/image/upload/v1564833142/home/v2/projects/details__our-change-xl.png',
									xxl:
										'https://res.cloudinary.com/diciu4xpu/image/upload/v1564833057/home/v2/projects/details__our-change-xxl.png'
								}
							},
							details:
								'The app was developed as a part of Le Wagon Bootcamp (batch #209) with my colleague Roni Talvi. It is a browser based race game for scooter owners which combines online and real-life experience. This project has been done as proof of concept. Main trick was to collect geodata from the racers at the server and broadcast it to them back, so each can see the position of others on the map. The initial design done in Figma, then mockup in HTML/CSS. Some graphics done in Affinity Designer/Photo. The technology used - Ruby, Rails, ActionCable, SCSS, MapBox API, GPS geopositioning and JS.',
							technology: ['ruby', 'rails', 'scss', 'mapbox', 'heroku'],
							links: {
								github: 'https://github.com/d-mv/chaserz',
								deployed: 'https://chaserz-dev.herokuapp.com/',
								video:
									'https://drive.google.com/open?id=1M2lTK6MzgQAMx-YspqgrFs9foKKw-lyC',
								other: ''
							}
						},
						{
							title: 'The Newsletter',
							description: 'Newspaper-style RSS reader app',
							photo: {
								card: [
									'https://res.cloudinary.com/diciu4xpu/image/upload/v1565381986/home/v2/projects/card__newsletter.jpg',
									'https://res.cloudinary.com/diciu4xpu/image/upload/v1565381986/home/v2/projects/card__newsletter_2x.jpg'
								],
								details: {
									s:
										'https://res.cloudinary.com/diciu4xpu/image/upload/v1565384292/home/v2/projects/details__newslettter_s.png',
									m:
										'https://res.cloudinary.com/diciu4xpu/image/upload/v1565384298/home/v2/projects/details__newslettter_m.png',
									l:
										'https://res.cloudinary.com/diciu4xpu/image/upload/v1565384302/home/v2/projects/details__newslettter_l.png',

									xl:
										'https://res.cloudinary.com/diciu4xpu/image/upload/v1565384302/home/v2/projects/details__newslettter_xl.png',
									xxl:
										'https://res.cloudinary.com/diciu4xpu/image/upload/v1565384304/home/v2/projects/details__newslettter_xxl.png'
								}
							},
							details:
								'With too many bright colours, moving elements and over-use of font weights and sizes, rather hard to focus on the information. This app works with text only, which is parsed and stored in DB. Currently, as a proof of concept parser is set to work with Medium blogs, which are overloaded with large graphics and distracting elements. This has been a pet project from the beginning. Started as RoR and later with Hanami, with PostgreSQL. Later, a further take on the app concept has seen drop of Ruby/Hanami, Bootstrap and Font Awesome in favour of React/Redux and SCSS for front and Node.js with Express and MongoDB for back. In the process of further upgrade to TypeScript, rework of backend methods in favor of simplicity and speed, as well as a pending full overhaul of front',
							technology: [
								'react',
								'redux',
								'styled',
								'ts',
								'mongo',
								'node',
								'express',
								'divider',
								'ruby',
								'hanami',
								'scss',
								'bootstrap',
								'fontawe'
							],
							links: {
								github: 'https://github.com/d-mv/newsletter-single',
								deployed: 'http://the-newsletter-app.herokuapp.com/'
							}
						},
						{
							title: 'GulfHeritage.me',
							description: 'Collection of historical places.',
							photo: {
								card: [
									'https://res.cloudinary.com/diciu4xpu/image/upload/v1564835123/home/v2/projects/card__gulf-heritage.jpg',
									'https://res.cloudinary.com/diciu4xpu/image/upload/v1564835123/home/v2/projects/card__gulf-heritage_2x.jpg'
								],
								details: {
									s:
										'https://res.cloudinary.com/diciu4xpu/image/upload/v1564833036/home/v2/projects/details__our-change_s.png',
									l:
										'https://res.cloudinary.com/diciu4xpu/image/upload/v1564833042/home/v2/projects/details__our-change_l.png',
									m:
										'https://res.cloudinary.com/diciu4xpu/image/upload/v1564833040/home/v2/projects/details__our-change_m.png',
									xl:
										'https://res.cloudinary.com/diciu4xpu/image/upload/v1564833142/home/v2/projects/details__our-change-xl.png',
									xxl:
										'https://res.cloudinary.com/diciu4xpu/image/upload/v1564833057/home/v2/projects/details__our-change-xxl.png'
								}
							},
							details:
								'The idea was to create a web-site with collection of historical place in the Gulf region - mainly UAE, with later addtion of other countries. The information included photos, articles, locations. The project was based purely on HTML/CSS, with few JS libraries for showing photos.',
							technology: ['html', 'css'],
							links: {}
						}
					],
					technology: {
						vue: [
							'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/200px-Vue.js_Logo_2.svg.png',
							'Evan You, https://github.com/yyx990803 [CC BY 4.0 (https://creativecommons.org/licenses/by/4.0)]'
						],
						react: [
							'https://res.cloudinary.com/diciu4xpu/image/upload/v1554551367/home/projects/logo_react.png',
							'Facebook [Public domain]'
						],
						scss: [
							'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/200px-Sass_Logo_Color.svg.png',
							'http://sass-lang.com/ [Public domain]'
						],
						ruby: [
							'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/200px-Ruby_logo.svg.png',
							'Yukihiro Matsumoto, Ruby Visual Identity Team [CC BY-SA 2.5 (https://creativecommons.org/licenses/by-sa/2.5)]'
						],
						rails: [
							'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/200px-Ruby_On_Rails_Logo.svg.png',
							'Jamie Dihiansan http://weblog.rubyonrails.org/2016/1/19/new-rails-identity/2 [CC0]'
						],
						hanami: ['https://avatars3.githubusercontent.com/u/3210273?s=200&v=4'],
						heroku: [
							'https://res.cloudinary.com/diciu4xpu/image/upload/v1554551902/home/projects/logo_heroku.png',
							'Heroku'
						],
						bootstrap: [
							'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Boostrap_logo.svg/200px-Boostrap_logo.svg.png',
							'Bootstrap [Public domain]'
						],
						fontawe: [
							'https://res.cloudinary.com/diciu4xpu/image/upload/v1554551901/home/projects/logo_fontawesome.jpg',
							'Font Awesome'
						],
						mapbox: [
							'https://seeklogo.com/images/M/mapbox-logo-D6FDDD219C-seeklogo.com.png',
							'Seek Logo'
						],
						js: [
							'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png',
							'Ramaksoud2000 via Chris Williams [Public domain]'
						],
						cloudinary: [
							'https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Cloudinary_-_Official_logo.svg/320px-Cloudinary_-_Official_logo.svg.png',
							'cloudinary.com'
						],
						mongo: [
							'https://res.cloudinary.com/diciu4xpu/image/upload/v1554551501/home/projects/logo_mongo.png',
							'MongoDB'
						],
						node: [
							'https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png',
							'NodeJS'
						],
						express: [
							'https://res.cloudinary.com/diciu4xpu/image/upload/v1554551501/home/projects/logo_express.png',
							'Express'
						],
						redux: [
							'https://res.cloudinary.com/diciu4xpu/image/upload/v1554551214/home/projects/logo_redux.png',
							'Redux'
						],
						ricons: [
							'https://react-icons.netlify.com/static/media/react-icons.966a74a6.svg',
							'React Icons'
						],
						styled: [
							'https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png',
							'Styled Components'
						],
						divider: [
							'https://res.cloudinary.com/diciu4xpu/image/upload/v1555408126/home/projects/divider.png',
							'DM'
						],
						ts: [
							'https://www.typescriptlang.org/assets/images/icons/android-chrome-192x192.png',
							'Microsoft'
						],
						html: [
							'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/240px-HTML5_logo_and_wordmark.svg.png',
							'W3C'
						],
						css: [
							'https://res.cloudinary.com/diciu4xpu/image/upload/v1557653599/home/projects/logo_css.png',
							'DM'
						]
					},
					contacts: [
						{
							icon: 'FaGithubAlt',
							description: 'GitHub repositories for projects',
							link: 'https://github.com/d-mv'
						},
						{
							icon: 'FaLinkedinIn',
							description: 'LinkedIn page',
							link: 'https://www.linkedin.com/in/dmitry-melnikov-pm/'
						},
						{ icon: 'FaSkype', description: 'Skype', link: 'skype:dmitry.melnikov?chat' },
						{
							icon: 'FaInstagram',
							description: 'Instagram',
							link: 'https://www.instagram.com/melnikov_dm/'
						},
						{ icon: 'MdEmail', description: 'Mail', link: 'd.dash.mv@gmail.com' }
					]
				};
