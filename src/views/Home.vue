<template>
  <div class="home">
    <!-- <text></text> -->
    <!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>
      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>
      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>
    <!-- 博客内容 -->
    <div class="main blog">
      <b-card-group columns>
        <b-card
          title="Card title that wraps to a new line"
          img-src="https://placekitten.com/g/400/450"
          img-alt="Image"
          img-top
        >
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This content is a little bit longer.
          </b-card-text>
        </b-card>
        <b-card header="Quote">
          <blockquote class="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer class="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </b-card>
        <b-card title="Title" img-src="https://placekitten.com/500/350" img-alt="Image" img-top>
          <b-card-text>
            This card has supporting text below as a natural lead-in to additional content.
          </b-card-text>
          <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
        </b-card>
        <b-card bg-variant="primary" text-variant="white">
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>
              <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
            </footer>
          </blockquote>
        </b-card>
        <b-card>
          <b-card-title>Title</b-card-title>
          <b-card-text>
            This card has supporting text below as a natural lead-in to additional content.
          </b-card-text>
          <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
        </b-card>
        <b-card img-src="https://picsum.photos/400/400/?image=41" img-alt="Image" overlay></b-card>
        <b-card img-src="https://picsum.photos/400/200/?image=41" img-alt="Image" img-top>
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This card has even longer content than the first.
          </b-card-text>
          <template #footer>
            <small class="text-muted">Footer Text</small>
          </template>
        </b-card>
      </b-card-group>
    </div>
    <component :is="com"></component>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { registryComponents } from './../plugins/index'
export default {
  name: 'Home',
  components: {
    // HelloWorld
    ...registryComponents
  },
  data () {
    return {
      com: 'm-text',
      slide: 0,
      sliding: null
    }
  },
  mounted () {
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style scoped lang="less">
  .home {
    /*margin-top: 10px;*/
  }
  .blog{
    padding: 20px 15px;
  }
  /deep/ .card{
    overflow: hidden;
    transition: all 1s;
    img{
      transition: transform 1s;
      transform-origin: center bottom;
    }
  }
  /deep/ .card:hover {
    box-shadow: 0 1px 20px 1px rgba(0, 0, 0, .5);
    img{
      transform: scale(1.1);
    }
  }
  @media screen and (min-width: 576px) {
    /deep/ .card-columns {
      -moz-column-count: 2;
      column-count: 2;
    }
  }
  @media screen and (min-width: 768px) {
    /deep/ .card-columns {
      -moz-column-count: 3;
      column-count: 3;
    }
  }
  @media screen and (min-width: 992px) {
    /deep/ .card-columns {
      -moz-column-count: 4;
      column-count: 4;
    }
  }
</style>
