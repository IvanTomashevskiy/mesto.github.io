import avatar from '../imgages/avatar.jpg';
class Api {
    constructor(url, token) {
        this.url = url;
        this.token = token;
        // Хорошо адрес и токен записываются в поля класса из входящих параметров
    }
    getInfo(callback) {
        return fetch(`${this.url}/users/me`, {
                method: 'GET',
                headers: {
                    authorization: this.token,
                }
            })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(res.status)
            })
            .then((data) => {
                // Отлично из запросов возвращаются данные сразу в
                // передаваемую функцию
                callback(data)
            })
            .catch((err) => {
                console.log('Ошибка getInfo. Запрос не выполнен:', err)
            })
    }


    getCards(callback) {
        return fetch(`${this.url}/cards`, {
                method: 'GET',
                headers: {
                    authorization: this.token
                }
            })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(res.status)
            })
            .then((data) => {    
                    callback(data)
            })
            .catch((err) => {
                console.log('Ошибка getCards. Запрос не выполнен:', err)
            })
    }

    updateProfile(nik, about) { 
        return fetch(`${this.url}/users/me`, {
                method: 'PATCH',
                headers: {
                    authorization: this.token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: nik ,
                    about: about
                })
            })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(res.status)
            })

            .catch((err) => {
                console.log('Ошибка profile. Запрос не выполнен:', err)
            })
    } 
    setUserInfo(name, about) {
        return fetch(`${this.url}/users/me`, {
                method: 'PATCH',
                headers: {
                    authorization: this.token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                     name, about 
                })
                // При совпадении ключей - значения можно не дублировать
                // { name, about }
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }
}
export { Api };