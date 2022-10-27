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
            await browser.pause(5000)
            LoginPage.login(account.username,account.password)
            const garoonBtn = await $('a[href="/g/"]')
            await garoonBtn.click()
    })
    // Logout
    afterEach( async () => {
        await TopPage.goHome()
        while (await TopPage.verifyTitleIsDisplayed(appointment.title)){
            await TopPage.goHome()
            const theAppointment =  await $(`//*[text()='${appointment.title}']`)
            await theAppointment.click()
            await browser.pause(5000) 
            await AppointmentDetail.delAppointment()
        }
        await TopPage.Logout()
        })
    describe('scheduler', async () => {
        it('Verify create regular appointment successfully', async () => {
            allureReporter.addFeature('Adding regular appointment')
            allureReporter.addStep('Create appointment through the icon')
            // Create appointment through the icon 
            allureReporter.addStep('Create appointment through the icon ')
            await TopPage.createAppointmentThrouIcon()
        
            // Check appointment type
            allureReporter.addStep('Check appointment type')
            await CreatingAppointmentPage.verifyRegulartType()
    
            // Choose start and end day values
            allureReporter.addStep('Choose start and end day values')
            await CreatingAppointmentPage.setAndVerifyDate(appointment.start_day_value,appointment.end_day_value)
            
    
            // Set subject title
            allureReporter.addStep('Set subject title')
            await CreatingAppointmentPage.setAndVerifyTitle(appointment.title)
        
            // Click "Add" Button
            allureReporter.addStep('Click "Add" Button')
            await CreatingAppointmentPage.addAppointment()
            
            // Verify information of the appointment
            allureReporter.addStep('Verify information of the appointment')
            await AppointmentDetail.verifyInfo(appointment.title,appointment.start_day_value)
        
    
            // Deleting the appointment
            allureReporter.addStep('Deleting the appointment')
            await AppointmentDetail.delAppointment()
            
            // Check the appointment has been removed out portlet screen
            allureReporter.addStep('Check the appointment has been removed out portlet screen')
            // TopPage.goHome()
            await TopPage.verifyTitleNotAvail(appointment.title)
        })
        it('Verify create regular appointment failed with expected error', async () => {
            allureReporter.addFeature('Adding regular appointment')
            // Create appointment through the icon 
            allureReporter.addStep('Create appointment through the icon')
            await expect(TopPage.createdIcon).toBeDisplayed()
            await expect(TopPage.createdIcon).toBeClickable()
            await TopPage.createAppointmentThrouIcon()
    
            // Check appointment type
            allureReporter.addStep('Check appointment type')
            await CreatingAppointmentPage.verifyRegulartType()
    
            // Choose start day > end day to cause error
            allureReporter.addStep('Choose start day > end day to cause error')
            await CreatingAppointmentPage.setAndVerifyDate(appointment.start_day_value+1,appointment.end_day_value)
            
            // Set subject title
            allureReporter.addStep('Set subject title')
            await CreatingAppointmentPage.setAndVerifyTitle(appointment.title)
        
            // Click "Add" Button
            allureReporter.addStep('Click "Add" Button')
            await CreatingAppointmentPage.addAppointment()
    
            // Confirm the msgbox is displayed
            allureReporter.addStep('Confirm the msgbox is displayed')
            const msgBox = await $('//*[@id="msgbox"]')
            await expect(msgBox).not.toBeDisplayed()
            
            // Confirm error code: GRN_SCHD_13006
            allureReporter.addStep('Confirm error code: GRN_SCHD_13006')
            allureReporter.addIssue('GRN_SCHD_13006')
            const errorMsg = await $('//*[@id="msgbox"]/div[2]/div/table/tbody/tr/td/div[2]/span')
            await expect(errorMsg).toHaveText('GRN_SCHD_13006')
            await $('//*[@id="msgbox_btn_ok"]/a').click()

        })
    })
})

