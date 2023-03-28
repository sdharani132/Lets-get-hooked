useState is a hook which creates state variables.

Why state variables?
We cannot use local variables in react and update them. So if any values needs to be updated like input values used in screen,
you need state variables which can be created using hooks(useState).

useState -- returns an array in which 1st value is state variable and second one is method to update that state variable.
So we simply destructure the returned array when using useState.

https://stackoverflow.com/questions/69690181/reactjs-warning-a-component-is-changing-an-uncontrolled-input-to-be-controll

