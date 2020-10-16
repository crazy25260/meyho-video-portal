const BaseFrame = {
  computed: {
    current_nav() {
      if (this.$store.state.nav_model.nav_categories) {
        return this.$store.state.nav_model.nav_categories[
          this.$store.state.nav_model.nav_index
        ];
      }

      return {};
    },
    nav_cates() {
      return this.$store.state.nav_model.nav_categories;
    }
  }
};

export default BaseFrame;
