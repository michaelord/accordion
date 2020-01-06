---
title: Accordion
tags: ["all", "navigation", "toggle", "wip"]
category: "Undefined"
logo: "./thumbnail.jpg"
icon: '<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" fill="none"><rect width="260" height="180" fill="var(--color-bg)"></rect><rect x="25" y="18" width="210" height="80" fill="var(--color-bg)"></rect><path d="M224 39.5L216.5 32L209 39.5" stroke="var(--color-contrast-low)" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path><rect x="37" y="57" width="172" height="6" fill="var(--color-contrast-low)"></rect><rect x="37" y="73" width="128" height="6" fill="var(--color-contrast-low)"></rect><rect x="37" y="31" width="102" height="8" fill="var(--color-contrast-high)"></rect><rect x="25" y="98" width="210" height="32" fill="var(--color-bg)"></rect><path d="M209 108L216.5 115.5L224 108" stroke="var(--color-contrast-low)" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path><rect x="37" y="108" width="82" height="8" fill="var(--color-contrast-high)"></rect><rect x="25" y="130" width="210" height="32" fill="var(--color-bg)"></rect><rect x="25" y="18" width="210" height="2" fill="var(--color-contrast-low)"></rect><rect x="25" y="96" width="210" height="2" fill="var(--color-contrast-low)"></rect><rect x="25" y="128" width="210" height="2" fill="var(--color-contrast-low)"></rect><rect x="25" y="160" width="210" height="2" fill="var(--color-contrast-low)"></rect><path d="M209 141L216.5 148.5L224 141" stroke="var(--color-contrast-low)" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path><rect x="37" y="141" width="113" height="8" fill="var(--color-contrast-high)"></rect></svg>'
published : true
---
import { Playground, PlaygroudCode } from 'components/styleguide';
import {Accordion, Toggle} from 'components/accordion';
import {Alert} from 'components/alert';
import {Block} from 'components/block';
import {Placeholder} from 'components/libs';

import {ToggleDemo, AccordionDemo} from './demo';

[TODO]

<ToggleDemo />

<AccordionDemo />

## Toggle

<Toggle isExpanded={true} title="How can I download the invoice for my purchase?">
    <Placeholder.P />
</Toggle>

<Toggle title="How can I download the invoice for my purchase?">
    <Placeholder.P />
</Toggle>

## Accordion

<Accordion>
    <Toggle title="How can I download the invoice for my purchase?">
        <Placeholder.P />
    </Toggle>
    <Toggle title="How many devices can I use?">
        <Placeholder.P count={2} />
    </Toggle>
    <Toggle title="What is the license of your resources?">
        <Placeholder.P />
    </Toggle>
    <Toggle title="Can I suggest new app features?">
        <Placeholder.P count={2} />
    </Toggle>
</Accordion>
