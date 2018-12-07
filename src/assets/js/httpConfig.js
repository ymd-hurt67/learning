import axios from '~common/assets/js/axios'

/* 登陆注册接口 */
// 获取年级
let apiGetGrade = function () {
    return axios.get('https://reg.xueersi.com/RegV1/gradeList')
}
// 发送登陆验证码
let apiSendLogin = function (phone) {
    return axios.get('https://login.xueersi.com/LoginV1/sendVCode', {
        cancelGroupName: 'loginGetSMS',
        params: {
          phone: phone
        }
    })
}
// 登陆
let apiLogin = function (phone, smscode, loginType) {
    return axios.get('https://login.xueersi.com/LoginV1/login', {
        params: {
          phone: phone,
          sms_code: smscode,
          loginType: loginType
        }
    })
}
// 注册
let apiRegister = function (phone, smscode, gradeId, province, sGroupId) {
    return axios.get('https://reg.xueersi.com/RegV1/reg', {
        params: {
          phone: phone,
          sms_code: smscode,
          grade: gradeId,
          province_id: province,
          sGroupId: sGroupId
        }
    })
}
// 发送注册验证码
let apiSendReg = function (phone) {
    return axios.get('https://reg.xueersi.com/RegV1/sendVcode', {
        params: {
          phone: phone
        }
    })
}

/* 首页 */
// 验证登录态
let apiCheckLogin = function () {
    return axios.post('https://login.xueersi.com/Invite/CheckLogin', {
      cancelGroupName: 'getLessons'
    })
}
// 领取课程
let apiGetLessons = function (giftType) {
    return axios.get('https://growth.xueersi.com/programspecial/sendgift', {
      params: {
        giftType: giftType
      }
    })
}

/* 分享页 */
let apiShareImg = function () {
    return axios.post('https://growth.xueersi.com/invite/userstucard/poster', {})
}

export {apiGetGrade, apiSendLogin, apiLogin, apiRegister, apiSendReg, apiCheckLogin, isLive, apiGetLessons, apiShareImg}
