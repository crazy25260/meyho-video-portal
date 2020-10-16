const SiteInfo = {
  computed: {
    site_info() {
      return this.$store.getters.getSiteInfoByDomain(window.location.host);
    }
  }
};

import NavMenu from "@/mixins/parts/nav-menu";
import Pagination from "@/mixins/parts/pagination";

const VscMixins = {
  SiteInfo,
  NavMenu,
  Pagination
};

export default VscMixins;
