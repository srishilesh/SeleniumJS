const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
async function dmp()
{
    let driver=await new webdriver.Builder()
    .forBrowser('chrome')
    .build()

    await driver.get('https://nostalgic-mccarthy-58e272.netlify.com/profile')

    await(await driver.findElement(By.xpath('/html/body/div/div/div/div/div/div[1]/aside/ul/li[2]/a'))).click()

    await driver.findElement(By.xpath('/html/body/div/div/div/div/div/div[2]/div/div/div/form/h1/input')).sendKeys('SaiHarsha B')
    await driver.findElement((By.xpath('/html/body/div/div/div/div/div/div[2]/div/div/div/form/div/div[4]/input'))).sendKeys('Amrita School of Engineering, Coimbatore')
    await (await driver.findElement(By.xpath('/html/body/div/div/div/div/div/div[2]/div/div/div/form/div/div[6]/button'))).click()

    await driver.getPageSource().then(function(content) 
{
  if(content.indexOf('Success') !==-1 ) {
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
dmp();
