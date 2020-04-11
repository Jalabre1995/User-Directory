import axios from 'axios';

export default {
    ////For getting all the users///
    getUsers: function() {
        return axios.get("https://randomuser.me/api/?results=200&nat=us")
    }
};
