

<script>
// import axios from 'axios';
// import {APIENDPOINT} from  '../../http-common.js';
import loginService from './loginService.js';
export default {
    template:require('./login.html'),
    data() {
        return {
            loginDetails : {
                residentID : '',
                password : ''
            },
            
            
        }
    },
    methods: {
        loginUser:function() {  
             const authUser = {}
             var app = this;
            loginService.login(this.loginDetails)
            .then(function(res) {
                if(res.status === "success") {
                    authUser.data = res.data;
                    authUser.token = res.token;
                    window.localStorage.setItem('lbUser',JSON.stringify(authUser));
                    if(authUser.data.role_id === 'ADMIN') {
                     app.$router.push('/admin');
                    }else {
                      app.$router.push('/resident');
                    }
                }
            })
            .catch(function (err){
                console.log(err.data)
            })
        }
    }
}





</script>

<style lang="scss">
    @import './login.scss';
</style>