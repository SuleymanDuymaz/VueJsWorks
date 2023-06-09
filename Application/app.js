const app = Vue.createApp({
  components: {
    draggable: window.vuedraggable.default,
  },
  template: `
    <div>
      <h2>Frameworkler</h2>
      <draggable v-model="frameworks" group="frameworks" class="list" :class="{ selected: f.selected }" @end="onDragEnd">
        <div v-for="(f, index) in frameworks" :key="index">
          {{ f.name }}
        </div>
      </draggable>
      <h3>Seçilen Frameworkler</h3>
      <draggable v-model="selectTags" group="frameworks" class="list">
        <div v-for="(s, index) in selectTags" :key="index">
          {{ s.name }}
        </div>
      </draggable>
    </div>
  `,
  data() {
    return {
      frameworks: [
        { name: "Vue", selected: true },
        { name: "React", selected: false },
        { name: "Svelte", selected: false },
        { name: "Angular", selected: false },
      ],
    };
  },
  methods: {
    selectTag(f) {
      f.selected = !f.selected;
    },
    onDragEnd(event) {
      this.frameworks.forEach((f) => {
        f.selected = this.selectTags.includes(f);
      });
    },
  },
  computed: {
    selectTags() {
      return this.frameworks.filter((i) => i.selected);
    },
  },
});

app.mount('#app');
