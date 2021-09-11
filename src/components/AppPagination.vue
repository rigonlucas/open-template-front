<template>
    <nav>
        <ul class="app-paginator pagination justify-content-center">
            <li
                :class="{ 'page-item': true, disabled: current <= 1 }"
            >
                <a
                    class="page-link"
                    href="#"
                    @click="goToPreviousPage()"
                >
                    Anterior
                </a>
            </li>
            <li
                v-for="page in pages"
                :key="page"
                :class="{ 'page-item': true, 'active': current == page }"
            >
                <a
                    class="page-link"
                    href="#"
                    @click="goToPage(page)"
                >
                    {{ page }}
                </a>
            </li>
            <li
                :class="{ 'page-item': true, disabled: current >= length }"
            >
                <a
                    class="page-link"
                    href="#"
                    @click="goToNextPage()"
                >
                    Anterior
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: "AppPagination",
  props: {
    current: {
      type: Number,
      default: 0,
    },
    length: {
      type: Number,
      default: 0,
    },
    range: {
      type: Number,
      default: 3,
    },
  },
  computed: {
    pages() {
      let pages = []

      for (let i = this.rangeStart; i <= this.rangeEnd ; i++) {
        pages.push(i)
      }

      return pages
    },
    rangeStart() {
      const start = this.current - this.range

      return (start > 0) ? start : 1
    },
    rangeEnd() {
      const end = this.current + this.range

      return (end <= this.length) ? end : this.length
    },
  },
  methods: {
    goToPage(page) {
      if ((page < 1) || (page > this.length)) {return}

      this.$emit("change-page", page)
    },
    goToPreviousPage() {
      this.goToPage(this.current - 1)
    },
    goToNextPage() {
      this.goToPage(this.current + 1)
    },
  },
}
</script>

<style scoped>

</style>