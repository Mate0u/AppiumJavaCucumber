describe('First Steps with WebdriverIO', () => {
	it('Load Example Website', () => {
		browser.url('http://www.example.com')
		// browser.pause(3000)
		expect(browser).toHaveUrl('http://www.example.com/')
		expect(browser).toHaveTitle('Example Domain')
	})
	it('H1 should be visibe', () => {
		const h1 = browser.$('h1')
		h1.waitForExist()
		expect(h1).toBeVisible()
	})

	it('P should be visible', () => {
		expect(browser.$('p')).toBeVisible()
	})

	it('Check link value', () => {
		expect(browser.$('a')).toHaveLink('https://www.iana.org/domains/example')
	})

	it('Get element text', () => {
		const value = $('h1').getText()
		const element = $('h1')
		element.waitForExist()
		expect(element).toHaveText('Example Domain')
	})
})
