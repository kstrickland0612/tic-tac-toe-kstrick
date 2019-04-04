curl --include --request POST "https://tic-tac-toe-wdi.herokuapp.com/games" \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
      "id": "'"${ID}"'",
      "cells": ["","","","","","","","",""],
      "over": false,
      "player_x": {
        "id": "'"${USERID}"'",
        "email": "'"${EMAIL}"'"
      },
      "player_o": null
    }
  }'

echo
