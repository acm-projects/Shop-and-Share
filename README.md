<p align="center">
  <img src="https://c.tenor.com/zrO4syNz96IAAAAC/groceries-eleanor-shellstrop.gif"/>
</p>

# Shop&Share
At times, it can get difficult to manage grocery lists in households. Shop&amp;Share is an app that allows a user to create and share grocery lists with others while keeping track of allergies and preferences of the people sharing the list while reminding you of items in your pantry nearing expiration.

# MVP
1. User account registration and authentication
2. User profile page
    * User’s friends list
    * User’s grocery lists
    * User’s dietary preferences
3. User setting page
    * Allows to update dietary preferences, etc.
4. Search and add friends by username
5. User can create grocery lists and share the list with multiple friends
    * Added friend have the option to edit the list
6. Each list item has fields that user can add such as:
    * Store, brand, price, quantity
    * Option to add best before date when purchasing
7. If user chooses to add a best before date, send notification near that date to remind user of items in their fridge
8. Crossing off, updating, or deleting an item does the same for all users sharing the list
9. Each list has a section showing dietary preferences and allergies of the people that it is shared with

# Stretch Goals
1. Upload picture of grocery item
2. Easy share with QR codes option
3. Coupon finder
4. Use camera to scan best before date option
5. In app search from different grocery stores

# Tech Stack
- Wireframing
  - [Figma](https://www.figma.com)
  - [A quick figma tutorial](https://www.youtube.com/watch?v=FTFaQWZBqQ8)
- Frontend
  - [React Native](https://reactnative.dev)  OR [Flutter](https://flutter.dev)
  - [React Native: general documentation](https://reactnative.dev/docs/getting-started)
  - [Flutter: general documentation](https://docs.flutter.dev)
- Backend
  - [Firebase](https://firebase.google.com)
    - [database](https://firebase.google.com/docs/database)
    - [authentication](https://firebase.google.com/docs/auth)
  - [JavaScript](https://www.youtube.com/watch?v=W6NZfCO5SIk) OR [Dart](https://www.youtube.com/watch?v=veMhOYRib9o)

# Software to Install
- [React Native](https://reactnative.dev/docs/environment-setup) OR [Flutter](https://docs.flutter.dev/get-started/install)- Cross-platform mobile app development framework
- [Git](https://git-scm.com/downloads) - Version control software
- [Visual Studio Code](https://code.visualstudio.com/download) OR [Android Studio](https://developer.android.com/studio/?gclid=Cj0KCQiAxoiQBhCRARIsAPsvo-xXX5s86oGHEjB2qkbUpziXVTtE7hKYu-75k1RGtP3RvP7XNLb1n4UaAnxGEALw_wcB&gclsrc=aw.ds)

# Tutorials
- JavaScript: 
  - [5 JavaScript Concepts you need to know](https://www.youtube.com/watch?v=a00NRSFgHsY)
- React Native:
  - [React Native Crash Course](https://www.youtube.com/watch?v=Hf4MJH0jDb4)
  - [Build your first React Native App](https://youtu.be/iQ_0Fd_N3Mk)
- Flutter:
  - [Flutter tutorials playlist](https://youtube.com/playlist?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ)
  - [Flutter for beginners](https://www.youtube.com/watch?v=1ukSR1GRtMU)
  - [How to make your first Flutter app](https://www.youtube.com/watch?v=xWV71C2kp38)
  - [General Flutter + Firebase](https://www.youtube.com/watch?v=sfA3NWDBPZ4)
- Firebase:
  - [Firebase Fundamentals Playlist](https://youtu.be/9zdvmgGsww0)
  - [Flutter + Firebase](https://www.youtube.com/watch?v=sfA3NWDBPZ4)
- General tutorials that may help with development:
  - [Building user profiles example](https://www.youtube.com/watch?v=1hPgQWbWmEk)
  - Group chat app examples (updating data in real time example, pretty similar logic): 
    - [Flutter + Firebase](https://github.com/ahmedgulabkhan/GroupChatApp)
    - [React Native + Firebase](https://github.com/mohanyadav/react-native-group-chat-app)
 - Local, Scheduled notifications:
    - Flutter:
      - [Awesome notifications](https://pub.dev/packages/awesome_notifications)
      - [Flutter local notifs](https://www.youtube.com/watch?v=U38FJ40cEAE)
    - React Native:
      - [React Native local push notifs](https://medium.com/nerd-for-tech/react-native-local-push-notifications-4dcca5a14fd4)
      - [Notif docs](https://wix.github.io/react-native-notifications/docs/getting-started)

# Resources
- [Dart documentation](https://dart.dev/guides)
- [JavaScript documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [GitHub How Tos](https://docs.github.com/en/get-started/quickstart/hello-world), [GitHub YouTube Tutorial](https://www.youtube.com/watch?v=SWYqp7iY_Tc)
- [How to be successful in Projects](https://docs.google.com/document/d/18Zi3DrKG5e6g5Bojr8iqxIu6VIGl86YBSFlsnJnlM88/edit?usp=sharing)


# Estimated Timeline
|   Week   |          Task(s)          |          Deliverables         |
| -------- | ------------------------- | ----------------------------- |
| 1        | Onboarding tasks          | Meet the team, set meeting dates and times, schedule a design day, finalize tech stack, start environment set-up. |
| 2        | Wireframes and research| Finish up wireframes, practice apps with chosen tech stacks, practice git and github, final env. set-up |
| 3        | Coding app screens and backend logic | Frontend: 30% of app pages, Backend: authenticaiton, build a dummy database to practice updating real time info|
| 4        | Coding app screens and backend logic | Frontend: 70% of app pages, Backend: start incorporating database with frontend code |
| 5        | Coding app screens and backend logic | Frontend: 100% of app screens, Backend: continue incorporating database with frontend code |
| 6        | Frontend touch ups and backend integration | Frontend and backend should be working together to inegrate funcitonalities to create a functioning MVP |
| 7        | Frontend and backend touchups | Polished MVP |
| 8        | Stretch goals | If time permits |
| 9        | Presentation and practice |decide order of presenters, style of slide deck, write down a script |
| 10       | Finalize presentation and practice | N/A |
| Presentation week! | Wow the judges! I believe in you :) | :blue_heart::blue_heart::blue_heart: |

# Instructions to Run Application
npx react-native start → starts the Metro server
npx react-native run-android → opens the emulator and installs the app1

# GITHUB Basics
git init → initializing an existing directory as a Git Repository
git clone [url] → retrieving an existing remote repository into your local environment
git add:
git add <filename> → adds specific file
git add . → adds all unstaged files
git commit -m “<descriptive message>” → commits the staged/added content as a new commit snapshot
git push → transmits local branch commits
git branch <branch-name> → creates a new branch from the one you’re on currently
git checkout <branch-name> → goes to the given branch
Most times, you cannot checkout unless you’ve committed and pushed the code from your current branch
git pull → fetches and merges any commits made remotely (or by other members)
Be careful while pulling! Sometimes, code can be overwritten if two people work and commit code on the same branch
git status → tells you which branch you’re on and what files are staged or not staged

