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
    var swipe_det = {};
    var min_x = 30;  //min x swipe for horizontal swipe
    var max_x = 30;  //max x difference for vertical swipe
    var min_y = 50;  //min y swipe for vertical swipe
    var max_y = 60;  //max y difference for horizontal swipe
    var direction = "";

    swipe_det.sX = 0;
    swipe_det.sY = 0;
    swipe_det.eX = 0;
    swipe_det.eY = 0;

    element.addEventListener("touchstart", function(event) {
        var t = event.touches[0];

        swipe_det.sX = t.screenX;
        swipe_det.sY = t.screenY;
    }, false);

    element.addEventListener("touchmove", function(event){
        //event.preventDefault();
        var t = event.touches[0];

        swipe_det.eX = t.screenX;
        swipe_det.eY = t.screenY;
    }, false);

    element.addEventListener("touchend", function(/* event */) {

        // horizontal detection
        if ((((swipe_det.eX - min_x > swipe_det.sX)
            || (swipe_det.eX + min_x < swipe_det.sX))
            && ((swipe_det.eY < swipe_det.sY + max_y)
            && (swipe_det.sY > swipe_det.eY - max_y)
            && (swipe_det.eX > 0))))
        {
            if (swipe_det.eX > swipe_det.sX) {
                direction = "right";
            } else {
                direction = "left";
            }
        }

        // vertical detection
        else if ((((swipe_det.eY - min_y > swipe_det.sY)
            || (swipe_det.eY + min_y < swipe_det.sY))
            && ((swipe_det.eX < swipe_det.sX + max_x)
            && (swipe_det.sX > swipe_det.eX - max_x)
            && (swipe_det.eY > 0))))
        {
            if (swipe_det.eY > swipe_det.sY) {
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
            swipe_det.sX = 0;
            swipe_det.sY = 0;
            swipe_det.eX = 0;
            swipe_det.eY = 0;
        }

    }, false);
};
