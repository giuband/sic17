This is a very basic demo that will fully work only on Mac OS X as it relies on afplay to play the audio.

# Dependencies
You will need:
- NodeJS (at least v6.x): https://nodejs.org/en/
- yarn: https://yarnpkg.com/en/
- virtualenv

# Setup
### Front end
Go to the `/app` folder and run `yarn` to install the dependencies of the front-end part.

### Back end
Go to the `/server` folder and run:
```
virtualenv sic
source sic/bin/activate
pip install -r requirements.txt
```

# Run the application
First start the server with the following commands (inside the `/server` folder):
```
export FLASK_APP=server.py
flask run -p 8001 -h 0.0.0.0
```

Then, inside the `/app` application, run:
```
yarn dev
```

You should now be able to play with this basic app!
