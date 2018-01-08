/**
 * @author jdf
 * @name  性别组件
 * @param label 左侧文字显示
 * @param need 填入必填项的值
 * @desc For example:
 * <baseField :label="'姓名'" :need="true">
 *   <validatorInput :disabled="!canEdit" v-model="customer.name" :form.sync="validateObj.name" :validator="ruleObj.name" slot="input" :inputType="3" hintText="请输入投保人姓名" :hasIcon="true" />
 * </baseField>
 */
import N22Switch from './N22Switch'
export default N22Switch
