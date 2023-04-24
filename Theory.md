useState is a hook which creates state variables.

Why state variables?
We cannot use local variables in react and update them. So if any values needs to be updated like input values used in screen,
you need state variables which can be created using hooks(useState).

useState -- returns an array in which 1st value is state variable and second one is method to update that state variable.
So we simply destructure the returned array when using useState.

https://stackoverflow.com/questions/69690181/reactjs-warning-a-component-is-changing-an-uncontrolled-input-to-be-controll

Never declare another component inside a component. Because when a state variable changes and re renders then each time this component gets created. Instead create above and call it inside required component.

Chapter - 7:
CreateBrowserRouter -- Done
RouterProvider -- Done
Link -- Done
Outlet -- Done
useRouterError -- Done
useParams -- Done
Formik usage -- PENDING

Chapter - 8:
Class Based Component:

SetInterval in componentDidMount (Try with <a> instead Link tag for routing and see if it is clearing the intervals as page refresh happens when <a> tag is used)
In class components we use component will unmount for reset but in react functional components we return a function in useeffect which resets if anything is required to be.

Complete chapter 8 assignment.

Chapter - 9:
