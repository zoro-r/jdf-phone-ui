const format = {
  /**
   * @name 日期格式
   * @param date 传入日期
   * @param pattern 格式化模式
   */
  toDate: (date, pattern) => {
    if (!date) return '22'
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
  },
  /**
   * @name JS日期系列：根据出生日期得到周岁年龄
   * @desc 参数strBirthday已经是正确格式的2007-02-09这样的日期字符串
   * @param strBirthday 生日 格式 xxxx-xx-xx
   */
  toAge (strBirthday) {
    if (!strBirthday) return
    let returnAge,
      strBirthdayArr = strBirthday.split('-'),
      birthYear = strBirthdayArr[0],
      birthMonth = strBirthdayArr[1],
      birthDay = strBirthdayArr[2],
      d = new Date(),
      nowYear = d.getFullYear(),
      nowMonth = d.getMonth() + 1,
      nowDay = d.getDate()

    if (nowYear == birthYear) {
      returnAge = 0 // 同年 则为0岁
    } else {
      let ageDiff = nowYear - birthYear // 年之差
      if (ageDiff > 0) {
        if (nowMonth == birthMonth) {
          let dayDiff = nowDay - birthDay // 日之差
          if (dayDiff < 0) {
            returnAge = ageDiff - 1
          } else {
            returnAge = ageDiff
          }
        } else {
          let monthDiff = nowMonth - birthMonth // 月之差
          if (monthDiff < 0) {
            returnAge = ageDiff - 1
          } else {
            returnAge = ageDiff
          }
        }
      } else {
        returnAge = -1 // 返回-1 表示出生日期输入错误 晚于今天
      }
    }

    return returnAge // 返回周岁年龄
  }
}

export default format
