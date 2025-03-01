import DefaultPage from './default';
import { strict as assert } from 'assert';

class AccountPage extends DefaultPage {
	constructor() {
		super('account', '[href="/search"]')
	}

	get locators() {
		return {
			login: 'input[name="login"]',
			password: 'input[name="password"]',
			passwordOld: 'input[placeholder="Старый пароль"]',
			nextButton: 'input[name="123312213"]',
			submitButton: 'button[class="name__button--2Ten8 name__buttons__marginForFilmCard--29k8-"]',
			checkAutorizedNav: 'li[class="name__right_profile--3FtTW"]',
			avatar: 'img[class="name__round--21Oxj"]',
			loginButton:  '//button[text()="Войти"]',
			profileLink: 'div#okno button',
			logoutButton: 'button',
			//settingLink: 'div#okno button[text()="Настройки"]',
			nickname: 'span[class="name__profile__default_margin--_Vkp5 name__profile_login--2W71f"]'
		}
	}

	fillLoginForm (username) {
		this.page.waitForVisible(this.locators.login);
		this.page.click(this.locators.login);
		this.page.setValue(this.locators.login, username);
	}

	fillPasswordForm (password) {
		this.page.waitForVisible(this.locators.password);
		this.page.click(this.locators.password);
		this.page.setValue(this.locators.password, password);
	}

	fillOldPasswordForm (password) {
		this.page.waitForVisible(this.locators.passwordOld);
		this.page.click(this.locators.passwordOld);
		this.page.setValue(this.locators.passwordOld, password);
	}

	fillChangePasswordForm(oldPassword, newPassword) {
		this.fillPasswordForm(newPassword);
		this.fillOldPasswordForm(oldPassword);
	}


	goToProfile () {
		this.page.waitForVisible(this.locators.avatar);
		this.page.click(this.locators.avatar);
		this.page.waitForVisible(this.locators.profileLink);
		this.page.click(this.locators.profileLink);
	}

	logout() {
        this.page.waitForVisible(this.locators.logoutButton);
        this.page.click(this.locators.logoutButton);
        this.page.waitForVisible(this.locators.logoutButton);
    }

	waitAuth() {
		this.page.waitForVisible(this.locators.avatar);
	}

	waitLogout() {
		this.page.waitForVisible(this.locators.loginButton);
	}

	submit() {
		this.page.waitForVisible(this.locators.submitButton);
		this.page.click(this.locators.submitButton)
	}

	checkAuthorized(username) {
		this.page.waitForVisible(this.locators.nickname);
        const nickname = this.page.getText(this.locators.nickname);
		return nickname
	}
}

export default new AccountPage();
