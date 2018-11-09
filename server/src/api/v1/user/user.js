

class User {
    constructor(account, password, photo, userName, description, sex, birthday, address, channels) {
        if (account) {
            this.account = account;
        }
        if (password) {
            this.password = password;
        }
        if (photo) {
            this.photo = photo;
        }
        if (userName) {
            this.userName = userName;
        }
        if (description) {
            this.description = description;
        }
        if (sex) {
            this.sex = sex;
        }
        if (birthday) {
            this.birthday = birthday;
        }
        if (address) {
            this.address = address;
        }
        if (channels) {
            this.channels = channels;
        }
    }
}


module.exports = User;
