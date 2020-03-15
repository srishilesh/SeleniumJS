const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
async function nonexist()
{
    let driver=await new webdriver.Builder()
    .forBrowser('chrome')
    .build()
    
   

    //await driver.manage().window().maximize();
    //WebDriverWait wait = new WebDriverWait(driver, 30);
    await driver.get('https://nostalgic-mccarthy-58e272.netlify.com/forgot-password')

    await (driver.findElement(By.xpath('//*[@id="__layout"]/div/div/div/div/div/form/div[1]/div/input'))).click();

    await (driver.findElement(By.xpath('//*[@id="__layout"]/div/div/div/div/div/form/div[1]/div/input'))).sendKeys('egayu3@gmail.com')
    
    await (await (driver.findElement(By.xpath('//*[@id="__layout"]/div/div/div/div/div/form/div[2]/button')))).click()

    await driver.getPageSource().then(function(content) 
{
  if(content.indexOf('no user') ==-1 ) {
   console.log('Test passed');
   /*console.log('Target page');
   d.get('https://iris-se.netlify.com') */
  } else {
      console.log('Test failed');
      return false;
  }
  //driver.quit();

  
});

}
nonexist();
