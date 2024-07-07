### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
- - React Router allows you to use client-side routing for applications. It handles mapping between URL bar and what the page user sees via *browser* rather than *server*. It can allow you to make a single-page applications if only client-side routing is utilized, while still allowing you to use the back/forwars browser buttons.

- What is a single page application?
- - A single page application is an application in which the page never refreshes. Different elements/components can be rendered and removed from the page, but the page never refreshes or changes.

- What are some differences between client side and server side routing?
- - Server side routing is the more traditional pattern. Server side routing causes the browser to request a page and replaces the entire DOM, while client side routing allows the DOM to be manipulated without changing the page or replacing the DOM. With server side routing, the server decides what HTML to return; while with client sider routing, JavaScript manipulates the URL bar with the History Web API but the contents are manipulated via the components via the browser.

- What are two ways of handling redirects with React Router? When would you use each?
- -You can handle redirects via *useHistory* object and the *Redirect component*

- What are two different ways to handle page-not-found user experiences using React Router? 
- - You can include a 404 with a *NotFound* component, that will render if the route you are looking for does not exist. You can also use a client-side redirect.

- How do you grab URL parameters from within a component using React Router?
- - You can use the *useParams* hook to access URL parameter for use within a component.

- What is context in React? When would you use it?
- - Context is universl data accross all components. It is data that can be accessed from all components wrapped in the *Context.Provider* component. It allows you to pass variables and functions down to 

- Describe some differences between class-based components and function
  components in React.
  - Class-based components are defined using classes and require you to extend React.Component and require you to include a *render* method. Function components are defined using JS functions and direcelty return JSX without the need for the render method. They handle state differently. Class-based compoonents use *this.state* and *this.setState*. Function components use the *useState* hook. They handle Lifecycle methods differently as well. Class-based components use *componentDidMount*, *componentDidUpdate*, and *componentwillUnmount* and function components use the *useEffect* hook.

- What are some of the problems that hooks were designed to solve?
- - Hooks let you use state and other React features without writing a class. Hooks are functions that let you “hook into” React state and lifecycle features from function components.