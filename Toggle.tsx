import {Text} from 'components/editable';
import {IconOpener} from 'components/icon';
import {generateGUID, getModifiers} from 'components/libs';
import * as Types from 'components/types';
import React, {useState} from 'react';
import './Toggle.scss';

export type ToggleProps = {
	title: Types.Text;
	children: Types.Children;
	isExpanded?: boolean;
	id?: Types.ID;
	padding?: Types.Padding;
	style?: 'default' | 'basic';
};

export const Toggle = (props: ToggleProps) => {
	const {title, children, isExpanded = false, id = undefined, padding, style = 'default'} = props;

	const [expanded, setExpanded] = useState(isExpanded);

	const base: string = 'toggle';

	const atts: object = {
		className: getModifiers(base, {
			active: expanded,
			padding,
			style: `style-${style}`,
		}),
		id,
	};

	const guid: string = id || generateGUID('accordion');

	const onClick = (ev: React.MouseEvent) => {
		ev.preventDefault();

		setExpanded(!expanded);
	};

	return (
		<div {...atts}>
			<button
				className={`${base}__header`}
				onClick={onClick}
				type="button"
				aria-expanded={expanded}
				aria-controls={`${guid}-content`}
				id={`${guid}-header`}
			>
				<Text content={title} className={`${base}__title`} />

				<IconOpener className={`${base}__icon`} />
			</button>
			<div className={`${base}__body`} aria-labelledby={`${guid}-header`} id={`${guid}-content`}>
				<div className={`${base}__content`}>{children}</div>
			</div>
		</div>
	);
};
