import PushNotification from "react-native-push-notification";

PushNotification.createChannel(
    {
      channelId: "123", // (required)
      channelName: "My channel", // (required)
      channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
      playSound: false, // (optional) default: true
      soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
    },
);
// Create one more input for collecting expiration date
const handleSceduleNotification = (item, date) =>{
    PushNotification.localNotificationSchedule({
        channelId: "123",
        title : "Expiration date coming soon", 
        message : item + " is going to expire on " + date,
        date : new Date(Date.now() + 5 * 1000 ), // Change to collect date from firestore


    })

    console.log("Title: " + item + " is going to expire on " + date )
}

export {handleSceduleNotification};