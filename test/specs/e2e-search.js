describe('Searching with keybord enter', () => {
    it('Open page', () => {
        browser.url('http://zero.webappsecurity.com/index.html')
        const searchField = browser.$('#searchTerm')
        searchField.waitForExist()
    });
    it('Input value to search and press enter', () => {
        const searchField = browser.$('#searchTerm')
        searchField.waitForExist()
        searchField.setValue('zero')
        browser.keys('Enter')
    });
    it('Check if search resilt page is shown', () => {
        const headerSearch = browser.$('h2')
        headerSearch.waitForExist()
    });
});