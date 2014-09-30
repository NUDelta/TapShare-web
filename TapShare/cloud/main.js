
Parse.Cloud.job("dailyReminder", function(request, response) {
  Parse.Push.send(
  {
    data:
    {
      alert: "Hi " + Parse.User.get("name") + ". What will you track today?"
    }
  },
  {
    success: function()
    {
      status.success("Notification was successful");
    },
    error: function(error)
    {
      status.error("Error " + error.code + " : " + error.message);
    }
  }
  )
});
