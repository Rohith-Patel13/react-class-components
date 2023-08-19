// Importing the Component class from the 'react' package
import {Component} from 'react'

// Creating a class-based component named 'Welcome'
class Welcome extends Component {
  render() {
    const {name} = this.props
    return <h1>Hello, {name}</h1> // The JSX content to be rendered when this component is used
  }
}

// Exporting the 'Welcome' component as the default export
export default Welcome
