import React from 'react';

import { storiesOf } from '@storybook/react';
import { imageSize } from '../src/modules/image_size';
import Global from '../src/style/Global';
import Card from '../src/style/Card';
import Photo from '../src/style/card/Photo';
import Title from '../src/style/card/Title';
import Border from '../src/style/card/Border';
import ProjectPhoto from '../src/style/project/Photo';
import TechIcon from '../src/style/project/TechIcon';
import ProjTitle from '../src/style/project/Title';
import Stack from '../src/style/project/Stack';
import Description from '../src/style/project/Description';
import Links from '../src/style/project/Links';
import Link from '../src/style/project/Link';
import CloseButton from '../src/style/project/Close';
import { grey } from '../src/style/tokens/color';
import { Underline } from '../src/style/tokens/animation';
import Modal from '../src/style/Modal';
import Column from '../src/style/Column';
import Content from '../src/style/Content';
import InLine from '../src/style/InLine';
import Line from '../src/style/Line';
import { data } from '../src/data';

storiesOf('Project', module).add('Card', () => (
	<div>
		<Global />
		<Card>
			<Photo image='https://res.cloudinary.com/diciu4xpu/image/upload/v1564832690/home/v2/projects/card__our-change.png' />
			<Border />
			<Title color={grey}>Chaserz</Title>
		</Card>
	</div>
));

storiesOf('Project', module).add('Details', () => (
	<div>
		<Global />
		<Modal id='modal'>
			<InLine id='headline'>
				<ProjTitle id='title'>{data.projects[4].title}</ProjTitle>
				<Line id='line' />
				<CloseButton id='close-button'>
					<Underline>Close</Underline>
				</CloseButton>
			</InLine>
			<Content>
				<Column width='25%'>
					<Stack>
						{data.projects[4].technology.map((el: string, index: number) => (
							<TechIcon image={data.technology[el][0]} delay={index} />
						))}
					</Stack>
					<Description>{data.projects[4].details}</Description>
					<Links>
						<Link>code</Link>
						<Link>deployed</Link>
						<Link>video</Link>
					</Links>
				</Column>
				<Column width='65%'>
					<ProjectPhoto image={imageSize(data.projects[5].photo)}></ProjectPhoto>
				</Column>
			</Content>
		</Modal>
	</div>
));
