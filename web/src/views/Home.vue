<template>
  <div class="home">
    <div class="navbar">
      <!-- <p style="color:red">temporaire</p> -->
      <div class="tab-list">
          <span @click="section = 1">Présentation</span>
          <span @click="section = 2">Articles</span>
          <span @click="section = 3">A propos</span>
      </div>
      <!-- <p style="color:red">temporaire</p> -->
    </div>
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
          <p>Le Journal du Confiné est un blog que j'ai décidé de lancer pour stimuler ma productivité et partager mes activités de confinement.<br><br>Le développement du blog est le premier des nombreux défis que j'aimerais relever. Je me permets donc de le mettre volontairement en ligne dès le début de la phase de développement, pendant qu'il est encore inachevé.<br><br>Cela permettra ainsi de voir son évolution au fil des mises à jour du code, donc ne soyez pas trop sévères si certaines fonctionnalités sont incomplètes ou certains visuels moches.<br>Il y aura bientôt un espace commentaire, pour ceux qui souhaitent participer au développement en faisant des retours utilisateurs.<br><br>A bientôt pour les premiers articles !<br></p>
        </div>
        <div class="article" key="3" v-if="section === 2">
          <h1>Articles</h1>
          <div class="article-list">
            <div class="article-card">
              <h3>Lancement du blog</h3>
            </div>
            <div class="article-card">
              <h3>Article de test 1</h3>
            </div>
            <div class="article-card">
              <h3>Article de test 2</h3>
            </div>
            <div class="article-card">
              <h3>Article de test 3</h3>
            </div>
            <div class="article-card" v-if="mediaSize === 'desktop'">
              <h3>Article de test 4</h3>
            </div>
            <div class="article-card" v-if="mediaSize === 'desktop'">
              <h3>Article de test 5</h3>
            </div>
          </div>
          <div class="btn article-btn">Voir tout</div>
        </div>
        <div class="about" key="4" v-if="section === 3">
          <h1>A propos</h1>
          <p>sdipfjezipf ipsefsipdfblzefsfo ezipfjsdf eipfi sd spidfjp sfipdfjs spfjspdif spifjsipf pfsjpisdf sfpuqpfs psdfjpsifjp psdfjsipfj sdipfjezipf ipsefsipdfblzefsfo ezipfjsdf eipfi sd spidfjp sfipdfjs spfjspdif spifjsipf pfsjpisdf sfpuqpfs psdfjpsifjp psdfjsipfj sdipfjezipf ipsefsipdfblzefsfo ezipfjsdf eipfi sd spidfjp sfipdfjs spfjspdif spifjsipf pfsjpisdf sfpuqpfs psdfjpsifjp psdfjsipfj sdipfjezipf ipsefsipdfblzefsfo ezipfjsdf eipfi sd spidfjp sfipdfjs spfjspdif spifjsipf pfsjpisdf sfpuqpfs psdfjpsifjp psdfjsipfj sdipfjezipf ipsefsipdfblzefsfo ezipfjsdf eipfi sd spidfjp sfipdfjs spfjspdif spifjsipf pfsjpisdf sfpuqpfs psdfjpsifjp psdfjsipfj sdipfjezipf ipsefsipdfblzefsfo ezipfjsdf eipfi sd spidfjp sfipdfjs spfjspdif spifjsipf pfsjpisdf sfpuqpfs psdfjpsifjp psdfjsipfj sdipfjezipf ipsefsipdfblzefsfo ezipfjsdf eipfi sd spidfjp sfipdfjs spfjspdif spifjsipf pfsjpisdf sfpuqpfs psdfjpsifjp psdfjsipfj sdipfjezipf ipsefsipdf</p>
          <div class="link-list">
            <div class="link">Twitter</div>
            <div class="link">Facebook</div>
            <div class="link">Instagram</div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      section: 0,
      mediaSize: 'mobile',
      mq: null
    }
  },
  created() {
    if (matchMedia) {
      this.mq = window.matchMedia('(min-width:768px)')
      this.mq.addListener(this.changeMediaSize)
      this.changeMediaSize(this.mq)
    }
    // window.addEventListener('scroll', this.changeSection);
  },
  destroyed() {
    if (matchMedia) {
      this.mq.removeListener(this.changeMediaSize)
    }
    // window.removeEventListener('scroll', this.changeSection);
  },
  methods: {
    changeMediaSize(mq) {
      console.log('test')
      if (mq.matches) {
        this.mediaSize = 'desktop'
      } else {
        this.mediaSize = 'mobile'
      }
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
    }
  },

}
</script>

<style lang="stylus">
@import "../style/app"

.navbar
  position fixed
  display flex
  justify-content center
  width 100%
  height 50px

.tab-list
  display flex
  justify-content space-between
  align-items center
  width 80%
  background-color white
  margin 0 10px
  padding 0 10px
  & > span:hover
    font-size 1.2em
    text-decoration underline

.default, .intro, .article, .about
  @extend .container

.default
  align-items center
  grid-template-areas:
  '. . .'\
  'title title title'\
  '. btn .'\
  '. . .'
  grid-template-rows 0.25fr 1.5fr 3fr 0.25fr
  grid-template-columns 1fr 2fr 1fr
  grid-gap 10px

.intro
  grid-template-areas:
  '. . .'\
  'title title title'\
  'text text text'\
  '. . .'
  grid-template-rows 0.25fr 1fr 2fr 0.25fr
  grid-template-columns repeat(3, 1fr)

.article
  grid-template-areas:
  '. . .'\
  'title title title'\
  'list list list'\
  '. btn .'\
  '. . .'
  grid-template-rows 0.25fr 1fr auto 1fr 0.25fr
  grid-template-columns repeat(3, 1fr)

.about
  grid-template-areas:
  '. . .'\
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
  background-color rgba(255, 255, 255, 0.6)
  border 2px solid white
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
  min-height 50%

.article-card
  @extend .flex-center
  width 120px
  height 120px
  margin 10px
  cursor pointer
  background-color rgba(255, 255, 255, 0.7)

.article-btn
  grid-area btn

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
