# InvenTracker-frontend
To simplify and make inventory process simple and easy to use by anyone for anything, not just for business. Key feature includes, folder base sorting method, scanner for product to make searching process quick and easy, take picture of product for better description. 
giadd

# Demo
![](InvenTrackerDemo.gif)

# Demo using your phone (Android Only)

1. Download: Expo app in your phone
    * Android: https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www

2. Visit: https://expo.io/@kevinkarma/Inventracker 

3. Scan: QR Code using Expo app and enjoy the applicaiton

# Requirement to test code

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