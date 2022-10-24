describe('Verify create regular appointment failed with expected error', async () => {
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
        it('Choose start day > end day to cause error',  async() => {   
            const start_day = await $('//*[@id="start_day"]')
            const end_day_value = await start_day.getValue()
            await $(`//*[@id="end_day"]/option[${end_day_value-1}]`).click()
            await expect($(`//*[@id="end_day"]/option[${end_day_value-1}]`)).toBeSelected()
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
        it('Confirm the msgbox is displayed', async()=>{
            const msgBox = await $('//*[@id="msgbox"]')
            await expect(msgBox).toBeDisplayed()
        })
        it('Confirm error code: GRN_SCHD_13006', async() =>{
            const errorMsg = await $('//*[@id="msgbox"]/div[2]/div/table/tbody/tr/td/div[2]/span')
            await expect(errorMsg).toHaveText('GRN_SCHD_13006')
            await $('//*[@id="msgbox_btn_ok"]/a').click()
        })
})

