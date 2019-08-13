import React, { useState } from 'react';

import { stringLine } from '../lib/utils';
import { ArrowButton } from '../components';

import { PhotoObj } from '../types';

import Belt from '../style/photos/Belt';
import Photo from '../style/photos/Photo';

export const PhotoBelt = (props: {
	photos: PhotoObj[];
	current: PhotoObj;
	onClick: (arg0: number) => void;
}) => {
	const [left, setLeft] = useState(0);

	const handleArrowClick = (mode: string) => {
		if (mode === 'minus') {
			if (left - 1 >= 0) setLeft(left - 1);
		} else {
			if (left + 5 < props.photos.length) setLeft(left + 1);
		}
	};

	const renderPhotos = () =>
		props.photos.map(
			(photo: PhotoObj, index: number) =>
				index >= left &&
				index < left + 5 && (
					<Photo
						key={index}
						id={`photos__photo_${stringLine([
							index.toString(),
							photo.title,
							photo.location
						])}`}
						image={photo.thumb}
						onClick={() => props.onClick(index)}
					/>
				)
		);

	return (
		<Belt id='photos__belt'>
			<ArrowButton left onClick={handleArrowClick} />
			{renderPhotos()}
			<ArrowButton right onClick={handleArrowClick} />
		</Belt>
	);
};
