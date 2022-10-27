

class AppointmentDetail {
    /**
     * define selectors using getter methods
     */
    get btnEdit(){
        return;
    }
    get btnDel(){
        return $('//*[@id="main_menu_part"]/div[1]/span[2]/span/a')
    }
    get confirmBtnDel(){
        return $('//*[@id="schedule_button_save"]/a')
    }
    get btnReuse(){
        return;
    }
    get btnLeave(){
        return;
    }
    get dateTitle(){
        return $('.schedule_text_noticeable_grn')
    }
    async appointmentTitle(value){
        return $(`h2=${value}`)
    }
    async verifyInfo(title,date){
        await expect(this.dateTitle).toHaveTextContaining(`${date}`)
        await expect(this.appointmentTitle(title)).toHaveText(title)
    }
    async delAppointment(){
        await browser.waitUntil(
            async()=>(await (this.btnDel).isDisplayed())===true,
            {
                timeout: 5000,
                timeoutMsg: 'Delbtn is not shown'
            }
        )
        await expect(this.btnDel).toBeClickable()
        await this.btnDel.click()
        await browser.waitUntil(
            async()=>(await (this.confirmBtnDel).isDisplayed())===true,
            {
                timeout: 5000,
                timeoutMsg: 'confirmDelbtn is not shown'
            }
        )
        await expect(this.confirmBtnDel).toBeClickable()
        await this.confirmBtnDel.click() 
        await browser.pause(2000)
    }
}

export default new AppointmentDetail();
