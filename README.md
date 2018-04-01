# simple-measurements

iOS / Android app providing a simple and non-bloated interface for quickly converting measurements from one metric to another.

## Commands

- `npm run lint`: Lint the codebase.
- `npm test`: Run the test suite (Jest) on the codebase.
- `npm get-todos`: Get all todos from the codebase and export to `TODO` file.
- `npm start`: Start the React Native bundler.

## Structure

The app is extremely simple and straightforward; and built to run off of themeable routes that define different conversions. The main module (`lib/App.js`) stores the current active route; and passes that down to the conversion views which render the different metrics and run the proper conversions when necessary.

### Routes

Routes (`lib/Routes.js`) take the following structure:

```js
{
  path: '/route-path',
  label: 'viewer readable label',
  theme: Colours.GREEN,
  category: Categories.weight,
  // First value calculation functions
  calcX: x => x * 0.45359237,
  labelX: 'lbs',
  placeholderX: '1',
  // Second value calculation functions
  calcY: y => y / 2.20462262185,
  labelY: 'kgs',
  placeholderY: '0.45',
}
```

### Themes

The themes use the material colour palette and are defined in `lib/Utils/Colours`. Each color defines a stylesheet which defines values for a number of elements; this way the values are already cached and ready to go when they are needed. The actual colours values are stored in a normal JS object in `lib/Utils/Colours.styles`. The theme stylesheet gets added to a route, which then gets passed down to the components that need to render via the theme.

### Categories

Categories define what specific metrics belong to so its a bit easier for the viewer to visually grep what they need. There are two parts to the categories: The enum and the icon for the category.

The main category enum is defined inside of `lib/Routes` and exposed as an export from the module. All icons are exported and added into an icon font via [Glyphter](https://glyphter.com/), and the key bindings are then added into `lib/Utils/Icons` binded to the respective enum value for the icon.