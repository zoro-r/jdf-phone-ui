const format = {
  /**
   * @name 日期格式
   * @param date 传入日期
   * @param pattern 格式化模式
   */
  toDate: (date, pattern) => {
    if (!pattern) {
      pattern = 'yyyy-MM-dd HH:mm:ss'
    }
    if (typeof date === 'string') {
      date = format.parseDate(date)
    }
    return date.format(pattern)
  },

  /**
   * @name 字符串转换成日期
   * @param str 传入字符串
   */
  parseDate: (str) => {
    return str ? new Date(str.replace(/-/g, '/')) : null
  }
}

export default format
