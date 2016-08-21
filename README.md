# [Ping Pong](http://karenfreemansmith.github.io/pingpong)
![project screenshot](/img/screenshot.jpg)

__Version 2: August 19, 2016__
## by [Karen Freeman-Smith](http://karenfreemansmith.github.io/myportfolio)

### Description
__*A webpage that displays "ping" and/or "pong" for certain numbers*__

### Specifications:
  * Accepts a number from the user
    * Example Input: 16
    * Example Output: Pop-up Box: 16
  * Displays numbers from 1 to the user's number
  * Example Input: 16
  * Example Output: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
  * Numbers that are divisible by 3 are replaced with "ping"
    * Example Input: 16
    * Example Output: [1,2,ping,4,5,ping,7,8,ping,10,11,ping,13,14,ping,16]
  * Numbers that are divisible by 5 are replaced with "pong"
    * Example Input: 16
    * Example Output: [1,2,ping,4,pong,ping,7,8,ping,pong,11,ping,13,14,pong,16]
  * Numbers that are divisible by 15 are replaced with "ping-pong"
    * Example Input: 16
    * Example Output:[1,2,ping,4,pong,ping,7,8,ping,pong,11,ping,13,14,ping-pong,16]
  * The user can enter a new number and see a fresh list
    * Example Input: 20
    * Example Output: [1,2,ping,4,pong,ping,7,8,ping,pong,11,ping,13,14,ping-pong,16,17,ping,19,pong]

### Additional Features:
* Style page with columns and "about" section
* Add ping pong sounds for ping, pong, ping-pong, and miss
* Add animation for each submission

### Setup/Installation
* None required, can view at https://karenfreemansmith.github.io/pingpong
* To view locally, clone https://github.com/karenfreemansmith/pingpong

### Known Issues
* The animation does not replay when form is resubmitted. It has something to do with stopping the animation before replaying, but the stop function doesn't seem to be working right when it's in the submit code (investigating on another branch has shown that it will work with a separate button to stop and start animation).
* The slow fade in makes it look like it's not working if the animation doesn't play.
* The form will not run the submit function again until all the sounds are done playing, so entering BIG numbers may also make it appear to be broken. (But it will work once sounds are done, it's only a delay).

### Support & Contact
For questions or comments, please __email [Karen](karenfreemansmith@gmail.com)__

### Technologies Used
###### HTML, CSS, Bootstrap, JavaScript, jQuery

### Legal
*Licensed under the GNU General Public License v3.0*

Copyright (c) 2016 **_Karen Freeman-Smith_**
