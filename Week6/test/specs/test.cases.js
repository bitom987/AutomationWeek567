import LoginPage from '../pageobjects/login.page'
import AppointmentDetail from '../pageobjects/appointment.detail'
import CreatingAppointmentPage from '../pageobjects/new.appointment.page'
import TopPage from '../pageobjects/top.page';
import allureReporter from '@wdio/allure-reporter'

describe('Garoon', async () => {
    const appointment = {
        title: 'This is WDIO testing',
        start_day_value: 30,
        end_day_value: 30
    }
    // Login
    beforeEach(async() =>{
        const account = {
            username: 'cybozu',
            password: 'cybozu'
        }
            LoginPage.open();
            LoginPage.login(account.username,account.password)
            const garoonBtn = await $('a[href="/g/"]')
            await garoonBtn.click()
    })
    // Logout
    afterEach( async () => {
        await TopPage.goHome()
        while (await $(`//*[text()='${appointment.title}']`).isDisplayed()){
            TopPage.goHome()
            const theAppointment = $(`//*[text()='${appointment.title}']`)
            await theAppointment.click() 
            AppointmentDetail.delAppointment()
        }
        const dropdownBtn = await $('//*[@id="cloudHeader-userName-grn"]')
        const logoutBtn = await $('//*[@id="com-header-logout-link"]')
        await dropdownBtn.click()
        await logoutBtn.click()
        await browser.pause(5000)
        })
    describe('scheduler', async () => {
        it('Verify create regular appointment successfully', async () => {
            allureReporter.addFeature('Adding regular appointment')
            allureReporter.addStep('Create appointment through the icon')
            // Create appointment through the icon 
            allureReporter.addStep('Create appointment through the icon ')
            await expect(TopPage.createdIcon).toBeDisplayed()
            await expect(TopPage.createdIcon).toBeClickable()
            TopPage.createAppointmentThrouIcon()
        
            // Check appointment type
            allureReporter.addStep('Check appointment type')
            await expect(CreatingAppointmentPage.regularAppointmentType).toHaveAttribute('class','tab_on')
    
            // Choose start and end day values
            allureReporter.addStep('Choose start and end day values')
            CreatingAppointmentPage.setDate(appointment.start_day_value,appointment.end_day_value)
            await expect($(`//*[@id="start_day"]/option[${appointment.start_day_value}]`)).toBeSelected()
            await expect($(`//*[@id="end_day"]/option[${appointment.end_day_value}]`)).toBeSelected()
    
            // Set subject title
            allureReporter.addStep('Set subject title')
            CreatingAppointmentPage.subjectTiltleField.addValue(appointment.title)
            await expect(CreatingAppointmentPage.subjectTiltleField).toHaveValue(appointment.title)
        
            // Click "Add" Button
            allureReporter.addStep('Click "Add" Button')
            await expect(CreatingAppointmentPage.btnAdd).toBeDisplayed()
            await expect(CreatingAppointmentPage.btnAdd).toBeClickable()
            CreatingAppointmentPage.addAppointment()
            
            // Verify information of the appointment
            allureReporter.addStep('Verify information of the appointment')
            await expect(AppointmentDetail.dateTitle).toHaveTextContaining(`${appointment.start_day_value}`)
            await expect(AppointmentDetail.appointmentTitle(appointment.title)).toHaveText(appointment.title)
        
    
            // Deleting the appointment
            allureReporter.addStep('Deleting the appointment')
            await expect(AppointmentDetail.btnDel).toBeDisplayed()
            await expect(AppointmentDetail.btnDel).toBeClickable()
            AppointmentDetail.delAppointment(appointment.title)
            
            // Check the appointment has been removed out portlet screen
            allureReporter.addStep('Check the appointment has been removed out portlet screen')
            // TopPage.goHome()
            await expect($(`//*[text()='${appointment.title}']`)).not.toBePresent()
        })
        it('Verify create regular appointment failed with expected error', async () => {
            allureReporter.addFeature('Adding regular appointment')
            // Create appointment through the icon 
            allureReporter.addStep('Create appointment through the icon')
            await expect(TopPage.createdIcon).toBeDisplayed()
            await expect(TopPage.createdIcon).toBeClickable()
            TopPage.createAppointmentThrouIcon()
    
            // Check appointment type
            allureReporter.addStep('Check appointment type')
            await expect(CreatingAppointmentPage.regularAppointmentType).toHaveAttribute('class','tab_on')
    
            // Choose start day > end day to cause error
            allureReporter.addStep('Choose start day > end day to cause error')
            CreatingAppointmentPage.setDate(appointment.start_day_value+1,appointment.end_day_value)
            await expect($(`//*[@id="start_day"]/option[${appointment.start_day_value+1}]`)).toBeSelected()
            await expect($(`//*[@id="end_day"]/option[${appointment.end_day_value}]`)).toBeSelected()
            
            // Set subject title
            allureReporter.addStep('Set subject title')
            CreatingAppointmentPage.subjectTiltleField.addValue(appointment.title)
            await expect(CreatingAppointmentPage.subjectTiltleField).toHaveValue(appointment.title)
        
            // Click "Add" Button
            allureReporter.addStep('Click "Add" Button')
            await expect(CreatingAppointmentPage.btnAdd).toBeDisplayed()
            await expect(CreatingAppointmentPage.btnAdd).not.toBeClickable()
            CreatingAppointmentPage.addAppointment()
    
            // Confirm the msgbox is displayed
            allureReporter.addStep('Confirm the msgbox is displayed')
            const msgBox = await $('//*[@id="msgbox"]')
            await expect(msgBox).toBeDisplayed()
            
            // Confirm error code: GRN_SCHD_13006
            allureReporter.addStep('Confirm error code: GRN_SCHD_13006')
            allureReporter.addIssue('GRN_SCHD_13006')
            const errorMsg = await $('//*[@id="msgbox"]/div[2]/div/table/tbody/tr/td/div[2]/span')
            await expect(errorMsg).toHaveText('GRN_SCHD_13006')
            await $('//*[@id="msgbox_btn_ok"]/a').click()

        })
    })
})

