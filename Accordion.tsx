import {getModifiers} from 'components/libs';
import * as Types from 'components/types';
import React from 'react';
import './Accordion.scss';

export type AccordionProps = {
	isExpanded?: boolean;
	id?: Types.ID;
	children: Types.Children;
	title?: Types.Text;
};

export const Accordion = (props: AccordionProps) => {
	const base: string = 'accordion';

	const {children} = props;

	const atts: object = {
		className: getModifiers(base, {}),
	};

	return <div {...atts}>{children}</div>;
};
