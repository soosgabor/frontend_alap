import Axios from 'axios';
Axios.defaults.baseURL = 'https://szf-kepzesek.cyclic.app/api';

export default {
    getAllTraining(){
        return Axios.get('/trainings')
            // .then(resp => {
            //     console.log(resp.data);
            //     return resp.data;
            // })
            // .catch(err =>{
            //     //console.log(err);
            //     return Promise.reject(err);
            // })
    },
    // getAllTelefonok(){
    //     return Axios.get('/getTelefonok')
    //         .then(resp => {
    //             //console.log(resp.data);
    //             return resp.data;
    //         })
    //         .catch(err =>{
    //             //console.log(err);
    //             return Promise.reject(err);
    //         })
    // },
    // getUserById(id){
    //     return Axios.get(`/users/${id}`)
    //         .then(resp => {
    //             //console.log(resp.data);
    //             return resp.data;
    //         })
    //         .catch(err =>{
    //             //console.log(err);
    //             return Promise.reject(err);
    //         })
    // },
    // saveUser(user){
    //     return Axios.post('/users',user).then(()=>{});
    // },
    // updateUser(user,id){
    //     return Axios.put(`/users/${id}`,user).then(()=>{});
    // }


}