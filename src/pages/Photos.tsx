import React, { useState } from 'react';
import Content from '../style/photos/Content';
import { PhotoBelt, Photo } from '../components';

import { data } from '../data/index';

const Photos = () => {
	const { photos } = data;
	const [photo, setPhoto] = useState(0);

	return (
		<Content id='photos__content'>
			<Photo photo={photos[photo]} />
			<PhotoBelt
				photos={photos}
				current={photos[photo]}
				onClick={setPhoto}
			/>
		</Content>
	);
};

export default Photos;
