# Tailwind + Style Dictionary

This project is designed as a demo showing off the capabilities of 
[Style Dictionary](https://amzn.github.io/style-dictionary/#/), 
[Tailwind](https://tailwindcss.com/), 
and [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).

## Quick Setup

This quick setup adds bundling and serving via Parcel and Tailwind's JIT mode.

- `npm install`
- `npm start`

This will launch a dev server with hello, world! All site tokens have been are precompiled and saved.

## Adding Tokens

To change tokens for spacing and color, visit the [tokens](./src/assets/tokens) directory. You can add
as many JSON files here as makes sense. By running `npm run tokens` you will re-write the CSS Custom Properties
[file](./src/assets/css/base/_variables.css) and update the [tokens](./src/assets/tailwind-tokens.json)
file for Tailwind.

Note: if you are adding tokens, simply updating the Tailwind Tokens file is not enough to update your Tailwind
configuration. You will also need to manually add your new key in Tailwind [configuration](./tailwind.config.js).
