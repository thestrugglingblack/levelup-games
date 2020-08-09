```

                        ──────────────███████──███████
                        ──────────████▓▓▓▓▓▓████░░░░░██
                        ────────██▓▓▓▓▓▓▓▓▓▓▓▓██░░░░░░██
                        ──────██▓▓▓▓▓▓████████████░░░░██
                        ────██▓▓▓▓▓▓████████████████░██
                        ────██▓▓████░░░░░░░░░░░░██████
                        ──████████░░░░░░██░░██░░██▓▓▓▓██
                        ──██░░████░░░░░░██░░██░░██▓▓▓▓██
                        ██░░░░██████░░░░░░░░░░░░░░██▓▓██
                        ██░░░░░░██░░░░██░░░░░░░░░░██▓▓██
                        ──██░░░░░░░░░███████░░░░██████
                        ────████░░░░░░░███████████▓▓██
                        ──────██████░░░░░░░░░░██▓▓▓▓██
                        ────██▓▓▓▓██████████████▓▓██
                        ──██▓▓▓▓▓▓▓▓████░░░░░░████
                        ████▓▓▓▓▓▓▓▓██░░░░░░░░░░██
                        ████▓▓▓▓▓▓▓▓██░░░░░░░░░░██
                        ██████▓▓▓▓▓▓▓▓██░░░░░░████████
                        ──██████▓▓▓▓▓▓████████████████
                        ────██████████████████████▓▓▓▓██
                        ──██▓▓▓▓████████████████▓▓▓▓▓▓██
                        ████▓▓██████████████████▓▓▓▓▓▓██
                        ██▓▓▓▓██████████████████▓▓▓▓▓▓██
                        ██▓▓▓▓██████████──────██▓▓▓▓████
                        ██▓▓▓▓████──────────────██████
                        ──████

██      ███████ ██    ██ ███████ ██      ██    ██ ██████       ██████   █████  ███    ███ ███████ ███████ 
██      ██      ██    ██ ██      ██      ██    ██ ██   ██     ██       ██   ██ ████  ████ ██      ██      
██      █████   ██    ██ █████   ██      ██    ██ ██████      ██   ███ ███████ ██ ████ ██ █████   ███████ 
██      ██       ██  ██  ██      ██      ██    ██ ██          ██    ██ ██   ██ ██  ██  ██ ██           ██ 
███████ ███████   ████   ███████ ███████  ██████  ██           ██████  ██   ██ ██      ██ ███████ ███████ 
                                                                                                          
                                                                                                          
```
# The Ideas...
I have always wanted to create a video game.  However whenever I try to make a video game I often have no idea how or where to start. 
I decided to start reading this game design book by Scott Rogers called "Level Up: The Guide to Great Game Design."  One of the passages that stood out to me was this:
```
At this point in the conversation I then tell people that games are made by
elves. All I have to do is leave a game design idea in the middle of the room
overnight and in the morning the elves have made the game.

OK, this is not entirely true.
You have to leave a good idea out for the elves to make into a game. Which
begs the question: “ Where do good ideas come from?"

I like this quote because many game ideas often sound stupid. Try these on
for size:
• A yellow creature eats dots while being chased by ghost monsters.
• A plumber jumps on the heads of mushrooms to find his girlfriend.
• A prince rebuilds stars by rolling balls of junk into bigger balls of junk.

All of those stupid - sounding ideas ended up being games that made lots
and lots of money. I guess they aren ’ t so stupid after all. To me, the lesson
is, never dismiss a game idea, even if it does sound stupid.
So, where do I get my own stupid ideas to turn into video games? The
traditional way to get an idea is to get inspired. The good news is that a
good game idea can come from anywhere.
```
I don't have a lot inspiration or creativity so I thought I can create an API that would generate three sentences. Then from there I can 
get an idea on what type of video game I can create thus the creation of **LevelUp Games**. I started to take this small API as a little 
experiment to help sharpen my developer skills. In this API I wanted to stretch my skills in TDD, Hapi.JS, documentation, and other hot tools
in the web space.

## Architecture

## Prerequisites
- NPM (v6.14)
- Node (v13.12.0)
- NVM
- Docker

## To Run
### With Docker
1. Build docker image.
`docker build . -t levelup-games`
2. Run the newly built docker image `levelup-games`.
`docker run -d --name levelup-games -P 1234:1234 levelup-games:latest`
3. To ping the service.
`docker exec -it levelup-games curl http://localhost:1234/generate`

### Without Docker
1. `nvm use`
2. `npm install`
3. `npm start`


## Roadmap
- [ ] Convert to Typescript
- [X] Setup code coverage
- [ ] Setup ES Lint or TS Lint
- [ ] Docker
    - [X] Create Dockerfile
    - [ ] Saved in GitHub Registry
- [ ] CI/CD
    - [ ] Setup GitHub Actions
- [ ] Create Kubernetes Configs 
- [ ] Add a `/documentation` endpoint     
