const HeaderImage = {
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    }
  }
};

const Mixins = {
  HeaderImage
};

export default Mixins;
