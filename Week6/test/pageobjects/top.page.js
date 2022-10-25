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
    async goHome(){
        await this.btnHome.click()
    }
    async createAppointmentThrouIcon(){
        this.createdIcon.click()
    }

}
export default new TopPage();