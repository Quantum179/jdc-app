<template>
    <div id="app">
      <div class="section">
        <div class="container default">
          <h1>Le Journal du Confiné</h1>
          <div class="btn-list">
            <div class="btn">Présentation</div>
            <div class="btn">Articles</div>
            <div class="btn">A propos</div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="container intro">
          <h2>Présentation</h2>
          <p>Le Journal du Confiné est un blog que j'ai décidé de lancer pour stimuler ma productivité et partager mes activités de confinement. Le développement du blog est le premier défi dans cette quête de productivité. Je me permets donc de le mettre en ligne dès le début de la phase de développement. Le blog est donc actuellement en chantier et volontairement en ligne dans cet état, pour vous permettre de voir l'avancée. Donc, ne soyez pas trop sévères avec l'actuel visuel, il me permet de mieux peaufiner le design responsible grâces aux couleurs. </p>
        </div>
      </div>
      <div class="section">
        <div class="container article">
          <h2>Articles</h2>
          <div class="article-list">
            <div class="article-card">
              <h3>Lancement du blog</h3>
            </div>
            <div class="article-card">
              <h3>Lancement du blog</h3>
            </div>
            <div class="article-card">
              <h3>Lancement du blog</h3>
            </div>
            <div class="article-card">
              <h3>Lancement du blog</h3>
            </div>
            <div class="article-card">
              <h3>Lancement du blog</h3>
            </div>
            <div class="article-card">
              <h3>Lancement du blog</h3>
            </div>
          </div>
          <div class="btn article-btn">Voir tout</div>
        </div>
      </div>
      <div class="section">
        <div class="container about">
          <h2>A propos</h2>
          <p>sdipfjezipf ipsefsipdfblzefsfo ezipfjsdf eipfi sd spidfjp sfipdfjs spfjspdif spifjsipf pfsjpisdf sfpuqpfs psdfjpsifjp psdfjsipfj sdipfjezipf ipsefsipdfblzefsfo ezipfjsdf eipfi sd spidfjp sfipdfjs spfjspdif spifjsipf pfsjpisdf sfpuqpfs psdfjpsifjp psdfjsipfj sdipfjezipf ipsefsipdfblzefsfo ezipfjsdf eipfi sd spidfjp sfipdfjs spfjspdif spifjsipf pfsjpisdf sfpuqpfs psdfjpsifjp psdfjsipfj sdipfjezipf ipsefsipdfblzefsfo ezipfjsdf eipfi sd spidfjp sfipdfjs spfjspdif spifjsipf pfsjpisdf sfpuqpfs psdfjpsifjp psdfjsipfj sdipfjezipf ipsefsipdfblzefsfo ezipfjsdf eipfi sd spidfjp sfipdfjs spfjspdif spifjsipf pfsjpisdf sfpuqpfs psdfjpsifjp psdfjsipfj sdipfjezipf ipsefsipdfblzefsfo ezipfjsdf eipfi sd spidfjp sfipdfjs spfjspdif spifjsipf pfsjpisdf sfpuqpfs psdfjpsifjp psdfjsipfj sdipfjezipf ipsefsipdfblzefsfo ezipfjsdf eipfi sd spidfjp sfipdfjs spfjspdif spifjsipf pfsjpisdf sfpuqpfs psdfjpsifjp psdfjsipfj sdipfjezipf ipsefsipdf</p>
          <div class="link-list">
            <div class="link">TW</div>
            <div class="link">FB</div>
            <div class="link">IG</div>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="stylus">
body
 margin 0

.section
  display flex
  justify-content center
  align-items center
  width 100%
  height 100vh
  background-color red

.btn-list
  grid-area btn
  width 100%
  height 100%
  display flex
  justify-content space-between
  align-items center

.btn {
  display flex
  justify-content center
  align-items center
  width 30%
  height 80%
  font-size 2em
  color white
  cursor pointer
}

.btn:hover {
  background-color rgba(255, 255, 255, 0.6)
  border 2px solid white
  border-radius 5px
  text-decoration underline
}

h1, h2 {
  grid-area title
}

h1 {
  font-size 7em
  text-decoration underline
}

h2 {
  font-size 5em
  text-decoration underline
}

.container {
  display grid
  justify-items center
  width 90%
  height 90%
  background-color blue
}

.container > p {
  grid-area text
  font-size 2em
}

.default {
  align-items center
  grid-template-areas:
  '. . .'\
  'title title title'\
  'btn btn btn'\
  '. . .'
  grid-template-rows 0.20fr 2.5fr 1fr 0.5fr
  grid-template-columns repeat(3, 1fr)
  grid-gap 20px
}

.intro {
  grid-template-areas:
  '. . .'\
  'title title title'\
  'text text text'\
  '. . .'
  grid-template-rows 0.20fr 1fr 2.5fr 0.5fr
  grid-template-columns repeat(3, 1fr)
}

.article {
  grid-template-areas:
  '. . .'\
  'title title title'\
  'list list list'\
  '. btn .'\
  '. . .'
  grid-template-rows 0.20fr 1fr 3fr 1fr 0.5fr
  grid-template-columns repeat(3, 1fr)
}

.about {
  grid-template-areas:
  '. . .'\
  'title title title'\
  'text text text'\
  'link link link'\
  '. . .'
}

.article-list {
  grid-area list
  display flex
  flex-wrap wrap
  // display: grid;
  // grid-auto-flow: column;
  // grid-auto-rows: auto;
  // grid-template-columns: repeat(5, 1fr);
  width 100%
  min-height 50%
}

.article-card {
  display flex
  justify-content center
  align-items center
  width 200px
  height 200px
  background-color yellow
  margin 10px
  cursor pointer
}

.article-btn {
  grid-area btn
}

.link-list {
  grid-area link
  display flex
  justify-content space-between
  align-items center
}

.link {
  background-color gray
  border-radius 50%
}
</style>
