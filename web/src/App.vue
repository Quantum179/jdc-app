<template>
    <div id="app">
      <router-view></router-view>
    </div>
</template>

<style lang="stylus">
body
  margin 0
  background-color #F5DEB3
  color black

.navbar
  position fixed
  display flex
  justify-content center
  width 100%
  height 100px

.tab-list
  display flex
  justify-content space-between
  align-items center
  width 60%
  background-color white
  margin 0 15px
  & > span
    font-size 2em
    &:hover, &:active
      text-decoration underline

.flex-center
  display flex
  justify-content center
  align-items center

.section
  @extend .flex-center
  width 100%
  height 100vh
  overflow-y hidden

.btn-list
  grid-area btn
  width 100%
  height 100%
  display flex
  justify-content space-between
  align-items center

.btn {
  @extend .flex-center
  width 30%
  height 80%
  font-size 2em
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

.article-list
  grid-area list
  display flex
  flex-wrap wrap
  // display: grid;
  // grid-auto-flow: column;
  // grid-auto-rows: auto;
  // grid-template-columns: repeat(5, 1fr);
  width 100%
  min-height 50%

.article-card
  @extend .flex-center
  width 200px
  height 200px
  margin 10px
  cursor pointer

.article-btn
  grid-area btn

.link-list
  grid-area link
  display flex
  justify-content space-between
  align-items center
  width 100%

.link
  border-radius 50%
</style>
