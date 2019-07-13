import React from "react"

class ScrollButton extends React.Component {
  constructor() {
    super();

    this.state = {
        intervalId: 0
    };
  }
  
  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  
  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }
  
  render () {
      return <button title='Back to top' className='scroll bg-indigo-600 rounded-full text-2xl text-white shadow-lg right-0 bottom-0 fixed z-50 focus:outline-none' 
               onClick={ () => { this.scrollToTop(); }}>
                <span>&#10514;</span>
              </button>;
   }
} 


export default ScrollButton
