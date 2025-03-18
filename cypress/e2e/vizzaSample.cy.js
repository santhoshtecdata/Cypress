describe('vizza portal', () => {
  it.only('login', () => {
    cy.visit('https://vizzainsurance.com/pos')
    cy.wait (2000)
    cy.viewport(1500,1000)
    console.log(cy.title())
    cy.get('input[formcontrolname="username"]').first().type('9962907312')
    cy.get('input[formcontrolname="password"]').first().type('admin1')
    cy.wait (2000)
    cy.get('button[type="submit"]').first().click()
    cy.wait(2000)
    //cy.get('#horizontal-menu-item-2 > .mat-button-wrapper > .horizontal-menu-title').trigger('mouseover').click()
     cy.visit('https://vizzainsurance.com/health-insurance')
     cy.wait(2000);
     // cy.get('#horizontal-menu-item-2 > .mat-button-wrapper > .horizontal-menu-title').click()
   
    
    cy.get('#mat-input-0').type('Santhosh')
    cy.get('#mat-input-1').type('test@gmail.com')
    cy.get('#mat-input-2').type('9024877843')
    cy.get('#mat-tab-content-0-0 > .mat-tab-body-content > form.ng-star-inserted > .text-center > .mat-focus-indicator').click()
   
    cy.get('#mat-input-12').type('06/06/2002')
  
    cy.get('input[name="healthPincode"]').first().type('624202')
    cy.contains('span','Proceed').first().click()
    cy.wait(5000)
    cy.get('#mat-select-4 > .mat-select-trigger > .mat-select-arrow-wrapper').click()
    
    //cy.xpath("(//mat-select-trigger[text()=' All (+ 4 others) '])[1]").click()
    cy.xpath("(//span[text()='Select All'])[1]").click()
    cy.xpath("(//span[text()=' Star Health '])[1]").click()
    cy.xpath("/html/body/div[3]/div[1]").click()
    cy.wait(1000)
    cy.get(':nth-child(2) > .pcc-main > .pcc-details > .pcc-actions > .pcc-action-buy > .buy-btn').click()
  
    cy.wait(1000)
  //  cy.xpath("")
  cy.xpath("(//span[text()='Title'])[1]").click();
  cy.wait(2000);

  cy.xpath("(//span[text()=' Mr '])[1]").click();
  cy.wait(1000);

  cy.xpath("(//input[@data-placeholder='First Name'])[1]").type('John');
  cy.xpath("(//input[@data-placeholder='Middle Name'])[1]").type('D');
  cy.xpath("(//input[@data-placeholder='Last Name'])[1]").type('TEST');
  cy.xpath("(//input[@data-placeholder='DOB (DD/MM/YYYY)'])[1]").type('06/06/2002');

  cy.xpath("(//mat-select[@placeholder='Occupation'])[1]").click();
  cy.xpath("(//span[text()=' BUSINESS/TRADERS '])[1]").click();

  cy.xpath("(//input[@data-placeholder='Email ID'])[1]").type('testuser@gmail.com');
  cy.xpath("(//input[@data-placeholder='Mobile Number'])[1]").type('9025939106');

  cy.xpath("(//input[@data-placeholder='Address 1'])[1]").type('36');
  cy.wait(1000);
  cy.xpath("(//input[@data-placeholder='Address 2'])[1]").type('Chennai');
  cy.wait(1000);

  cy.xpath("(//input[@data-placeholder='Pincode'])[1]").type('600001');

  cy.xpath("(//span[text()='City'])[1]").click();
  cy.wait(1000);
  cy.xpath("(//span[text()='City'])[1]").click();
  cy.xpath("/html/body/div[3]/div[2]/div/div/div/mat-option/span").click();

  cy.xpath("(//span[text()='Area'])[1]").click();
  cy.wait(1000);
  cy.xpath("(//span[text()='Area'])[1]").click();
  cy.xpath("/html/body/div[3]/div[2]/div/div/div/mat-option[4]/span").click();

  cy.xpath("/html/body/app-root/app-page/div/mat-sidenav-container/mat-sidenav-content/div[1]/app-star-health-proposal/section[1]/div/div/div[1]/mat-horizontal-stepper/div[2]/div[1]/form/mat-accordion/mat-expansion-panel/div/div/div/div[2]/div[2]/div/div[1]/div/mat-checkbox/label/div").click();
  const currentDate = new Date();
const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
  cy.get('#mat-input-47').type(formattedDate)
  cy.wait(2000);
  cy.xpath("(//span[text()='Next'])[1]").click();



  //CKyc 

  cy.xpath("/html/body/div[3]/div[2]/div/mat-dialog-container/form/div[1]/mat-radio-group/mat-radio-button[2]/label/div[2]").click();
  cy.xpath("(//input[@data-placeholder='PAN Number'])[3]").type("DIKPD3849H");

  cy.wait(1000); // Instead of scroll(6)
  
  cy.xpath("//span[text()='Submit']").click();
  cy.wait(2000);

  cy.xpath("(//span[text()='Identity Proof Document Type'])[1]").click();
  cy.xpath("(//span[text()=' Aadhaar Card '])[1]").click();
  cy.xpath("(//input[@data-placeholder='Aadhaar Card Number'])[1]").type("3245");

  //acy.xpath("/html/body/div[3]/div[2]/div/mat-dialog-container/form/div[2]/div[4]/button").click();
  const filePath = 'myaadhar.jpg';
  cy.wait(1000)
  cy.get('#file1').attachFile(filePath,{force: true });
  cy.get('#file2').attachFile(filePath,{force: true });
  cy.get('#file3').attachFile(filePath,{force: true });

  cy.xpath("(//span[text()='Address Proof Document Type'])[1]").click()
  cy.xpath("(//span[text()=' Aadhaar Card '])[1]").click()
  cy.xpath("(//input[@data-placeholder='Aadhaar Card Number'])[2]").type('4565')
  
  cy.xpath("(//span[text()='Same as Communication Address'])[2]").click()
  cy.xpath("/html/body/div[3]/div[2]/div/mat-dialog-container/form/div[3]/button").click()
  

  //insurer page

  cy.xpath("/html/body/app-root/app-page/div/mat-sidenav-container/mat-sidenav-content/div[1]/app-star-health-proposal/section[1]/div/div/div[1]/mat-horizontal-stepper/div[2]/div[2]/mat-accordion/div/mat-expansion-panel/div/div/div/div[1]/mat-checkbox/label/div").click()
  cy.xpath("(//input[@data-placeholder='Height(cms)'])[1]").type('176')
  cy.xpath("(//input[@data-placeholder='Weight(kgs)'])[1]").type('76')
  cy.xpath("(//button[@type='submit'])[2]").click()
  cy.xpath("/html/body/app-root/app-page/div/mat-sidenav-container/mat-sidenav-content/div[1]/app-star-health-proposal/section[1]/div/div/div[1]/mat-horizontal-stepper/div[2]/div[3]/mat-accordion/mat-expansion-panel/div/div/div/div/div[1]/mat-card/div/div[1]/mat-form-field/div/div[1]/div/input").type('Test user')
  cy.xpath("/html/body/app-root/app-page/div/mat-sidenav-container/mat-sidenav-content/div[1]/app-star-health-proposal/section[1]/div/div/div[1]/mat-horizontal-stepper/div[2]/div[3]/mat-accordion/mat-expansion-panel/div/div/div/div/div[1]/mat-card/div/div[2]/mat-form-field/div/div[1]/div/input").type('24')
  cy.xpath("/html/body/app-root/app-page/div/mat-sidenav-container/mat-sidenav-content/div[1]/app-star-health-proposal/section[1]/div/div/div[1]/mat-horizontal-stepper/div[2]/div[3]/mat-accordion/mat-expansion-panel/div/div/div/div/div[1]/mat-card/div/div[4]/mat-form-field/div/div[1]/div/input").type('100')
cy.xpath("/html/body/app-root/app-page/div/mat-sidenav-container/mat-sidenav-content/div[1]/app-star-health-proposal/section[1]/div/div/div[1]/mat-horizontal-stepper/div[2]/div[3]/mat-accordion/mat-expansion-panel/div/div/div/div/div[1]/mat-card/div/div[3]/mat-form-field/div/div[1]/div/mat-select/div/div[1]/span"). click() 
cy.xpath("//span[text()=' Brother ']").click()
cy.xpath("(//button[@type='submit'])[3]").click()
cy.wait(10000)
cy.scrollTo('bottom');
cy.xpath("//span[text()='Copy Link']").click()

cy.wait(5000)
cy.visit('www.google.com')


});

});




