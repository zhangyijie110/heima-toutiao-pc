<template>
  <!-- 全屏容器 -->
  <div class="container">
    <!-- 卡片容器 -->
    <el-card>
      <img src="../../assets/logo_index.png" alt />
      <!-- 表单 -->
      <el-form :model="LoginForm" ref="loginForm" status-icon :rules="LoginRules">
        <!-- el-form-item 表单容器  label="活动名称" 指定说明文字 -->
        <el-form-item prop="mobile">
          <!-- 表单元素 -->
          <el-input v-model="LoginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="LoginForm.code"
            placeholder="请输入验证码"
            style="width:240px;margin-right:8px"
          ></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true" style="margin-top:8px">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login" style="width:100%;">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    // 校验手机号函数
    const checkMobile = (rule, value, callback) => {
      // 判断value是否符合手机格式
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
      } else {
        callback(new Error('手机号格式不对'))
      }
    }
    return {
      LoginForm: {
        mobile: '',
        code: ''
      },
      LoginRules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '验证码是6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      // 对整个表单校验
      this.$refs['loginForm'].validate(valid => {
        if (valid) {
          // 校验成功  进行登录（发请求）
          this.$http
            .post('authorizations', this.LoginForm)
            .then(res => {
              // 成功
              this.$router.push('/')
            })
            .catch(() => {
              // 失败
              this.$message.error('手机号或验证码错误')
            })
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
.container {
  width: 100%;
  height: 100%;
  background: pink;
  position: absolute;
  left: 0;
  top: 0;
  // 背景图尺寸：拆分写法 background-size
  // 组合写法：background:..... / 背景图尺寸(width,height)
  // 特殊写法：cover  等比例缩放铺满容器多余不显示  contain 等比例缩放完全显示在容器内
  background: url(../../assets/login_bg.jpg) no-repeat center / cover;
  .el-card {
    width: 400px;
    height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 200px;
      display: block;
      margin: 0 auto 30px;
    }
  }
}
</style>
