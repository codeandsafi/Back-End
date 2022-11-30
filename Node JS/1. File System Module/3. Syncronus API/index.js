// File Systhem - Callback API
import * as fs from 'fs';


// Creaitng Direcotry- Path Should be there

// fs.mkdirSync('C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Callback or Aysnc Fxn\\Safi');


// Creaitng Direcotry- Path May Not be there

// fs.mkdirSync('C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Callback or Aysnc Fxn\\Safi2\\Safi3', {recursive: true});


// Read Content of a Directory

// const files = fs.readdirSync('C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Callback or Aysnc Fxn\\');
// for(const file of files)
// console.log(file);


// Remove a Directory - Directory Should be empty

// fs.rmdirSync('C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Callback or Aysnc Fxn\\Safi2\\Safi3');


// Create and Write a file

// fs.writeFileSync('C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Callback or Aysnc Fxn\\Safi\\Sarnali.txt', 'Hellooo');


// Read file (Retuens buffer data)


// fs.readFileSync('C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Callback or Aysnc Fxn\\Safi\\Sarnali.txt');


// Read file (Retuens actual data)


// fs.readFileSync('C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Callback or Aysnc Fxn\\Safi\\Sarnali.txt', 'utf-8');



// Append file 

// fs.appendFile('C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Callback or Aysnc Fxn\\Safi\\Sarnali.txt', ' Hiii');



// Copy file (Retuens buffer data)

// fs.copyFile('C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Callback or Aysnc Fxn\\Safi\\Sarnali.txt', 'C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Callback or Aysnc Fxn\\Safi\\Safi.txt');



// Get FIle Information

//   const stats = fs.stat('C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Callback or Aysnc Fxn\\Safi\\Sarnali.txt', 'C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Callback or Aysnc Fxn\\Safi\\Safi.txt');
//   console.log(stats.isDirectory());
//   console.log(stats.isFile());
//   console.log(stats);