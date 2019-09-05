import * as React from 'react';

import './Accordion.scss';

import {getModifiers} from 'components/libs';

type AccordionProps = {
	children: React.ReactNode;
	title?: string;
};

export const Accordion = (props: AccordionProps) => {
	const {title, children} = props;

	const base: string = 'accordion';

	const atts: object = {
		className: getModifiers(base, {}),
	};

	return (
		<div {...atts}>
			<header className={`${base}__header`}>{title}</header>
			<div className={`${base}__body`}>{children}</div>
		</div>
	);
};
