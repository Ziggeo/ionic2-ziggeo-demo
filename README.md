# Ziggeo, Ionic framework integration demo

### Installation:
- clone repo to you local machine run `npm install`
- Replace all `ZIGGEO_API_KEY` and `VIDEO_TOKEN` in `src/constants.ts` file
- Finally run `ionic serve -c`


### NOTES:
To be able test recorder in mobile, you can use native apps `Ionic DevApp`

`index.html` including Ziggeo CDN to be able work correctly:
```$html
  <!-- Ziggeo SDK via CDN -->
  <link rel="stylesheet" href="//assets-cdn.ziggeo.com/v1-stable/ziggeo.css" />
  <script src="//assets-cdn.ziggeo.com/v1-stable/ziggeo.js"></script>
```