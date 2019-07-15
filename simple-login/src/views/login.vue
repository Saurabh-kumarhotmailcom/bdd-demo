<template>
    <div id="login">
        <h1>Login</h1>
        User Name: <input type="text" name="username" v-model="input.username" placeholder="Username" />
        Password: <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
        <h1 class="message" v-if="!input.loginFlag">Invalid username and password</h1>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: "",
                    loginFlag: true
                }
            }
        },
        methods: {
            login() {

                    var reqObj ={ username:this.input.username, password:this.input.password };
                    var axios=require('axios');
                                   

                    axios({
                         method: 'post',
                         url: 'http://localhost:5000/login',
                         data: reqObj,
                         config: { headers: {'Content-Type': 'application/json' }}
                    }).then((response) => {
                        console.log(response);

                         if(response.status === 200) {
                              this.$emit("authenticated", true);
                              this.$router.replace({ name: "secure" });
                              console.log("The username and / or password is correct");
                        } else {
                            this.input.loginFlag = false;
                            console.log("The username and / or password is incorrect");
                      }


                    }).catch((response) => {
                       this.input.loginFlag = false;
                        // console.log(response);
                        console.log("The username and / or password is incorrect");
                    });

                          


           
            }
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>