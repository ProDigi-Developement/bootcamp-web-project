class API {
    constructor() {
        this.username = "tharshan09@gmail.com"
        this.password = "qwerty"
        this.API_KEY = "AIzaSyABO-VnWwbAuJMo6qTj-NicMynkX6rzmVw"
        this.localId = null
        this.idToken = null
    }

    login(cb) {
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
            cb(resp);
        });
    }    
}

export default API