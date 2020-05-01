/**
 * Detect various swipe events, initial code based on a StackOverflow answer.
 *
 * @link http://stackoverflow.com/a/27115070/341137
 */

/**
 * If a swipe is detected on element the function "callback" is called
 * with parameter element and the string left, right, up, down.
 *
 */
window.detectSwipeEvent = function (element, callback) {
    var swipeDet = {};
    var minX = 30;  //min x swipe for horizontal swipe
    var maxX = 30;  //max x difference for vertical swipe
    var minY = 50;  //min y swipe for vertical swipe
    var maxY = 60;  //max y difference for horizontal swipe
    var direction = "";

    swipeDet.sX = 0;
    swipeDet.sY = 0;
    swipeDet.eX = 0;
    swipeDet.eY = 0;

    element.addEventListener("touchstart", function(event) {
        var t = event.touches[0];

        swipeDet.sX = t.screenX;
        swipeDet.sY = t.screenY;
    }, false);

    element.addEventListener("touchmove", function(event) {
        //event.preventDefault();
        var t = event.touches[0];

        swipeDet.eX = t.screenX;
        swipeDet.eY = t.screenY;
    }, false);

    element.addEventListener("touchend", function(/* event */) {
        // horizontal detection
        if ((((swipeDet.eX - minX > swipeDet.sX)
            || (swipeDet.eX + minX < swipeDet.sX))
            && ((swipeDet.eY < swipeDet.sY + maxY)
            && (swipeDet.sY > swipeDet.eY - maxY)
            && (swipeDet.eX > 0)))) {
            if (swipeDet.eX > swipeDet.sX) {
                direction = "right";
            } else {
                direction = "left";
            }
        } else if ((((swipeDet.eY - minY > swipeDet.sY)
            // vertical detection
            || (swipeDet.eY + minY < swipeDet.sY))
            && ((swipeDet.eX < swipeDet.sX + maxX)
            && (swipeDet.sX > swipeDet.eX - maxX)
            && (swipeDet.eY > 0)))) {
            if (swipeDet.eY > swipeDet.sY) {
                direction = "down";
            } else {
                direction = "up";
            }
        }

        if (direction !== "") {
            if (typeof callback == "function") {
                callback(element, direction);
            }

            direction = "";
            swipeDet.sX = 0;
            swipeDet.sY = 0;
            swipeDet.eX = 0;
            swipeDet.eY = 0;
        }
    }, false);
};
