<template>
  <div>
    <div class="box">
      <div class="subBox">
        <input
          v-model="id"
          class="textField"
          placeholder="아이디를 입력해주세요."
          :class="{'textError': idError}"
        >
        <p
          v-if="idError"
          class="subError"
        >
          아이디를 입력해주세요.
        </p>
      </div>

      <div class="subBox">
        <input
          v-model="pw"
          type="password"
          class="textField"
          placeholder="비밀번호 입력해주세요."
          :class="{'textError': pwError}"
        >
        <p
          v-if="pwError"
          class="subError"
        >
          비밀번호를 입력해주세요.
        </p>
      </div>




      <button
        class="login"
        @click="login"
      >
        로그인
      </button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Main',
    data() {
        return {
            id: '',
            pw: '',
            idError: false,
            pwError: false
        }
    },
    watch: {
        id(val){
            if(val.length > 0){
                this.idError = false
            }
        },
        pw(val){
            if(val.length > 0){
                this.pwError = false
            }
        }
    },
    methods: {
        login(){
            if(this.isBlank(this.id)){
                this.idError = true
            }
            if(this.isBlank(this.pw)){
                this.pwError = true
            }

        },
        isBlank(val){
            if(val === undefined) return true
            else if(val === null) return true
            else if(val === '') return true
            else return false
        }
    }
}
</script>

<style>
.subBox{
    margin-bottom: 40px;
    height: 80px;
}
.textField{
    border: none;
    border-bottom:1px solid black;
    height: 45px;
    line-height: 45px;
    box-sizing: border-box;
    width: 300px;
    font-size: 20px;
}

.textError{
    border-bottom-color: red;
}

.subError{
    height: 15px;
    color: red;
    display:inline-block;
    margin-top: 10px;
    margin-bottom: 10px;    
}

.box{
    width: 300px;
    margin-left:auto;
    margin-right:auto;
    margin-top: 100px;
    height:300px;
}

.login{
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    text-align: center;
    margin-top: 50px;
    background-color: #3b5998;
    color: white;
}

.login:hover{
    opacity: 0.9;
}
</style>