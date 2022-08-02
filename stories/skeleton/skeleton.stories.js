export default {
    title: 'Components/Skeleton',
    parameters: {
        description: `
Skeleton is the replacement for the old spinner loading component. Using skeleton you can show a placeholder of a certain shape while data is being loaded.

Elements structure:
* \`fd-skeleton\` Skeleton (rectangular, default)
* \`fd-skeleton--circle\` Circle skeleton
* \`fd-skeleton--text\` Text skeleton, shown even for an empty text elements, inherits height from the font-size style property.
* \`fd-skeleton--animated\` Animated skeleton (can be applied with other skeleton modifier classes).
* \`fd-skeleton--native\` Native skeleton, created without pseudo elements.
`,
        tags: ['f3'],
        components: ['skeleton', 'input', 'button']
    }
};

export const Default = () => `<h3>Default skeleton</h3>

<div style="width: 100px; height: 50px" class="fd-skeleton"></div>

<h3>Circle skeleton</h3>

<div style="width: 50px; height: 50px" class="fd-skeleton fd-skeleton--circle"></div>

<h3>Text skeleton</h3>

<h4>Applied to the empty paragraph element but inherits height from the font-size style property.</h4>

<p class="fd-skeleton fd-skeleton--text"></p>

<h3>Native skeleton</h3>

<h4>Skeleton created without using of pseudo elements.</h4>

<input class="fd-input" placeholder="Input element cannot have pseudo elements inside of it"/>

<br />

<input class="fd-input fd-skeleton fd-skeleton--native" tabindex="-1" />

<h3>Wrapper skeleton</h3>

<h4>Skeleton takes the same size & shape as the element.</h4>

<button class="fd-button fd-button--primary">Button</button>

<button class="fd-button fd-button--primary fd-skeleton" tabindex="-1">Button</button>

<p class="fd-text">Some text...</p>

<p class="fd-text fd-skeleton">Some text...</p>

<h3>Animated skeleton</h3>

<div style="width: 100px; height: 50px" class="fd-skeleton fd-skeleton--animated"></div>

<br />

<div style="width: 50px; height: 50px" class="fd-skeleton fd-skeleton--circle fd-skeleton--animated"></div>

<br />

<p class="fd-skeleton fd-skeleton--text fd-skeleton--animated"></p>

`;
