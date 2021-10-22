### CryptoWatch

Link to Github: https://github.com/MarinosDakis/CryptoWatch

___

***How to build:***
[1] Clone repository or download files.
[2] Open file in code editor and make sure you are in the correct path that contains client and server folder.
[3] Split two terminals and then in each respected terminal type: "cd client", "cd server".
[4] Type "npm start" in each terminal to load front end and backend.
[5] If successfull localhost:3000 will load the client-side, and server terminal will say that it is running on localhost:5000 in the console.

___
***Questionnaire responses:***
***Are there any sub-optimal choices( or short cuts taken due to limited time ) in your implementation?***
Yes. Firstly, some short cuts taken include adapting pre-existing code examples from the Material-UI website and using it to show different features in my web application; for instance, I adapted their drawer and accordian examples heavily into my web application. I find in certain situations it's better to see if there's already pre-existing libraries that can be used in a project-- not only does this save time, in some cases these libraries have been tested beforehand so it saves a lot of potential troubleshooting.

Secondly, the information used to recommend one exchange from another was taken from multiple online resources and incorporated into the web application. The reason for this is because these online sources have a better understanding of exchanges than I do, so it's better to let users of the application read valid information from better credible sources.

Thirdly, some parts of my code could have been designed better. I found that there were some instances of repeating code, or logic seeming too complicated when there's bound to be more effective solutions out there. The cause of this being my limited time outside of working on this project, and a lack of knowledge in how to improve the quality of my code (which is something I'd love to improve upon).

***Is any part of it over-designed? ( It is fine to over-design to showcase your skills as long as you are clear about it)***
I don't think anything was too over-designed. I tried to have a simplistic approach to the front-end to both satisfy the requirements of the project, and making it easy for a user to navigate around the web application. However, as mentioned above, some of the logic was a bit too complicated.

***If you have to scale your solution to 100 users/second traffic what changes would you make, if any?***
I'm not too sure if there's any changes I would have to make. The only thing I can think of is if too many people are making requests to the cryptocurreny APIs, then there could be an issue loading the information client-side.

***What are some other enhancements you would have made, if you had more time to do this implementation***
I would have spent more time on the logic of the application to make it more easily scalable to add more APIs. Also, I would have made the mobile responsiveness better for a range of devices.

___
***Live version:***
Font-end: https://practical-swanson-6b1a90.netlify.app/
Back-end: https://cryptowatch-deploy.herokuapp.com/

