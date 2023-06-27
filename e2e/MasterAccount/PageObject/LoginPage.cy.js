
class LoginPage
{
    visit()
    {
        cy.visit('http://edtest70.edcite-dev.com/usr/signin.html')
    }

    fillUserid(value)
    {
        const userid=cy.get('#userid')
        userid.clear()
        userid.type(value)
        return this
    }
    fillPassword(value)
    {
        const password=cy.get('#password')
        password.clear()
        password.type(value)
        return this
    }
    submit()
    {
        const button=cy.get('#loginBtn')
        button.click()
    }
}
export default LoginPage