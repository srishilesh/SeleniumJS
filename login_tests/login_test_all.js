const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
async function log1(){
    let driver=await new webdriver.Builder()
    .forBrowser('chrome')
    .build()

    await driver.get('https://nostalgic-mccarthy-58e272.netlify.com')

    await driver.findElement(By.name('email')).sendKeys('saibalsu@gmail.com')
    await driver.findElement(By.name('password')).sendKeys('password123')

    await(await driver.findElement(By.xpath('/html/body/div/div/div/div/div/div/div/form/div[4]/button'))).click()

    await driver.getPageSource().then(function(content) 
{
  if(content.indexOf('Saiharsha B ') !==-1 ) {
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
async function log2(){
    let driver=await new webdriver.Builder()
    .forBrowser('chrome')
    .build()

    await driver.get('https://nostalgic-mccarthy-58e272.netlify.com')

    await driver.findElement(By.name('email')).sendKeys('notexistgmail.com')
    await driver.findElement(By.name('password')).sendKeys('notexist')

    await(await driver.findElement(By.xpath('/html/body/div/div/div/div/div/div/div/form/div[4]/button'))).click()

    await driver.getPageSource().then(function(content) 
{
  if(content.indexOf('Welcome ') !==-1 ) {
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
async function log3(){
    let driver=await new webdriver.Builder()
    .forBrowser('chrome')
    .build()

    await driver.get('https://nostalgic-mccarthy-58e272.netlify.com')

    await driver.findElement(By.name('email')).sendKeys('notexist@gmail.com')
    await driver.findElement(By.name('password')).sendKeys('notexist')

    await(await driver.findElement(By.xpath('/html/body/div/div/div/div/div/div/div/form/div[4]/button'))).click()

    await driver.getPageSource().then(function(content) 
{
  if(content.indexOf('Welcome ') !==-1 ) {
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
log1();
setTimeout(log2,25000);
setTimeout(log3,20000);
