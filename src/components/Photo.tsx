import React from 'react';

import { PhotoObj } from '../types';
import Main from '../style/photos/Main';
import Data from '../style/photos/Data';
import Title from '../style/photos/Title';
import Location from '../style/photos/Location';
import { stringLine } from '../lib/utils';
import { useSpring } from 'react-spring';

export const Photo = (props: { photo: PhotoObj }) => (
	<Main
		id={`photos__main-${stringLine([props.photo.title, props.photo.location])}`}
		image={props.photo.large}
		style={useSpring({
			from: { opacity: 0 },
			to: { opacity: 1 }
		})}>
		<Data id='photos__main_data-wrapper'>
			<Title id='photos__main_title'>{props.photo.title}</Title>
			<Location id='photos__main_location'>{props.photo.location}</Location>
		</Data>
	</Main>
);
