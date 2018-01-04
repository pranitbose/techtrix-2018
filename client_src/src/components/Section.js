import * as React from 'react';
import PropTypes from 'prop-types';

class Section extends React.Component {
    constructor() {
        super();

        // extra
        let width = window.innerWidth;
        let top = 64;
        if (width <= 800)
          top = 48;

        this.state = {
            windowHeight: window.innerHeight - top // bug-fix; changed
        };
        // bug-fix; changed
        this.handleResize = () => {
            //extra
            width = window.innerWidth;
            top = 64;
            if (width <= 800)
              top = 48;

            this.setState({
                windowHeight: window.innerHeight - top
            });
        }
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize); // changed
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize); // changed
    }

    render() {
        const alignVertical = this.props.verticalAlign || this.context.verticalAlign;

        const sectionStyle = {
            width: '100%',
            display: alignVertical ? 'table' : 'block',
            height: this.state.windowHeight,
            maxHeight: this.state.windowHeight,
            overflow: 'auto',
            backgroundColor: this.props.color,
            paddingTop: this.context.sectionPaddingTop,
            paddingBottom: this.context.sectionPaddingBottom,
        };

        return (
            <div className={this.context.sectionClassName + (this.props.className ? ` ${this.props.className}` : '')}
                 id={this.props.id} style={sectionStyle}>
                {alignVertical ? this._renderVerticalAlign() : this.props.children}
            </div>
        );
    }

    _renderVerticalAlign() {
        const verticalAlignStyle = {
            display: 'table-cell',
            verticalAlign: 'middle',
            width: '100%'
        };

        return (
            <div style={verticalAlignStyle}>
                {this.props.children}
            </div>
        );
    }
}

Section.propTypes = {
    color: PropTypes.string
};

Section.contextTypes = {
    verticalAlign: PropTypes.bool,
    sectionClassName: PropTypes.string,
    sectionPaddingTop: PropTypes.string,
    sectionPaddingBottom: PropTypes.string,
};

export default Section;
