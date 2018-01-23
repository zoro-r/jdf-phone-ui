# 组件参数介绍
## 目录

1、n22-input：[点击前往](#n22-input)<br/>
2、n22-field：[点击前往](#n22-field)<br/>
3、n22-switch：[点击前往](#n22-switch)<br/>
4、n22-tab：[点击前往](#n22-tab)<br/>
5、n22-address：[点击前往](#n22-address)<br/>
6、n22-datepicker：[点击前往](#n22-datepicker)<br/>
7、n22-calendar：[点击前往](#n22-calendar)<br/>
8、n22-page：[点击前往](#n22-page)<br/>


n22-input
------
#### API
|参数|说明|类型|可选值|默认值|
|----|-----|-----|-----|-----|
| hasIcon | 是否显示操作图标 | Boolean | |false|
| type | 输入框类型 | String | |text|
| hintText | 默认显示提示内容 |String | | "" |
| inputClass | class会直接作用到input上面，多个以空格隔开 |String | | "" |
| listionRule | 是否实时监听规则改变 |Boolean | | false |
| rows | 当type为textarea时，设置文本区内的可见行数 |Number | | 2 |
| validator | 验证规则配置 |Object | |  |
| disabled | 是否禁用状态 | Boolean | | false |

#### Events
|事件名称|说明|回调参数|
|----|-----|-----|
| focus | 当输入框聚焦时触发 | |
| blur | 当输入框失去焦点时触发 | |
| change | 当输入框内容改变时触发 |输入框值 |



n22-field
------
#### API
|参数|说明|类型|可选值|默认值|实例|
|----|-----|-----|-----|-----|-----|
| label | 左侧提示文字 | String ||||
| need | 必填项等提示字，默认红色 | String |||`need = "*"`|
#### Slot
|name|说明|
|----|-----|
|right|右侧显示内容|
|choose|右侧显示内容外层有.choose class|

n22-switch
------
#### API
|参数|说明|类型|可选值|默认值|
|----|-----|-----|-----|-----|
| value | 默认值 | String ||m|
| unSelectValue | 开关在左侧默认值 | String ||f|
| selectValue | 开关在右侧默认值 | String ||m|
| disabled | 是否禁用状态 | Boolean ||false|

#### Events
|事件名称|说明|回调参数|
|----|-----|-----|
| change | 点击切换时候触发 |切换值 |


n22-tab
------
#### API
|参数|说明|类型|可选值|默认值|实例|
|----|-----|-----|-----|-----|-----|
| tabs | 显示个数与内容 | Array |||['1','2']|
| tabIndex | 默认选择某个 | Number ||0到tabs的长度-1||
#### Events
|事件名称|说明|回调参数|
|----|-----|-----|
| change | 点击切换时候触发 |切换值 |



n22-address
------
#### API
|参数|说明|类型|可选值|默认值|实例|
|----|-----|-----|-----|-----|-----|
| province | 省的code或者中文 | String ||||
| city | 市的code或者中文 | String ||||
| area | 区的code或者中文 | String ||||
| label | 无值时提示语 | String ||请选择地址||
| disabled | 是否禁用 | Boolean ||false||
#### Events
|事件名称|说明|回调参数|
|----|-----|-----|
| choose | 当选择区的时候触发 |这个地址对象 |



n22-datepicker
------
#### API
|参数|说明|类型|可选值|默认值|实例|
|----|-----|-----|-----|-----|-----|
| label | 无值时候默认提示 | String ||请选择||
| value | 绑定值 |  ||||
| startDate | 最小日期 | Date ||new Date('1900/01/01')||
| endDate | 最大日期 |  ||||
| value | 绑定值 |Date||new Date('2100/12/31')||
| disabled | 是否禁用 | Boolean ||false||
#### Events
|事件名称|说明|回调参数|
|----|-----|-----|
| input | 点击确定按钮触发 |控件值 |


n22-calendar
------
#### API
|参数|说明|类型|可选值|默认值|实例|
|----|-----|-----|-----|-----|-----|
| punchs | 已经打开日期 | Array ||[]|['2018-01-12']|
| date | 默认显示日期 | Date ||new Date()||
### Events
|事件名称|说明|回调参数|
|----|-----|-----|
| choose | 点击日期时候触发 |选择日期 |

n22-page
------
#### Slot
|name|说明|
|----|-----|
|header|顶部Bar|
|content|内容区域|

