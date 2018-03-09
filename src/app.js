Vue.component('font', {
  template: `
    <div>
      <h1>Font select</h1>
      <a @click="visibleFonts">{{selectFont}}<b :class="[changeArrow]"></b></a>
      <ul :style="{ display: hasOpen }">
        <li v-for="currentFont in fonts" :style="{fontFamily: currentFont.font, fontWeight: currentFont.fontWeight}" v-text="currentFont.font + (!isNaN(currentFont.fontWeight)? (':' + currentFont.fontWeight):'')" @click="changeFont"></li>
      </ul>
      <p :style="{fontFamily: selectedFont[0], fontWeight: selectedFont[1]}">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    `,
  data: () => ({
    selectFont: 'Select a font',
    hasOpen: "none",
    selectedFont: [],
    changeArrow: '',
    fonts: [
      { font: 'Aclonica', fontWeight: 'auto' },
      { font: 'Allan', fontWeight: 'auto' },
      { font: 'Annie Use Your Telescope', fontWeight: 'auto' },
      { font: 'Anonymous Pro', fontWeight: 'auto' },
      { font: 'Allerta Stencil', fontWeight: 'auto' },
      { font: 'Amaranth', fontWeight: 'auto' },
      { font: 'Anton', fontWeight: 'auto' },
      { font: 'Architects Daughter', fontWeight: 'auto' },
      { font: 'Arimo', fontWeight: 'auto' },
      { font: 'Artifika', fontWeight: 'auto' },
      { font: 'Arvo', fontWeight: 'auto' },
      { font: 'Cabin', fontWeight: 'auto' },
      { font: 'Calligraffitti', fontWeight: 'auto' },
      { font: 'Candal', fontWeight: 'auto' },
      { font: 'Cantarell', fontWeight: 'auto' },
      { font: 'Cardo', fontWeight: 'auto' },
      { font: 'Carter One', fontWeight: 'auto' },
      { font: 'Caudex', fontWeight: 'auto' },
      { font: 'Cedarville Cursive', fontWeight: 'auto' },
      { font: 'Cherry Cream Soda', fontWeight: 'auto' },
      { font: 'Chewy', fontWeight: 'auto' },
      { font: 'Coda', fontWeight: 'auto' },
      { font: 'Coming Soon', fontWeight: 'auto' },
      { font: 'Copse', fontWeight: 'auto' },
      { font: 'Corben', fontWeight: '700' },
      { font: 'Jura', fontWeight: '500' },
      { font: 'Jura', fontWeight: '600' },
      { font: 'Just Another Hand', fontWeight: 'auto' },
      { font: 'Just Me Again Down Here', fontWeight: 'auto' },
      { font: 'Kameron', fontWeight: 'auto' },
      { font: 'Kenia', fontWeight: 'auto' },
      { font: 'Kranky', fontWeight: 'auto' },
      { font: 'Kreon', fontWeight: 'auto' },
      { font: 'MedievalSharp', fontWeight: 'auto' },
      { font: 'Megrim', fontWeight: 'auto' },
      { font: 'Merriweather', fontWeight: 'auto' },
      { font: 'Metrophobic', fontWeight: 'auto' },
      { font: 'Michroma', fontWeight: 'auto' },
      { font: 'iltonian Tattoo', fontWeight: 'auto' },
      { font: 'Modern Antiqua', fontWeight: 'auto' },
      { font: 'Open Sans:800', fontWeight: 'auto' },
      { font: 'Open Sans Condensed', fontWeight: '300' },
      { font: 'Orbitron', fontWeight: 'auto' },
      { font: 'Orbitron', fontWeight: '500' },
      { font: 'Orbitron', fontWeight: '700' },
      { font: 'Orbitron', fontWeight: '900' },
      { font: 'Oswald', fontWeight: 'auto' },
      { font: 'Over the Rainbow', fontWeight: 'auto' },
      { font: 'Ruslan Display', fontWeight: 'auto' },
      { font: 'Schoolbell', fontWeight: 'auto' },
      { font: 'Shadows Into Light', fontWeight: 'auto' },
      { font: 'Shanti', fontWeight: 'auto' },
      { font: 'Sigmar One', fontWeight: 'auto' },
      { font: 'Six Caps', fontWeight: 'auto' },
      { font: 'Slackey', fontWeight: 'auto' },
      { font: 'Smythe', fontWeight: 'auto' },
      { font: 'UnifrakturMaguntia', fontWeight: 'auto' },
      { font: 'Varela', fontWeight: 'auto' },
      { font: 'Varela Round', fontWeight: 'auto' },
      { font: 'Vibur', fontWeight: 'auto' },
      { font: 'Vollkorn', fontWeight: 'auto' },
      { font: 'VT323', fontWeight: 'auto' },
      { font: 'Waiting for the Sunrise', fontWeight: 'auto' },
      { font: 'Wallpoet', fontWeight: 'auto' },
      { font: 'Yanone Kaffeesatz', fontWeight: 'auto' },
      { font: 'Yanone Kaffeesatz', fontWeight: '300' },
      { font: 'Yanone Kaffeesatz', fontWeight: '400' },
      { font: 'Yanone Kaffeesatz', fontWeight: '700' },
      { font: 'Yeseva One', fontWeight: 'auto' },
      { font: 'Zeyada', fontWeight: 'auto' },
      { font: 'Walter Turncoat', fontWeight: 'auto' },
      { font: 'Wire One', fontWeight: 'auto' },
    ],
  }),
  methods: {
    visibleFonts() {
      if (this.hasOpen == "none") {
        this.hasOpen = "block";
        this.changeArrow = "arrow";
      }
      else {
        this.hasOpen = "none";
        this.changeArrow = "";
      }
    },
    changeFont(e) {
      this.selectFont = e.target.innerText;
      this.selectedFont = e.target.innerText.split(":", 2);
      if (this.selectedFont[0].substr(-4, 4) == "null") {
        this.selectedFont[0] = this.selectedFont[0].substr(0, this.selectedFont[0].length - 4);
      }
      this.hasOpen = "none";
    }
  }
});

new Vue({
  el: '#font',
})
