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
const handleSceduleNotification = (title, message) =>{
    PushNotification.localNotificationSchedule({
        channelId: "123",
        title : title, 
        message : message,
        date : new Date(Date.now() + 5 * 1000 ), // Change to collect date from firestore


    })
}

export {handleSceduleNotification};