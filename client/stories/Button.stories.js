import React from 'react';

import {storiesOf} from '@storybook/react';
import Button from '../src/components/Button';

storiesOf('Button', module).addWithJSX('With custom text', () => (
	<Button text='custom text' />
));