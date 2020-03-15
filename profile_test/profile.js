const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
async function prof(){
    let driver=await new webdriver.Builder()
    .forBrowser('chrome')
    .build()
    
    await driver.get('https://nostalgic-mccarthy-58e272.netlify.com/profile')

    await(await driver.findElement(By.xpath('/html/body/div/div/div/nav/div[2]/div[2]/div/div/a'))).click()

    await driver.getPageSource().then(function(content) 
{
  if(content.indexOf('Welcome to iris') !==-1 ) {
   console.log('Test failed');
   /*console.log('Target page');
   d.get('https://iris-se.netlify.com') */
  } else {
      console.log('Test passed');
      return false;
  }
  //driver.quit();

  
});

}
prof();
