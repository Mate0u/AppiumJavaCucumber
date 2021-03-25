describe('Browser actions', () => {
	it('Input example', () => {
		browser.url('https://devexpress.github.io/testcafe/example/')
		const input = browser.$('#developer-name')
		input.waitForExist()
		input.setValue('value')
		input.setValue('Mike')
		input.addValue(' Add')
		browser.saveScreenshot('./test/screenshots/input.png')
	})

	it('Clear input', () => {
		const input = browser.$('#developer-name')
		input.waitForExist()
		input.clearValue()
		browser.saveScreenshot('./test/screenshots/inputClear.png')
	})

	it('Click example', () => {
		const button = browser.$('#populate')
		button.waitForExist()
		button.click()
		button.doubleClick()
		browser.saveScreenshot('./test/screenshots/buttonClick.png')
	})

	it('Checkbox & Radio button example', () => {
		const linuxButton = browser.$('#linux')
		linuxButton.waitForExist()
		linuxButton.click()
		browser.saveScreenshot('./test/screenshots/buttonLinuxClick.png')

		const radioLastButton = browser.$('#continuous-integration-embedding')
		radioLastButton.waitForExist()
		radioLastButton.click()
		browser.saveScreenshot('./test/screenshots/radioLastButton.png')
	})

	it('Select box example', () => {
		const selectBox = browser.$('#preferred-interface')
		selectBox.waitForExist()
		selectBox.selectByVisibleText('JavaScript API')
	})
})
