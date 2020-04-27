<template>
  <div class="home">
    <transition>
      <div class="navbar" v-if="$router.currentRoute.name === 'Home'" key="1">
      <!-- <p style="color:red">temporaire</p> -->
      <div class="tab-list">
          <span @click="section = 1">Présentation</span>
          <span @click="section = 2">Articles</span>
          <span @click="section = 3">A propos</span>
      </div>
      <!-- <p style="color:red">temporaire</p> -->
    </div>
    <div class="home-icon" v-else key="2">JdC</div>

    </transition>
    <div class="section">
      <transition name="fade" mode="out-in">
        <div class="default" key="1" v-if="section === 0">
          <h1>Le Journal du Confiné</h1>
          <div class="btn-list">
            <div class="btn" @click="section = 1">Présentation</div>
            <div class="btn" @click="section = 2">Articles</div>
            <div class="btn" @click="section = 3">A propos</div>
          </div>
        </div>
        <div class="intro" key="2" v-if="section === 1">
          <h1>Présentation</h1>
          <p>Le Journal du Confiné est un blog que j'ai décidé de lancer pour stimuler ma productivité et partager mes activités de confinement.<br><br>Le développement du blog est le premier des nombreux défis que j'aimerais relever. Je le mets donc volontairement en ligne dès le début de la phase de développement, pendant qu'il est encore inachevé.<br><br>Cela permettra ainsi de voir son évolution au fil des mises à jour du code, donc ne soyez pas trop sévères si certaines fonctionnalités sont incomplètes ou certains visuels moches.<br>Il y aura bientôt un espace commentaire, pour ceux qui souhaitent participer au développement en faisant des retours utilisateurs.<br><br>A bientôt pour les premiers articles !<br></p>
        </div>
        <div class="article" key="3" v-if="section === 2">
          <h1>Articles</h1>
          <div class="article-list">
            <div class="article-card" :style="size">
              <h3>Lancement du blog</h3>
            </div>
            <div class="article-card" :style="size">
              <h3>Article de test 1</h3>
            </div>
            <div class="article-card" :style="size">
              <h3>Article de test 2</h3>
            </div>
            <div class="article-card" :style="size">
              <h3>Article de test 3</h3>
            </div>
            <div class="article-card" :style="size" v-if="mediaSize > 1">
              <h3>Article de test 4</h3>
            </div>
            <div class="article-card"  :style="size" v-if="mediaSize > 1">
              <h3>Article de test 5</h3>
            </div>
            <div class="article-card" :style="size" v-if="mediaSize > 2">
              <h3>Article de test 4</h3>
            </div>
            <div class="article-card"  :style="size" v-if="mediaSize > 2">
              <h3>Article de test 5</h3>
            </div>
          </div>
          <div class="btn article-btn">Voir tout</div>
        </div>
        <div class="about" key="4" v-if="section === 3">
          <h1>A propos</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante tortor, fringilla nec vestibulum et, consequat sagittis ante. Donec sodales orci quis rutrum ornare. Nulla in finibus felis. Donec eros turpis, tempus ac velit non, tristique dignissim quam. Proin feugiat tortor cursus nibh dapibus lobortis. Etiam quis tincidunt tortor, quis efficitur purus. Suspendisse potenti. Sed at mi vitae sapien blandit convallis non at elit.</p>
          <div class="link-list">
            <div class="link">GitHub</div>
            <div class="link">LinkedIn</div>
          </div>
        </div>
      </transition>
    </div>
  </div>
  <!-- <img class="flexible"
     src="http://robgravelle.com/news/@/Storage/_files/91/file.jpg"
     alt="Rob G"
     data-image-small="https://lh6.googleusercontent.com/-TsXKfdqFFYE/AAAAAAAAAAI/AAAAAAAAABQ/Y3JQpBQdLSo/photo.jpg?sz=328"
     data-image-medium="http://www.robgravelle.com/@/Photos/_entries/28/photo-full.jpg"
     data-image-large="http://robgravelle.com/news/@/Storage/_files/91/file.jpg" /> -->
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      section: 0,
      mediaSize: 1,
      mq: null,
      cardWidth: null
    }
  },
  computed: {
    size() {
      return { width: `${this.cardWidth}%`, 'padding-bottom': `${this.cardWidth * 0.8}%` }
    }
  },
  mounted() {
    this.changeCardWidth()
  },
  created() {
    if (matchMedia) {
      this.queryMobile = window.matchMedia('(max-width:480px)')
      this.queryTablet = window.matchMedia('(min-width: 768px) and (max-width: 1024px)')
      this.queryDesktop = window.matchMedia('(min-width:1024px)')

      window.addEventListener('resize', this.changeMediaSize)

      this.changeMediaSize()
    }
    // window.addEventListener('scroll', this.changeSection);
  },
  destroyed() {
    if (matchMedia) {
      window.removeEventListener('resize', this.changeMediaSize)
    }

    // window.removeEventListener('scroll', this.changeSection);
  },
  methods: {
    changeMediaSize() {
      if (this.mediaSize !== 1 && this.queryMobile.matches) {
        this.mediaSize = 1
      }
      if (this.mediaSize !== 2 && this.queryTablet.matches) {
        this.mediaSize = 2
      }
      if (this.mediaSize !== 3 && this.queryDesktop.matches) {
        this.mediaSize = 3
      }

      this.changeCardWidth()
    },
    changeSection() {
      if (this.scrolled) { return }

      console.log(window.scrollY)
      console.log(this.scrollY)

      if (window.scrollY > this.scrollY && this.section < 3) {
        this.scrolled = true
        this.section += 1
      } else if (window.scrollY < this.scrollY && this.section > 0) {
        this.scrolled = true
        this.section -= 1
      }

      setTimeout(() => {
        window.scrollTo(0, 5)
        this.scrollY = 5
        this.scrolled = false
      }, 2000)
    },
    changeCardWidth() {
      const width = window.innerWidth

      if (width <= 0) { return }

      if (width < 768) {
        this.cardWidth = 80
      } else if (width < 1025) {
        this.cardWidth = 30
      } else {
        this.cardWidth = 20
      }
    }
  },

}
</script>

<style lang="stylus">
@import "../style/app"

.home-icon, .navbar
  position fixed
  @extend .flex-center

.navbar
  display flex
  justify-content center
  width 100%
  height 10vh
  top 0

.tab-list
  display flex
  justify-content space-between
  align-items center
  width 80%
  height 100%
  background-color white
  margin 0 10px
  padding 0 10px
  & > span:hover
    font-size 1.2em
    text-decoration underline

.default, .intro, .article, .about
  @extend .grid

.default
  align-items center
  grid-template-areas:
  'title title title'\
  '. btn .'\
  '. . .'
  grid-template-rows 1fr 3fr 0.5fr
  grid-template-columns 1fr 5fr 1fr
  grid-gap 10px

.intro
  grid-template-areas:
  'title title title'\
  'text text text'\
  '. . .'
  grid-template-rows 1fr 2fr 0.5fr
  grid-template-columns repeat(3, 1fr)

.article
  // @extend .section-content
  // display flex
  // flex 1
  // justify-content center
  // flex-direction column
  grid-template-areas:
  'title title title'\
  'list list list'\
  '. btn .'\
  '. . .'
  grid-template-rows 1fr 1fr 1fr 0.5fr
  grid-template-columns 1fr 2fr 1fr
  grid-gap 20px

.about
  grid-template-areas:
  'title title title'\
  'text text text'\
  'link link link'\
  '. . .'

.btn-list
  grid-area btn
  display flex
  flex-direction column
  justify-content center
  align-items space-between
  width 100%
  height 100%

.btn
  @extend .flex-center
  width 100%
  height 80%
  font-size 2em
  cursor pointer

.btn:hover
  background-color rgba(255, 255, 255, 0.65)
  border 2px solid black
  border-radius 5px
  text-decoration underline

.article-list
  grid-area list
  display flex
  justify-content center
  flex-wrap wrap
  // display: grid;
  // grid-auto-flow: column;
  // grid-auto-rows: auto;
  // grid-template-columns: repeat(5, 1fr);
  width 100%

.article-card
  @extend .flex-center
  margin 10px
  cursor pointer
  background-color rgba(255, 255, 255, 0.7)

.article-btn
  grid-area btn


// /*
//   ##Device = Desktops
//   ##Screen = 1281px to higher resolution desktops
// */

// @media (min-width: 1281px)
//   .article-card
//     width 40%

// /*
//   ##Device = Laptops, Desktops
//   ##Screen = B/w 1025px to 1280px
// */

// @media (min-width: 1025px) and (max-width: 1280px)
//   .article-card
//     width 40%

// /*
//   ##Device = Tablets, Ipads (portrait)
//   ##Screen = B/w 768px to 1024px
// */

// @media (min-width: 768px) and (max-width: 1024px)
//   .article-card
//     width 40%

// /*
//   ##Device = Tablets, Ipads (landscape)
//   ##Screen = B/w 768px to 1024px
// */

// @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape)
//   .article-card
//     width 30%

// /*
//   ##Device = Low Resolution Tablets, Mobiles (Landscape)
//   ##Screen = B/w 481px to 767px
// */

// @media (min-width: 481px) and (max-width: 767px)
//   .article-card
//     width 40%

// .link-list
//   grid-area link
//   display flex
//   justify-content space-between
//   align-items center
//   width 100%

// .link
//   border-radius 50%

// .default, .intro, .article, .about
//   @extend .container

// .default
//   align-items center
//   grid-template-areas:
//   '. . .'\
//   'title title title'\
//   'btn btn btn'\
//   '. . .'
//   grid-template-rows 0.20fr 2.5fr 1fr 0.5fr
//   grid-template-columns repeat(3, 1fr)
//   grid-gap 20px

// .intro
//   grid-template-areas:
//   '. . .'\
//   'title title title'\
//   'text text text'\
//   '. . .'
//   grid-template-rows 0.20fr 1fr 2.5fr 0.5fr
//   grid-template-columns repeat(3, 1fr)

// .article
//   grid-template-areas:
//   '. . .'\
//   'title title title'\
//   'list list list'\
//   '. btn .'\
//   '. . .'
//   grid-template-rows 0.20fr 1fr 3fr 1fr 0.5fr
//   grid-template-columns repeat(3, 1fr)

// .about
//   grid-template-areas:
//   '. . .'\
//   'title title title'\
//   'text text text'\
//   'link link link'\
//   '. . .'

.fade-enter-active, .fade-leave-active
  transition opacity 1s

.fade-enter, .fade-leave-to
  opacity 0
</style>
