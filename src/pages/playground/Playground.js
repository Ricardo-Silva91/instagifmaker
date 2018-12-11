import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import classNames from 'classnames';

// shared components
import Hero from 'shared/components/hero/Hero';
import Front from 'shared/components/front/Front';

// utils
import Draggable from 'react-draggable';
import Slider, { Range } from 'rc-slider';


// styles
import styles from './Playground.css';

class Playground extends PureComponent {
  constructor() {
    super();

    this.state = {
      backIndex: 0,
      frontIndex: 0,
    }
  }


    render() {
      try {
        const backUrl = require(`shared/media/images/backgrounds/${this.state.backIndex}.jpg`);
        const frontUrl = require(`shared/media/images/fronts/${this.state.frontIndex}.gif`);
        return (
            <main className={ styles.aboutPage }>
                <Helmet title="Playground" />

                <Hero small />
                <div className={ styles.container }>
                    <h1>Playground</h1>
                    <h2>background</h2>
                    <button value="-" onClick={ this.handleBackShit }>Previous</button>
                    <button value="+" onClick={ this.handleBackShit }>Next</button>
                    <div className={ styles.plate }>
                      <img className={ styles.back } src={ backUrl }/>


                      <h2>front</h2>
                      <button value="-" onClick={ this.handleFrontShit }>Previous</button>
                      <button value="+" onClick={ this.handleFrontShit }>Next</button>
                      <Front
                        className={ styles.front }
                        media={ frontUrl }/>

                    </div>

                </div>
            </main>
        );
      }
      catch (err) {
        console.log('error');
        const backUrl = require(`shared/media/images/backgrounds/0.jpg`);
        const frontUrl = require(`shared/media/images/fronts/0.gif`);
        return (
          <main className={ styles.aboutPage }>
              <Helmet title="Playground" />

              <Hero small />
              <div className={ styles.container }>
                  <h1>Playground</h1>
                  <h2>background</h2>
                  <button value="-" onClick={ this.handleBackShit }>Previous</button>
                  <button value="+" onClick={ this.handleBackShit }>Next</button>
                  <div className={ styles.plate }>
                    <img className={ styles.back } src={ backUrl }/>


                    <h2>front</h2>
                    <button value="-" onClick={ this.handleFrontShit }>Previous</button>
                    <button value="+" onClick={ this.handleFrontShit }>Next</button>
                    <Front
                      className={ styles.front }
                      media={ frontUrl }/>

                  </div>

              </div>
          </main>
        );
      }
    }

    handleBackShit = (e) => {
      const value = e.target.value;
      const newBackIndex = this.state.backIndex + (value === '-' ? -1 : 1);

      try {
        const backUrl = require(`shared/media/images/backgrounds/${newBackIndex}.jpg`);
        console.log({ newBackIndex });

        this.setState({ backIndex: newBackIndex });
      }
      catch (err) {}
    }

    handleFrontShit = (e) => {
      const value = e.target.value;
      const newFrontIndex = this.state.frontIndex + (value === '-' ? -1 : 1);

      try {
        const backUrl = require(`shared/media/images/fronts/${newFrontIndex}.gif`);

        this.setState({ frontIndex: newFrontIndex });
      }
      catch (err) {}
    }
}

export default Playground;
