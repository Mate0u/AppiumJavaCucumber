import { short, medium, long } from '../../lib/timeouts'
import { mobile, tablet, desktop } from '../../lib/devices'

describe('Tests of devexpress', () => {
	it('Open devexpress Webpage', () => {
		browser.url('https://devexpress.github.io/testcafe/example/')
	})

	it('Assert attribute ', () => {
		const button = browser.$('#submit-button') //# use when selector is id
		button.waitForExist()
		expect(button).toHaveAttr('type', 'submit')
	})

	it('Asert value', () => {
		const button = browser.$('#populate')
		button.waitForExist()
		expect(button).toHaveValueContaining('Populate')
	})

	it('should save a screenshot of the browser view', function () {
		browser.saveScreenshot('./test/screenshots/screenshot.png')
	})

	it('Change browser viewport', () => {
		browser.setWindowSize(1650, 1080)
		browser.pause(short)
	})

	it('Set Mobile view', () => {
		browser.setWindowSize(mobile[0], mobile[1])
		browser.pause(short)
	})

	it('Set Tablet view', () => {
		browser.setWindowSize(tablet[0], tablet[1])
		browser.pause(short)
	})

	it('Set Desktop view', () => {
		browser.setWindowSize(desktop[0], desktop[1])
		browser.pause(short)
	})
})
