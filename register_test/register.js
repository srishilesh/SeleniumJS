const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
async function reg(){
    let driver=await new webdriver.Builder()
    .forBrowser('firefox')
    .build()
    await driver.get('https://nostalgic-mccarthy-58e272.netlify.com/')
    await(await driver.findElement(By.xpath('/html/body/div/div/div/div/div/div/div/div/p/a'))).click() 

    await driver.findElement(By.name('email')).sendKeys('prathyu03981@gmail.com')
    await driver.findElement(By.name('password')).sendKeys('prathyu')

    await(await driver.findElement(By.xpath('/html/body/div/div/div/div/div/div/div/form/div[3]/button'))).click()

    await driver.getPageSource().then(function(content) 
{
  if(content.indexOf('The email address is already in use by another account. ') !==-1 ) {
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
// async function reg1(){
//     let driver=await new webdriver.Builder()
//     .forBrowser('firefox')
//     .build()
//     await driver.get('https://iris-beta.netlify.com/')
//     await(await driver.findElement(By.xpath('/html/body/div/div/div/div/div/div/div/div/p/a'))).click() 

//     await driver.findElement(By.name('email')).sendKeys('prathyu0398@gmail.com')
//     await driver.findElement(By.name('password')).sendKeys('prathyu')

//     await(await driver.findElement(By.xpath('/html/body/div/div/div/div/div/div/div/form/div[3]/button'))).click()

    
// }

reg();
// reg1();
