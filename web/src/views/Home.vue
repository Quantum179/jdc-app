<template>
  <div class="home">
    <div class="navbar">
      <p style="color:red">Navbar temporaire</p>
      <div class="tab-list">
          <span @click="section = 1">Présentation</span>
          <span @click="section = 2">Articles</span>
          <span @click="section = 3">A propos</span>
      </div>
      <p style="color:red">Navbar temporaire</p>
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
          <h2>Présentation</h2>
          <p>Le Journal du Confiné est un blog que j'ai décidé de lancer pour stimuler ma productivité et partager mes activités de confinement.<br><br>Le développement du blog est le premier des nombreux défis que j'aimerais relever. Je me permets donc de le mettre volontairement en ligne dès le début de la phase de développement, pendant qu'il est encore inachevé.<br><br>Cela permettra ainsi de voir son évolution au fil des mises à jour du code, donc ne soyez pas trop sévères si certaines fonctionnalités sont incomplètes ou certains visuels moches.<br>Il y aura bientôt un espace commentaire, pour ceux qui souhaitent participer au développement en faisant des retours utilisateurs.<br><br>A bientôt pour les premiers articles ! </p>
        </div>
        <div class="article" key="3" v-if="section === 2">
          <h2>Articles</h2>
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
            <div class="article-card">
              <h3>Article de test 4</h3>
            </div>
            <div class="article-card">
              <h3>Article de test 5</h3>
            </div>
          </div>
          <div class="btn article-btn">Voir tout</div>
        </div>
        <div class="about" key="4" v-if="section === 3">
          <h2>A propos</h2>
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
      section: 0
    }
  },
  methods: {
    // changeSection() {
    //   if (this.scrolled) { return }

    //   console.log(window.scrollY)
    //   console.log(this.scrollY)

    //   if (window.scrollY > this.scrollY && this.section < 3) {
    //     this.scrolled = true
    //     this.section += 1
    //   } else if (window.scrollY < this.scrollY && this.section > 0) {
    //     this.scrolled = true
    //     this.section -= 1
    //   }

    //   setTimeout(() => {
    //     window.scrollTo(0, 5)
    //     this.scrollY = 5
    //     this.scrolled = false
    //   }, 2000)
    // }
  },
  // created() {
  //   window.addEventListener('scroll', this.changeSection);
  // },
  // destroyed() {
  //   window.removeEventListener('scroll', this.changeSection);
  // }
}
</script>

<style lang="stylus">
.container
  display grid
  justify-items center
  width 90%
  height 90%

p
  grid-area text
  font-size 2em

.default, .intro, .article, .about
  @extend .container

.default
  align-items center
  grid-template-areas:
  '. . .'\
  'title title title'\
  'btn btn btn'\
  '. . .'
  grid-template-rows 0.20fr 2.5fr 1fr 0.5fr
  grid-template-columns repeat(3, 1fr)
  grid-gap 20px

.intro
  grid-template-areas:
  '. . .'\
  'title title title'\
  'text text text'\
  '. . .'
  grid-template-rows 0.20fr 1fr 2.5fr 0.5fr
  grid-template-columns repeat(3, 1fr)

.article
  grid-template-areas:
  '. . .'\
  'title title title'\
  'list list list'\
  '. btn .'\
  '. . .'
  grid-template-rows 0.20fr 1fr 3fr 1fr 0.5fr
  grid-template-columns repeat(3, 1fr)

.about
  grid-template-areas:
  '. . .'\
  'title title title'\
  'text text text'\
  'link link link'\
  '. . .'

.fade-enter-active, .fade-leave-active
  transition opacity 1s

.fade-enter, .fade-leave-to
  opacity 0
</style>
