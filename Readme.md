# Typescript Tutorial

Tpscript working practice of differnt skill sets. The index.ts is testing an order pizza sample code. 

## Install Typescript

Prerequsite is to install typescript project to a working directory and running command line to compile code. There are some presets to change to the compiler using the tsconfig.json file.

Install typescript
```
npm install -g typescript
```

Run Typescript command line interface
```
tsc -v
```

Compile typescript file
```
tsc <filename.ts>
```

Run typescript program
```
node dist/example.js
```

## Steps needed to Configure Typescript Compiler

* *creates tsconfig.json file
* Make changes to default folder designation. src and dist. Enable remove comments and fail on errors.
* Now once the src folder is setup, in the root directory all that is needed to compile is to run:

```
tsc -- init
```

Command to compile the /src/*.ts files and place them in the dist/*.js
```
tsc
```

## Create a debug launch.json file
1. Got to the Visual Studio debug panel, under Run and Debug click on the “create a launch.json file”.
2. From the presented dropdown select node and this will create the launch.json file in project folder.
3. Add line “PreLaunchTask”: “tsc: build - tsconfig.json” to this file.


To run examples typescripts then compile then run the distrubuted js file
```
tsc
node dist/index.js
node dist/example.js
```