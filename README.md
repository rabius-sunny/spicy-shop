# Welcome to Spicy Shop
This is an open source Shop project and this is the front end repository.
This project is created with <code>ReactJs</code>, <code>Bootstrap5</code>,  <code>React-Router-Dom</code>.

<p>This project is deployed in <a href="https://spicy-shop.netlify.app">Netlify Here</a>.</p>

<hr>
<p>In the Homepage below :</p>
<img src="https://i.ibb.co/30G5vcT/home.png" />
<p> Here I've created a Navbar with bootstrap5. This is a Responsive Navbar and changes its background color whenever we scroll down the web page.</p>
<p>Then we find the Heading section. Here we have an intro and a proposal site navigation. This heading section is created with 6/6 colum for medium and 12 colum for small and extra small device into a container and a row.</p>

<p>After entering the login section by Clicking from Navbar or the proposal nav, we'll find login options as below. </p>
<img src="https://i.ibb.co/nm6f1Tf/option.png" />
<p>Here we'll be asked by which method we want to enter. Notice, only a shopkeeper can login or sign up here by a mobile number. General customers will login or sign up with an email address. Here I'm capturing in which path the end user go by React State and pass them into another non-child component by Context API</p>
<p>If a shopkeeper wants to login or create and shopkeeper account, he will go through the 'Continue with Mobile Number'. But when a customer wants to login or sign up, he'll go through 'Continue with Email'. Then he'll see this form as following :</p>
<img src="https://i.ibb.co/XCBZJZx/login-user.png" />
<p> I've conditionally rendered a customer's form here. A customer can login to this site with his email and password if he already has an account. If not, he can create one by clicking 'create here'. If he want to create an account, he will be asked as below : </p>
<img src="https://i.ibb.co/C5g5Rx8/signup-user.png"/>

<p>Similarly a shopkeeper can also login with his phone number and password. If he want to create a shopkeeper account, he'll go through the 'Continue with Number' option when he was asked after going to the login option page and then he'll be asked his credentials in a different form rather than a customer's form as following :</p>
<img src="https://i.ibb.co/M5nsYvW/signup-shop.png" />
<p> The login and signup page for a shopkeeper is different from a general user as I'm rendering these forms conditionally. After successfully signing up, or logging in with a shopkeeper account, he can find all the products in his homepage as like below :</p>
<img src="https://i.ibb.co/g7RxGCL/products.png" />