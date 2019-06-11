package com.steps;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.remote.DesiredCapabilities;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class JBKSteps2 {
	WebDriver driver;
	@Given("^- US - 007 - login credentials creation-2$")
	public void open_a_browser() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.gecko.driver","src/test/resources");
		FirefoxOptions options = new FirefoxOptions();
		options.setCapability("marionette", false);
		driver = new FirefoxDriver(options);
	}

	@When("^- I open the expense tracker app - the login page appears first$")
	public void i_open_a_website_and_login_page_appears() throws Throwable {
	    driver.get("http://thawing-shelf-73260.herokuapp.com/index.jsp"); 
	    driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		// Register click 
		
	}

	@Then("^- The First Page title that is displayed to the user is LOGIN$")
		public void check_login_field() throws Throwable {
			String stitle = driver.findElement(By.xpath("html/body/div[1]/h3")).getText();
			String exp = "Login";
			Assert.assertEquals(stitle, exp);
			System.out.println("**************************");
			System.out.println("When the user accesses the Expense tracker App he is first displayed a Login Page");
			System.out.println("Hence Test Step 2 for US - 007 - login credentials creation is Pass");
			System.out.println("**************************");
	
			driver.quit();
	}
}

