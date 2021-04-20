<template>
  <div id="header_bar">
    <nav>
<!--      <b-navbar toggleable="lg" type="dark" variant="info">-->
      <b-navbar toggleable="lg" type="light">
        <b-navbar-brand href="#">
          <img src="./assets/img/logo.png" alt="Kitten" style="max-height: 40px;max-width: 130px;">
<!--          <img src="https://placekitten.com/g/30/30" alt="Kitten">-->
          OURSBLOG
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
<!--          <b-navbar-nav>-->
<!--            <b-nav-item href="#">Link</b-nav-item>-->
<!--            <b-nav-item href="#" disabled>Disabled</b-nav-item>-->
<!--          </b-navbar-nav>-->
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav>
              <b-nav-item to="/blog/index">JAVA</b-nav-item>
              <b-nav-item href="#" disabled>python</b-nav-item>
              <b-nav-item active>大数据</b-nav-item>
              <b-nav-item-dropdown
                id="my-nav-dropdown"
                text="前端"
                toggle-class="nav-link-custom"
                right
              >
                <b-dropdown-item>HTML</b-dropdown-item>
                <b-dropdown-item>CSS</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>JS</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">搜索</b-button>
            </b-nav-form>
            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>admin</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </nav>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'HeaderBar',
  mounted () {
    window.addEventListener('scroll', this.getScroll)
  },
  methods: {
    getScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop)
      if (scrollTop > 0) {
        // 滚动大于0的时候要做的操作
        $('#header_bar').css('opacity', 1)
      } else {
        $('#header_bar').css('opacity', 0)
      }
    }
  }
}
</script>

<style scoped>
  #header_bar{
    width: 100%;
    opacity: 0;
    transition: opacity 1.5s;
    position: fixed;
    z-index: 100;
    background-color: #fff;
    box-shadow: 0 2px 4px #e1e5e9;
  }
</style>
