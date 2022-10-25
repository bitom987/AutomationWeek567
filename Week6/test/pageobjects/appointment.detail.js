

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
    async delAppointment(value){
        await this.btnDel.click()
        await this.confirmBtnDel.click() 
    }
}

export default new AppointmentDetail();
