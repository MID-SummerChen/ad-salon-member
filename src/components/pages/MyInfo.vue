<template>
  <div id="MyInfo">
    <h3 class="pageTitle">會員中心</h3>
    <div class="container">
      <div class="paper">
        <form class="form-horizontal">
          <div class="form-group">
            <label class="col-sm-3 control-label">帳號</label>
            <div class="col-sm-9">
              <p class="form-control-static">{{form.acc}}</p>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label">暱稱</label>
            <div class="col-sm-9">
              <mu-text-field v-model="form.nick" hintText=""/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label">信箱</label>
            <div class="col-sm-9">
              <mu-text-field v-model="form.email" hintText=""/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label">手機</label>
            <div class="col-sm-9">
              <mu-text-field v-model="form.phone" hintText=""/>
            </div>
          </div>
          
          <div class="form-group">
            <label class="col-sm-3 control-label">性別</label>
            <div class="col-sm-9">
              <div class="radio-group">
                <md-radio v-model="form.gender" name="group1" :md-value="1">男</md-radio>
                <md-radio v-model="form.gender" name="group1" :md-value="2">女</md-radio>
              </div>
            </div>
          </div>
        </form>
        <div class="btn-wrap">
          <mu-raised-button label="確認修改" primary/>
          <mu-raised-button label="忘記密碼" secondary/>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyInfo',
  data () {
    return {
      form: {
        acc: "summer987",
        nick: "陳夏天",
        email: "summer987@gmail.com",
        phone: "0921-888765",
        gender: 1,
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
#MyInfo 
  padding 50px 0
  padding-bottom: 100px
  background-color: #f5f5f5
  min-height calc(100vh - 200px)
  .pageTitle 
    margin-bottom: 30px
  h3 
    font-size: 26px 
    text-align center
    letter-spacing 3px
    // font-weight bold
    &::after 
      content: ""
      border-bottom: 2px solid #4DEFD4
      display block
      width: 70px 
      margin: 20px auto
  .paper
    background-color: #fff
    padding: 60px 30px
    box-shadow 0 2px 3px 2px rgba(#000, 0.1)
    margin: 0 20px
    @media screen and (max-width: 767px)
      margin: 0 10px
  form 
    max-width: 500px
    margin: 0 auto
    font-size: 16px
    &.form-horizontal .control-label
      padding-right: 30px
      letter-spacing 3px
      // text-align: left
    .mu-text-field
      width: 100%
    .radio-group 
      .md-radio
        margin: 8px
        margin-left: 0
  .btn-wrap
    text-align: center
    margin-top: 50px
    .mu-raised-button
      margin: 0 5px
      font-size: 16px 
      font-weight: bold
      letter-spacing 2px
      width: 120px
      height: 40px
</style>
