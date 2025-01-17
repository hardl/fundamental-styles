/**
 * @jest-environment jsdom
 */
import path from 'path';
import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots';

// create jest snapshot tests from each story
initStoryshots({
    storyKindRegex: /^((?!.*?(Visual|Ignore|BTP Experimental Design)).)*$/,
    framework: 'html',
    integrityOptions: { cwd: path.join(__dirname, 'stories', 'stories') },
    test: multiSnapshotWithOptions()
});
