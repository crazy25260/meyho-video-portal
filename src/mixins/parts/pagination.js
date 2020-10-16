const Pagination = {
  data() {
    return {
      infoPagination: 1
    };
  },
  methods: {
    setPage(pageNumber) {
      this.infoPagination = pageNumber;
    }
  }
};

export default Pagination;
