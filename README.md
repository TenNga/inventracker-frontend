# InvenTracker-frontend
To simplify and make inventory process simple and easy to use by anyone for anything, not just for business. Key feature includes, folder base sorting method, scanner for product to make searching process quick and easy, take picture of product for better description. 
giadd

# Demo
![](InvenTrackerDemo.gif)

# Requirement

Base: 

    * Text Editor (Prefer: VS Code)
    * Ruby on Rails for backend
    * Expo Environment
    * NPM

Simulation/Device:

    * Android Studio for android
    * Xcode for Apple
    * Expo App for physical device

To Run project:

    1. npm install
    2. npm start
    3. scan QR Code using Expo app
    4. Backend
        - rails db:build (SQLite)
        - rails db:migrate
        - rails s
    optional: If you running on physical device with wire for android, make sure to run following command to match device port with computer:
        "adb reverse tcp:3000 tcp:3000"