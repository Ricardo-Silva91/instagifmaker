import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// utils
import Draggable from 'react-draggable';

class Front extends PureComponent {
    constructor() {
      super();

      this.state = {
        imgWidth: '100%',
      }
    }

    render() {
        const { media, className } = this.props;
        return (
            <div>
              <input type="number" onChange={ this.handleSizeChange } placeholder="100"/>
              <Draggable

                defaultClassName={ className }
                defaultPosition={{x: 0, y: 0}}
                position={null}
                grid={[25, 25]}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}>
                <div>
                  <img style={{ width: this.state.imgWidth }} src={ media }/>
                </div>
              </Draggable>
            </div>
        );
    }

    handleSizeChange = (e) => {
      console.log({ e: e.target.value });

      this.setState({ imgWidth: `${e.target.value}%`});
    };
}

Front.Proptypes = {
      media: PropTypes.string,
      className: PropTypes.string,
    };

export default Front;
