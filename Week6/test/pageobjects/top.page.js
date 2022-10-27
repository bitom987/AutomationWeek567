class TopPage {
    get portletFilterList(){
        return $('//*[@id="title"]')
    }
    get recentlySelectedUsers(){
        return $('td=(Recently selected users)')
    }
    get btnHome(){
        return $('//*[@id="header"]/div/div/nav[1]/a')
    }
    get createdIcon(){
        return $('//*[@id="gw_1_cal_tbody"]/tr[2]/td[2]/div[1]/a')
    }
    get dropdownBtn(){
        return $('//*[@id="cloudHeader-userName-grn"]')
    } 
    get logoutBtn(){
        return $('//*[@id="com-header-logout-link"]')
    } 
    async goHome(){
        await this.btnHome.click()
    }
    async createAppointmentThrouIcon(){
        await expect(this.createdIcon).toBeDisplayed()
        await expect(this.createdIcon).toBeClickable()
        this.createdIcon.click()
    }
    async verifyTitleNotAvail(value){
        await browser.waitUntil(
            async() => (
                await (this.btnHome).isDisplayed()
            )===true,
            {
                timeout: 5000,
                timeoutMsg:'HomeBtn is not shown for 5s'
            }
            )
        this.goHome()
        await expect($(`//*[text()='${value}']`)).not.toBePresent()
    }
    async verifyTitleIsDisplayed(value){    
        return $(`//*[text()='${value}']`).isDisplayed()
    }
    async Logout(){
        await expect(this.dropdownBtn).toBeDisplayed()
        await this.dropdownBtn.click()
        await expect(this.logoutBtn).toBeDisplayed()
        await this.logoutBtn.click()
        await browser.pause(5000)
    }
}
export default new TopPage();