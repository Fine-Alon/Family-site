from playwright.sync_api import Page, expect

def test_access_protected_page(page: Page):
    # Открываем главную или страницу логина
    page.goto("http://localhost:3000/") 
     
    # Кликаем на кнопку Login
    page.get_by_role("button", name="Login").click() 
    # page.get_by_text("Login").click()
    
    # Ждём появления модального окна логина
    modal_login = page.get_by_role("dialog")
    page.locator('[data-open="true"][role="dialog"]')
    modal_login.wait_for(state="visible", timeout=4000)
    
    # Проверяем, что модалка действительно открылась
    expect(modal_login).to_be_visible()  
    expect(page.get_by_text("Confirm and sent")).to_be_visible()
    
    # Заполняем поля
      # Email:
    # email_input = page.get_by_label("Email") 
    email_input = page.get_by_placeholder("Enter your email")
    email_input.fill("test@test.com")
    
      # Password:
    page.get_by_placeholder("Enter password").fill("test123")
    
    # Нажимаем кнопку "Confirm and sent"
    page.get_by_role("button", name="Confirm and sent").click()
    
    # Ждём, пока модалка исчезнет 
    modal_login.wait_for(state="hidden", timeout=9000)
    
    # Находим кнопку Tasks в шапке
    tasks_link = page.get_by_role("link", name="tasks")
    tasks_link.click()  
    
    # Ждём, пока URL станет нужным (/tasks)
    page.wait_for_url("**/tasks", timeout=5000)

    # Проверяем, что URL действительно правильный
    assert "/tasks" in page.url
    
    # Проверяем, что страница содержит правильный контент
    tasks_text = page.get_by_text("долгосрочный todo лист")
    expect(tasks_text).to_be_visible(timeout=5000)

    print("Login, Tasks navigation and 'To do list")