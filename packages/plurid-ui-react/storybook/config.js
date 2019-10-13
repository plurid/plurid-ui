import { configure } from '@storybook/react';



const req = require.context('../source/__stories__', true, /.stories.tsx$/);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);
