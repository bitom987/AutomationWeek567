

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CreatingAppointmentPage extends Page {
    /**
     * define selectors using getter methods
     */
    get regularAppointmentType(){
        return $('//*[@id="schedule/add"]/div[1]/span[2]')
    };
    get subjectTiltleField(){
        return $('[title="Appointment title"]')
    }
    get btnAdd(){
        return $('//*[@id="schedule_submit_button"]/a')
    }
    async verifyRegulartType(){
        await expect(this.regularAppointmentType).toHaveAttribute('class','tab_on')
    }
    async setAndVerifyDate(start,end){
        await $(`//*[@id="start_day"]/option[${start}]`).click()
        await $(`//*[@id="end_day"]/option[${end}]`).click()
        await expect($(`//*[@id="start_day"]/option[${start}]`)).toBeSelected()
        await expect($(`//*[@id="end_day"]/option[${end}]`)).toBeSelected()
    }
    async addAppointment(){
        await expect(this.btnAdd).toBeDisplayed()
        await expect(this.btnAdd).toBeClickable()
        await this.btnAdd.click()
    }
    async setAndVerifyTitle(value){
        this.subjectTiltleField.addValue(value)
        await expect(this.subjectTiltleField).toHaveValue(value)
    }
}

export default new CreatingAppointmentPage();
