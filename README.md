# SISOS (2015)

(Archieved)

SISOS (Sign In Sign Out System) was a web application project that I worked on during my middle school days (Grade 10).

**It was conceptualised and built in collaboration with [Arjun Verma](https://www.linkedin.com/in/av777x/)**.

I primarily worked on the frontend, while Arjun primarily worked on the backend.

<img alt="screenshot of the app in 2015 on Microsoft Edge on Windows" src="https://github.com/dhruv-tech/sisos/assets/26849655/8473e0a5-67da-4f1c-b8d1-34c537054af9" width=750>

(*Screenshot of the application on a desktop computer on 1st October 2015; Click to enlarge*)

The architecture and code quality of the application is probably what you would expect from a middle school developer 😅

## Introduction & Context

### The Problem

After school would end at 2:20pm (3:20pm on some days), some students would often stay back on the school's premises for a while - often to
study together with friends, play sports or to wait for a parent that worked at the school. 

But, this posed a problem - there would be no record of who was inside the premises if there were to be a fire or earthquake emergency.
The school had faced this issue first hand a few times during minor earthquakes earlier.

The school attempted to solve this by asking students to self-sign on a register at a far corner of the school, if they were staying back and sign out at an other 
register left at the main gate.

However, compliance was low and handwriting was often not legible.

While, the school planned to utlimately replace regular ID Cards with NFC tags to solve this, that was still a couple of years away.

### Our Solution

Arjun observed this problem, we discussed it with the school and decided to build a Sign-In-Sign-Out System (SISOS) as an interim solution.

The idea was simple - the school gave email ids/active dirctory accounts to everyone. We'll make a responsive web app to allow students 
to login from their phone, laptop or any other device at the school if they are staying back. They'll be able to log out from a laptop 
left at the security desk on the school's main gate. If a school employee logs into the app, they'll see a list of all the 
students in the premises and could mark attendence as needed.

We built the application over the next few months and deployed it on the school's intranet.

## Tech Stack 

Data Store: Micorosoft SQL Sever.
Backend: Java EE on Apache Tomcat Server.
Authentication: Microsoft Active Directory.
Frontend: HTML5, CSS3, JS/JQuery, Zurb Foundation.

## Screenshots

(Click to expand/collapse sections)

<details>
  <summary>System Unavailable Page</summary>
  <img src="https://github.com/dhruv-tech/sisos/assets/26849655/470c6732-3f8d-4a34-826f-97f6c9793570" alt="System Unavailable Page Screenshot" width=800>
  <br/>
  <p>(Above) Loading State - determining if the system is available. (GIF)</p>
  <br/>
  <img src="https://github.com/dhruv-tech/sisos/assets/26849655/ff4b63cb-7306-4e34-8363-0f3e4fe35d1f" alt="System Unavailable Page Screenshot" width=800>
  <br/>
  <p>(Above) System unavailalbe page - Desktop <b>(taken on 1st October 2015)</b></p>
  <p>Students were allowed to login 10 mins before school ended, and upto 20 mins after. The typo in 'available' was fixed at a later point 😅</p>
</details>

<details>
  <summary>Login/Logout Page</summary>
  <br/>
  
  <p>Both the login and logout pages looked identical, however the logout page was protected by a master password and was only opended on a laptop on the security desk at the main gate.</p>
  
  <p>The background image of the page would differ by the day of the week. The screnshots below are taken on Wednesday and Tuesday respectively.</p>
  
  <br/>
  
  <img src="https://github.com/dhruv-tech/sisos/assets/26849655/efe349e0-3952-43af-a52a-96e805c7965e" alt="Login/logout Page, seeking username Screenshot" width=800>
  <p> (Above) Login/logout page asking for username on a Wednesday - Desktop</p>
  <br/>
  <img src="https://github.com/dhruv-tech/sisos/assets/26849655/553d3520-33ad-458c-b220-fa66303ae2d5" alt="Login/logout Page, seeking password Screenshot" width=800>
  <p> (Above) Login/logout page asking for password on a Tuesday - Desktop </p>
  <img src="https://github.com/dhruv-tech/sisos/assets/26849655/307b5a03-149e-4779-9c27-2f2a863871ae" alt="Login Page Screenshot on mobile" width=250>
  <p> (Above) Login page - Mobile </p>
</details>

<details>
  <summary>Student List - Admin Page</summary>
  <br/>

  <img src="https://github.com/dhruv-tech/sisos/assets/26849655/6973da2f-fcf9-4580-8721-41ed0a086c3a" width=800>
  <p> (Above) Student List visible to school employees post login - Desktop </p>
  <br/>
  <img src="https://github.com/dhruv-tech/sisos/assets/26849655/dbc39755-e92d-4c68-a189-d033609e671a" width=800>
  <p> (Above) Marking attendence on student list page - Desktop </p>
  <br/>
  <img src="https://github.com/dhruv-tech/sisos/assets/26849655/04533f33-a33d-4ea2-a38d-6d2bed205716" width=250>
  <p> (Above) Student List visible to school employees post login - Mobile </p>
  <br/>
  <img src="https://github.com/dhruv-tech/sisos/assets/26849655/b5b6608c-5a6d-472f-8880-8a0a900e3ef7" width=370>
  <p> (Above) Printout of student list </p>
  <br/>


</details>

<details>
  <summary>Post-Login/Logout States </summary>
  <br/>
  
  <img src="https://github.com/dhruv-tech/sisos/assets/26849655/59a3ed0c-a581-4a43-a1b6-6d99585a4181" width=800>
  <p> (Above) Login loading state - Desktop </p>
  <br/>
  <img src="https://github.com/dhruv-tech/sisos/assets/26849655/aa85baa0-0e90-49bf-9ba8-1051aff0bd34" width=800>
  <p> (Above) Login success state - Desktop </p>
  <br/>
  <img src="https://github.com/dhruv-tech/sisos/assets/26849655/b93ae235-8a7d-467b-aaaa-c4a61e0563f6" width=800>
  <p> (Above) Login/logout incorrect username/password state - Desktop </p>
  <br/>

  <img src="https://github.com/dhruv-tech/sisos/assets/26849655/9f6fc9e4-394c-4ee1-b774-eb50f12b4e0f" width=800>
  <p> (Above) State for student trying to login as admin after system has closed - Desktop <b>(taken on 25 August 2015)</b></p>
  <br/>
  <img src="https://github.com/dhruv-tech/sisos/assets/26849655/6bec526f-4ad2-44b0-9ea1-2e8662254211" width=800>
  <p> (Above) Logout success state - Desktop </p>
  <br/>
  <img src="https://github.com/dhruv-tech/sisos/assets/26849655/c5ff7dda-8d05-4843-a0d1-fea75f24965e" width=800>
  <p> (Above) Logout without login state (student only) - Desktop </p>
  <br/>

  <img src="https://github.com/dhruv-tech/sisos/assets/26849655/31b2ae94-e84d-499d-b642-734366a77edc" width=250>
  <p> (Above) Login/logout incorrect username/password state - Mobile </p>
  <br/>

</details>
