<template>
  <div class="container m-auto">
    <label for="createView">Create a </label>
    <select
      id="model"
      class=""
      >
      <option
        v-for="model in models"
        :key="model.id"
        @click="selectedComp = model.comp">
        {{ model.name }}
      </option>
    </select>
    <!-- <button @click="selectedComp = 'createArticle'">Article</button>
    <button @click="selectedComp = 'createBook'">Book</button> -->
    <keep-alive>
      <component :is="selectedComp">
        <p>Default Content</p>
      </component>
    </keep-alive>
  </div>
</template>

<script>
import article from '../_models/article.vue'
import book from '../_models/book.vue'
import course from '../_models/course.vue'
import guide from '../_models/guide.vue'
import podcast from '../_models/podcast.vue'
import software from '../_models/software.vue'
import video from '../_models/video.vue'
import website from '../_models/website.vue'

export default {
  data () {
    return {
      selectedComp: '',
      models: [
        {
          name: '',
          comp: ''
        },
        {
          name: 'Article',
          comp: 'createArticle'
        },
        {
          name: 'Book',
          comp: 'createBook'
        },
        {
          name: 'Course',
          comp: 'createCourse'
        },
        {
          name: 'Guide',
          comp: 'createGuide'
        },
        {
          name: 'Podcast',
          comp: 'createPodcast'
        },
        {
          name: 'Software',
          comp: 'createSoftware'
        },
        {
          name: 'Video',
          comp: 'createVideo'
        },
        {
          name: 'Website',
          comp: 'createWebsite'
        }
      ]
    }
  },
  components: {
    createArticle: article,
    createBook: book,
    createCourse: course,
    createGuide: guide,
    createPodcast: podcast,
    createSoftware: software,
    createVideo: video,
    createWebsite: website
  }
}
</script>

<style scoped>
h2 {
  color: red;
}
</style>
