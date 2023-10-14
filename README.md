# SISOS (2015)

(Archieved)

SISOS (Sign In Sign Out System) was a web app I created during middle school, in collaboration with **[Arjun Verma](https://www.linkedin.com/in/av777x/)**.

I primarily worked on the frontend, while Arjun primarily worked on the backend.

<img alt="screenshot of the app in 2015 on Microsoft Edge (Legacy) on Windows" src="https://github.com/dhruv-tech/sisos/assets/26849655/8473e0a5-67da-4f1c-b8d1-34c537054af9" width=750>

(*Screenshot - SISOS open in Microsoft Edge (Legacy), dated 1st October 2015; Click to enlarge*)


*The architecture and code quality of the application are a reflection of our middle school developer skills 😅*

## Introduction & Context

The application was built to address our school's problem with the lack of accurate attendance records for students staying after school - maintaining these records was important for various reasons, but most importantly for a situation where there were to be a fire or earthquake evacuation.

SISOS was developed as a responsive web app where students could sign in/out using school email accounts to indicate if they are present on the premises after official school hours. 

Staff could login and check attendance of students in the premises at any given time.

The app was deployed on the school's intranet for a while and used as a pilot/interim solution.

Flow of the app/solution:

* Student logs in using a personal or school device within 20 mins of the end of school.
* Student's location is verified, and attendence is logged.
* Student logs out using a school device placed on the security desk at the exit gate (enforced by security)
* If the student was logged-in, they are removed from the attendence list.
* If the student was not logged-in, they are logged for non-complinace and requested to comply with the process next time.

## Tech Stack 

* Data Store: Micorosoft SQL Sever.
* Backend: Java EE on Apache Tomcat Server.
* Authentication: Microsoft Active Directory.
* Frontend: HTML5, CSS3, JS/JQuery, Zurb Foundation.

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
  <p>(Above) System unavailalbe page - Desktop, dated 1st October 2015</p>
  <p>Students were allowed to login 10 mins before school ended, and upto 20 mins after. The typo in 'available' was fixed at a later point 😅</p>
</details>

<details>
  <summary>Login/Logout Page</summary>
  <br/>
  
  <p>Both the login and logout pages looked identical, however the logout page was protected by a master password and was only opended on a laptop on the security desk at the exit gate.</p>
  
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
  <p> (Above) State for student trying to login as admin after system has closed - Desktop, dated 25 August 2015</p>
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

---
