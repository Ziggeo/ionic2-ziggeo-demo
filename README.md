# Ziggeo, Ionic framework integration demo based on `angular-ziggeo` package

### Installation:
- `Ionic CLI`, `Cordova` (`npm install -g cordova ionic`) and `NPM` should be installed.
- Clone repo to you local machine run `npm install`
- Replace all `ZIGGEO_API_KEY` and `VIDEO_TOKEN` in `src/constants.ts` file
- Finally run `ionic serve -c`

#### Ziggeo Additional Parameters

You can add all available all Ziggeo related options from below link:
- [Ziggeo Available Parameters](https://ziggeo.com/docs/sdks/javascript/browser-integration/parameters#javascript-revision=v1-stable&javascript-version=v2)
- [Ziggeo Available Embedding Events](https://ziggeo.com/docs/sdks/javascript/browser-interaction/events)

### NOTES:
To be able test recorder in mobile, you can use native apps `Ionic DevApp`

`src/index.html` including Ziggeo CDN to be able work correctly:
```$html
  <!-- Ziggeo SDK via CDN -->
  <link rel="stylesheet" href="//assets-cdn.ziggeo.com/v1-stable/ziggeo.css" />
  <script src="//assets-cdn.ziggeo.com/v1-stable/ziggeo.js"></script>
```