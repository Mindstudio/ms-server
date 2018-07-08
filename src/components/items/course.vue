<template lang="html">
  <div class="min-h-screen">
    <div class="h-80 flex flex-row border-r border-b border-l">
      <div class="w-3/4 flex flex-col justify-between p-4 bg-grey-lighter">
        <div class="">
          <h5 class="text-base text-grey-dark font-medium mb-2">
            {{ course.details.subject }}
          </h5>
          <h3 class="text-3xl text-grey-darker font-light mb-2">
            {{ course.title }}
          </h3>
        </div>
      </div>
      <div class="w-1/4 flex flex-col justify-between border-l p-4 bg-grey-lightest">
        <h4 class="text-lg text-grey-dark leading-normal font-light mb-2">
          {{ course.intro }}
        </h4>
        <h6 class="text-base text-grey-dark font-medium">
          {{ course.details.institution }}
        </h6>

      </div>
    </div>
    <div class="flex flex-row border-r border-white">
      <div class="w-3/4 p-4">
        <h4 class="text-xl text-grey-dark font-medium mb-2">
          Introduction
        </h4>
        <p class="text-grey leading-normal mb-2">{{ course.text[0] }}</p>
        <p class="text-grey leading-normal mb-2">{{ course.text[1] }}</p>
        <h4 class="text-xl text-grey-dark font-medium mb-2">
          Learning Path
        </h4>
        <h4 class="text-xl text-grey-dark font-medium mb-2">
          Our Review
        </h4>
        <h4 class="text-xl text-grey-dark font-medium mb-2">
          Comparison
        </h4>
      </div>
      <div class="w-1/4 border-l border-dashed">
        <div class="p-4">
          <div class="flex flex-col justify-between mb-2">
            <p class="text-sm text-grey-dark mb-2">
              Level:
              {{ course.details.level }}
            </p>
            <p class="text-sm text-grey-dark mb-2">
              Length:
              {{ course.details.length }}
            </p>
            <p class="text-sm text-grey-dark mb-2">
              Problem Sets:
              {{ course.effort.problem_sets }}
            </p>
            <div class="flex flex-row justify-between items-center">
              <p class="text-sm text-grey-dark mb-2">
                Min:
                {{ course.effort.min_hours_per_set }} hours
              </p>
              <p class="text-sm text-grey-dark mb-2">
                Max:
                {{ course.effort.max_hours_per_set }} hours
              </p>
            </div>
            <p class="text-sm text-grey-dark mb-2">
              Final Projects:
              {{ course.effort.final_projects }}
            </p>
          </div>
          <div class="flex flex-col justify-between mb-2">
            <p class="text-sm text-grey-dark mb-2">
              Price:
              £{{ course.price }}.00
            </p>
          </div>
        </div>
        <div class="border-t p-4">
          <div class="flex flex-col">
            <p class="text-base text-grey-darkest mb-2">Instructors:</p>
            <p class="text-base text-grey-dark font-medium"
              v-for="(instructor, i) in course.instructors"
              :key="instructor.i">
              {{ course.instructors[i].first_name }}
              {{ course.instructors[i].last_name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    course () {
      return this.$store.getters.getCourseById(this.$route.params.id)
    }
  }
}
</script>

<style lang="css">
</style>
