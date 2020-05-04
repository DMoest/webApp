/**
 * Webbapplikationer för mobila enheter
 * KMOM02 - Redovisa
 * Daniel Andersson, DAAP19
 *
 * Code to test and verify or as default behaviour.
 */

window.detectSwipeEvent(window, function (element, direction) {
    console.info("You swiped on element " + element + " to " + direction + " direction");

    switch (direction)  {
        case "left":
            //window.history.back();
            break;
        case "right":
            //window.history.go(1);
            break;
    }
});
