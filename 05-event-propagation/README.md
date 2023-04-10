### &ensp; ***Event Propagation***
> Typically, the event propagation has three phases:
> - Event Capturing
> + Target
> - Event Bubbling

To put it simply, the event capturing phase  traverses the DOM tree from the highest node to the lowest, where in the midst of this process, we target the destined node, and then traverse back to the top in the event bubbling phase.

Also, if I understood it correctly, the third argument of the `addEventListener` method, where you pass in a boolean value, has something to do with the event bubbling phase.