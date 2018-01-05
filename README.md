# Ziggeo, Ionic framework integration demo

### Installation:
- clone repo to you local machine run `npm install`
- Replace all `ZIGGEO_API_KEY` and `VIDEO_TOKEN` in files:
    -- `src/pages/player/player.html`
    -- `src/pages/recorder/recorder.html`
- Finally run `ionic serve -c`


### NOTE:
`index.html` including Ziggeo CDN to be able work correctly:
```$html
  <!-- Ziggeo SDK via CDN -->
  <link rel="stylesheet" href="//assets-cdn.ziggeo.com/v1-stable/ziggeo.css" />
  <script src="//assets-cdn.ziggeo.com/v1-stable/ziggeo.js"></script>
```