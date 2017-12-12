# Notes from Review Session


## Whiteboard Discussion

Angular view == component

Component = Template + Model

Model = data + functions

selector = typically element selector, but can be css selector

Day 1 - Component

Header, Table, Form - all within a "global" scope
Yesterday we applied decomp to break it into 3 components.

## Input Decorator
Angular uses Inputs to pass data into the components.
`@Input()` decorator

Easier if you put templates inside of the components. 
Advantage: Everything in one file
Disadvantage: Processing behind-the-scenes.

Separation bw/ templates and components requires flipping around b/w files.

Note: Bracket syntax - data input binding between argument and the field in the component.
Square brackets in the HTML fragement indicate how we treat names in the html. Literal interpretation versus interacting with the model.

## Output

Add an eventlistener to make something happen when we click the button.

Button = Angular Component

Events are more general than a button click. Think about general notion of a parent/child relationship. How do we output events from Parent to Child? EventEmitter

EventEmitter use "Observable" pattern. 

In our case, registers a function as a listener for events.

Parent passes down data as input, then child communicates through invoking a function and passing an argument.


## Contextual Example: ColorHome

ColorHome Templates

- tool-header
- color-table
- color-form

### ColorHome classes


ColorHome class

    class ColorHome {
        buttonLabel = "Save";
        addColor(newColor) {
            ---
        }

ColorForm class

    class ColorForm {
        @Input
        buttonLabel = "stuff"

        @Output
        buttonClick = new EventEmitter();
            
    }


`$event` is dependency injected at run-time based upon the event being emitted.
Angular expression is the argument assigned to an output. (addColor($event) is NOT a function invocation)

