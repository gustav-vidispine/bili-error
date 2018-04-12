<template>
  <div class="vdt-search__wrapper">
    <form
      class="vdt-search__form"
      @submit.prevent="emitEnter()">
      <input
        v-model="query"
        :placeholder="placeholder"
        class="vdt-search__input"
        @submit.prevent="emitEnter()">
      <label class="vdt-search__icon">
        <span
          v-show="!isSearching"
          class="vdt-search__search-icon">
          <!-- @slot Use to insert custom search icon. Default empty. -->
          <slot name="search-icon"/>
        </span>
        <span
          v-show="isSearching"
          class="vdt-search__clear-icon"
          @click="clear">
          <!-- @slot Use to insert custom clear icon. Default &#215; -->
          <slot name="clear-icon">&#215;</slot>
        </span>
      </label>
    </form>
  </div>
</template>

<script>

/**
 * @description Displays a search-input that emit a search-string
 * @since 0.9
 */

export default {
  name: 'Search',
  props: {
    /**
     * Placeholder for the search input
     */
    placeholder: {
      type: String,
      default: 'Search...',
      required: false,
    },
  },
  data() {
    return {
      query: '',
    };
  },
  computed: {
    isSearching() {
      return this.query.length;
    },
  },
  watch: {
    /**
    * Search input for other parties
    *
    * @event search
    * @type {String}
    */

    query() {
      this.$emit('search', this.query);
    },
  },
  methods: {
    /**
    * Clear the search
    *
    * @event clear
    * @type {String}
    */

    clear() {
      this.query = '';
      this.$emit('clear');
    },
    emitEnter() {
      /**
      * Emits the query on enter (key:13)
      *
      * @event enter
      * @type {String}
      */
      this.$emit('enter', this.query);
    },
  },
};
</script>

<style lang="scss" scoped>
  .vdt-search__wrapper{
    width: 100%;
  }

  .vdt-search__form{
    display: block;
    position: relative;
  }

  .vdt-search__input{
    width: 100%;
    box-sizing: border-box;
    padding: 0.5em 0.75em;
    padding-right: 2rem;
    background-color: #f3f3f3;
    border: 2px solid #f3f3f3;
    color: #333;
    border-radius: 5px;
    font-size: 1em;
    transition: border 0.3s ease-out;

    &:focus, &:active{
      outline: none;
      border: 2px solid #64b5f6;
      background-color: white;
    }
  }

  .vdt-search__icon {
    position: absolute;
    display: flex;
    align-items: center;
    top: 0.25rem;
    right: 1rem;
    height: 100%;
    margin-bottom: 0;
    .material-design-icon {
      font-size: 2rem;
      color: rgba(#000, 0.5);
    }
  }
</style>
