import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react'
//import { linkTo } from "@storybook/addon-links";

import { Button } from '../build/index';

const stories = storiesOf('Buttons', module);
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

const css = {
    background: '#212121',
    padding: '20px'
}

stories
    .add('Default', () => (
        <div style={{ padding: '20px' }}>
            <Button onClick={action('clicked')}>{text('Label', 'get started')}</Button>

        </div>

    ))
    .add('reverse', () => {

        const reverse = boolean('reverse', true)
        return (
            <div style={css}>
                <Button reverse={reverse} onClick={action('clicked')}>
                    {text('Label', 'get started')}
                </Button>
            </div>
        )
    })
    .add('reverse outlined', () => {

        const reverse = boolean('reverse', false)
        const outlined = boolean('outlined', true)
        return (
            <div style={css}>
                <Button reverse={reverse} outlined={outlined} onClick={action('clicked')}>
                    {text('Label', 'get started')}
                </Button>
            </div>
        )
    })
