describe('Verify create regular appointment successfully', async () => {
    before(async() =>{
        
        const locatorOfLoginPage = {
            usernameInputField: '//*[@id="username-:0-text"]',
            passwordInputField: '//*[@id="password-:1-text"]',
            loginButton: '.login-button'
        }
        const account = {
            username: 'cybozu',
            password: 'cybozu'
        }
            await browser.url('/')
            const usernameField = await $(locatorOfLoginPage.usernameInputField)
            const passwordField = await $(locatorOfLoginPage.passwordInputField)
            const loginButton = await $(locatorOfLoginPage.loginButton)
            await usernameField.setValue(account.username)
            await passwordField.setValue(account.password)
            await loginButton.click()
            const garoonBtn = await $('a[href="/g/"]')
            await garoonBtn.click()      
    })
    after( async () => {
        const dropdownBtn = await $('//*[@id="cloudHeader-userName-grn"]')
        const logoutBtn = await $('//*[@id="com-header-logout-link"]')
        await dropdownBtn.click()
        await logoutBtn.click()
        await browser.pause(7000)
    })
        const appointment = {
            title: 'This is WDIO testing',
            start_day_value: 30,
            end_day_value: 30
        }
        it('Create appointment through the icon', async () => {
            const createdIcon = await $('//*[@id="gw_1_cal_tbody"]/tr[2]/td[2]/div[1]/a')
            await expect(createdIcon).toBeDisplayed()
            await expect(createdIcon).toBeClickable()
            await createdIcon.click()
        })
    
        it('Check appointment type', async()=>{
            const appointmentKind = await $('//*[@id="schedule/add"]/div[1]/span[2]')
            await expect(appointmentKind).toHaveAttribute('class','tab_on')
            
            })
        it('Choose start and end day values',  async() => {
            await $(`//*[@id="start_day"]/option[${appointment.start_day_value}]`).click()
            await expect($(`//*[@id="start_day"]/option[${appointment.start_day_value}]`)).toBeSelected()
            
                
            await $(`//*[@id="start_day"]/option[${appointment.end_day_value}]`).click()
            await expect($(`//*[@id="start_day"]/option[${appointment.end_day_value}]`)).toBeSelected()
            })
        it('Set subject title', async() => {
            const subjectTiltle = await $('[title="Appointment title"]')
            await subjectTiltle.addValue(appointment.title)
            await expect(subjectTiltle).toHaveValue(appointment.title)
            })
    
        it('Click "Add" Button', async () =>{
            const addBtn = await $('//*[@id="schedule_submit_button"]/a')
            await expect(addBtn).toBeDisplayed()
            await expect(addBtn).toBeClickable()
            await addBtn.click()
        })
        it('Verify information of the appointment', async() =>{
            await expect($('.schedule_text_noticeable_grn')).toHaveTextContaining(`${appointment.start_day_value}`)
            await expect($(`h2=${appointment.title}`)).toHaveText(appointment.title)
        })
        it('Deleting the appointment', async () => {
            const deleteAppointmentBtn = await $('//*[@id="main_menu_part"]/div[1]/span[2]/span/a')
            const confirmDelAppointmentBtn = await $('//*[@id="schedule_button_save"]/a')
            await expect(deleteAppointmentBtn).toBeDisplayed()
            await expect(deleteAppointmentBtn).toBeClickable()
            await deleteAppointmentBtn.click()
            await browser.waitUntil(async()=> (
                await confirmDelAppointmentBtn.isDisplayed() === true,
                await confirmDelAppointmentBtn.isClickable() === true
            ),5000)
            await confirmDelAppointmentBtn.click()
        })
        it('Check the appointment has been removed out portlet screen', async() => {
            const portletFilterList = await $('//*[@id="title"]')
            await expect(portletFilterList).toBeDisplayed()
            await portletFilterList.click()
            await expect($('td=(Recently selected users)')).toBeClickable()
            $('td=(Recently selected users)').click()
            await expect($(`//*[text()='${appointment.title}']`)).not.toBePresent()
        })
})

