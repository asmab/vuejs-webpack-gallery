<template lang="html">
  <div class="box">
    <div class="header">
      <nav class="navBar">
        <nav class="wrapper">
          <div class="logo">
            <router-link :to="'/'">
              <img src="../../assets/images/cdon.png" alt="">
            </router-link>
          </div>
          <input type="checkbox" id="menu-toggle">
          <!-- <label for="menu-toggle" class="label-toggle"></label> -->
          <ul id="header-menu-list">
            <li id="div-about">
              Refresh
            </li>
          </ul>
          <div class="menu-lang-switcher current">
            <p class="active">
              <span id="current_language">ref</span>
              <span><img src="../../assets/images/multi-lang-arrow-down.svg" alt=""></span>
            </p>
          </div>
        </nav>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      scrollPosition: null
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.updateScroll)
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
      if (this.scrollPosition > 100) {
        $('#app .box').addClass('scrollActive')
        $('#app .box').removeClass('scrollInActive')
      } else {
        $('#app .box').removeClass('scrollActive')
        $('#app .box').addClass('scrollInActive')
      }
    }
  }
}
</script>

<style lang="sass">
  .scrollActive
    box-shadow: 0 4px 10px #E0E0E0
    transition-duration: .5s

  .scrollInActive
    box-shadow: 0 4px 10px transparent
    transition-duration: .5s
</style>
