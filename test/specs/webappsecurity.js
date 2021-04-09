import { small, medium, long } from '../../lib/timeouts'

describe('http://zero.webappsecurity.com/ testing', () => {
	it('Should not login with invalid credemtials', () => {
		browser.url('http://zero.webappsecurity.com/')
		const signInButton = browser.$('#signin_button')
		signInButton.waitForExist()
		signInButton.click()
		const usernameInputField = browser.$('#user_login')
		usernameInputField.waitForExist()
		usernameInputField.setValue('aaa')
		const passwordInputField = browser.$('#user_password')
		passwordInputField.waitForExist()
		passwordInputField.setValue('aaa')
		const loginButton = browser.$('input[type=submit]')
		loginButton.waitForExist()
		loginButton.click()
		const errorMessage = browser.$('.alert-error')
		errorMessage.waitForExist()
		// errorMessage.isEqual('Login and/or password are wrong.')
		expect(errorMessage).toHaveText('Login and/or password are wrong.')
	})
	it('Should login with valid credentials', () => {
		// const signInButton = browser.$('#signin_button')
		// signInButton.waitForExist()
		// signInButton.click()
		const usernameInputField = browser.$('#user_login')
		usernameInputField.waitForExist()
		usernameInputField.setValue('username')
		const passwordInputField = browser.$('#user_password')
		passwordInputField.waitForExist()
		passwordInputField.setValue('password')
		const loginButton = browser.$('input[type=submit]')
		loginButton.waitForExist()
		loginButton.click()
		const tabToCheck = browser.$('#online_statements_tab')
		tabToCheck.waitForExist()
	})
	it('Should log out from app', () => {
		const userNameButton = browser.$('i[class=icon-user]') //
		userNameButton.waitForExist()
		userNameButton.click()
		const logOutButton = browser.$('#logout_link')
		logOutButton.waitForExist()
		logOutButton.click()
		const tabToCheck = browser.$('#feedback')
		tabToCheck.waitForExist()
	})
})
