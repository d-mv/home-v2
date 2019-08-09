import React from 'react';
import Content from '../style/home/Content';
import Photo from '../style/home/Photo';
import Column from '../style//home/Column';
import { Message } from '../components/Message';

const Home = () => (
	<Content id='home__content'>
		<Column id='home__column-left'>
			<Message />
		</Column>
		<Column id='home__column-right'>
			<Photo
				id='home__avatar'
				image='https://res.cloudinary.com/diciu4xpu/image/upload/v1565120083/home/v2/home/avatar.jpg'
			/>
		</Column>
	</Content>
);

export default Home;
