const meyho_common = {
  /*
        共用函数
        判断变量是否存在或值是否为undefined
    */
  isUndefined: function(value) {
    try {
      if (value === "undefined" || value === undefined || value == null) {
        return true;
      }
    } catch (event) {
      this.log(event);
    }
    return false;
  },

  /*
内置函数
判断文件后缀
*/
  getFileExt: function(filepath) {
    if (filepath !== "" && !this.isUndefined(filepath)) {
      if (filepath.indexOf("?") > -1) {
        filepath = filepath.split("?")[0];
      }
      var pos = "." + filepath.replace(/.+\./, "");
      return pos.toLowerCase();
    }
    return "";
  }
};

export { meyho_common };
