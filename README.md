# Rides Coordinator Bot JS

This is a Discord bot that puts out an announcement for users who need a ride for some event. Users who react to the message will automatically be paired with a driver. The pairings use flow network graph algorithms and takes into number of cars, deviation from standard route without pickups, and where groups of people need to be picked up.

Commands:
```
/send - sends ride message
/group - groups users by location
```

Admin commands: (can only be run by certain users)
```
/admin_get_rxn_users - Gets all user info or a named user (optional param).
/admin_list_user_info - Gets list of users who reacted to message.
/admin_help - Slash commands available for admins.
```
