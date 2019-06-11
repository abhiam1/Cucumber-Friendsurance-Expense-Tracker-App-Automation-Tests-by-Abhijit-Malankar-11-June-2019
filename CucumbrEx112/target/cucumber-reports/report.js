$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TC01_Feature.feature");
formatter.feature({
  "line": 1,
  "name": "Site",
  "description": "Step 1 - US - 007 - login credentials creation - As a user I want to open the expense tracker app\r\nso that i can configure the app by going to \"New User Register Page\"",
  "id": "site",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Check login functionality of Expense tracker website - 1- Register New User Page.",
  "description": "",
  "id": "site;check-login-functionality-of-expense-tracker-website---1--register-new-user-page.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "- US - 007 - login credentials creation",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "- I open the expense tracker app \u0026 the login page appears,which also has new user register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "- Clicking on the register link brings us to Register New User Page",
  "keyword": "Then "
});
formatter.match({
  "location": "JBKSteps.open_a_browser()"
});
formatter.result({
  "duration": 3849303936,
  "status": "passed"
});
formatter.match({
  "location": "JBKSteps.i_open_a_website_and_login_page_appears()"
});
formatter.result({
  "duration": 3835002528,
  "status": "passed"
});
formatter.match({
  "location": "JBKSteps.check_login_field()"
});
formatter.result({
  "duration": 179517552,
  "status": "passed"
});
formatter.uri("TC01_Feature2.feature");
formatter.feature({
  "line": 1,
  "name": "Site",
  "description": "Step 2 - US - 007 - login credentials creation - As a user I want to open the expense tracker app\r\nso that i can login to the app by going to \"Login Page\"",
  "id": "site",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Check login functionality of Expense tracker website - 2- Register New User Page.",
  "description": "",
  "id": "site;check-login-functionality-of-expense-tracker-website---2--register-new-user-page.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "- US - 007 - login credentials creation-2",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "- I open the expense tracker app - the login page appears first",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "- The First Page title that is displayed to the user is LOGIN",
  "keyword": "Then "
});
formatter.match({
  "location": "JBKSteps2.open_a_browser()"
});
formatter.result({
  "duration": 3042517004,
  "status": "passed"
});
formatter.match({
  "location": "JBKSteps2.i_open_a_website_and_login_page_appears()"
});
formatter.result({
  "duration": 3480476282,
  "status": "passed"
});
formatter.match({
  "location": "JBKSteps2.check_login_field()"
});
formatter.result({
  "duration": 385026468,
  "status": "passed"
});
});