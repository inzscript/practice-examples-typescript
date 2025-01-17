## Typescript Tutorial

Quick guide to introduce Typescripts terms and how to install locally. 
This uses the following Video:
https://www.youtube.com/watch?v=d56mG7DezGs

# Install Typescript

npm install -g typescript

# run Typescript command line interface
tsc -v

# compile typescript file
tsc <filename.ts>

# run typescript program
node dist/example.js


# Configure Typescript Compiler
tsc -- init
# creates tsconfig.json file
# Make changes to default folder designation. src and dist. Enable remove comments and fail on errors.
# now once the src folder is setup, in the root directory all that is needed to compile is to run:
tsc

# Create a debug launch.json file
1. Got to the Visual Studio debug panel, under Run and Debug click on the “create a launch.json file”.
2. From the presented dropdown select node and this will create the launch.json file in project folder.
3. Add line “PreLaunchTask”: “tsc: build - tsconfig.json” to this file.

Attached is my resume. While I understand there are no current openings, I would appreciate it if you could keep me in mind for future opportunities. I am open to roles in DevOps and networking, as well as positions related to web development. Please feel free to share my resume as needed.


# To run examples typescripts then compile then run the distrubuted js file
tsc
node dist/example.js