import Cookies from 'universal-cookie';

class API {
    constructor() {
        this.cookies = new Cookies();
        this.username = 'tharshan09@gmail.com';
        this.password = 'qwerty';
        this.API_KEY = 'AIzaSyABO-VnWwbAuJMo6qTj-NicMynkX6rzmVw';
        this.localId = this.cookies.get('localId');
        this.idToken = this.cookies.get('idToken');
    }
    login(cb) {
        if (this.localId && this.idToken) {
            cb();
        }else{
            fetch(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${this.API_KEY}`, {
                method: 'post',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({
                    "email": this.username,
                    "password": this.password,
                    "returnSecureToken": true
                })
            })
            .then(resp => resp.json())
            .then(resp => {
                this.localId = resp.localId;
                this.idToken = resp.idToken;
                this.cookies.set('localId', resp.localId, {maxAge:3600});
                this.cookies.set('idToken', resp.idToken, {maxAge:3600});
                cb(resp);
            });
        }

    }
    getMessages(cb) {
        fetch(`https://prodigi-bootcamp.firebaseio.com/${this.localId}/messages.json?auth=${this.idToken}`)
        .then(resp => resp.json())
        .then(resp => {
            cb(resp);
        });
    }
    sendMessage(username, text, cb) {
        fetch(`https://prodigi-bootcamp.firebaseio.com/${this.localId}/messages.json?auth=${this.idToken}`, {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                "username": username,
                "text": text,
            })
        })
        .then(resp => resp.json())
        .then(resp => {
            cb(resp);
        });
    }
}
export default API;