package com.jbk;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(monochrome=true,
glue="com.steps",features ="src/test/resources",tags="@smokeTest",
format = {"pretty",
		"json:target/cucumber-reports/Cucumber.json", 
		"junit:target/cucumber-reports/Cucumber.xml",
		"html:target/cucumber-reports" })
public class Runnable {
	

}
