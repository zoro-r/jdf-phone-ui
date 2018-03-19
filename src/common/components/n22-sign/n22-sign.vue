<template>
  <div class="n22_sigh" >
    <div id="comment_dialog" style=" display:none;">

		<div id="leftView">
			<p id="comment_title"></p>
			<div id="signImage" class="signImagecss"></div>

		</div>

		<div id="tmpcanvascss" class="tmpcanvascss">
			<div id="signTitle"></div>
			<canvas id="comment_canvas"></canvas>
		</div>

		<div id="comment_btnContainerInner" class="comment_btncontainer">
			<input id="comment_ok" type="button" class="btn_orange" value="确 定">
			<input id="comment_back" type="button" class="btn_orange" value="后退">
			<input id="comment_cancel" type="button" class="btn_orange" value="取 消">
		</div>

	</div>

	<center>

		<div id="dialog" style=" display:none;">
			<!--<p class="close"><a href="#" @click="closeBg();">关闭</a></p> -->
			<!-- 显示签名区域-->
			<div id="anysign_title" style="color:#333333;" width="100%">请投保人<span style="font-size:20pt;"> 李 元 </span>签名</div>
			<div id="container" onmousedown="return false;">
				<canvas id="anysignCanvas" width="2">
                    </canvas>
			</div>

			<div id="single_scrollbar" style="text-align: center;  vertical-align:middle; " width="100%">
				<span id="single_scroll_text"> *滑动操作：</span>
				<input id="single_scrollbar_up" type="button" class="button orange" value="左移" />
				<input id="single_scrollbar_down" type="button" class="button orange" value="右移" />
			</div>

			<div id="btnContainerOuter" width="100%">

				<div id="btnContainerInner" style="text-align: center;   font-size:5pt;" width="100%">
					<input id="btnOK" type="button" class="button orange" value="确 定" @click="sign_confirm();" />
					<input id="btnClear" type="button" class="button orange" value="清 屏" @click="clear_canvas();">
					<input id="btnCancel" type="button" class="button orange" value="取 消" @click="cancelSign();">
				</div>

			</div>

		</div>

		<div id="other">

		<input type="button" name="初始化接口" value="初始化接口" style="width: 180px" @click="testAnySign(112321321);">
		<br>

		<br>
		<input type="button" name="设置表单数据" value="设置表单数据" style="width: 180px" @click="testSetTemplateData();">
		<br>
		<br>
		<input type="button" name="单字签名" value="单字签名1" style="width: 180px" @click="testPopupDialog(20);">
		<br>
		<!--<br>
		<input type="button" name="批注签名" value="批注签名" style="width: 180px" @click="testCommentDialog(30);">
		<br>-->

		<br>
		<input type="button" name="上传数据是否准备就绪" value="上传数据是否准备就绪" style="width: 180px" @click="testIsReadyToUpload();">
		<br>
		<br>
		<input type="button" name="生成上传数据" value="生成上传数据" style="width: 180px" @click="testGenData();">
		<br>
		<br>
		<input type="button" name="获取版本信息" value="获取版本信息" style="width: 180px" @click="testGetVersion();">
		<br>
		<br>
		<input type="button" name="获取操作系统信息" value="获取操作系统信息" style="width: 180px" @click="testGetOsInfo();">
		<br>
		<br>
		<!--<input type="button" name="testAddEvidence" value="testAddEvidence" style="width: 180px" @click="testAddEvidence();">
		<br>
		<br>
		<input type="button" name="testSaveBusinsee()" value="保存业务数据" style="width: 180px" @click="testSaveBusiness();">
		<br>-->
		<!--<br>-->
		<input type="button" name="testSaveBusinsee()" value="初始化API恢复业务数据" style="width: 180px" @click="testRestoreBusiness();">
		<br>
		<img id="xss_20" src="data:image/gif;base64,R0lGODlhhwBIAJECAL6+vtHR0f///wAAACH5BAEAAAIALAAAAACHAEgAAAL/jI+py+0Po5y02ouz3rz7Dx7CSJbmiabqyrbuC6NLTNf2jddKzvf+r9oBh8TiS2hMKo3IpfOJa0KnVJa0is0Krtruk+sNMxPi8hJsTufQ6jaN7Y634PK6jGzPu+j6PL9f9wcYJzjYVmiYhphYtngCAMkDUDOJEklzCeRokolTCdNZEuoyyrPJaRnz+dL5uSrwahnbcyr6WJoyuwLJywvb28sCPKw7hyc5THmbOxLryqqCu3ecU3xLTBz9TLIqza3rbYzgYw1t3jw5Wo4bLi7S81qeSor6+yhszylvRQ2KDYyJnixYqr6J2sdvnLJdC+dp40YqnkFa/c4xu/YvY7FQ7O1yIZymMCBDkST1fUQ3xNG6kfVsacv4KxizjjFU4nvYcqI+f8I00jSh0ucuZ/d2FnXZwle0GzaH4kQKkSXBgz3zXdRR8Ym6o0tRepXlytrJEovAQTV6dqrTZlFZiWWaVWorqstysk0aday3sSQQSdSplm7afUTTonX4Jq7HnK1mZcsG1ifAlzBtCNra9QZfzZvdGWCUqBZoLKJHUyltGgrq1E5Ws1bi+vWYkLIJKa4tJjZuTbd3d9HtmyLt4I16E68C/Djc4cp/G2/+5Tn0M9KnJ0lu/Uj17ERmcEceIrz48eTLmz+PPr368gUAADs=" @click="testPopupDialog(20);" />
		<br>

		<!--<br>
		<img id="xss_21" src="data:image/gif;base64,R0lGODlhhwBIAJECAL6+vtHR0f///wAAACH5BAEAAAIALAAAAACHAEgAAAL/jI+py+0Po5y02ouz3rz7Dx7CSJbmiabqyrbuC6NLTNf2jddKzvf+r9oBh8TiS2hMKo3IpfOJa0KnVJa0is0Krtruk+sNMxPi8hJsTufQ6jaN7Y634PK6jGzPu+j6PL9f9wcYJzjYVmiYhphYtngCAMkDUDOJEklzCeRokolTCdNZEuoyyrPJaRnz+dL5uSrwahnbcyr6WJoyuwLJywvb28sCPKw7hyc5THmbOxLryqqCu3ecU3xLTBz9TLIqza3rbYzgYw1t3jw5Wo4bLi7S81qeSor6+yhszylvRQ2KDYyJnixYqr6J2sdvnLJdC+dp40YqnkFa/c4xu/YvY7FQ7O1yIZymMCBDkST1fUQ3xNG6kfVsacv4KxizjjFU4nvYcqI+f8I00jSh0ucuZ/d2FnXZwle0GzaH4kQKkSXBgz3zXdRR8Ym6o0tRepXlytrJEovAQTV6dqrTZlFZiWWaVWorqstysk0aday3sSQQSdSplm7afUTTonX4Jq7HnK1mZcsG1ifAlzBtCNra9QZfzZvdGWCUqBZoLKJHUyltGgrq1E5Ws1bi+vWYkLIJKa4tJjZuTbd3d9HtmyLt4I16E68C/Djc4cp/G2/+5Tn0M9KnJ0lu/Uj17ERmcEceIrz48eTLmz+PPr368gUAADs=" @click="testCommentDialog(30);" />
		<br>-->

		<textarea id="result" rows="10"></textarea>

		</div>

	</center>
  </div>
</template>

<script>
/* eslint-disable */
var CALLBACK_TYPE_SIGNATURE = 1; // 签名框点击确认之后的回调，回调中包含签名快照
var CALLBACK_TYPE_DIALOG_DISMISS = 2; // 签名框dismiss时的回调
var CALLBACK_TYPE_DIALOG_CANCEL = 3; // 点击签名框"取消"按钮时的回调，同时也会触发dismiss回调
var CALLBACK_TYPE_BUFFER_SAVED = 4; // 签名数据缓存成功的回调，目前未用到此功能
var CALLBACK_TYPE_ON_PICTURE_TAKEN = 5; // 拍照成功回调，回调中包含照片快照
var CALLBACK_TYPE_DATA_DELETED = 6; // 成功删除数据回调

var CALLBACK_TYPE_START_RECORDING = 7; // 开始多媒体记录回调
var CALLBACK_TYPE_STOP_RECORDING = 8; // 结束多媒体记录回调
var CALLBACK_TYPE_ON_MEDIA_DATA = 9; // 多媒体数据处理完毕，回传给js的回调，回调函数的data参数为多媒体数据

var CALLBACK_TYPE_COMMENTSIGN = 10; // 批注签名框点击确认之后的回调，回调中包含签名快照

var CALLBACK_TYPE_ERROR = -1; // 发生错误时的回调，错误信息如以下EC_XXX定义
var CALLBACK_TYPE_ERROR_PICTURE = -2; // 在处理照片时发生异常，具体信息见value字段
var CALLBACK_TYPE_OPERATION_CANCELED = -3; // 用户取消操作，如取消拍照

var CALLBACK_TYPE_GETVERSION = 10; // 获得版本号
// functions return value
var RESULT_OK = 0; // 操作成功
var RESULT_ERROR = -1; // 操作失败
var EC_API_NOT_INITED = 1; // 接口未初始化错误
var EC_WRONG_contextId = 2; // contextId传值错误
var EC_CAMERA_INIT_FAILED = 3; // 摄像头初始化失败，通常重启设备可以解决
var EC_NATIVE_EXCEPTION = 4; // 浏览器内部错误，可至Android/sdcard/AnySign/lastCrash.txt中查询具体错误
var EC_DEVICE_NOT_SUPPORTED = 5; // 当前设备不被浏览器支持，只能调用浏览器功能，信手书模块功能禁用
var EC_TEMPLATE_NOT_SET = 6; // 当没有配置模板时试图调用签名时弹出，因为不能对空数据做签名

// require("./assets/src/libs/zlib/deflate.min.js");
// require("./assets/src/libs/CryptoJS v3.1.2/components/core-min.js");
// require("./assets/src/libs/CryptoJS v3.1.2/rollups/sha1.js");
// require("./assets/src/libs/CryptoJS v3.1.2/rollups/tripledes.js");
// require("./assets/src/libs/anysignCommentUI.js");
// require("./assets/src/libs/anysign_all.js");
// require("./assets/src/libs/jquery-1.4.2.min.js");
// require('./assets/src/anysignWebInterface')
// AnySignApi()
import {
  AnySignApi,
  EncAlgType,
  OCRCapture,
  Language,
  BioType,
  TemplateType,
  DataFormat,
  Signer,
  SignRule_XYZ,
  SignatureConfig,
  TimeTag,
  CommentConfig,
  SignRule_Tid,
  CachetConfig,
  sign_confirm,
  clear_canvas,
  cancelSign
} from "./assets/src";
export default {
  name: "n22Sigh",
  props: [],
  data() {
    return {
      apiInstance: null,
      ocrCapture: null
    };
  },
  watch: {},
  methods: {
    sign_confirm:sign_confirm,
    clear_canvas:clear_canvas,
    cancelSign:cancelSign,
    //弹出签名框签名
    testPopupDialog(context_id) {
      if (!this.apiInstance) {
        alert("信手书接口没有初始化");
        return;
      }
      switch (this.apiInstance.showSignatureDialog(context_id)) {
        case RESULT_OK:
          document.getElementById("other").style.display = "none";
          break;
        case EC_API_NOT_INITED:
          alert("信手书接口没有初始化");
          break;
        case EC_WRONG_CONTEXT_ID:
          alert("没有配置相应context_id的签字对象");
          break;
      }
    },
    //配置模板数据
    testSetTemplateData() {
      // var formData = "{\"bjcaxssrequest\":{\"submitinfo\":[{\"username\":\"测星雨\",\"identitycardnbr\":\"320902198901191012\"},{\"username\":\"测星雨123\",\"identitycardnbr\": \"320902198901191012\"}]}}";

      var formData =
        "<html><head><title></title><meta http-equiv='Content-Type' content='text/html; charset=UTF-8' /></head><body><div><div><label>keyword:</label></div><div><label>列名2：</label></div><div><label>列名3：</label></div></div></body></html>";
      //文件数据
      //  		    var formData = fileData;
      var businessId = "123123"; //集成信手书业务的唯一标识

      var template_serial = "4000"; //用于生成PDF的模板ID

      var res;

      //配置JSON格式签名原文
      /**
       * 设置表单数据，每次业务都需要set一次
       * @param template_type 签名所用的模板类型
       * @param contentUtf8Str 表单数据，类型为Utf8字符串
       * @param businessId 业务工单号
       * @param template_serial 模板序列号
       * @returns {*} 是否设置成功
       */
      res = this.apiInstance.setTemplate(
        TemplateType.PDF,
        formData,
        businessId,
        template_serial
      );

      if (res) {
        alert("setTemplateData success");
        return res;
      } else {
        alert("setTemplateData error");
        return res;
      }
    },
    //添加批签签名框
    testAddCommentObj(objId) {
      var context_id = objId;
      var signer = new Signer("李明", "11011111111");

      /**
       * 根据坐标定位签名方式
       * @param left 签名图片最左边坐标值，相对于PDF当页最左下角(0,0)点，向上和向右分别为X轴、Y轴正方向
       * @param top 签名图片顶边坐标值，相对于PDF当页最左下角(0,0)点，向上和向右分别为X轴、Y轴正方向
       * @param right 签名图片最右边坐标值，相对于PDF当页最左下角(0,0)点，向上和向右分别为X轴、Y轴正方向
       * @param bottom 签名图片底边坐标值，相对于PDF当页最左下角(0,0)点，向上和向右分别为X轴、Y轴正方向
       * @param pageNo 签名在PDF中的页码，从1开始
       * @param unit 坐标系单位，目前支持"dp"和"pt"
       * @constructor
       */
      var signerRule = new SignRule_XYZ(84.0, 523.0, 150.0, 477.0, 2, "dp");

      /**
       * 关键字定位方式，寻找PDF中的关键字，根据关键字位置放置签名图片
       * @param keyword 关键字
       * @param keyWordAlignMethod 签字图片和关键字位置关系：等于1时，签字图片和关键字矩形重心重合
       *                           等于2时，签字图片位于关键字正下方，中心线对齐；等于3时，签字图片位于关键字正右方，中心线对齐；
       *                            等于4时，签字图片左上角和关键字右下角重合，可能额外附加偏移量，详见构造函数的offset参数
       * @param keyWordOffset 当keyWordAlignMethod非零时，额外附加的偏移量，单位pt
       * @param pageNo 寻找关键字的PDF起始页码
       * @param KWIndex KWIndex 第几个关键字
       * @constructor
       */
      //              var signerRule = new SignRule_KeyWord("默认",4,0,1,1);

      var commentConfig = new CommentConfig(signer, signerRule);
      //                   1:时间在上、2：时间在下、3：时间在右
      var timeTag = new TimeTag(1, "yyMMdd hh:mm;ss");
      //                signatureConfig.timeTag = timeTag;
      commentConfig.isTSS = false; //是否开始时间戳服务
      commentConfig.commitment =
        "本人已阅读保险条款、产品说明书和投保提示书，了解本产品的特点和保单利益的不确定性。";
      //			commentConfig.commitment = "本";
      //              commentConfig.commitmentTextSize = 20+"px";
      commentConfig.mass_word_height = 50;
      commentConfig.mass_word_width = 50;
      commentConfig.mass_words_in_single_line = 4;
      commentConfig.penColor = "#FF0000";
      commentConfig.nessesary = false;
      commentConfig.isdistinguish = false;
      commentConfig.isShowBgText = true;
      commentConfig.currentEditBarTextColor = "#FF0000";
      commentConfig.ocrCapture = this.ocrCapture;
      var res = this.apiInstance.addCommentObj(context_id, commentConfig);
      if (res) {
        alert("addCommentObj " + context_id + " success");
        return res;
      } else {
        alert("addCommentObj " + context_id + " error");
        return res;
      }
    },
    //添加单签签名框
    testAddSignatureObj(objId) {
      var context_id = objId;
      var signer = new Signer("李明", "11011111111");
      /**
       * 根据坐标定位签名方式
       * @param left 签名图片最左边坐标值，相对于PDF当页最左下角(0,0)点，向上和向右分别为X轴、Y轴正方向
       * @param top 签名图片顶边坐标值，相对于PDF当页最左下角(0,0)点，向上和向右分别为X轴、Y轴正方向
       * @param right 签名图片最右边坐标值，相对于PDF当页最左下角(0,0)点，向上和向右分别为X轴、Y轴正方向
       * @param bottom 签名图片底边坐标值，相对于PDF当页最左下角(0,0)点，向上和向右分别为X轴、Y轴正方向
       * @param pageNo 签名在PDF中的页码，从1开始
       * @param unit 坐标系单位，目前支持"dp"和"pt"
       * @constructor
       */
      var signerRule = new SignRule_XYZ(100.0, 150.1, 180.2, 50.3, 2, "pt");

      /**
       * 关键字定位方式，寻找PDF中的关键字，根据关键字位置放置签名图片
       * @param keyword 关键字
       * @param keyWordAlignMethod 签字图片和关键字位置关系：等于1时，签字图片和关键字矩形重心重合
       *                            等于2时，签字图片位于关键字正下方，中心线对齐；等于3时，签字图片位于关键字正右方，中心线对齐；
       *                            等于4时，签字图片左上角和关键字右下角重合，可能额外附加偏移量，详见构造函数的offset参数
       * @param keyWordOffset 当keyWordAlignMethod非零时，额外附加的偏移量，单位pt
       * @param pageNo 寻找关键字的PDF起始页码
       * @param KWIndex KWIndex 第几个关键字
       * @constructor
       */
      //				var signerRule = new SignRule_KeyWord("签名算法",2,0,1,1);
      //var signerRule = new SignRule_KeyWordV2("签名算法",50,0,1,1);

      /**
       *根据关键字定位签名位置
       * @param keyWord 关键字字面值
       * @param xOffset X轴偏移量，适配关键字和规则
       * @param yOffset Y轴偏移量，适配关键字和规则
       * @param pageNo 签名在PDF中的页码，第几页查找关键字，正数为正序，当是负数为倒序
       * @param KWIndex KWIndex 第几个关键字
       * @constructor
       */
      //                var signerRule = new SignRule_KeyWord("签名算法",100,100,1,1);

      /**
       * 关键字定位方式，寻找PDF中的关键字，根据关键字位置放置签名图片
       * @param keyword 关键字
       * @param keyWordAlignMethod 签字图片和关键字位置关系：等于0时，签字图片和关键字矩形重心重合
       *                            等于1时，签字图片位于关键字正下方，中心线对齐；等于2时，签字图片位于关键字正右方，中心线对齐；
       *                            等于3时，签字图片左上角和关键字右下角重合，可能额外附加偏移量，详见构造函数的offset参数
       * @param keyWordOffset 当keyWordAlignMethod非零时，额外附加的偏移量，单位pt
       * @param pageNo 寻找关键字的PDF起始页码
       * @param KWIndex KWIndex 第几个关键字
       * @constructor
       */
      //                var signerRule = new SignRule_KeyWordV2("关键字", "0", 10, 1,1);

      var signatureConfig = new SignatureConfig(signer, signerRule);
      //                   1:时间在上、2：时间在下、3：时间在右
      var timeTag = new TimeTag(1, "yyMMdd hh:mm;ss");
      //                signatureConfig.timeTag = timeTag;
      signatureConfig.singleWidth = 200;
      signatureConfig.singleHeight = 200;
      signatureConfig.title = "请投保人李明签字";
      signatureConfig.titleSpanFromOffset = 4;
      signatureConfig.titleSpanToOffset = 6;
      signatureConfig.penColor = "#FF0000";
      signatureConfig.isTSS = false; //是否开始时间戳服务
      signatureConfig.signatureImgRatio = 3.0;
      signatureConfig.nessesary = true;
      signatureConfig.isdistinguish = false;
      signatureConfig.ocrCapture = this.ocrCapture;
      var res = this.apiInstance.addSignatureObj(context_id, signatureConfig);
      if (res) {
        alert("addSignatureObj " + context_id + " success");
        return res;
      } else {
        alert("addSignatureObj " + context_id + " error");
        return res;
      }
    },
    setIdentifyCallBack(callback) {
      if (!this.apiInstance) {
        alert("信手书接口没有初始化");
        return;
      }
      this.apiInstance.setIdentifyCallBack(callback);
    },
    /**
     * @name 初始化接口
     */
    testAnySign() {
      var res;
      // 识别回调接口
      /* eslint-disable */
      var identify_callback = function(errCode) {
        if (errCode == SUCCESS) {
          return;
        }
        if (errCode == DATA_CANNOT_PARSED) {
          alert("输入数据项无法解析！");
        } else if (errCode == SERVICE_SYSTEM_EXCEPTION) {
          alert("服务系统异常错误！");
        } else if (errCode == RECOGNITION_RESULT_EMPTY) {
          alert("识别结果为空！");
        } else if (errCode == CONNECTION_SERVICE_TIMEOUT) {
          alert("连接识别服务超时！");
        } else if (errCode == CONNECTION_RECOGNITION_EXCEPTION) {
          alert("连接识别服务异常！");
        } else if (errCode == RECOGNITION_FALSE) {
          alert("书写错误！");
        } else {
          alert(errCode);
        }
      };

      var callback = function(context_id, context_type, val) {
        document.getElementById("other").style.display = "block";
        if (
          context_type == CALLBACK_TYPE_START_RECORDING ||
          context_type == CALLBACK_TYPE_STOP_RECORDING
        ) {
          return;
        }

        if (context_type == CALLBACK_TYPE_SIGNATURE) {
          //签名回显
          document.getElementById("xss_20").src =
            "data:image/png;base64," + val;
          var aImg = document.getElementById("xss_20");
          for (var i = 0; i < aImg.length; i++) {
            aImg[i].style.height = "1500";
            aImg[i].style.width = "1500";
          }
        } else if (context_type == CALLBACK_TYPE_COMMENTSIGN) {
          //签名回显
          document.getElementById("xss_21").src =
            "data:image/png;base64," + val;
          var aImg = document.getElementById("xss_21");
          for (var i = 0; i < aImg.length; i++) {
            aImg[i].style.height = "250";
            aImg[i].style.width = "250";
          }
        } else if (context_type == CALLBACK_TYPE_ON_PICTURE_TAKEN) {
          document.getElementById("preview").src =
            "data:image/png;base64," + val;
        } else if (context_type == CALLBACK_TYPE_ON_MEDIA_DATA) {
          var audio = document.createElement("audio");
          if (
            audio != null &&
            audio.canPlayType &&
            audio.canPlayType("audio/mpeg")
          ) {
            audio.src = "data:image/gif;base64," + val;
            audio.play();
          }
        }

        // setAlertTitle();
        alert(
          "收到浏览器回调：" +
            "context_id：" +
            context_id +
            " context_type：" +
            context_type +
            " value：" +
            val
        );
      }; //测试回调，将回调数据显示

      ////////////////////////////////////////////////

      //设置签名算法，默认为RSA，可以设置成SM2
      EncAlgType.EncAlg = "RSA";

      this.apiInstance = new AnySignApi();
      var channel = "10010"; //渠道号，由信手书提供，请咨询项目经理
      //初始化签名接口
      res = this.apiInstance.initAnySignApi(callback, channel);

      if (!res) {
        alert("init error");
      } else {
      }
      ////////////////////////////////////////////////

      //开启识别
      this.ocrCapture = new OCRCapture();
      this.ocrCapture.text = "a";
      //				this.ocrCapture.IPAdress = "http://192.168.126.32:11203/HWR/RecvServlet";
      this.ocrCapture.IPAdress = "http://60.247.77.116:11203/HWR/RecvServlet";
      //				this.ocrCapture.IPAdress = "http://106.38.60.153:80/HWR/RecvServlet";

      this.ocrCapture.appID = "123";
      this.ocrCapture.count = 5;
      this.ocrCapture.language = Language.CHS;
      this.ocrCapture.resolution = 80;
      this.ocrCapture.serviceID = "999999";
      //				this.apiInstance.startOCR(this.ocrCapture);

      this.setIdentifyCallBack(identify_callback);

      ///////////////////////////////////////////////

      //注册单字签字对象20
      res = this.testAddSignatureObj(20);
      if (!res) {
        alert("testAddSignatureObj error");
      } else {
      }

      res = this.testAddCommentObj(30);
      if (!res) {
        alert("testAddCommentObj error");
      } else {
      }

      ////////////////////////////////////////////////

      //注册一个单位签章

      var signer = new Signer("小明", "110xxxxxx");
      /**
       * 使用服务器规则配置签名
       * @param tid 服务器端生成的配置规则
       * @constructor
       */
      var signerRule = new SignRule_Tid("888888");
      var cachet_config = new CachetConfig(signer, signerRule, false);

      //              res = this.apiInstance.addCachetObj(cachet_config);
      //              ////////////////////////////////////////////////
      //
      //              if(!res){
      //                  alert("addCachetObj error");
      //              }else{
      //
      //              }
      ////////////////////////////////////////////////

      //将配置提交
      res = this.apiInstance.commitConfig();

      if (res) {
        alert("Init ALL 初始化成功");
      } else {
        alert("Init ALL 初始化失败");
      }
      ////////////////////////////////////////////////
    },
    testGenData () {
        var res = document.getElementById('result');
        console.log(this.apiInstance.getUploadDataGram)
        try
        {
            res.value = this.apiInstance.getUploadDataGram();
            alert("value"+res.value);
        }
        catch(err)
        {
            alert(err);
        }
    },
    testIsReadyToUpload () {
      alert("testIsReadyToUpload :" + this.apiInstance.isReadyToUpload());
    },
    testGetVersion() {
        alert(this.apiInstance.getVersion());
    }
  }
};
</script>
<style lang='scss' scoped>
// @import url("./assets/src/libs/css/canvas_css.css");
// @import url("./assets/src/libs/css/sp.css");
// @import url("./assets/src/libs/css/mw480Portrait.css");
// @import url("./assets/src/libs/css/canvas_css.css");
.n22_sigh {
}
</style>
